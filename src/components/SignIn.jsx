import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../actions/user.actions";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const dispatch = useDispatch();

  const getToken = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((result) => setToken(result.body.token))
      .catch((error) => console.error("error", error));

    if (token != null) localStorage.setItem("jwt", token);
    if (token != null) dispatch(getUser(token));
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle "></i>
      <h1>Sign In</h1>
      <form action="" onSubmit={getToken}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input type="submit" value="Sign In" className="sign-in-button" />
      </form>
    </section>
  );
}

export default SignIn;
