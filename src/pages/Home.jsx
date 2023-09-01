import { useState, useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import AddTaskModal from "../components/AddTaskModal";
import DeleteModal from "../components/DeleteModal";
import { TasksContext } from "../Context/TasksContext";
import { format } from "date-fns";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModalTaskId, setDeleteModalTaskId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const { tasks, deleteTask, toggleTaskStatus } = useContext(TasksContext);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function openDeleteModal(taskId) {
    setDeleteModalTaskId(taskId);
  }

  function closeDeleteModal() {
    setDeleteModalTaskId(null);
  }
  const handleCheckboxChange = (taskId) => {
    toggleTaskStatus(taskId);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const taskTitle = task.title.toLowerCase();
    const searchQuery = searchValue.toLowerCase();
    return taskTitle.includes(searchQuery);
  });

  const tasksToDisplay = searchValue === "" ? tasks : filteredTasks;
  return (
    <>
      <header className="w-full h-[60px] border border-b-gray-600 flex items-center  justify-center lg:justify-end">
        <AddTaskModal isOpen={isOpen} closeModal={closeModal} />
        <div className="w-fit mr-3 flex gap-3 items-center justify-center">
          <input
            type="search"
            placeholder="Search Task.."
            value={searchValue}
            onChange={handleSearchChange}
            className="rounded-2xl px-3 h-[30px] text-sm border-[1px] border-gray-500"
          />
          <AiFillPlusCircle
            className="text-mainColor text-3xl cursor-pointer"
            onClick={openModal}
            title="Add New Task"
          />
        </div>
      </header>
      <div className="w-full h-[100vh] p-[20px] bg-[#f5f5f5]">
        <h1 className="text-center text-lg lg:text-2xl font-bold mt-[5px]">
          TASKS MANAGER
        </h1>
        <div className=" w-full h-fit grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4 mt-[20px]">
          {tasksToDisplay && tasksToDisplay.length > 0 ? (
            tasksToDisplay.map((task) => {
              const handleDeleteTask = (id) => {
                deleteTask(id);
                alert("Task deleted Sucessfuly!");
              };

              return (
                <div
                  key={task.id}
                  className="bg-white rounded-lg h-fit lg:p-[20px] p-[10px]"
                >
                  <h3 className="flex gap-1 items-center text-lg mb-3">
                    <AiOutlineCheckCircle
                      className={
                        task.status
                          ? "text-green-500 flex-shrink-0"
                          : "text-gray-500 flex-shrink-0"
                      }
                    />
                    <span className="font-semibold">{task.title}</span>
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold">
                    Description:{" "}
                    <span className="font-normal">{task.description}</span>
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">
                    Status:{" "}
                    <span className="font-normal">
                      {task.status ? "Completed" : "Pending"}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 font-semibold mt-[7px]">
                    <MdCalendarMonth className="text-[#5E9EFE] text-sm flex-shrink-0" />
                    <p className="text-gray-500 lg:text-sm text-[13px]">
                      Due date:{" "}
                      <span className="font-normal">
                        {format(new Date(task.date), "do MMMM, yyyy")}
                      </span>
                    </p>
                  </div>
                  <div className=" w-full flex items-center justify-between mt-[20px]">
                    <p className="text-gray-500 text-[12px] font-semibold flex items-center gap-1">
                      <input
                        type="checkbox"
                        checked={task.status}
                        onChange={() => handleCheckboxChange(task.id)}
                      />{" "}
                      <span className="font-normal">Mark Complete</span>
                    </p>
                    <BsTrashFill
                      className="text-[#FF5353] float-right cursor-pointer"
                      title="Delete Task"
                      onClick={() => openDeleteModal(task.id)}
                    />
                  </div>

                  <DeleteModal
                    isDeleteModalOpen={deleteModalTaskId === task.id}
                    closeDeleteModal={closeDeleteModal}
                    deleteTask={() => handleDeleteTask(task.id)}
                  />
                </div>
              );
            })
          ) : (
            <h2 className="text-center mt-[20px] text-gray-600 text-base">
              No tasks have been added. Click plus button to add task.
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
