import React from "react";

interface IconTelephoneProps {
  size?: string;
  color?: "primary" | "secondary";
}

function IconTelephone({
  size = "20px",
  color = "primary",
}: IconTelephoneProps) {
  return (
    <svg
      {...{ width: size, height: size }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={`${color == "primary" ? "fill-primary" : "fill-white"}`}
    >
      <path
        id="Path_27"
        data-name="Path 27"
        d="M35.5,16A15.517,15.517,0,0,1,20,.5a.5.5,0,0,1,.5-.5h2.845a1.849,1.849,0,0,1,1.317.546l1.962,1.961a1.5,1.5,0,0,1,0,2.122L25.2,6.048A11.907,11.907,0,0,0,29.952,10.8l1.419-1.42a1.5,1.5,0,0,1,2.121,0l1.962,1.962A1.852,1.852,0,0,1,36,12.656V15.5A.5.5,0,0,1,35.5,16ZM21.009,1A14.52,14.52,0,0,0,35,14.992V12.656a.859.859,0,0,0-.253-.611l-1.962-1.962a.5.5,0,0,0-.707,0L30.4,11.763a.5.5,0,0,1-.578.093A12.893,12.893,0,0,1,24.145,6.18a.5.5,0,0,1,.092-.579l1.68-1.679a.5.5,0,0,0,0-.708L23.955,1.253A.858.858,0,0,0,23.345,1Z"
        transform="translate(-20)"
      />
    </svg>
  );
}

export default IconTelephone;