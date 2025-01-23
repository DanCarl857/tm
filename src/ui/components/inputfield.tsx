import { cn } from "@/utils/css";
import { FC, InputHTMLAttributes, ReactNode, useState } from "react";
import { Icon } from "../primitives/icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  labelClassName?: string;
  icon?: ReactNode;
  iconBack?: ReactNode;
  isDoubledInput?: boolean;
  theme?: "light" | "dark";
  iconOrientation?: "left" | "right";
  children?: ReactNode;
}

export const Input: FC<InputProps> = ({
  className,
  type,
  labelClassName,
  icon,
  isDoubledInput,
  iconBack,
  theme = "light",
  iconOrientation = "left",
  children,
  ...props
}) => {
  const [stateType, setStateType] = useState(type);

  const togglePassword = () => {
    setStateType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className={cn("flex items-end relative h-[94px] w-full")}>
      {icon && (
        <div
          className={cn(
            "text-lg absolute bottom-[30.5px] cursor-pointer w-[25px] flex items-center",
            iconOrientation === "right" ? "right-[15px]" : "left-[15px]",
          )}
        >
          {icon}
        </div>
      )}
      {children}

      <input
        type={stateType}
        className={cn(
          `peer relative bottom-[16px] h-[40px] pb-[16px] w-full border-b border-grey-3 ${theme === "dark" ? "border-opacity-50" : "border-opacity-20"} bg-transparent`,
          `text-lg ${theme === "dark" ? "text-white-1" : "text-black-4"} outline-none placeholder:text-lg`,
          `focus:border-opacity-100 ${theme === "dark" ? "focus:border-black-1" : "focus:border-black-4"} placeholder:opacity-0 bg-transparent autofill:bg-transparent`,
          props.error && "border-error-1 border-opacity-100",
          isDoubledInput && "pl-[17px]",
          icon && iconOrientation === "left" && "pl-[70px]",
          "custom-inputfield",
          theme === "dark" ? "inputfield-dark" : "",
          props.disabled && "cursor-not-allowed text-grey-6",
          className,
        )}
        {...props}
      />
      <label
        className={cn(
          "after:content[''] pointer-events-none absolute flex h-full w-full",
          "select-none !overflow-visible truncate text-[17px] text-grey-6 transition-all",
          "after:absolute after:block after:w-full after:transition-transform after:duration-300",
          "peer-placeholder-shown:leading-[6] peer-focus:leading-[1.5]",
          isDoubledInput && "pl-[17px]",
          icon &&
          iconOrientation === "left" &&
          `pl-[70px] ${props.value && isDoubledInput && "pl-[17px]"} ${isDoubledInput && "peer-focus:pl-[17px]"}`,
          props.disabled && "text-grey-2 opacity-50",
          labelClassName,
        )}
        htmlFor={props.id}
      >
        {props.placeholder}
      </label>
      {type === "password" && (
        <div className="absolute right-0 bottom-[35px] cursor-pointer">
          <div onClick={togglePassword}>
            {stateType === "password" ? (
              <Icon icon={theme === "dark" ? "eyeOnWhite" : "eyeOn"} />
            ) : (
              <Icon icon={theme === "dark" ? "eyeOffWhite" : "eyeOff"} />
            )}
          </div>
        </div>
      )}

      {props.error && (
        <div className={`h-[16px] absolute bottom-[0] ${isDoubledInput ? "pl-[17px]" : ""}`}>
          <span className="font-size-[13px] relative bottom-[2px] text-error-1 font-medium">{props.error}</span>
        </div>
      )}
      <div className="flex h-[16px] absolute bottom-[-5px] right-[0]">
        {props.minLength && (
          <div className={`mr-1`}>
            <span className="font-size-[13px] relative bottom-[2px] text-grey-6 font-medium">
              {props.minLength} characters minimum,
            </span>
          </div>
        )}
        {props.maxLength && (
          <div className={``}>
            <span className="font-size-[13px] relative bottom-[2px] text-grey-6 font-medium">
              {props.maxLength} characters maximum
            </span>
          </div>
        )}
      </div>
      {iconBack && <div className="absolute right-0 bottom-[35px] cursor-pointer">{iconBack}</div>}
    </div>
  );
};
