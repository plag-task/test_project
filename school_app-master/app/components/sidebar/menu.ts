import { SVG } from "@/app/assets/icons";

export const MENU_DATA = [
  {
    id: 1,
    label: "Dashboard",
  },
  {
    id: 2,
    label: "User Management",
    url: "/",
  },
  {
    id: 3,
    label: "Match making Controls",
    url: "#",
    icon: SVG.DropDown,
    children: [
      {
        id: 1,
        sublevel: "Admins",
        url: "/role-management",
      },
      {
        id: 2,
        sublevel: "Role Management",
        url: "#!",
      },
      {
        id: 3,
        sublevel: "Role Management",
        url: "#!",
      },
      {
        id: 4,
        sublevel: "Technical Director",
        url: "#!",
      },
      {
        id: 5,
        sublevel: "Operations Director",
        url: "#!",
      },
      {
        id: 6,
        sublevel: "Marketing Director",
      },
    ],
  },

  {
    id: 5,
    label: "Financial Reports",
  },
  {
    id: 6,
    label: "Notifications and Alerts",
    url: "/notification-alert",
  },
  {
    id: 7,
    label: "Marketing Tools",
    url: "/marketing-tools",
  },
  {
    id: 8,
    label: "Content Management",
  },
  {
    id: 9,
    label: "Settings and Configurations",
    url: "#!",
    icon: SVG.DropDown,
    children: [
      {
        id: 1,
        sublevel: "Configuration List",
        url: "/configuration-list",
      },
      {
        id: 2,
        sublevel: "CMS - App Settings",
        url: "/cms-app-setting",
      },
      {
        id: 3,
        sublevel: "App Configuration",
        url: "/app-configuration",
      },
      {
        id: 4,
        sublevel: "Mini-Interactive Stories",
        url: "/interactive-stories",
      },
      {
        id: 5,
        sublevel: "Security Settings",
        url: "/security-settings",
      },
    ],
  },
  {
    id: 10,
    label: "Libraries",
    url: "#!",
    icon: SVG.DropDown,
    children: [
      {
        id: 1,
        sublevel: "Voice-Based Prompt Questions",
        url: "#!",
      },
      {
        id: 2,
        sublevel: "Predefined Mini Stories",
        url: "#!",
      },
      {
        id: 3,
        sublevel: "Users: Custom Input for Mini Stories",
        url: "#!",
      },
      {
        id: 4,
        sublevel: "Values",
        url: "#!",
      },
      {
        id: 5,
        sublevel: "Goals",
        url: "#!",
      },
      {
        id: 6,
        sublevel: "Predefined Reasons for Blocking",
        url: "#!",
      },
      {
        id: 7,
        sublevel: "Conversation Starters",
        url: "#!",
      },
      {
        id: 8,
        sublevel: "Meaning of Different Sexual Orientations",
        url: "#!",
      },
      {
        id: 9,
        sublevel: "Environments / Backgrounds",
        url: "#!",
      },
      {
        id: 10,
        sublevel: "Education Platform",
        url: "#!",
      },
    ],
  },

  {
    id: 12,
    label: "Masters",
  },
  {
    id: 13,
    label: "Verification",
  },
  {
    id: 14,
    label: "Applicants",
  },
];
