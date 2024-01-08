import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import DataHelper from "../../utils/DataHelper";

function NavBar() {
  return (
    <div className="navbar-container">
      <Navbar expand="sm" className="bg-body-tertiary mb-3">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                Offcanvas
              </Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {Object.entries(DataHelper?.SECTIONS).map(
                  ([sec, value], index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Nav.Link
                      className="fw-6"
                      key={index + 1}
                      href={value?.href || "#"}
                    >
                      {sec.toLocaleUpperCase()}
                    </Nav.Link>
                  ),
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
