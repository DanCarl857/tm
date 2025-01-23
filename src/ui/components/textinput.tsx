import React from "react";
import { Icon } from "@/ui/primitives/icon/icon";
import Image from "next/image";
import { cn } from "@/utils/css";

const Tick = () => (
  <Image src={"../primitives/icon/tick.png"} alt="tick" width={10} height={9} style={{ marginTop: 4 }} />
);

const RedDot = () => (
  <Image
    src={"../primitives/icon/red_dot.png"}
    alt="dot"
    width={10}
    height={10}
    style={{ marginTop: 4, marginLeft: 3, marginRight: 6 }}
  />
);

const JsonError = ({ error }: { error: string }) => {
  const mJson = JSON.parse(error);
  return (
    <div style={{ gap: 5, marginTop: 2 }}>
      {Object.keys(mJson).map((key, i) => (
        <div key={i} style={{ flexDirection: "row", gap: 5 }}>
          {mJson[key] ? <Tick /> : <RedDot />}
          <p>{key}</p>
        </div>
      ))}
    </div>
  );
};

const TextInput = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    placeholder,
    ref,
    allowClear,
    ...inputProps
  } = props;
  const inputRef = React.useRef(null);
  // const [focus ,setFocus] = useState(false);
  const hasError = errors[name] && touched[name];
  const jsonError = hasError && errors[name] && errors[name].startsWith("{");

  const clearInput = () => {
    onChange(name)("");
  };
  return (
    <div className="w-full mb-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {inputProps.title ?? placeholder}
      </label>
      <div
        className="flex appearance-none w-full bg-gray-200 text-gray-700 border rounded leading-tight focus:bg-white overflow-hidden disabled:cursor-not-allowed disabled:opacity-50"
        style={{ borderColor: hasError ? "red" : value?.length ? "green" : "#000" }}
      >
        {props.icon &&
          (typeof props.icon === "string" ? (
            <p style={inputProps.iconStyle}>{props.icon}</p>
          ) : (
            <div style={{ paddingLeft: 10, display: "flex" }}>{props.icon}</div>
          ))}

        <input
          {...inputProps}
          className={cn("w-full h-full py-3 px-4 outline-none", inputProps?.inputClassName)}
          value={inputProps.formatValue ? inputProps.formatValue(value) : value}
          onChange={(p) => onChange(name)(p)}
          // placeholderpColor={"grey"}
          placeholder={inputProps.title && placeholder ? placeholder : undefined}
          // onFocus={() => setFocus(true)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
            // setFocus(false);
          }}
          ref={inputRef}
          editable={!inputProps.disabled}
          selectpOnFocus={!inputProps.disabled}
        />

        {props.iconBack && (
          <div style={{ paddingRight: 10, display: "flex", alignItems: "center" }}>{props.iconBack}</div>
        )}
        {value && allowClear ? (
          <div onClick={clearInput} style={{ paddingRight: 10, display: "flex", alignItems: "center" }}>
            <div>
              <p className="text-primary-7 text-xs italic">
                {!hasError ? <Icon icon="cancel" /> : <Icon icon="cancelIconError" />}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {hasError &&
        (inputProps?.showErrors ?? true) &&
        (jsonError ? (
          <JsonError error={errors[name]} />
        ) : (
          <p className="text-primary-7 text-xs italic">{errors[name]}</p>
        ))}
    </div>
  );
};

export default TextInput;
