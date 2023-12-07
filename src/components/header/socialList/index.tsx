import React from "react";
import FacebookIcon from "./facebookIcon";
import InstagramIcon from "./instagram";
import LinkedinIcon from "./linkedin";

interface SocialListProps {
  color?: "primary" | "secondary";
  className?: string;
}

function SocialList({ color = "secondary", className }: SocialListProps) {
  return (
    <ul className={`ml-5 mr-5 flex items-center ${className}`}>
      <FacebookIcon {...{ color }} />
      <InstagramIcon {...{ color }} />
      <span className="w-1"></span>
      <LinkedinIcon {...{ color }} />
    </ul>
  );
}

export default SocialList;
