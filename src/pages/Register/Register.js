import styles from "./Register.module.css";
import cartBg from "../../assets/svg/cart-bg.svg";
import PageNav from "../../components/PageNav/PageNav";
import PageHeader from "../../components/PageHeader/PageHeader";
import RegisterForm from "../../components/RegisterComponents/RegisterForm";
import RegisterSuccess from "../../components/RegisterComponents/RegisterSuccess";
import { useState } from "react";
import SignUpSvg from "../../components/SignUpSvg/SignUpSvg";

import { motion } from "framer-motion";

const registerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.7,
    },
  },
};

function Register() {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  return (
    <main className={styles.register}>
      <PageNav className={styles.registerNav} />
      <img src={cartBg} alt="bg" className={styles.bg}></img>

      <div className={`container ${styles.registerContainer}`}>
        <PageHeader>Register</PageHeader>
        <div className={styles.container}>
          <motion.section
            variants={registerVariants}
            initial="hidden"
            animate="visible"
            className={styles.registerContent}
          >
            {success ? (
              <RegisterSuccess dirction={"/login"} textContent={"Sign In"} />
            ) : (
              <RegisterForm setErrMsg={setErrMsg} setSuccess={setSuccess} />
            )}

            <div className={styles.svgContainer}>
              <SignUpSvg />
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

export default Register;
