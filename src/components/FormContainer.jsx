import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function FormContainer({ type }) {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/");
  }
  return (
    <>
      <div className={`form-container ${type}`}>
        <form method="POST">
          <h1>{type === "sign-up" ? "Create Account" : "Sign In"}</h1>
          {type === "sign-up" && (
            <input type="text" placeholder="Name" name="name" />
          )}
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          {type === "sign-in" && <a href="#">Forget your password?</a>}
          <button type="submit" onClick={handleSubmit}>
            {type === "sign-up" ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContainer;
