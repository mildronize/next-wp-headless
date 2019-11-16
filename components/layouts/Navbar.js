import React, { useState } from "react";
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar color="light" light expand="sm" className="bg-white ">
          <div className="page-container">
            <NavbarBrand>
              <Link href="/">
                <a> <span className="logo" >mildronize </span></a>
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink >
                    <Link className="nav-link" href="/">
                      <a>home</a>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  >
                    <Link className="nav-link" href="/page/about">
                     <a>about</a> 
                    </Link>
                  </NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="header-offset-bottom"></div>
      </div>
  );
};

