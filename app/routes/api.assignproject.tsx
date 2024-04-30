import { redirect } from "@remix-run/node";
import { ActionFunction } from "@remix-run/node";
import supabase from "utils/supabase";
import { getAuth } from "@clerk/remix/ssr.server";


export const action: ActionFunction = async (args) => {
  const formData = await args.request.formData();
  const { userId} = await getAuth(args);
  console.log("User ID:", userId);

  const keys = formData.keys();


  const UserDescription = formData.get("description");
  const CurrentKnowledge = formData.get("Cknowledge");
  const LevelOfExpertise = formData.get("expertise");
  const AreasToDevelop = formData.get("knowledgeareas");
  console.log( UserDescription+ ", " + CurrentKnowledge + ", " + LevelOfExpertise + ", " + AreasToDevelop)




  return redirect("/dashboard");
}
