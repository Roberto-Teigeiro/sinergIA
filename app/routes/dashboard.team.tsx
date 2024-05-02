import NewTaskForm from "~/components/newTaskForm"
import { LoaderFunction } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";

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
  


const team = () =>
    {
return(

    <div>
        <NewTaskForm/>
    </div>
)
    }

    export default team