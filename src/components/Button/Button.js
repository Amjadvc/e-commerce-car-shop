import styles from "./Button.module.css";

function Button({ children, className }) {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
}

export default Button;
