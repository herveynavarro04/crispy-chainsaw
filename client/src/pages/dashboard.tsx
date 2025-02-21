import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean | null>(null); 

  useEffect(() => {
    if (typeof window !== "undefined") { 
      const auth = localStorage.getItem("IsAuth"); 

      if (!auth) {
        router.replace("/"); 
      } else {
        setIsAuth(true);
      }
    }
  }, []);

  if (isAuth === null) {
    return <p>Checking authentication...</p>; 
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          localStorage.removeItem("isAuthenticated"); 
          router.replace("/"); 
        }}
      >
        Logout
      </button>
    </div>
  );
}
