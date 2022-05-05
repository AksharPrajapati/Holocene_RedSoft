import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  title: string;
  showModal: boolean
  setShowModal: (state: boolean) => void
};
const Modal: React.FC<Props> = ({ children, title, showModal, setShowModal }) => {
  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0  overflow-y-auto"
        onClose={() => setShowModal(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative p-6 bg-gray-50 inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-xl sm:w-full">
              <div className="">
                <div className="flex justify-between mb-4">
                  <div className="text-lg leading-6 font-medium ">
                    {title}
                  </div>
                  <div onClick={() => setShowModal(false)} className="cursor-pointer text-xl">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.79303 4.29308C4.98056 4.10561 5.23487 4.00029 5.50003 4.00029C5.76519 4.00029 6.0195 4.10561 6.20703 4.29308L10.5 8.58608L14.793 4.29308C14.8853 4.19757 14.9956 4.12139 15.1176 4.06898C15.2396 4.01657 15.3709 3.98898 15.5036 3.98783C15.6364 3.98668 15.7681 4.01198 15.891 4.06226C16.0139 4.11254 16.1255 4.18679 16.2194 4.28069C16.3133 4.37458 16.3876 4.48623 16.4379 4.60913C16.4881 4.73202 16.5134 4.8637 16.5123 4.99648C16.5111 5.12926 16.4835 5.26048 16.4311 5.38249C16.3787 5.50449 16.3025 5.61483 16.207 5.70708L11.914 10.0001L16.207 14.2931C16.3892 14.4817 16.49 14.7343 16.4877 14.9965C16.4854 15.2587 16.3803 15.5095 16.1948 15.6949C16.0094 15.8803 15.7586 15.9855 15.4964 15.9878C15.2342 15.99 14.9816 15.8892 14.793 15.7071L10.5 11.4141L6.20703 15.7071C6.01843 15.8892 5.76583 15.99 5.50363 15.9878C5.24143 15.9855 4.99062 15.8803 4.80521 15.6949C4.6198 15.5095 4.51463 15.2587 4.51236 14.9965C4.51008 14.7343 4.61087 14.4817 4.79303 14.2931L9.08603 10.0001L4.79303 5.70708C4.60556 5.51955 4.50024 5.26525 4.50024 5.00008C4.50024 4.73492 4.60556 4.48061 4.79303 4.29308Z"
                        fill="#6B7280"
                      />
                    </svg>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
