import PageHeader from "../../components/PageHeader/PageHeader";
import cartBg from "../../assets/svg/cart-bg.svg";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./Login.module.css";
import LoginForm from "../../components/LoginComponents/LoginForm";
import RegisterSuccess from "../../components/RegisterComponents/RegisterSuccess";
import { useState } from "react";
import { motion } from "framer-motion";

const loginVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.7,
    },
  },
};

function Login() {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  return (
    <main className={styles.login}>
      <PageNav className={styles.loginNav} />
      <img src={cartBg} alt="bg" className={styles.bg}></img>

      <div className={`container ${styles.registerContainer}`}>
        <PageHeader>Login</PageHeader>
        <div className={styles.container}>
          <motion.section
            variants={loginVariants}
            initial="hidden"
            animate="visible"
            className={styles.loginContent}
          >
            {success ? (
              <RegisterSuccess dirction={"/"} textContent={"Home Page"} />
            ) : (
              <LoginForm setErrMsg={setErrMsg} setSuccess={setSuccess} />
            )}
          </motion.section>
        </div>
      </div>
    </main>
  );
}

export default Login;
