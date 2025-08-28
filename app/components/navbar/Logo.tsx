"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push("/")}
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png"
      />
    </div>
  );
};

export default Logo;
