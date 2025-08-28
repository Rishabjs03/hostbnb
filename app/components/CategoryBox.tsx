"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import React, { FC, useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxprops {
  icon: IconType;
  label: string;
  selected?: boolean;
}
const CategoryBox: FC<CategoryBoxprops> = ({ icon: Icon, label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleclick = useCallback(() => {
    let currentquery = {};
    if (params) {
      currentquery = queryString.parse(params.toString());
    }
    const updatedquery: any = {
      ...currentquery,
      category: label,
    };
    if (params?.get("category") === label) {
      delete updatedquery.category;
    }
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedquery,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleclick}
      className={`flex flex-col items-center justify-center gap-2 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
