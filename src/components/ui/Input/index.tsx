import classNames from "classnames";
import React, { ChangeEventHandler, ReactElement } from "react";
import { MouseEventHandler } from "react";
import "./styles.scss";

export interface InputProps {
  prefix?: ReactElement;
  suffix?: ReactElement;
  onChange?: (value: string) => void;
  onClick?: MouseEventHandler;
  value?: string;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
}
const Input = (props: InputProps) => {
  const onChange: ChangeEventHandler<HTMLInputElement> | undefined = props.onChange
    ? (e) => props.onChange?.(e.target.value)
    : undefined;
  const wrapClass = classNames("my-input", props.className);
  return (
    <div className={wrapClass} onClick={props.onClick}>
      {props.prefix && <label className="my-input__prefix">{props.prefix}</label>}
      <input className="my-input__input" type="text" onChange={onChange} placeholder={props.placeholder}/>
      {props.suffix && <span className="my-input__suffix">{props.suffix}</span>}
    </div>
  );
};

export default Input;
