import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={styles.formControl + ' ' + styles.error}>
            <div>
            <textarea {...input} {...props} />
            </div>
           <span>"some error"</span>
        </div>
    )
}