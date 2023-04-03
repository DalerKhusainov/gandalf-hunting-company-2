// import { AppBar, Toolbar, Typography } from "@mui/material";
// import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
// import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import "./nav-bar.styles.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__logo">
          <CelebrationRoundedIcon fontSize="large" />
          <p className="nav-bar__company-name">Gandalf hunting company</p>
        </div>
        <ul className="nav-bar__links">
          <li>
            <a className="nav-bar__link" href="cave">
              Dragons
            </a>
          </li>
          <li>
            <a className="nav-bar__link" href="contact-us">
              Goblins
            </a>
          </li>
          <li>
            <a className="nav-bar__link" href="all-trolls">
              Cave Trolls
            </a>
          </li>
          <li>
            <a className="nav-bar__link" href="download-app">
              Other Monsters
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
