import React, { useState, useEffect } from "react";
import { Button, Form} from "react-bootstrap";
import { BrightnessAltHighFill, CloudMoonFill } from "react-bootstrap-icons"; // Импортируем иконки для разных тем

export default function Switch() {
  const savedTheme = localStorage.getItem("user_theme");
  const [status, setStatus] = useState(savedTheme ? JSON.parse(savedTheme) : true);

  useEffect(() => {
    document.body.setAttribute('theme', status);
    localStorage.setItem("user_theme", JSON.stringify(status));
  }, [status]);

  function handleClick() {
    setStatus(prevStatus => !prevStatus);
  }

  return (
    <Form>
      <Button onClick={handleClick} style={{ background: "none", border: "none"}}>
        {status ? <CloudMoonFill  className="switch_icon" style={{ color: "#242424"}} /> : <BrightnessAltHighFill  className="switch_icon" style={{ color: "white"}} />}
      </Button>
      
    </Form>
  );
}