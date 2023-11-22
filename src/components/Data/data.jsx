import React from "react";
import styles from './data.module.css'


function Data(props) {
   console.log(props);
    return (
        <div className={styles ["card"]}>
            {/* <div className={styles.id}>{props.number}</div> */}
            <div className="poster">
                <img  src={props.poster} className={styles.poster}></img>
            </div>
            <div className={styles ["info"]}>
                <div className={styles.title} >{props.title}</div>
                <div className={styles ["raiting"]}>Raitin: {props.raiting}</div>
            </div>
            <button>Buy for 10$</button>
        </div>

    )
}

export default Data