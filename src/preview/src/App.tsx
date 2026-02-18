import React from "react";
import { useTheme } from "./theme-provider.tsx";
import { ButtonsShowcase } from "./showcases/buttons.tsx";
import { CardsShowcase } from "./showcases/cards.tsx";
import { FormsShowcase } from "./showcases/forms.tsx";
import { FeedbackShowcase } from "./showcases/feedback.tsx";
import { NavigationShowcase } from "./showcases/navigation.tsx";
import { DataDisplayShowcase } from "./showcases/data-display.tsx";
import { OverlaysShowcase } from "./showcases/overlays.tsx";
import { ChartsShowcase } from "./showcases/charts.tsx";
import "./styles.css";

export function App() {
  const { theme, isDark, toggleDark } = useTheme();

  return (
    <div className="container">
      <div className="header">
        <div className="flex items-center gap-3">
          <h1>Temper Preview</h1>
          {theme && <span className="version-badge">v{theme.version}</span>}
        </div>
        <button className="dark-toggle" onClick={toggleDark}>
          {isDark ? "☀️" : "🌙"} {isDark ? "Light" : "Dark"}
        </button>
      </div>

      <ButtonsShowcase />
      <CardsShowcase />
      <FormsShowcase />
      <FeedbackShowcase />
      <NavigationShowcase />
      <DataDisplayShowcase />
      <ChartsShowcase />
      <OverlaysShowcase />
    </div>
  );
}
