import { SignIn } from "@clerk/remix";
import NewProjectModal from "~/components/newProjectModal";
export default function Test() {
  return (
    <div className="flex justify-center align-middle">
      <NewProjectModal />
    </div>
  );
}
