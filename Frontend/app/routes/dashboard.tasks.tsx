import { type LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { UserButton } from "@clerk/remix";
import { useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/sidebar";

export default function DashboardTask() {
  return (
    <div className="">
      <div>List of tasks!</div>
    </div>
  );
}
