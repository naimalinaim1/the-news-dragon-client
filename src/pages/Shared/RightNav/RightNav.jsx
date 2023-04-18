import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-4">Login With</h4>
      <Button variant="outline-primary w-100">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary w-100 mt-2">
        <FaGithub /> Login with Github
      </Button>
      <div className="my-4">
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
