import { useEffect, useState } from "react";
import styles from "./TableSearch.module.scss";

const TableSearch = ({ search, users }) => {
  const [searched, setSearched] = useState("");
  useEffect(() => {
    const newArray = users.filter((user) =>
      user.username.toLowerCase().includes(searched.toLowerCase()),
    );
    search(newArray);
  }, [searched]);
  return (
    <div className={" flex-horizontal"}>
      <div>
        <input
          className={styles["search-input"]}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearched(e.target.value)}
        />
        <input
          className={styles["text-input"]}
          type="text"
          placeholder="User Name"
        />
      </div>
      <div className={styles["floating-label-box"]}>
        <select
          id="test"
          className={styles["floating-input"] + " sizeSelect mb-1"}
        >
          <option value="" disabled>
            Any
          </option>
        </select>
        <label className={styles["floating-label"]}>User Status</label>
      </div>
      <div className={styles["floating-date-box"]}>
        <input
          className={styles["floating-date-input"]}
          type="date"
          placeholder="All Time"
        />
        <label className={styles["floating-label"]}>Creation Date</label>
      </div>
      <div>
        <button className={styles["filter-button"]}>All Filters</button>
      </div>
    </div>
  );
};

export default TableSearch;
