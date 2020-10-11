import React, { useEffect, useState } from "react";
import styles from "./FormPage.module.css";

const Form = ({ inputIdx, inputValues, setInputValues }) => {
  const [localValues, setLocalValues] = useState(["", ""]);
  const pattern = /^[0-9\b]+$/;

  const setLocalValuesHandler = (innerIdx, value) => {
    const tempValues = [...localValues];
    tempValues.splice(innerIdx, 1, value);
    setLocalValues(tempValues);
  };

  useEffect(() => {
    const tempInputsValue = [...inputValues];
    tempInputsValue.splice(inputIdx, 1, localValues);
    setInputValues(tempInputsValue);
  }, [localValues]);

  return (
    <form className="form">
      <div className={styles.form__wrapper}>
        <label className={styles.form__name}>
          Название позиции
          <input
            id={`input-${inputIdx}`}
            className={styles.input}
            onChange={(e) => setLocalValuesHandler(0, e.target.value)}
          />
        </label>
        <label className={styles.form__count}>
          Количество
          <input
            type="text"
            pattern="[0-9]*"
            value={localValues[1]}
            id={`input-${inputIdx}-count`}
            className={styles.input}
            onChange={(e) =>
              pattern.test(e.target.value) &&
              setLocalValuesHandler(1, +e.target.value)
            }
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
