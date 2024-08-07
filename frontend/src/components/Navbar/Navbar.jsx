import './Navbar.css'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="title"></div>

      <div className="navbar-menu">
        <div className="search">
          <MdSearch />
          <input type="text" placeholder="Search..." className="input" />
        </div>

        <div className="icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
