// src/App.jsx
import "./App.css";
import Home from "./components/home";
import Setup from "./components/setup";
import Add from "./components/add";
import AddDay from "./components/addDay"
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("onboardingCompleted");
    if (completed === "true") {
      setOnboardingCompleted(true);
    }
  }, []);

  const handleSetupComplete = () => {
    setOnboardingCompleted(true);
  };

  return (
    <div>
      <main>
        <Routes>
          {!onboardingCompleted ? (
            <Route
              path="*"
              element={<Setup onComplete={handleSetupComplete} />}
            />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<Add />} />
              <Route path="/edit/:dia" element={<AddDay />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
