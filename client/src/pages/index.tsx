import React, { useEffect, useState } from "react";

function Index() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchUrl = process.env.FETCH_URL || "http://localhost:8080/api";
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return <div>{message}</div>;
}

export default Index;
