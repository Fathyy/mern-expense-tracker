import "./rightbar.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="rightbar-container">
      <div className="item">
        <div className="bgContainer">
          <img className="bg" src="/astronaut.png" alt="" fill />
        </div>
        <div className="text">
          <span className="notification">🔥 Available Now</span>
          <h3 className="title">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="subtitle">Takes 4 minutes to learn</span>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="button">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="item">
        <div className="text">
          <span className="notification">🚀 Coming Soon</span>
          <h3 className="title">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="subtitle">Boost your productivity</span>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="button">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;