import React from "react";
import { Helmet } from "react-helmet";

const Info = (props) => {
  return (
    <>
      <Helmet>
        <meta name="description" content="here is some more information" />
        <title>info</title>
      </Helmet>
      <div>
        <h3>some Lorem imsup about me</h3>
      </div>
    </>
  );
};

export default Info;
