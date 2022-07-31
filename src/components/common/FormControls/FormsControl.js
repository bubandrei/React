import React from "react";
import styles from "./FormsControls.module.css"

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={styles.formControl}>
            <textarea {...input} {...props} />
        </div>
    )
}