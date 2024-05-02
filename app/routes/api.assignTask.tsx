import { redirect } from "@remix-run/node";
import { ActionFunction } from "@remix-run/node";
import supabase from "utils/supabase";
import { getAuth } from "@clerk/remix/ssr.server";
import { v4 as uuidv4 } from 'uuid';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const action: ActionFunction = async (args) => {
  const genAI = new GoogleGenerativeAI(process.env.GENAIAPIKEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"})
  const formData = await args.request.formData();
  const {userId} = await getAuth(args);



  const  task_name = formData.get("TaskTitle");
  const description = formData.get("TaskDescription");
  console.log( task_name + ", " + description )


  const {data: users, error: userError} = await supabase
  .from('Usuarios')
  .select()  
  

  const AvailableUsers = JSON.stringify(users, null, 2)

  const prompt = `
  Given a the task name and task description, match the user to suitable for the task and return only the User ID selected por the task.
  The users must be on the same proyect.
  ${AvailableUsers}
  
  and this is the information of the task created
  Task:
  ${task_name}
  ${description}

  Return only the User ID that match the user's description to do the task.
  Don't say anything else. Only the user ID.
  `
  

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  //para obtener el poject_id
  const Usuario_id = text;
  
  const prompt2 = `
  Given a user id, match the user information and return just the project id
  that the user is in.
  ${AvailableUsers}

  and this is the users id
  userID:
  ${Usuario_id}

  Return only the project ID found in the information of the user.
  Don't say anything else. Only the project ID. 
  `
  const result2 = await model.generateContent(prompt2);
  const response2 = await result2.response;
  const Proyecto_id = response2.text();  
  
  const due_date = new Date();
  const status = "To do";
  const Tarea_id = uuidv4();

  const {error: taskError} = await supabase
  .from('Tareas')
  .insert([{ Tarea_id, due_date, description, Proyecto_id, Usuario_id, status, task_name }]);
  
  if (taskError) {
    console.error(taskError);
    return redirect("/choosePath");
  }


  return redirect("/dashboard");




}

