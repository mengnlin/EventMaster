import React from "react";
import { css } from "emotion";
const Footer = () => {
  return (
    <div className={FooterContainer}>
      <div className={innerContainer}>
        <div className={IconContainer}>
          <img src="javascript.png" className={GithubIcon} />
        </div>
        <div className={IconContainer}>
          <img src="ruby.png" className={GithubIcon} />
        </div>
        <div className={IconContainer}>
          <img src="React.png" className={GithubIcon} />
        </div>
        <div className={IconContainer}>
          <a href="https://www.linkedin.com/in/mengna-lin/">
            <img src="linkedin.jpg" className={LinkedinIcon} />
          </a>
        </div>
        <div className={IconContainer}>
          <a href="https://github.com/mengnlin">
            <img src="github.png" className={GithubIcon} />
          </a>
        </div>
        <div className={SignatureContainer}>
          {/* <p className={Signature}> </p> */}
          <p className={Signature}>By Mengna Lin</p>
        </div>
      </div>
    </div>
  );
};

const FooterContainer = css`
  background: #d1410b;
  /* rgb(247, 129, 56); */
  height: 100px;
  display: flex;
  /* position: absolute; */
  margin-top: 200px;
  /* justify-content: fle; */
  /* bottom: 0;
  flex: 1; */
  /* margin-bottom: 36;  */
  /* margin-top: 200px; */
`;

const innerContainer = css`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const SignatureContainer = css`
  align-self: baseline;
  width: 130px;
  height: 50px;
`;
const Signature = css`
  padding-top: 50px;
  color: gb(232, 221, 218);
  margin: 5px 0 0 0;
  font-size: 18px;
  font-family: "Baloo", cursive;
  font-weight: 700;
`;

const IconContainer = css`
  padding: 20px;
  width: 100px;
  height: 70px;
`;

const LinkedinIcon = css`
  width: 70px;
  height: 70px;
`;
const GithubIcon = css`
  width: 70px;
  height: 70px;
`;

export default Footer;
