import resume from "../assets/icons/resume.svg";
import sales from "../assets/icons/sales.svg";
import webhooks from "../assets/icons/webhooks.svg";
import settings from "../assets/icons/settings.svg";
import contact from "../assets/icons/contact.svg";
import exit from "../assets/icons/exit.svg";
import FinTechSVG from "../assets/FinTechSVG";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="sideNav box bg-3">
      <FinTechSVG title="FinTech Logo" />
      <ul>
        <li>
          <span>
            <img src={resume} alt="" />
          </span>
          <NavLink to="/">Resume</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <NavLink to="/sales">Sales</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={settings} alt="" />
          </span>
          <a>Settings</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <a>Contact</a>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a>Exit</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
