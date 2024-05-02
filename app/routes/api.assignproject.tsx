import { redirect } from "@remix-run/node";
import { ActionFunction } from "@remix-run/node";
import supabase from "utils/supabase";
import { getAuth } from "@clerk/remix/ssr.server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {createClerkClient } from "@clerk/remix/api.server";


export const action: ActionFunction = async (args) => {
  const genAI = new GoogleGenerativeAI(process.env.GENAIAPIKEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"})
  



  const formData = await args.request.formData();
  
  const { userId } = await getAuth(args);
  if (userId){
    const Tokens = await createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    }).users.getUser(userId);
    const nombre= Tokens.firstName;
    const email = Tokens.emailAddresses[0].emailAddress;
    const username = Tokens.username;
    
    console.log("User ID:", userId);
  const keys = formData.keys();


  const UserDescription = formData.get("description");
  const CurrentKnowledge = formData.get("Cknowledge");
  const LevelOfExpertise = formData.get("expertise");
  const AreasToDevelop = formData.get("knowledgeareas");
  const User_decription = {
    "description": UserDescription,
    "currentKnowledge": CurrentKnowledge,
    "levelOfExpertise": LevelOfExpertise,
    "areasToDevelop": AreasToDevelop
  };
  

  const {data, error: proyectosError} = await supabase
  .from('Proyectos')
  .select()

  const AvailableProjects = JSON.stringify(data, null, 2)

  const prompt = `
  Given a list of projects and user information, match the user to suitable projects and return only the Project IDs.
  ${AvailableProjects}

  and this is the user we want to match to our project
  User:
  ${UserDescription}
  ${CurrentKnowledge}

  this user claims to have a level of expertise:
  ${LevelOfExpertise}
  
  And user wants to develop in these areas:
  ${AreasToDevelop}



  Return only the Project IDs that match the user's expertise and requirements.
  Don't say anything else. Only the project ID.
  `
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const regex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
  const Proyecto_ids = text.match(regex);
  if(Proyecto_ids != null){
    console.log(Proyecto_ids[0])
    const Proyecto_id = Proyecto_ids[0]
  
  const Usuario_id = userId;
  const {error: taskError} = await supabase
  .from('Usuarios')
  .insert([{ Usuario_id, nombre , email, username, User_decription, Proyecto_id }]);
  console.log(taskError)


  if (taskError == null){
    await createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    }).users.updateUserMetadata(userId,
      {
        privateMetadata: { "hasProject": true, "isprojectleader" : false }
      }
    );
    return redirect("/dashboard");
  }
  
  }
}
  return redirect("/sign-in")




}
