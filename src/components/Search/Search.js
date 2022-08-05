import React from "react";
import styles from "./Search.module.scss";

const Search = ({setSearch,setPageNumber}) => {
    return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-2 mb-5">
        <input onChange={b=>{
            setPageNumber(1);
            setSearch(b.target.value);
        }} placeholder="Search for Characters" type="text" className={styles.input} />
        <button onClick={b=>{
            b.preventDefault();
        }} className={`${styles.btn} btn btn-outline-secondary fs-5`}>Search</button>
    </form>
    )
}

export default Search;