import React, { useState } from "react";
import { useTheme } from "./theme-provider.tsx";
import { ButtonsShowcase } from "./showcases/buttons.tsx";
import { CardsShowcase } from "./showcases/cards.tsx";
import { FormsShowcase } from "./showcases/forms.tsx";
import { FeedbackShowcase } from "./showcases/feedback.tsx";
import { NavigationShowcase } from "./showcases/navigation.tsx";
import { DataDisplayShowcase } from "./showcases/data-display.tsx";
import { OverlaysShowcase } from "./showcases/overlays.tsx";
import { ChartsShowcase } from "./showcases/charts.tsx";
import { ColorsShowcase } from "./showcases/colors.tsx";
import "./styles.css";

interface NavItem {
  id: string;
  label: string;
  group: string;
  description: string;
  component: React.FC;
}

const navItems: NavItem[] = [
  {
    id: "colors",
    label: "Colors",
    group: "Theme",
    description: "All CSS variable tokens in your theme",
    component: ColorsShowcase,
  },
  {
    id: "buttons",
    label: "Button",
    group: "Components",
    description: "Displays a button or a component that looks like a button.",
    component: ButtonsShowcase,
  },
  {
    id: "cards",
    label: "Card",
    group: "Components",
    description: "Displays a card with header, content, and footer.",
    component: CardsShowcase,
  },
  {
    id: "forms",
    label: "Forms",
    group: "Components",
    description: "Input, Select, Checkbox, Switch, Radio Group, and Textarea.",
    component: FormsShowcase,
  },
  {
    id: "feedback",
    label: "Feedback",
    group: "Components",
    description: "Alert, Badge, and Skeleton loading states.",
    component: FeedbackShowcase,
  },
  {
    id: "navigation",
    label: "Navigation",
    group: "Components",
    description: "Tabs and Breadcrumb navigation patterns.",
    component: NavigationShowcase,
  },
  {
    id: "data-display",
    label: "Data Display",
    group: "Components",
    description: "Table and Avatar for presenting data.",
    component: DataDisplayShowcase,
  },
  {
    id: "charts",
    label: "Charts",
    group: "Components",
    description: "Bar and Line charts using chart color tokens.",
    component: ChartsShowcase,
  },
  {
    id: "overlays",
    label: "Overlays",
    group: "Components",
    description: "Dialog and Popover overlay patterns.",
    component: OverlaysShowcase,
  },
];

export function App() {
  const { theme, isDark, toggleDark } = useTheme();
  const [activeId, setActiveId] = useState("colors");

  const active = navItems.find((item) => item.id === activeId) ?? navItems[0];
  const ActiveComponent = active.component;

  // Group nav items
  const groups = navItems.reduce<Record<string, NavItem[]>>((acc, item) => {
    (acc[item.group] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div className="shell">
      {/* Top bar */}
      <div className="topbar">
        <div className="topbar-left">
          <h1>Temper</h1>
          {theme && <span className="version-badge">v{theme.version}</span>}
        </div>
        <button className="dark-toggle" onClick={toggleDark}>
          {isDark ? "Light" : "Dark"}
        </button>
      </div>

      {/* Sidebar */}
      <nav className="sidebar">
        {Object.entries(groups).map(([group, items]) => (
          <React.Fragment key={group}>
            <div className="sidebar-group-label">{group}</div>
            {items.map((item) => (
              <button
                key={item.id}
                className="sidebar-item"
                data-active={item.id === activeId}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </React.Fragment>
        ))}
      </nav>

      {/* Main */}
      <main className="main">
        <h2 className="page-title">{active.label}</h2>
        <p className="page-description">{active.description}</p>
        <ActiveComponent />
      </main>
    </div>
  );
}
