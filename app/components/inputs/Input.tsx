"use client";
import React, { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface inputprops {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: FC<inputprops> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={20}
          className="text-neutral-700 absolute top-5 left-3"
        />
      )}

      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          rounded-md
          border-2
          bg-white
          px-4
          pt-6
          pb-2
          font-light
          outline-none
          transition
          disabled:cursor-not-allowed
          disabled:opacity-70
          ${formatPrice ? "pl-9" : "pl-4"}
          ${
            errors[id]
              ? "border-rose-500 focus:border-rose-500"
              : "border-neutral-300 focus:border-black"
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
    absolute
    text-md
    duration-150
    transform
    -translate-y-3
    top-5
    z-10
    origin-[0]
    peer-placeholder-shown:translate-y-0
    peer-placeholder-shown:text-neutral-500
    peer-placeholder-shown:text-base
    peer-focus:-translate-y-4
    peer-focus:text-sm
    ${formatPrice ? "left-9" : "left-4"}
  `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
