"use client";
import UseLoginModal from "@/app/hooks/UseLoginModal";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import UseRegisterModal from "@/app/hooks/UseRegisterModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const RegisterModal = UseRegisterModal();
  const LoginModal = UseLoginModal();
  const [isLoading, setisLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setisLoading(false);
      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        LoginModal.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  const BodyContent = (
    <div className="flex flex-col gap-4 ">
      <Heading title="Welcome Back!" subtitle="Login to your account!" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footercontent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="text-neutral-500 text-center mt-4 font-light ">
        <div className="justify-center flex flex-row items-center gap-2 ">
          <div>Already Have A Account?</div>
          <div
            onClick={RegisterModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Login"
      actionlabel="Continue"
      onClose={LoginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={BodyContent}
      footer={footercontent}
    />
  );
};

export default LoginModal;
