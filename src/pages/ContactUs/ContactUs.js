import styles from "./ContactUs.module.css";
import cartBg from "../../assets/svg/cart-bg.svg";
import PageNav from "../../components/PageNav/PageNav";
import SVGComponent from "../../components/messageSvg/Message";
import Form from "../../components/ContactUsForm/Form";
import PageHeader from "../../components/PageHeader/PageHeader";
import Lodaing from "../../components/Lodaing/Lodaing";
import { useEffect, useState } from "react";
import messageSvg from "../../assets/svg/mail-svgrepo-com.svg";
import { motion } from "framer-motion";

const conectusVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.7,
    },
  },
};

function ContactUs() {
  const [validSubmit, setValidSubmit] = useState(
    () => JSON.parse(sessionStorage.getItem("validSubmit")) || false
  );
  const [isLoading, setIsLoading] = useState(() => {
    const storedIsLoading = sessionStorage.getItem("isLoading");
    return storedIsLoading !== null ? JSON.parse(storedIsLoading) : true;
  });

  useEffect(() => {
    if (validSubmit) {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("isLoading", JSON.stringify(false));
        console.log("isLoading set to false in sessionStorage");
      }, 1000);
    }
  }, [validSubmit]);

  return (
    <main className={styles.contactUs}>
      <PageNav className={styles.contactUsNav} />
      <img src={cartBg} alt="bg" className={styles.bg}></img>

      <div className={`container ${styles.contactUsContainer}`}>
        <PageHeader>ContactUs</PageHeader>
        <motion.section
          variants={conectusVariants}
          initial="hidden"
          animate="visible"
          className={styles.contactUsContent}
        >
          <div className={styles.content}>
            {!validSubmit && <Form setValidSubmit={setValidSubmit} />}
            {validSubmit && isLoading && <Lodaing />}
            {!isLoading && validSubmit && <MessageThanks />}
          </div>

          <div className={styles.imgeContianer}>
            <SVGComponent />
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default ContactUs;

function MessageThanks() {
  return (
    <div className={styles.messageThanksContainer}>
      <div className={styles.innerImgContainer}>
        <img src={messageSvg} alt="message succes" />
      </div>

      <h2>Thanks for your message</h2>
      <p>I will reply soon...</p>
    </div>
  );
}
