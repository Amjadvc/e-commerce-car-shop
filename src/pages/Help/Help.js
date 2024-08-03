import styles from "./Help.module.css";
import cartBg from "../../assets/svg/cart-bg.svg";
import PageNav from "../../components/PageNav/PageNav";
import PageHeader from "../../components/PageHeader/PageHeader";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const searchVariants = {
  hidden: { x: +100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeIn",
      delay: 0.7,
    },
  },
};

function searchVariantsDelay(delay) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
}
const qustionsContainerVariants = searchVariantsDelay(0.9);
const moreVariants = searchVariantsDelay(1.1);

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function Help() {
  const [more, setMore] = useState(10);
  const [showMore, setShowMore] = useState(true);
  const [qustions, setQustions] = useState([]);
  const [queryValue, setQueryValue] = useState("");
  const [qustionToShow, setQustionsToShow] = useState([]);

  useEffect(
    function () {
      setQustions(Array.from({ length: more }, () => createRandomPost()));
    },
    [more]
  );

  useEffect(
    function () {
      setQustionsToShow(qustions);
    },
    [qustions]
  );

  function handelInput(e) {
    setQueryValue(e.target.value);
  }

  function handelSearch() {
    setShowMore(queryValue.length > 0 ? false : true);
    setQustionsToShow(
      qustions.filter(
        (item) =>
          item.body.toLowerCase().includes(queryValue.toLowerCase()) ||
          item.title.toLowerCase().includes(queryValue.toLowerCase())
      )
    );
    setQueryValue("");
  }

  function handelMore() {
    setMore((m) => m + 10);
  }

  return (
    <main className={styles.help}>
      <PageNav className={styles.helpNav} />

      <img src={cartBg} alt="bg" className={styles.bg}></img>

      <div className={`container ${styles.helpContainer}`}>
        <PageHeader>Help</PageHeader>

        <section className={styles.conentContainer}>
          <motion.div
            variants={searchVariants}
            initial="hidden"
            animate="visible"
            className={styles.search}
          >
            <h1 className={styles.label}>
              Search for the most asked questions
            </h1>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={queryValue}
                onChange={(e) => handelInput(e)}
                placeholder="Search questions..."
              />
              <button onClick={handelSearch}>Search</button>
            </div>
          </motion.div>
          <motion.div
            variants={moreVariants}
            initial="hidden"
            animate="visible"
            className={styles.qustionsContainer}
          >
            {qustionToShow.length !== 0 ? (
              <ul className={styles.qustions}>
                {qustionToShow.map((qustion, i) => (
                  <li key={i} className={styles.qustionItem}>
                    <h3>{qustion.title}</h3>
                    <p>{qustion.body}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noResult}>There are no questions!</p>
            )}
          </motion.div>
          <motion.div
            variants={qustionsContainerVariants}
            initial="hidden"
            animate="visible"
            className={styles.more}
          >
            {showMore === false ? (
              ""
            ) : more === 50 ? (
              <p>You've loaded all questions!</p>
            ) : (
              <button onClick={handelMore}>Load more</button>
            )}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Help;
