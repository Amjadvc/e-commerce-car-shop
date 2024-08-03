import { useEffect, useReducer, useRef } from "react";
import emailjs from "@emailjs/browser";
import inputFields from "./data/inputFields";
import styles from "./Form.module.css";

const initialState = {
  inputValues: {
    username: "",
    email: "",
    subject: "",
    message: "",
  },
  showError: [],
  isSubmitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "set-value":
      return {
        ...state,
        inputValues: { ...state.inputValues, [action.name]: action.value },
      };
    case "add-input-error":
      return {
        ...state,
        showError: action.payload,
      };
    case "is-submited":
      return {
        ...state,
        isSubmitted: true,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default function Form({ setValidSubmit }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const form = useRef();

  useEffect(() => {
    if (state.isSubmitted) {
      validation();
    }
  }, [state.inputValues]);

  function validation() {
    let valid = true;
    let inputNameErrors = [];

    inputFields.forEach((input) => {
      const value = state.inputValues[input.name];
      const regex = new RegExp(input.pattern);

      if (!value || !regex.test(value)) {
        valid = false;
        inputNameErrors.push(input.name);
      }
    });

    dispatch({ type: "add-input-error", payload: inputNameErrors });
    return valid;
  }

  function onChange(e) {
    dispatch({
      type: "set-value",
      name: e.target.name,
      value: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      // console.log(state.inputValues);
      setValidSubmit(true);
      sessionStorage.setItem("validSubmit", JSON.stringify(true));
      sendEmail();
      // console.log("sended");
    } else {
      // console.log("Not sended");
    }

    dispatch({ type: "is-submited" });
  }

  const sendEmail = () => {
    emailjs
      .sendForm("service_iqzhop7", "template_e1zq2gu", form.current, {
        publicKey: "brcCe-LnW7HenmmSr",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className={styles.contactHeader}>
        <h2>Please fill the form</h2>
      </div>
      <form className={styles.form} ref={form} onSubmit={handleSubmit}>
        {inputFields.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            inputValues={state.inputValues}
            showError={state.showError}
            onChange={onChange}
          />
        ))}

        <div className={styles.submit}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
}

function FormInput(prop) {
  const {
    id,
    showError,
    inputValues,
    onChange,
    errorMessage,
    labelText,
    name,
    ...inputProp
  } = prop;

  const show = showError.includes(name);
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        name={name}
        {...inputProp}
        value={inputValues[name]}
        onChange={(e) => onChange(e)}
        className={show ? styles.errorInp : styles.successInp}
      />
      <p>{show && <span>{errorMessage}</span>}</p>
    </div>
  );
}
