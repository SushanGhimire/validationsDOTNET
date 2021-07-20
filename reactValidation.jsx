import { useState } from "react";

export default function App() {
  // to set the value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // to set the error
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //to handle the submit
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      setEmailError("Email cannot be left null");
    } else if (password.length < 8) {
      setPasswordError("Password must be 8 character long");
    } else {
      alert("Sucess");
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div>
        <label>Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        {emailError && <div>{emailError}</div>}
      </div>
      <div>
        <div>
          <label htmlFor="password" className="text-gray-500">
            Password
          </label>
        </div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        {passwordError && <div>{passwordError}</div>}
      </div>

      <button>Submit</button>
    </form>
  );
}

