import { useState } from "react";

const Login = ({ setLogIn, setSlectedTab}) => {

   const [userId, setUserId]= useState("");
   const [password, setPassword]= useState("");

   const handleSubmit = (event) =>{
     event.preventDefault();
     setLogIn(true);
     setSlectedTab("Create Post")
   };

  return (
    <form className="logInpage" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please Login</h1>{" "}
      <div className="form-floating">
        {" "}
        <input
            type="text"
            className="form-control"
            id="userIdInput"
            placeholder="Any User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
        />{" "}
        <label htmlFor ="floatingInput">userId</label>{" "}
      </div>{" "}
      <div className="form-floating">
        {" "}
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <label htmlFor="floatingPassword">Password</label>{" "}
      </div>{" "}
      <div className="form-check text-start my-3">
        {" "}
        <input
          className="form-check-input"
          type="checkbox"
          value="remember-me"
          id="checkDefault"
        />{" "}
        <label className="form-check-label" htmlFor="checkDefault">
          Remember me
        </label>{" "}
      </div>{" "}
      <button className="btn btn-primary w-100 py-2" type="submit">
        Login
      </button>{" "}
    </form>
  );
};

export default Login;
