import NewTaskForm from "~/components/newTaskForm"
import { LoaderFunction } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
    const { userId, sessionId, getToken } = await getAuth(args);
    if (!userId) {
      return null;
    }
    const token = await createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    }).users.getUser(userId);
    return token.privateMetadata.isprojectleader 
    
  };
  


const team = () => {
    const variable = useLoaderData();

    if (variable === true) {
        return (
            <div>
                <NewTaskForm/>
            </div>            
        );
    }
          
    else {
        return (
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3  sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-60 shadow rounded-3xl sm:p-10">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <h1 className="text-3xl text-black font-bold">You are not a project leader</h1>
                        </div>
                        <p className="text-2xl text-black">You need to be a project leader to view this page.</p>
                    </div>
                </div>
            </div>    
            
        );
    }
}

export default team;
