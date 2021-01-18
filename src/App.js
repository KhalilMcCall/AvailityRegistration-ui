import React, { useState } from "react";
import "./Css/App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import FormSuccess from "./FormSuccess";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="App">
      <Navbar />
      {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
}

export default App;
