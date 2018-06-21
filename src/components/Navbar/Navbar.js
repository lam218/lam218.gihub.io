// @flow
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";

import { Link } from "react-router-dom";

type Props = {
  logo: string,
  logoDesc: string,
  onClick: () => void,
  toggleNavbar: () => void,
  isCollapsed: boolean,
  navItems: [{ name: string, link: string }]
};

const ourNavbar = (props: Props) => (
  <Navbar color="light" light expand="md">
    <Link to="/">
      <NavbarBrand className="mr-auto">
        <img src={props.logo} alt={props.logoDesc} />
      </NavbarBrand>
    </Link>
    <NavbarToggler onClick={props.toggleNavbar} className="mr-2" />
    <Collapse isOpen={!props.isCollapsed} navbar>
      <Nav navbar>
        {props.navItems.map(items => (
          <NavItem key={items.name}>
            <Link to={items.link}>{items.name}</Link>
          </NavItem>
        ))}
      </Nav>
    </Collapse>
  </Navbar>
);

export default ourNavbar;
