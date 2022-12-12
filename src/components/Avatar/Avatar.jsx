import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  py,
  px,
  color,
  borderRadius,

  fontSize,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    textAlign: "center",
    fontSize,
    cursor: "cursor" || null,
    textDecoration:"none"
  };
  return <div style={style}>{children}</div>;
};

export default Avatar;
