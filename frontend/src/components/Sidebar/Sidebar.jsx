import { noavatar } from "../../assets";
import "./sidebar.css";
import { MdDashboard, MdShoppingBag, MdAttachMoney } from "react-icons/md";
const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    id: 2,
    title: "Income",
    icon: <MdAttachMoney />,
  },
  {
    id: 3,
    title: "Expense",
    icon: <MdShoppingBag />,
  },
];

export default function Sidebar({ setActive, active }) {
  return (
    <div className="sidebar-container">
      <div className="user">
        <img
          src={noavatar}
          alt="user"
          className="userImage"
          width="50"
          height="50"
        />

        <div className="userDetail">
          <span className="userTitle">Administrator</span>
        </div>
      </div>
      <ul className="list">
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'active' : ''}>
            <a href="#" className="menuLink-container">
              {item.icon}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
