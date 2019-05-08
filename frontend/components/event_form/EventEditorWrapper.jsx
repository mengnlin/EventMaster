import React from "react";

import { css } from "emotion";

const wrapperStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const iconContainer = css`
  width: 48px;
`;

const formContainer = css`
  width: 548px;
`;

const heading = css`
  font-size: 30px;
  font-weight: 700;
  margin: 0 -0.5px 0 0;
  padding: 0;
`;
const instruction = css`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  width: 432px;
`;
const EventEditorWrapper = ({ title, description, icon, children }) => (
  <section className={wrapperStyle}>
    <div className={iconContainer}>{icon}</div>
    <div className={formContainer}>
      <h3 className={heading}>{title}</h3>
      <p className={instruction}>{description}</p>
      {children}
    </div>
  </section>
);

export default EventEditorWrapper;
