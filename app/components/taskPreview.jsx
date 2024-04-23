import { useState } from "react";
import TaskModal from "./taskModal";

const TaskPreview = ({ cardTitle, description, date }) => {
  const [showModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!showModal);
    console.log(showModal);
  };

  return (
    <div className="z-0">
      <button onClick={handleClick}>
        <div>
          <div className="mx-auto px-6 max-w-6xl text-gray-500">
            <div className="mt-12gap-3">
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-w-16 aspect-h-9 border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white  blur-2xl opacity-25 "
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative w-12 h-12 m-auto rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100  before:bg-gradient-to-b before:shadow">
                    <svg
                      className="text-[#000014] w-6 h-6 m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#ff5d01"
                        d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
                      ></path>
                      <path
                        fill="#ff5d01"
                        d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                      ></path>
                    </svg>
                  </div>

                  <div className="mt-6 pb-6">
                    <p className="text-lg text-gray-800 font-semibold">
                      {cardTitle}
                    </p>
                    <p className="mt-2 text-gray-700 ">
                      {description}
                    </p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <p className="mt-2 text-gray-700 ">
                      {date}
                    </p>
                    <button className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
                      Completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      {showModal && (
        <div className="bg-slate-500 bg-opacity-30 h-full fixed inset-0 overflow-hid z-50">
          <button
            onClick={handleClick}
            className="bg-red rounded-md p-2 inline-flex items-center justify-center text-neutral-950 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 top-16 right-16 absolute text-white"
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

          <div className="flex justify-center space-x-4">
            <TaskModal
              cardTitle="Task to do"
              description="Descripción task"
              date="due date"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPreview;
