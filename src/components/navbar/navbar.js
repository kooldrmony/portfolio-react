import React from "react";
// import NavMessage from "../NavMessage";
import "./navbar.css";
import Gmail from "./pictures/gmail.png"
import Linkedin from "./pictures/linkedin.png"
import Github from "./pictures/github.png"

// Component for the Navbar

const Nav = props => (

    <div class="container">
      <ul class="list-inline">
            <li>
              <a href="https://www.facebook.com/dmendoz"><img className="Gmail" alt="Gmail" src={Gmail} width="100%" height="100%" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCMWv55TyJgdpv7HLt29INow"><img className="Github" alt="Github" src={Github} width="100%" height="100%" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/musichildm/"><img className="Linkedin" alt="Linkedin" src={Linkedin} width="100%" height="100%" /></a>
            </li>
      </ul>
</div>
);

export default Nav;
