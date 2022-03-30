import Link from "next/link";
import classes from "./button.module.css";
import Pie  from '../icons/pie';

function Button(props) {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;
