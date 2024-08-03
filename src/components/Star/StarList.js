import styles from "./StarList.module.css";
import Star from "./Star";
import { useState } from "react";
import { useEffect } from "react";
function StarList({ setChoosenRating }) {
  const [reting, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  useEffect(
    function () {
      setChoosenRating(reting);
    },
    [reting]
  );

  function handleClick(i) {
    setRating(i + 1);
  }
  function handleMouseEnter(i) {
    setTempRating(i + 1);
  }
  function handleMouseLeave() {
    setTempRating(reting);
  }

  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <Star
            size={28}
            color={`var(--color-primary-1)`}
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            index={i}
            key={i}
            full={i < tempRating ? true : false}
          />
        );
      })}

      <strong>
        <strong>{tempRating || reting || ""}</strong>
      </strong>
    </div>
  );
}

export default StarList;
