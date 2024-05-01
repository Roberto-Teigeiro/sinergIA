import { useLoaderData } from "@remix-run/react";
import { useOutletContext } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect } from "@remix-run/node";
import TaskPreview from "~/components/taskPreview";
import TaskContainer from "~/components/taskContainer";
import TaskModal from "~/components/taskModal";
import Logo from "~/components/logo";
import supabase from "utils/supabase";

type TaskObject = {
  id: string;
  cardTitle: string;
  description: string;
  date: string;
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }

  const { data: tasksData, error } = await supabase
    .from("Tareas")
    .select("Tarea_id, task_name, due_date, description, status")
    .eq("Usuario_id", userId);

  if (error) {
    console.error("Error:", error.message);
    return redirect("/dashboard");
  }

  
  const tasks: {
    todo: TaskObject[];
    inProgress: TaskObject[];
    completed: TaskObject[];
  } = {
    todo: [],
    inProgress: [],
    completed: [],
  };

  tasksData?.forEach((task) => {
    const { Tarea_id, task_name, due_date, description, status } = task;
    const taskObject: TaskObject = {
      id: Tarea_id,
      cardTitle: task_name,
      description: description,
      date: due_date,
    };

    switch (status) {
      case "To do":
        tasks.todo.push(taskObject);
        break;
      case "In Progress":
        tasks.inProgress.push(taskObject);
        break;
      case "Completed":
        tasks.completed.push(taskObject);
        break;
      default:
        break;
    }
  });

  return { userId, tasks };
};

export default function DashboardTask() {
   const { userId, tasks } = useLoaderData() as {
    userId: string;
    tasks: {
      todo: TaskObject[];
      inProgress: TaskObject[];
      completed: TaskObject[];
    };
  };
  return (
    <div className="ml-32">
      <Logo />
      <div className="flex z-0 ">
        <TaskContainer tasks={tasks.todo} typeofTask="To do" />
        <TaskContainer tasks={tasks.inProgress} typeofTask="In Progress" />
        <TaskContainer tasks={tasks.completed} typeofTask="Completed" />
      </div>
    </div>
  );
}