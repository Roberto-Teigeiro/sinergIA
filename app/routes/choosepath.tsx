import Logo from "~/components/logo";
import { LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";
import Card from "~/components/choosepathCard";
import NewProjectModal from "~/components/newProjectModal";
import { useState } from "react";
import JoinProjectModal from "~/components/joinProjectModal";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const template = "supabase";
  const token = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);
  if (token.privateMetadata.hasProject == true) {
    return redirect("/dashboard");
  }
  return null;
};

const choosepath = () => {
  const [showProjectModal, setProjectModal] = useState(false);
  const [showJoinProjectModal, setJoinProjectModal] = useState(false);
  const toggleCreateModal = () => {
    console.log("clicked!");
    setProjectModal(!showProjectModal);
  };
  const toggleJoinModal = () => {
    console.log("clicked!");
    setJoinProjectModal(!showJoinProjectModal);
  };

  return (
    <div className="h-screen bg-gray-50">
      <div className="h-screen flex justify-center items-center flex-col space-y-10 ">
        <Logo />
        <div className="flex space-x-4">
          <button onClick={toggleJoinModal}>
            <Card
              title={"Collaborate on a Project"}
              description="Lets find you a project that aligns with your interests!"
            />
          </button>
          <button onClick={toggleCreateModal}>
            <Card
              title={"Launch Your Own Project"}
              description="Bring your idea to life."
            />
          </button>
        </div>
      </div>

      {showProjectModal && (
        <div className="fixed bg-slate-500 bg-opacity-80 h-full fixed inset-0 overflow-hid z-50">
          <NewProjectModal />
          <button
            onClick={toggleCreateModal}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-neutral-950 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 top-16 right-16 absolute text-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>{" "}
          </button>
        </div>
      )}



      {showJoinProjectModal && (
        <div className="fixed bg-slate-500 bg-opacity-80 h-full fixed inset-0 overflow-hid z-50">
          <JoinProjectModal />
          <button
            onClick={toggleJoinModal}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-neutral-950 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 top-16 right-16 absolute text-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>{" "}
          </button>
        </div>
      )}
    </div>
  );
};
export default choosepath;
