import React from 'react';
import styles from './Input.module.css';

const InputField = (props) => {
    const {id, label, name, handleChange, value, type, placeholder} = props;
    //console.log(handleChange);
  return (
    <div className={styles.field_row}>
        {label && <label htmlFor={id}>{label}</label>}
        {type !== 'textarea' ? <input className={`${styles.text_field} ${styles.input_field}`} type={type} id={id} name={name} onChange={(e)=> handleChange(e)} value={value} placeholder={placeholder} /> : <textarea className={`${styles.text_field} ${styles.textarea}`} id={id} name={name} onChange={(e) => handleChange(e)} placeholder={placeholder}>{value}</textarea> }
    </div>
  )
}
export default InputField;