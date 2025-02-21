import { useRouter } from "next/router";
import React, { useState } from "react";

function Index() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const actualUser = 'Hervey04';
  const actualPassword = '0000';  
  const router = useRouter();

  const handleSumbit  = (event: React.FormEvent) => {
    event.preventDefault();

    if (user === actualUser && password === actualPassword){
      localStorage.setItem("IsAuth", "true");
      router.push('./dashboard');
    } else {
      setMessage('Invalid info');
    }
  }

  return (
    <div>
      <div className="logo"></div>
      <div className="container">
        <h2>Sign In</h2>
        <input
          className="formData"
          placeholder="user"
          type="text"
          id="fname"
          name="fname"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        /><br />
        <input
          className="formData"
          placeholder="password"
          type="password"
          id="lname"
          name="lname"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button onClick={handleSumbit}>sign in</button>
        <div>{message}</div>
      </div>
    </div>
  );
}

export default Index;
