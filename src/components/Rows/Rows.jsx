import classes from "./Rows.module.css";
import DetailsButton from "../Details/Details";

const Rows = ({ image, name, total, condition, price }) => {
  return (
    <tr className={classes.tableRow}>
      <td>
        <div className={classes.modelColumn}>
          <img src={image} alt={name} className={classes.image} />
          {name}
        </div>
      </td>
      <td>{total}</td>
      <td>{condition}</td>
      <td>{price}</td>
      <DetailsButton />
    </tr>
  );
};

export default Rows;
