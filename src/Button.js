import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({ pText }) {
  return <button className={styles.btn}>{pText}</button>;
}
Button.prototype = {
  pText: PropTypes.string.isRequired,
};
export default Button;
