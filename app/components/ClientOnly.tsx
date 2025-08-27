"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";

interface clientonlyprops {
  children: ReactNode;
}

const ClientOnly: FC<clientonlyprops> = ({ children }) => {
  const [Hasmounted, setHasmounted] = useState(false);
  useEffect(() => {
    setHasmounted(true);
  }, []);

  if (!Hasmounted) {
    return null;
  }
  return <div>{children}</div>;
};

export default ClientOnly;
