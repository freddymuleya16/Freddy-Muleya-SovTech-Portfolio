import Link from "next/link";
import React from "react";
import { FaChessKing } from "react-icons/fa";
import Socials from "../Socials/Socials";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { Span } from "./HeaderStyles";
const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white",marginBottom:"20px" }}>
          
          <Span>Freddy's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/" >
          <NavLink style={{ display: "flex",marginTop:"10px" }}>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about" >
          <NavLink style={{ display: "flex",marginTop:"10px" }}>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <NavLink style={{ display: "flex",marginTop:"10px" }}>Contact</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/other">
          <NavLink style={{ display: "flex",marginTop:"10px" }}>Other</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <Socials/>
    </Div3>
  </Container>
);

export default Header;
