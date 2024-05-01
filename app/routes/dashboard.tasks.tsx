import { useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { useOutletContext } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect } from "@remix-run/node";
import TaskPreview from "~/components/taskPreview";
import TaskContainer from "~/components/taskContainer";
import TaskModal from "~/components/taskModal";
import Logo from "~/components/logo";

export const loader: LoaderFunction = async (args) => {
  const { userId, sessionId, getToken } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  console.log("rendering tasks! " + userId);
  //supabase ... 
  
  return null;
};

const tasks = [
  {
    id: "1",
    cardTitle: "Task 1",
    description: "Description 1",
    date: "Due date",
  },
  {
    id: "2",
    cardTitle: "Task 2",
    description: "Description 2",
    date: "Due date",
  },
  {
    id: "3",
    cardTitle: "Task 3",
    description: "Description 3",
    date: "Due date",
  },
  {
    id: "4",
    cardTitle: "Task 4",
    description: "Description 3",
    date: "Due date",
  },
  {
    id: "5",
    cardTitle: "Task 5",
    description: "Description 3",
    date: "Due date",
  },
];

export default function DashboardTask() {

  //const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className="ml-32">
      <Logo />
      <div className="flex z-0 ">
        <TaskContainer tasks={tasks} typeofTask="To do" />
        <TaskContainer tasks={tasks} typeofTask="In Progress" />
        <TaskContainer tasks={tasks} typeofTask="Completed" />
      </div>
    </div>
  );
}
