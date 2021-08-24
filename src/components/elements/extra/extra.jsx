import React from "react";
import { Link } from "react-router-dom";

import styles from "./extra.module.scss";

function Extra() {
  return (
    <section className={styles.extra}>
      <ul className={styles.extra_list}>
        <li className={styles.extra_item}>
          <Link to={"#"}>
            <dl>
              <dt className={styles.title}>Request a Card</dt>

              <dd className={styles.extra_desc}>Get a debit card for free</dd>
            </dl>
          </Link>
        </li>

        <li className={styles.extra_item}>
          <Link to={"#"}>
            <dl>
              <dt className={styles.title}>Earn £ 25 for free</dt>

              <dd className={styles.extra_desc}>Apply for pension</dd>
            </dl>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Extra;
