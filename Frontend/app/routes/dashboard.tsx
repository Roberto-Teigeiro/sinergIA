import { type LoaderFunction, redirect } from "@remix-run/node";
import {getAuth} from "@clerk/remix/ssr.server"
import { UserButton } from "@clerk/remix";
import { useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/sidebar";

export const loader: LoaderFunction = async (args) => {
    const { userId, sessionId, getToken } = await getAuth(args);
    console.log(userId)
    if (!userId) {
        return redirect("/sign-in");
      }
      return userId;
};

export default function DashBoardRoute(){
    const userId = useLoaderData(); 
    console.log(userId) 
    return(
        <div>
          <Sidebar/>
        {userId ? (
          <div className="text-white">You're logged in! User ID: {userId}</div>
        ) : (
          <div>Loading...</div> 
         )}      
       <UserButton afterSignOutUrl="/" />
       </div>
    )
}