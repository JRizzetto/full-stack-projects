import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [pong, setPong] = useState("Loading...");

  useEffect(() => {
    const res = fetch("http://localhost:3000/ping")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPong(data.message || data);
      })
      .catch((error) => {
        console.log("Erro na requisição:", error);
        setPong("Erro ao carregar");
      });
  }, []);

  return <div className="container">{pong}</div>;
}

export default App;
