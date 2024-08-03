const inputFields = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Full Name",
    pattern: "^(?=.*[a-zA-Z0-9]).{3,}$",
    labelText: "Enter your full name please",
    errorMessage: "Username should not be empty!",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Email",
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    labelText: "Enter your email please",
    errorMessage: "It should be a valid email address!",
  },
  {
    id: 3,
    name: "subject",
    type: "text",
    placeholder: "Subject",
    pattern: "^(?=.*[a-zA-Z0-9]).{3,}$",
    labelText: "What is the subject",
    errorMessage: "Subject should not be empty!",
  },
  {
    id: 4,
    name: "message",
    type: "text",
    placeholder: "Message",
    pattern: "^(?=.*[a-zA-Z0-9]).{3,}$",
    labelText: "Enter the message please",
    errorMessage: "Message should not be empty!",
  },
];

export default inputFields;
