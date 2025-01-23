"use client";
import { FormikHelpers } from "formik";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import { isMobile } from "react-device-detect";
import * as yup from "yup";

import { ProgressState, useProgressState } from "@/hooks/useProgressState";
import { Text } from "@/ui/components/text";

import { LoginForm } from "./login-form";

const signinValidationSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email Address is Required"),
  password: yup.string().required("Password is required"),
  rememberEmail: yup.boolean(),
});

export interface LoginFormValues {
  email: string;
  password: string;
  rememberEmail: boolean;
}

const Login: FC = () => {
  const { setSuccess, setLoading, progress } = useProgressState();

  useEffect(() => {
    const storedSession = localStorage.getItem("bao-token");
    const token = storedSession?.replace("bao-", "");
    if (token) {
      window.open("/home", "_self");
    }
  }, [])

  const handleSubmit = (
    { email, password }: LoginFormValues,
    { setErrors }: FormikHelpers<LoginFormValues>,
  ) => {
    setLoading();
    if (email === 'admin@baotech.com' && password === 'admin123') {
      localStorage.setItem("bao-token", "bao-123")
      window.open("/home", "_self")
    } else {
      alert("email: admin@baotech.com | password: admin123")
      setErrors({
        email: "Wrong email address or password",
        password: "Wrong email address or password",
      })
    }
    setSuccess();
  };

  return (
    <main className={`min-h-screen bg-black-5 flex relative ${isMobile ? "pt-[50px]" : ""}`}>
      {!isMobile && (
        <div className="flex justify-center items-center w-[37%] h-[min-content] relative top-[350px]">
          <div className="absolute left-[-320px] bg-purple-1 w-[353px] h-[234px] blur-[125px] rounded-[353px]" />
          <div className="w-[150px] h-[40px]">
            <Image width={200} height={80} src="/logo.png" alt="logo" />
          </div>
        </div>
      )}
      <div className={`flex relative flex-col items-center ${isMobile ? "justify-start" : "justify-center"} flex-1`}>
        <div
          className={`flex flex-col rounded-[24px] py-[36px] px-[32px] bg-black-6 ${isMobile ? "w-[90%]" : "w-[450px]"} gap-[36px]`}
        >
          <div className="flex flex-col items-start  gap-[8px]">
            <Text type="heading0" className="font-semibold text-[36px] text-white-1 leading-[normal]">
              Welcome
            </Text>
            <Text type="heading4" className="font-normal text-[17px] text-white-1 opacity-60 leading-[126%]">
              Log into your account
            </Text>
          </div>
          <div className="flex flex-col">
            <LoginForm
              validationSchema={signinValidationSchema}
              onSubmit={handleSubmit}
              loading={progress === ProgressState.loading}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
