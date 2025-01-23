import { cn } from "@/utils/css";
import { FC, InputHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { Icon } from "../primitives/icon";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string | ReactNode;
  error?: string;
  theme?: "light" | "dark";
  labelClassName?: string;
}

export const Checkbox: FC<IProps> = ({
  id,
  name,
  label,
  className,
  onChange,
  error,
  theme,
  labelClassName,
  ...props
}) => {
  const [checked, setChecked] = useState(props.checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  return (
    <div className="flex items-start cursor-pointer relative">
      <input
        id={id}
        name={name}
        type="checkbox"
        onChange={handleChange}
        className={cn(
          `w-6 h-6 p-2 transition-colors border-[1px] border-solid bg-transparent border-grey-7 ${theme === "dark" ? "opacity-20" : ""}`,
          "rounded-md appearance-none moz-appearance-none webkit-appearance-none",
          "checked:border-primary-17 checked:bg-primary-17 checked:opacity-100 cursor-pointer",
          className,
        )}
        checked={checked}
        {...props}
      />
      <Icon
        className={cn("pointer-events-none absolute top-0.5 left-0.5", checked ? "inline-block" : "hidden")}
        icon={"checked"}
      />
      {label && (
        <label
          htmlFor={id}
          className={cn(
            `ms-2 pt-0.5 inline-block text-sm font-medium ${theme === "dark" ? "text-white-1" : "text-black-4"} cursor-pointer`,
            labelClassName,
          )}
        >
          {label}
        </label>
      )}
      {error && (
        <div className={`h-[16px] absolute bottom-[-12px] left-[32px]`}>
          <span className="text-[12px] relative text-error-1 font-medium">*{error}</span>
        </div>
      )}
    </div>
  );
};
