import React from "react";
import styles from "./FormsControls.module.css";

const hasError = meta.touched && meta.error;

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={styles.formControl + ' ' + hasError && styles.error}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>"some error"</span>}
        </div>
    )
}