import { IoNotificationsOutline } from "react-icons/io5";

import Zart from "../../image/zart.png";
import classes from "./HeaderContent.module.css";

const HeaderContent = () => {
  return (
    <header className={classes.header}>
      <img src={Zart} className={classes.logo} />
      <p>
        <button className={classes.button}>
          <IoNotificationsOutline size={20} className={classes.stroke} />3
        </button>
      </p>
    </header>
  );
};

export default HeaderContent;
