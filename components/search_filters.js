import styles from "@/styles/SearchFilters.module.css";
import { searchTypes } from "@/utils/utils_search_filters.js";
import { useState } from "react";

export default function SearchFilters({ currentFilter, setCurrentFilter }) {
  const [filterDisplay, setfilterDisplay] = useState("none");
  const [filterButtonColor, setfilterButtonColor] =
    useState("var(--foreground1)");

  function changeCurrentFilter(key, value) {
    setCurrentFilter((prev) => ({ ...prev, [key]: value }));
  }

  function toggleSearchFilter() {
    setfilterDisplay((prev) => (prev === "none" ? "flex" : "none"));
    setfilterButtonColor((prev) =>
      prev === "var(--foreground2)"
        ? "var(--foreground1)"
        : "var(--foreground2)"
    );
  }

  function diplayFilterItem(key) {
    return searchTypes[key].map((element, idx2) => {
      return currentFilter[key] === element ? (
        <p key={idx2} className={styles.current_filter}>
          {element}
        </p>
      ) : (
        <p key={idx2} onClick={() => changeCurrentFilter(key, element)}>
          {element}
        </p>
      );
    });
  }

  function displayFilterGroup() {
    return Object.keys(searchTypes).map((key, index) => {
      return (
        <div key={index} className={styles.filter_group}>
          <div className={styles.filter_title}>
            <span>{key.replace("_", " ")}</span>
          </div>
          <div className={styles.filter_items}>{diplayFilterItem(key)}</div>
        </div>
      );
    });
  }

  return (
    <div className={styles.search_filter_container}>
      <div className={styles.filter_inner_container}>
        <div className={styles.filterIcon}>
          <span
            className="material-symbols-outlined"
            style={{ color: filterButtonColor }}
            onClick={toggleSearchFilter}
          >
            tune
          </span>
        </div>
        <div
          className={styles.search_filter}
          style={{ display: filterDisplay }}
        >
          {displayFilterGroup()}
        </div>
      </div>
    </div>
  );
}

//<h1 style={{textTransform:'capitalize'}}></h1>
