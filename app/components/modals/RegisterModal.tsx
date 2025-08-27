"use client";
import UseRegisterModal from "@/app/hooks/UseRegisterModal";
import axios from "axios";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";

const RegisterModal = () => {
  const RegisterModal = UseRegisterModal();
  const [isLoading, setisLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        RegisterModal.onClose();
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  const BodyContent = (
    <div className="flex flex-col gap-4 ">
      <Heading title="Welcome to Hostbnb" subtitle="Create an account" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Register"
      actionlabel="Continue"
      onClose={RegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={BodyContent}
    />
  );
};

export default RegisterModal;
