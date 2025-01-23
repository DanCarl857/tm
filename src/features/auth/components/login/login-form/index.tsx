import { Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { Schema } from "yup";

import { Button } from "@/ui/components/button";
import { Checkbox } from "@/ui/components/checkbox";
import { Input } from "@/ui/components/inputfield";
import { Text } from "@/ui/components/text";

import { LoginFormValues } from "../login";

interface IProps {
  validationSchema: Schema;
  onSubmit: (values: LoginFormValues, form: FormikHelpers<LoginFormValues>) => void;
  loading: boolean;
}

export const LoginForm: FC<IProps> = ({ validationSchema, onSubmit, loading }) => {

  return (
    <Formik
      key={"signnForm"}
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
        rememberEmail: false,
      }}
      onSubmit={onSubmit}
    >
      {({ touched, errors, getFieldProps }) => (
        <Form>
          <Input
            placeholder="Enter email address"
            id="email"
            error={(touched?.email && errors.email) || undefined}
            theme="dark"
            {...getFieldProps("email")}
          />

          <div className="mt-[8px] mb-[12px] flex gap-[8px] items-center">
            <Checkbox
              theme="dark"
              id="rememberEmail"
              label="Remember email"
              type="checkbox"
              {...getFieldProps("rememberEmail")}
            />
          </div>
          <Input
            placeholder="Enter password"
            type={"password"}
            id="password"
            error={(touched?.password && errors.password) || undefined}
            theme="dark"
            {...getFieldProps("password")}
          />
          <div className="flex w-[100%] justify-end mt-[16px]">
            <button
              onClick={() => { }}
              type="button"
              className="cursor-pointer"
            >
              <Text className="text-[16px] text-white-1 font-medium">Forgot your password?</Text>
            </button>
          </div>
          <div className="flex flex-col gap-[8px] mt-[48px]">
            <Button
              style={{ borderRadius: "25px", color: "#313131" }}
              tone="transparent"
              className={"flex justify-center bg-white-1 text-black-6 border-none"}
              type="submit"
              loading={loading}
            >
              Sign In
            </Button>
            <div className="flex gap-[16px] items-center opacity-20">
              <hr className="flex-1" />
              <Text className="text-[14px] text-white-1 font-medium">or</Text>
              <hr className="flex-1" />
            </div>
            <Button
              tone="transparent"
              className={"bg-transparent flex justify-center border-[1px] text-white-1 border-white-1"}
              style={{ borderRadius: "25px" }}
              onClick={() => { }}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
