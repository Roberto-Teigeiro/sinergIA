import type { MetaFunction } from "@remix-run/node";
import { useUser } from "@clerk/remix";
import Logo from "~/components/logo";
import Sidebar from "~/components/sidebar";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";

export const loader: LoaderFunction = async (args) => {
  const { sessionId } = await getAuth(args)
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
