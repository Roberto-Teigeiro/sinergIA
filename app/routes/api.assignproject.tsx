import { redirect } from "@remix-run/node";
import { ActionFunction } from "@remix-run/node";
import supabase from "utils/supabase";
import { getAuth } from "@clerk/remix/ssr.server";
import { GoogleGenerativeAI } from "@google/generative-ai";


export const action: ActionFunction = async (args) => {
  const genAI = new GoogleGenerativeAI(process.env.GENAIAPIKEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"})
  



  const formData = await args.request.formData();
  
  const { userId} = await getAuth(args);
  console.log("User ID:", userId);

  const keys = formData.keys();


  const UserDescription = formData.get("description");
  const CurrentKnowledge = formData.get("Cknowledge");
  const LevelOfExpertise = formData.get("expertise");
  const AreasToDevelop = formData.get("knowledgeareas");
  console.log( UserDescription+ ", " + CurrentKnowledge + ", " + LevelOfExpertise + ", " + AreasToDevelop)


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
  console.log(text);

  


  return redirect("/dashboard");




}
