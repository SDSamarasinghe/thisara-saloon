import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
// import "./styles.scss";

export const NotFound = (props) => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <div>
        <label className="nfheader">
          4<span>&#9785;</span>4
        </label>
        <label className="nfdetails">
          Unfortunately, the page you're looking for doesn't exist (anymore) or
          there was an error in the link you followed or typed.{" "}
        </label>
        <Button
          className="nfbutton"
          content="Take me to the Homepage"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export const PermissionDenied = (props) => {
  return (
    <div className="permission-denied">
      <div className="container">
        <label className="status">403</label>
        <label className="header">Access Denied</label>
        <label className="note">
          You do not have permission to access this page. Please contact your
          Site Administrator(s) to request access.
        </label>
      </div>
    </div>
  );
};
