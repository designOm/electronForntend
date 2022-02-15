import React from "react";

interface Props {
  className?: string;
}

const Arrow_drop_down = (props: Props) => {
  return (
    <svg
      {...props}
      height="24"
      width="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10L12 15L17 10H7Z" fill="#2717A5" fillOpacity="0.3" />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12Z"
        stroke="#2717A5"
        strokeOpacity="0.5"
      />
    </svg>
  );
};

export default Arrow_drop_down;
