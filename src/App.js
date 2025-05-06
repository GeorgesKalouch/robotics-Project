import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./App.css";

function App() {
  const [waterLevel, setWaterLevel] = useState(65); // Placeholder
  const [leak, setLeak] = useState(true); // Placeholder
  const [error, setError] = useState(null);

  // Uncomment and use this when server is ready
  /*
  useEffect(() => {
    const fetchData = () => {
      fetch("http://192.168.143.100/data")
        .then((res) => res.json())
        .then((data) => {
          setWaterLevel(data.waterLevel);
          setLeak(data.leak);
          setError(null);
        })
        .catch(() => setError("Cannot connect to device"));
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);
  */

  useEffect(() => {
    requestPermission();
    onMessageListener().then((payload) => {
      console.log("Received foreground message:", payload);
      alert(`${payload.notification.title}\n${payload.notification.body}`);
    });
  }, []);

  return (
    <div className="container">
      <h1>🚰 Tank Monitor</h1>

      <div className="progress-container">
        <CircularProgressbar
          value={waterLevel}
          text={`${waterLevel}%`}
          styles={buildStyles({
            pathColor: "#007bff",
            textColor: "#333",
            trailColor: "#eee",
            textSize: "16px",
          })}
        />
      </div>

      <div className="status">
        <p>
          <strong>Leak Detected:</strong>
        </p>
        <p className={`leak ${leak ? "danger" : "safe"}`}>
          {leak ? "🚨 Leak Detected!" : "✅ No Leak"}
        </p>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
