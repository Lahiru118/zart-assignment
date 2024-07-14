import { IoCaretForward } from "react-icons/io5";

import classes from "./Details.module.css";

const Details = () => {
  return (
    <button>
      <h4>
        See<span> details</span>
      </h4>
      <IoCaretForward size={15} className={classes.icon} />
    </button>
  );
};

export default Details;
