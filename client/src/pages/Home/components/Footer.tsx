import React from "react";

function Footer() {
  return (
    <div className="footer flex flex-col items-center justify-center font-medium tracking-wide p-2">
      JobsSeeker.co © {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
