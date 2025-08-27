"use client";
import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface Modalprops {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  disabled?: boolean;
  actionlabel: string;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}
const Modal: FC<Modalprops> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disabled,
  actionlabel,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setshowModal] = useState(isOpen);

  useEffect(() => {
    setshowModal(isOpen);
  }, [isOpen]);
  const handleclose = useCallback(() => {
    if (disabled) {
      return;
    }
    setshowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handlesubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handlesecondaryaction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 overflow-y-auto">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:x-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            }
              ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleclose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto ">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryLabel}
                      onClick={handlesecondaryaction}
                    />
                  )}

                  <Button
                    disabled={disabled}
                    label={actionlabel}
                    onClick={handlesubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
