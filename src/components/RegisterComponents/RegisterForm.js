import styles from "./RegisterForm.module.css";
import user_icon from "../../assets/images/person.png";
import email_icon from "../../assets/images/email.png";
import password_icon from "../../assets/images/password.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function RegisterForm({ setErrMsg, setSuccess }) {
  const [formData, setFormData] = useState({
    user: "",
    userEmail: "",
    pwd: "",
    matchPwd: "",
  });

  const [validity, setValidity] = useState({
    user: false,
    userEmail: false,
    pwd: false,
    matchPwd: false,
  });

  const [focus, setFocus] = useState({
    user: false,
    userEmail: false,
    pwd: false,
    matchPwd: false,
  });

  useEffect(() => {
    setValidity((prev) => ({
      ...prev,
      user: USER_REGEX.test(formData.user),
    }));
  }, [formData.user]);

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
      matchPwd: formData.pwd === formData.matchPwd,
    }));
    // console.log(formData.pwd);
  }, [formData.pwd, formData.matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [formData.user, formData.userEmail, formData.pwd, formData.matchPwd]);

  const handleChange = (e) => {
    const { id, value } = e.target;
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
    if (!validity.user || !validity.pwd) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);
  };

  const inputFields = [
    {
      id: "user",
      label: "Username",
      type: "text",
      icon: user_icon,
      instructions: "4 to 24 characters.",
      validity: validity.user,
      value: formData.user,
      focus: focus.user,
      placeholder: "Name",
    },
    {
      id: "userEmail",
      label: "Email",
      type: "email",
      icon: email_icon,
      instructions: "A valid email address (e.g., name@example.com).",
      validity: validity.userEmail,
      value: formData.userEmail,
      focus: focus.userEmail,
      placeholder: "Email",
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
      placeholder: "Password",
    },
    {
      id: "matchPwd",
      label: "Confirm Password",
      type: "password",
      icon: password_icon,
      instructions: "Must match the first password input field.",
      validity: validity.matchPwd && formData.matchPwd,
      value: formData.matchPwd,
      focus: focus.matchPwd,
      placeholder: "Confirm Password",
    },
  ];

  return (
    <div className={styles.register}>
      <div className={styles.header}>
        <div className={styles.text}>Sign Up</div>
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
            Already a member?
            <span className="line">
              <Link to={"/login"}>Log in</Link>
            </span>
          </p>
        </div>

        <div className={styles.submitContainer}>
          <button
            disabled={
              !validity.user ||
              !validity.userEmail ||
              !validity.pwd ||
              !validity.matchPwd
            }
            className={styles.submit}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

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
          placeholder={field.placeholder}
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
