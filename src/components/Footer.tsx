import React, { useState, FC } from "react";
import Modal from "./Modal";

const Footer: FC = (): React.ReactElement => {
  const [modal, setModal] = useState<boolean>(false);

  const toggle = (): void => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://youtube.com/codebucks" target="_blank">CodeBucks</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal && <Modal toggle={toggle} />}
    </>
  );
};

export default Footer;
