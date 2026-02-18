import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "./theme-provider.tsx";

// Brand showcase
import { BrandShowcase } from "./showcases/brand.tsx";

// Single-component showcases
import { ButtonsShowcase } from "./showcases/buttons.tsx";
import { CardsShowcase } from "./showcases/cards.tsx";
import { ColorsShowcase } from "./showcases/colors.tsx";
import { ChartsShowcase } from "./showcases/charts.tsx";

// Split showcases — forms
import { InputShowcase, TextareaShowcase, SelectShowcase, CheckboxShowcase, RadioGroupShowcase } from "./showcases/forms.tsx";

// Split showcases — feedback
import { AlertShowcase, BadgeShowcase, SkeletonShowcase } from "./showcases/feedback.tsx";

// Split showcases — navigation
import { TabsShowcase, BreadcrumbShowcase } from "./showcases/navigation.tsx";

// Split showcases — data display
import { AvatarShowcase, TableShowcase } from "./showcases/data-display.tsx";

// Split showcases — overlays
import { DialogShowcase, AlertDialogShowcase, PopoverShowcase } from "./showcases/overlays.tsx";

// Split showcases — typography
import { TypographyShowcase, LabelShowcase, SeparatorShowcase } from "./showcases/typography.tsx";

// Split showcases — controls
import { SwitchShowcase, SliderShowcase, ToggleShowcase, ToggleGroupShowcase, ProgressShowcase, SpinnerShowcase } from "./showcases/controls.tsx";

// Split showcases — menus
import { DropdownMenuShowcase, ContextMenuShowcase, MenubarShowcase, NavigationMenuShowcase, CommandShowcase } from "./showcases/menus.tsx";

// Split showcases — panels
import { AccordionShowcase, CollapsibleShowcase, SheetShowcase, DrawerShowcase, HoverCardShowcase, ScrollAreaShowcase } from "./showcases/panels.tsx";

// Split showcases — date & selection
import { CalendarShowcase, DatePickerShowcase, ComboboxShowcase, PaginationShowcase, InputOTPShowcase, CarouselShowcase } from "./showcases/date-selection.tsx";

// Split showcases — notifications
import { ToastShowcase, TooltipShowcase, SidebarShowcase } from "./showcases/notifications.tsx";

import "./styles.css";

interface NavItem {
  id: string;
  label: string;
  group: string;
  description: string;
  component: React.FC;
}

const navItems: NavItem[] = [
  // ── Brand ──
  {
    id: "brand",
    label: "Brand",
    group: "Brand",
    description: "Brand identity — essence, logo, color, typography, spacing, and voice",
    component: BrandShowcase,
  },

  // ── Theme ──
  {
    id: "colors",
    label: "Colors",
    group: "Theme",
    description: "All CSS variable tokens in your theme",
    component: ColorsShowcase,
  },

  // ── Components (alphabetical) ──
  {
    id: "accordion",
    label: "Accordion",
    group: "Components",
    description: "A vertically stacked set of interactive headings that reveal content.",
    component: AccordionShowcase,
  },
  {
    id: "alert",
    label: "Alert",
    group: "Components",
    description: "Displays a callout for important information.",
    component: AlertShowcase,
  },
  {
    id: "alert-dialog",
    label: "Alert Dialog",
    group: "Components",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    component: AlertDialogShowcase,
  },
  {
    id: "avatar",
    label: "Avatar",
    group: "Components",
    description: "An image element with a fallback for representing the user.",
    component: AvatarShowcase,
  },
  {
    id: "badge",
    label: "Badge",
    group: "Components",
    description: "Displays a badge or a component that looks like a badge.",
    component: BadgeShowcase,
  },
  {
    id: "breadcrumb",
    label: "Breadcrumb",
    group: "Components",
    description: "Displays the path to the current page in a hierarchy of links.",
    component: BreadcrumbShowcase,
  },
  {
    id: "button",
    label: "Button",
    group: "Components",
    description: "Displays a button or a component that looks like a button.",
    component: ButtonsShowcase,
  },
  {
    id: "calendar",
    label: "Calendar",
    group: "Components",
    description: "A date field component that allows selecting a single date.",
    component: CalendarShowcase,
  },
  {
    id: "card",
    label: "Card",
    group: "Components",
    description: "Displays a card with header, content, and footer.",
    component: CardsShowcase,
  },
  {
    id: "carousel",
    label: "Carousel",
    group: "Components",
    description: "A carousel with motion and swipe built using Embla.",
    component: CarouselShowcase,
  },
  {
    id: "checkbox",
    label: "Checkbox",
    group: "Components",
    description: "A control that allows the user to toggle between checked and unchecked.",
    component: CheckboxShowcase,
  },
  {
    id: "collapsible",
    label: "Collapsible",
    group: "Components",
    description: "An interactive component which expands/collapses a panel.",
    component: CollapsibleShowcase,
  },
  {
    id: "combobox",
    label: "Combobox",
    group: "Components",
    description: "Autocomplete input and command palette with a list of suggestions.",
    component: ComboboxShowcase,
  },
  {
    id: "command",
    label: "Command",
    group: "Components",
    description: "Fast, composable command menu for React.",
    component: CommandShowcase,
  },
  {
    id: "context-menu",
    label: "Context Menu",
    group: "Components",
    description: "Displays a menu at the pointer position on right-click.",
    component: ContextMenuShowcase,
  },
  {
    id: "date-picker",
    label: "Date Picker",
    group: "Components",
    description: "A date picker component with range and presets.",
    component: DatePickerShowcase,
  },
  {
    id: "dialog",
    label: "Dialog",
    group: "Components",
    description: "A window overlaid on the primary window, rendering content.",
    component: DialogShowcase,
  },
  {
    id: "drawer",
    label: "Drawer",
    group: "Components",
    description: "A drawer component that slides in from the edge of the screen.",
    component: DrawerShowcase,
  },
  {
    id: "dropdown-menu",
    label: "Dropdown Menu",
    group: "Components",
    description: "Displays a menu to the user — such as actions or functions — triggered by a button.",
    component: DropdownMenuShowcase,
  },
  {
    id: "hover-card",
    label: "Hover Card",
    group: "Components",
    description: "For sighted users to preview content behind a link.",
    component: HoverCardShowcase,
  },
  {
    id: "input",
    label: "Input",
    group: "Components",
    description: "Displays a form input field or a component that looks like an input.",
    component: InputShowcase,
  },
  {
    id: "input-otp",
    label: "Input OTP",
    group: "Components",
    description: "Accessible one-time password component with copy paste functionality.",
    component: InputOTPShowcase,
  },
  {
    id: "label",
    label: "Label",
    group: "Components",
    description: "Renders an accessible label associated with controls.",
    component: LabelShowcase,
  },
  {
    id: "menubar",
    label: "Menubar",
    group: "Components",
    description: "A visually persistent menu common in desktop applications.",
    component: MenubarShowcase,
  },
  {
    id: "navigation-menu",
    label: "Navigation Menu",
    group: "Components",
    description: "A collection of links for navigating websites.",
    component: NavigationMenuShowcase,
  },
  {
    id: "pagination",
    label: "Pagination",
    group: "Components",
    description: "Pagination with page navigation, next and previous links.",
    component: PaginationShowcase,
  },
  {
    id: "popover",
    label: "Popover",
    group: "Components",
    description: "Displays rich content in a portal, triggered by a button.",
    component: PopoverShowcase,
  },
  {
    id: "progress",
    label: "Progress",
    group: "Components",
    description: "Displays an indicator showing the completion progress of a task.",
    component: ProgressShowcase,
  },
  {
    id: "radio-group",
    label: "Radio Group",
    group: "Components",
    description: "A set of checkable buttons where only one can be checked at a time.",
    component: RadioGroupShowcase,
  },
  {
    id: "scroll-area",
    label: "Scroll Area",
    group: "Components",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
    component: ScrollAreaShowcase,
  },
  {
    id: "select",
    label: "Select",
    group: "Components",
    description: "Displays a list of options for the user to pick from.",
    component: SelectShowcase,
  },
  {
    id: "separator",
    label: "Separator",
    group: "Components",
    description: "Visually or semantically separates content.",
    component: SeparatorShowcase,
  },
  {
    id: "sheet",
    label: "Sheet",
    group: "Components",
    description: "Extends the Dialog component to display content that complements the main page.",
    component: SheetShowcase,
  },
  {
    id: "sidebar",
    label: "Sidebar",
    group: "Components",
    description: "A composable sidebar component using all sidebar tokens.",
    component: SidebarShowcase,
  },
  {
    id: "skeleton",
    label: "Skeleton",
    group: "Components",
    description: "Use to show a placeholder while content is loading.",
    component: SkeletonShowcase,
  },
  {
    id: "slider",
    label: "Slider",
    group: "Components",
    description: "An input where the user selects a value from within a given range.",
    component: SliderShowcase,
  },
  {
    id: "spinner",
    label: "Spinner",
    group: "Components",
    description: "A loading spinner indicator using CSS animation.",
    component: SpinnerShowcase,
  },
  {
    id: "switch",
    label: "Switch",
    group: "Components",
    description: "A control that allows the user to toggle between on and off.",
    component: SwitchShowcase,
  },
  {
    id: "table",
    label: "Table",
    group: "Components",
    description: "A responsive table component for displaying tabular data.",
    component: TableShowcase,
  },
  {
    id: "tabs",
    label: "Tabs",
    group: "Components",
    description: "A set of layered sections of content — known as tab panels.",
    component: TabsShowcase,
  },
  {
    id: "textarea",
    label: "Textarea",
    group: "Components",
    description: "Displays a form textarea or a component that looks like a textarea.",
    component: TextareaShowcase,
  },
  {
    id: "toast",
    label: "Toast",
    group: "Components",
    description: "A succinct message that is displayed temporarily.",
    component: ToastShowcase,
  },
  {
    id: "toggle",
    label: "Toggle",
    group: "Components",
    description: "A two-state button that can be either on or off.",
    component: ToggleShowcase,
  },
  {
    id: "toggle-group",
    label: "Toggle Group",
    group: "Components",
    description: "A set of two-state buttons that can be toggled on or off.",
    component: ToggleGroupShowcase,
  },
  {
    id: "tooltip",
    label: "Tooltip",
    group: "Components",
    description: "A popup that displays information related to an element.",
    component: TooltipShowcase,
  },
  {
    id: "typography",
    label: "Typography",
    group: "Components",
    description: "Styles for headings, paragraphs, lists, and inline text elements.",
    component: TypographyShowcase,
  },

  // ── Data Viz ──
  {
    id: "charts",
    label: "Charts",
    group: "Data Viz",
    description: "Bar and Line charts using chart color tokens.",
    component: ChartsShowcase,
  },
];

export function App() {
  const { theme, isDark, toggleDark } = useTheme();
  const [activeId, setActiveId] = useState("brand");

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
          <Icon icon={isDark ? "lucide:sun" : "lucide:moon"} width="16" height="16" />
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
