import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "./Form";
import styles from "./FormPage.module.css";

const FormPage = ({ inputValues, setInputValues }) => {
  const [inputsIdx, setInputsIdx] = useState([0]);

  const addForm = () => setInputsIdx([...inputsIdx, inputsIdx.length]);

  return (
    <div>
      {inputsIdx.map((inputIdx) => (
        <Form
          key={inputIdx}
          inputIdx={inputIdx}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
      ))}
      <button className={styles.addFormBtn} onClick={addForm}>
        Добавить позицию
      </button>
      <NavLink className={styles.navLink} to="/chart">
        Показать график
      </NavLink>
    </div>
  );
};

export default FormPage;
