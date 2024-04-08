import { type LoaderFunction, redirect } from "@remix-run/node";
import {getAuth} from "@clerk/remix/ssr.server"
import { UserButton } from "@clerk/remix";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
    // Use getAuth to retrieve user data
    const { userId, sessionId, getToken } = await getAuth(args);
    console.log(userId)
    if (!userId) {
        return redirect("/sign-in" + args.request.url);
      }
      return { userId };
};

export default function DashBoardRoute(){
    const data = useLoaderData(); 
    const userId = data?.userId; 

    console.log(userId)
    return(
        <div>
        {userId ? (
          <div>You're logged in! User ID: {userId}</div>
        ) : (
          <div>Loading...</div> 
         )}      
       <UserButton afterSignOutUrl="/" />
       </div>
    )
}