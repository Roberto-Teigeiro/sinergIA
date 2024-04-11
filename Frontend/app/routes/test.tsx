import { useUser } from "@clerk/remix";
import Logo from "~/components/logo";
import Sidebar from "~/components/sidebar";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";

export const loader: LoaderFunction = async (args) => {
  const { sessionId} = await getAuth(args)
  if (!sessionId) {
    return redirect("/sign-in");
  }
  const template = 'supabase';
  const token = await createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY }).sessions.getToken(sessionId, template);
 console.log(token)
  return token
};



export default function test() {
  const data=useLoaderData();
  
    const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className="">
    <Logo/>
    <Sidebar/>
    
    </div>
  );
}
