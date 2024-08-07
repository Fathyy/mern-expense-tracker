import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./Cards.css";

export default function Cards({item}) {
  return (
    <div className="cards-container">
      <MdSupervisedUserCircle size={24} />
      <div className="texts">
        <span className="title">{item.title}</span>
        <span className="number">{item.number}</span>
        <span className="detail">
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  )
}
