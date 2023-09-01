import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import PropTypes from "prop-types";

export default function DeleteModal({
  isDeleteModalOpen,
  closeDeleteModal,
  deleteTask,
}) {
  return (
    <>
      <Transition appear show={isDeleteModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDeleteModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full   items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-fit max-w-md transform overflow-hidden rounded-md bg-white p-3 shadow-xl transition-all">
                  <p className="text-center lg:text-base text-sm">
                    Are you sure you want to delete this task?
                  </p>
                  <div className="flex justify-center gap-4 items-center mt-3">
                    <button
                      className="bg-white text-black lg:text-sm text-[12px] shadow-sm border border-gray-500 px-[7px] py-[5px] flex items-center justify-center rounded-md cursor-pointer"
                      onClick={deleteTask}
                    >
                      YES
                    </button>
                    <button
                      className=" bg-indigo-600 text-white lg:text-sm  text-[12px] px-[7px] py-[5px] flex items-center justify-center rounded-md cursor-pointer border border-gray-500"
                      onClick={closeDeleteModal}
                    >
                      NO
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

DeleteModal.propTypes = {
  isDeleteModalOpen: PropTypes.bool.isRequired,
  closeDeleteModal: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
