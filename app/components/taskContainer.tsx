import React from "react";
import TaskPreview from "~/components/taskPreview";

interface Task {
  id: string;
  cardTitle: string;
  description: string;
  date: string;
}

interface TaskContainerProps {
  tasks: Task[];
  typeofTask: string;
}

const TaskContainer: React.FC<TaskContainerProps> = ({ tasks, typeofTask }) => {
  return (
    <div className="mt-8 mx-auto px-6 max-w-6xl overflow-y-auto max-h-96">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg px-10 py-8 rounded-lg shadow-xl bg-white">
          <div className="max-w-md mx-auto space-y-6">
            <p className="text-lg text-gray-800 font-semibold">
              {typeofTask}
            </p>
            <div className="flex -mb-8 border-t border-gray-200 z-0"></div>
            {tasks.map((task) => (
              <div key={task.id}>
                <TaskPreview
                  cardTitle={task.cardTitle}
                  description={task.description}
                  date={task.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
