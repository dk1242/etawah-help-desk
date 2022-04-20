import React from "react";
import { Container, Button, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "./auth";

const Header = () => (
  <header className="header px-3">
    <Link to="/">
      <h1 className="d-inline-block pt-2">Etawah Help Desk</h1>
    </Link>
    <div
      className="float-right"
      style={{ textAlign: "center", marginRight: "5%" }}
    >
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav>
              <Link to="/">
                <Nav.Link href="/">
                  <h3>Home</h3>
                </Nav.Link>
              </Link>
              <Link to="/events">
                <Nav.Link href="/events">
                  <h3>Events</h3>
                </Nav.Link>
              </Link>
              <Link to="/service">
                <Nav.Link href="/service">
                  <h3>Services</h3>
                </Nav.Link>
              </Link>
              <Link to="/gallery">
                <Nav.Link href="/gallery">
                  <h3>Media Coverage</h3>
                </Nav.Link>
              </Link>
              {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <Link to="/user/dashboard">
                  <Nav.Link href="/user/dashboard">
                    <h3>Dashboard</h3>
                  </Nav.Link>
                </Link>
              )}
              {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <Link to="/admin/dashboard">
                  <Nav.Link href="/admin/dashboard">
                    <h3>Dashboard</h3>
                  </Nav.Link>
                </Link>
              )}
              {!isAuthenticated() && (
                <Link to="/signup">
                  <Nav.Link href="/signup">
                    <h3>Register</h3>
                  </Nav.Link>
                </Link>
              )}

              {!isAuthenticated() && (
                <Link to="/signin">
                  <Nav.Link href="/signin">
                    <h3>LogIn</h3>
                  </Nav.Link>
                </Link>
              )}
              {isAuthenticated() && (
                <Nav.Link
                  href=""
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    signout();
                    window.location.reload();
                  }}
                >
                  <h3>LogOut</h3>
                </Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
);

export default Header;
