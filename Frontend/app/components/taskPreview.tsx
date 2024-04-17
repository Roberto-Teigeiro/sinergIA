/*import React from 'react';

interface TaskPreviewProps {
  cardTitle: string;
  description: string;
  date: string;
}

const TaskPreview: React.FC<TaskPreviewProps> = ({ cardTitle, description, date }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex w-full max-w-[32rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
            nombre proyecto
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {cardTitle}
          </h4>
          <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
          <div className="flex items-center mb-8">
            <p className="mr-2 font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
              {date}
            </p>
            <a href="#" className="inline-block">
              <button
                type="button"
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Ver más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPreview; */

import React from 'react';

interface TaskPreviewProps {
  cardTitle: string;
  description: string;
  date: string;
}

const TaskPreview = ({ cardTitle, description, date }) => {
  return (
    <section>
    <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" className="inset-0 absolute aspect-w-16 aspect-h-9 border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div className="relative">
                        <div className="border border-blue-500/10 flex relative w-12 h-12 m-auto rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg className="text-[#000014] dark:text-white w-6 h-6 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <path fill="#ff5d01" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"></path>
                                <path fill="#ff5d01" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"></path>
                            </svg>
                        </div>

                        <div className="mt-6 pb-6">
                            <p className="text-lg text-gray-800 dark:text-white font-semibold">{cardTitle}</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">{date}</button>
                            <button className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};

export default TaskPreview;

