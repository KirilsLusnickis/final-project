import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-initial", "btn-contour"];

const SIZES = ["btn-small", "btn-big"];

export const Button = ({
  children,
  onClick,
  type,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <Button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </Link>
  );
};
