import { Navbar, Nav, Modal } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import React from "react";

export const NavigationBar = () => {
  return (
    <div>
      <Navbar
        id="nav"
        expand="lg"
        variant="light"
        style={{ backgroundColor: "#FF9F00", padding: "8px 30px" }}
      >
        <Navbar.Brand as={Link} to="/" className="text-light" id="brand">
          <h1>FETask</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav
            className="ml-auto justify-content-end"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex justify-content-between"
              style={{ width: "200px" }}
            >
              <div>
                <NavLink
                  to="/add-event"
                  className="d-flex align-items-center navigationLink"
                  activeStyle={{
                    color: "black",
                  }}
                >
                  +Add Event
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dashboard"
                  className="d-flex align-items-center navigationLink"
                  activeStyle={{
                    color: "black",
                  }}
                >
                  Dashboard
                </NavLink>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
