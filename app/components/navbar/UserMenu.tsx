"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import MenuItems from "./MenuItems";
import UseRegisterModal from "@/app/hooks/UseRegisterModal";

const UserMenu = () => {
  const RegisterModal = UseRegisterModal();
  const [Open, setOpen] = useState(false);
  const ToggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block  text-sm  font-semibold py-3 px-4  rounded-full hover:bg-neutral-100 transition  cursor-pointer">
          HostBnb your home
        </div>
        <div
          onClick={ToggleOpen}
          className="p-4 md:py-2 md:px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <RxAvatar />
          </div>
        </div>
      </div>
      {Open && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItems onClick={() => {}} label="Login" />
              <MenuItems onClick={RegisterModal.onOpen} label="Signup" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
