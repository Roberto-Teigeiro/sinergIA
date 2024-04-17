import { type LoaderFunction, redirect } from "@remix-run/node";
import {getAuth} from "@clerk/remix/ssr.server"
import { UserButton } from "@clerk/remix";
import { Outlet, useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/sidebar";

export const loader: LoaderFunction = async (args) => {
    const { userId, sessionId, getToken } = await getAuth(args);
    if (!userId) {
        return redirect("/sign-in");
      }
      return userId;
};

export default function DashBoardRoute(){
    return(
        <div>
          <div className="">
          <Sidebar/>

          <Outlet context={useLoaderData()}/>
          </div>
              
       </div>
    )
}