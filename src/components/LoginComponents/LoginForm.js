import styles from "./LoginForm.module.css";
import user_icon from "../../assets/images/person.png";
import email_icon from "../../assets/images/email.png";
import password_icon from "../../assets/images/password.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginForm({ setErrMsg, setSuccess }) {
  const [formData, setFormData] = useState({
    userEmail: "",
    pwd: "",
  });

  const [validity, setValidity] = useState({
    userEmail: false,
    pwd: false,
  });

  const [focus, setFocus] = useState({
    userEmail: false,
    pwd: false,
  });

  useEffect(() => {
    setValidity((prev) => ({
      ...prev,
      userEmail: EMAIL_REGEX.test(formData.userEmail),
    }));
  }, [formData.userEmail]);

  useEffect(() => {
    setValidity((prev) => ({
      ...prev,
      pwd: PWD_REGEX.test(formData.pwd),
    }));
    // console.log(formData.pwd);
  }, [formData.pwd]);

  useEffect(() => {
    setErrMsg("s");
  }, [formData.userEmail, formData.pwd]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // console.log(e.target);
    // console.log(id);
    // console.log(value);
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFocus = (id) => {
    setFocus((prev) => ({ ...prev, [id]: true }));
  };

  const handleBlur = (id) => {
    setFocus((prev) => ({ ...prev, [id]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const inputFields = [
    {
      id: "userEmail",
      label: "Email",
      type: "email",
      icon: email_icon,
      instructions: "A valid email address (e.g., name@example.com).",
      validity: validity.userEmail,
      value: formData.userEmail,
      focus: focus.userEmail,
    },
    {
      id: "pwd",
      label: "Password",
      type: "password",
      icon: password_icon,
      instructions:
        "8-24 chars, uppercase, lowercase, number & special character.",
      validity: validity.pwd,
      value: formData.pwd,
      focus: focus.pwd,
    },
  ];

  return (
    <div className={styles.register}>
      <div className={styles.header}>
        <div className={styles.text}>Sign In</div>
        <div className={styles.underLine}></div>
      </div>

      <form className={styles.inputs} onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <InputContainer
            field={field}
            key={field.id}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
        ))}
        <div className={styles.heveAcountContainer}>
          <p>
            New here?
            <span className="line">
              <Link to={"/register"}>Register</Link>
            </span>
          </p>
        </div>

        <div className={styles.submitContainer}>
          <button
            disabled={!validity.userEmail || !validity.pwd}
            className={styles.submit}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

function InputContainer({ field, handleChange, handleFocus, handleBlur }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={field.id}>
        {field.label}
        <FontAwesomeIcon
          icon={faCheck}
          className={field.validity ? styles.valid : styles.hide}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className={
            field.validity || !field.value ? styles.hide : styles.invalid
          }
        />
      </label>
      <div className={styles.input}>
        <img src={field.icon} alt={`${field.label} icon`} />
        <input
          type={field.type}
          id={field.id}
          placeholder={field.label}
          value={field.value}
          onChange={handleChange}
          onFocus={() => handleFocus(field.id)}
          onBlur={() => handleBlur(field.id)}
          required
          aria-invalid={field.validity ? "false" : "true"}
          aria-describedby={`${field.id}note`}
          autoComplete="off"
        />
      </div>
      <div id={`${field.id}note`} className={styles.noteContainer}>
        <p
          className={
            field.focus && field.value && !field.validity
              ? styles.instructions
              : styles.offscreen
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          <span>{field.instructions}</span>
        </p>
      </div>
    </div>
  );
}
