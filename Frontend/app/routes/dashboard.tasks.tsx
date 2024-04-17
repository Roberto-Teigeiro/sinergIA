import { useRouteLoaderData } from "@remix-run/react";
import { useOutletContext } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const { userId, sessionId, getToken } = await getAuth(args);
  if (!userId) {
      return redirect("/sign-in");
    }
    console.log("rendering tasks! " + userId)
    return userId;
};

export default function DashboardTask() {

  return (
    <div className="">
      <div>List of tasks!</div>
    </div>
  );
}
