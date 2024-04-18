import React from 'react';

interface TaskPreviewProps {
  cardTitle: string;
  description: string;
  date: string;
}

const TaskModal: React.FC<TaskPreviewProps> = ({ cardTitle, description, date }) => {
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
                Completado
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

export default TaskModal;
