import React from "react";
import { FC } from "react";
import { ReactElement } from "react";
import classNames from "classnames";
import './styles.scss'

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon?: ReactElement;
}

const Button: FC<ButtonProps> = (props) => {
  const content = (
    <>
      {props.icon}
      {props.children}
    </>
  );
  const className = classNames("my-button", props.className);
  return (
    <button {...props} className={className}>
      {content}
    </button>
  );
};

export default Button;
