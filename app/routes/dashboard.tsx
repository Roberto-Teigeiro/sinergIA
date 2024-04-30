import { type LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { UserButton } from "@clerk/remix";
import { Outlet, useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/sidebar";
import { createClerkClient } from "@clerk/remix/api.server";

export const loader: LoaderFunction = async (args) => {
  const { userId, sessionId, getToken } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const token = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);
  if (token.privateMetadata.hasProject != true) {
    return redirect("/choosepath");
  }
  return userId;
};

export default function DashBoardRoute() {
  return (
    <div>
      <div className="">
        <Sidebar />
        



        <Outlet context={useLoaderData()} />
      </div>
    </div>
  );
}
