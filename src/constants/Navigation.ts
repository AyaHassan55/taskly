import projectIcon from "../assets/icons/Icon-project.svg";
import projectEpicIcon from "../assets/icons/Icon-project-ipik.svg";
import projectTaskIcon from "../assets/icons/Icon-project.-tasksvg.svg";
import projectMemberIcon from "../assets/icons/Icon-project-member.svg";
import projectDetailsIcon from "../assets/icons/Icon-project-detail.svg";
import { ROUTES } from "./Routes";

export const NAVIGATION_ITEMS = [
  {
    id: "projects",
    label: "Projects",
    icon: projectIcon,
    path: ROUTES.PROJECTS,
  },
  {
    id: "epics",
    label: "Project Epics",
    icon: projectEpicIcon,
    path: ROUTES.PROJECTS_EPICS,
  },
  {
    id: "tasks",
    label: "Project Tasks",
    icon: projectTaskIcon,
    path: ROUTES.PROJECTS_TASKS,
  },
  {
    id: "members",
    label: "Project Members",
    icon: projectMemberIcon,
    path: ROUTES.PROJECTS_MEMBERS,
  },
  {
    id: "details",
    label: "Project Details",
    icon: projectDetailsIcon,
    path: ROUTES.PROJECTS_DETAILS,
  },
];