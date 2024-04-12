import { useUser } from "@clerk/remix";
import Logo from "~/components/logo";
import Sidebar from "~/components/sidebar";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";
import Card from "~/components/choosepathCard";
import { useRouteLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const template = 'supabase';
  const token = await createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY }).users.getUser(userId);
  if(token.privateMetadata.hasProject == true){
    return redirect("/dashboard")
  }
  return null
};




export default function choosepath() {


  return (
   
    <div className="h-screen flex justify-center items-center flex-col space-y-10 bg-gray-50">
    <Logo/>
    <div className="flex space-x-4">
    <Card title={'Collaborate on a Project'} description="Lets find you a project that aligns with your interests!"/>
    <Card title={'Launch Your Own Project'} description="Bring your idea to life."/>
    </div>
    </div>
    

  );
}
