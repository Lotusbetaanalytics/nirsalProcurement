import React from "react";
import styles from "./styles.module.css";

function Cards({ title, amount }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h2>{(title = "Dashboard")}</h2>
        </div>

        <div className={styles.cardBodyContent}>
          <div className={styles.cardBox}>
            <h5>{(title = "Total No. of Projects")}</h5>
            <h1>{(amount = "100")}</h1>
          </div>
          <div className={styles.cardBox}>
            <h5>{(title = "No. of New Projects")}</h5>
            <h1>{(amount = "20")}</h1>
          </div>
          <div className={styles.cardBox}>
            <h5>{(title = "No. of Pending Projects")}</h5>
            <h1>{(amount = "5")}</h1>
          </div>
          <div className={styles.cardBox}>
            <h5>{(title = "No. of Closed Projects")}</h5>
            <h1>{(amount = "32")}</h1>
          </div>
          <div className={styles.cardBox}>
            <h5>{(title = "No. of Approved Projects")}</h5>
            <h1>{(amount = "20")}</h1>
          </div>
          <div className={styles.cardBox}>
            <h5>{(title = "No. of Terminated Projects")}</h5>
            <h1>{(amount = "7")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
