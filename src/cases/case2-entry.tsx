import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";
import { Nav, CustomCursor, useCaseTheme } from "./shared";
import { Case2View } from "./Case2";
import "../styles/index.css";

function App() {
  const { theme, toggleTheme } = useCaseTheme();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <CustomCursor />
        <Nav
          onHome={() => { window.location.href = "../../"; }}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Case2View
          onBack={() => { window.location.href = "../../"; }}
          onNext={() => { window.location.href = "../case-3/"; }}
        />
      </div>
    </MotionConfig>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
