import React from "react";

interface InstagramIconProps {
  width?: string;
  height?: string;
  color?: "primary" | "secondary";
}

function LinkedinIcon({
  width = "35px",
  height = "35px",
  color = "secondary",
}: InstagramIconProps) {
  return (
    <a
      href="https://www.instagram.com/cajeros5b"
      className={`block hover:border-b-2 hover:border-solid ${
        color == "secondary" ? "hover:border-secondary" : "hover:border-primary"
      }}`}
    >
      <svg
        {...{ width, height }}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={color == "secondary" ? "fill-secondary" : "fill-primary"}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>linkedin</title>{" "}
          <g id="Layer_2" data-name="Layer 2">
            {" "}
            <g id="invisible_box" data-name="invisible box">
              {" "}
              <rect width="48" height="48" fill="none"></rect>{" "}
              <rect width="48" height="48" fill="none"></rect>{" "}
            </g>{" "}
            <g id="icons_Q2" data-name="icons Q2">
              {" "}
              <path d="M41,4.1H7A2.9,2.9,0,0,0,4,7V41.1A2.9,2.9,0,0,0,7,44H41a2.9,2.9,0,0,0,2.9-2.9V7A2.9,2.9,0,0,0,41,4.1Zm-25.1,34h-6v-19h6Zm-3-21.6A3.5,3.5,0,0,1,9.5,13a3.4,3.4,0,0,1,6.8,0A3.5,3.5,0,0,1,12.9,16.5ZM38,38.1H32.1V28.8c0-2.2,0-5-3.1-5s-3.5,2.4-3.5,4.9v9.4H19.6v-19h5.6v2.6h.1a6.2,6.2,0,0,1,5.6-3.1c6,0,7.1,3.9,7.1,9.1Z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </a>
  );
}

export default LinkedinIcon;