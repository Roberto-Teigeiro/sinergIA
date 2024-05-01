import { SignIn } from "@clerk/remix";
import NewTaskForm from "~/components/newTaskForm";

export default function Test() {
  return (
    <div className="flex justify-center align-middle">
      <NewTaskForm/>
    </div>
  );
}
