import { AiOutlineCheckCircle } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { TasksContext } from "../Context/TasksContext";

const CompletedTask = () => {
  const { completedTask, setCompletedTask, tasks } = useContext(TasksContext);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.status === true);
    setCompletedTask(completedTasks);
  }, [tasks, setCompletedTask]);

  return (
    <div>
      <div className="w-full h-[100vh] p-[20px] bg-[#f5f5f5]">
        <h1 className="text-center text-lg lg:text-2xl font-bold mt-[5px]">
          COMPLETED TASKS
        </h1>
        <div className=" w-full h-fit grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4 mt-[30px]">
          {completedTask && completedTask.length > 0 ? (
            completedTask.map((task) => {
              return (
                <div
                  key={task.id}
                  className="bg-green-500 rounded-lg h-fit p-[20px]"
                >
                  <h3 className="flex gap-1 items-center text-lg mb-3">
                    <AiOutlineCheckCircle className="text-white flex-shrink-0" />
                    <span className="font-semibold text-white">
                      {task.title}
                    </span>
                  </h3>
                  <p className="text-white text-sm font-semibold">
                    Description:{" "}
                    <span className="font-normal">{task.description}</span>
                  </p>
                  <p className="text-white text-sm font-semibold">
                    Status:{" "}
                    <span className="font-normal">
                      {task.status ? "Completed" : "Pending"}
                    </span>
                  </p>
                </div>
              );
            })
          ) : (
            <h2 className="text-center mt-[20px] text-gray-600 text-base">
              No Completed Task
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
