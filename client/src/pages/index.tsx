import React, { useState } from "react";

function Index() {
  // const [message, setMessage] = useState("Loading...");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  // useEffect(() => {
  //   const fetchUrl = process.env.FETCH_URL || "http://localhost:8080/api";
  //   fetch(fetchUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTimeout(() => {
  //         setMessage(data.message);
  //       }, 3000);
  //     });
  // }, []);

  const handleSumbit  = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(user);
    console.log(password)
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
      </div>
    </div>
  );
}

export default Index;
