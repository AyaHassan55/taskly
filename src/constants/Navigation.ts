import projectIcon from "../assets/icons/Icon-project.svg?react";
import projectEpicIcon from "../assets/icons/Icon-project-ipik.svg?react";
import projectTaskIcon from "../assets/icons/Icon-project.-tasksvg.svg?react";
import projectMemberIcon from "../assets/icons/Icon-project-member.svg?react";
import projectDetailsIcon from "../assets/icons/Icon-project-detail.svg?react";
import { ROUTES } from "./Routes";

export const NAVIGATION_ITEMS = [
  {
    id: "projects",
    label: "Projects",
    icon: projectIcon,
    path: ROUTES.PROJECTS,
     activePaths: [
    ROUTES.PROJECTS,
    ROUTES.ADD_PROJECT,
  ]
  },
  {
    id: "epics",
    label: "Project Epics",
    icon: projectEpicIcon,
    path: ROUTES.PROJECTS_EPICS,
     activePaths: [
    ROUTES.PROJECTS_EPICS,
    
  ]
  },
  {
    id: "tasks",
    label: "Project Tasks",
    icon: projectTaskIcon,
    path: ROUTES.PROJECTS_TASKS,
    activePaths: [
    ROUTES.PROJECTS_TASKS,
    
  ]
  },
  {
    id: "members",
    label: "Project Members",
    icon: projectMemberIcon,
    path: ROUTES.PROJECTS_MEMBERS,
    activePaths: [
    ROUTES.PROJECTS_MEMBERS,
    
  ]
  },
  {
    id: "details",
    label: "Project Details",
    icon: projectDetailsIcon,
    path: ROUTES.PROJECTS_DETAILS,
    activePaths: [
    ROUTES.PROJECTS_DETAILS
    
  ]
  },
];