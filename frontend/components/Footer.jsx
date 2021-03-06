import React from "react";
import { css } from "emotion";
const github =
  "https://github.com/mengnlin/EventMaster/blob/master/frontend/static/github.png?raw=true";
const javaScript =
  "https://github.com/mengnlin/EventMaster/blob/master/frontend/static/javaScript.png?raw=true";
const linkedin =
  "https://github.com/mengnlin/EventMaster/blob/master/frontend/static/linkedin.jpg?raw=true";
const rails =
  "https://github.com/mengnlin/EventMaster/blob/master/frontend/static/rails.jpg?raw=true";
const react =
  "https://github.com/mengnlin/EventMaster/blob/master/frontend/static/react.png?raw=true";
const ruby =
  "https://github.com/mengnlin/EventMaster/blob/master/frontend/static/ruby.png?raw=true";

const Footer = () => {
  return (
    <div className={FooterContainer}>
      <div className={innerContainer}>
        <div className={IconContainer}>
          <img src={javaScript} className={GithubIcon} />
        </div>
        <div className={IconContainer}>
          <img src={ruby} className={GithubIcon} />
        </div>
        <div className={IconContainer}>
          <img src={rails} className={GithubIcon} />
        </div>
        <div className={IconContainer}>
          <img src={react} className={GithubIcon} />
        </div>
        <div className={IconContainer}>
          <a href="https://www.linkedin.com/in/mengna-lin/">
            <img src={linkedin} className={LinkedinIcon} />
          </a>
        </div>
        <div className={IconContainer}>
          <a href="https://github.com/mengnlin">
            <img src={github} className={GithubIcon} />
          </a>
        </div>
        <div className={SignatureContainer}>
          <p className={Signature}>By Mengna Lin</p>
        </div>
      </div>
    </div>
  );
};

const FooterContainer = css`
  height: 100px;
  display: flex;
  margin-top: 200px;
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
