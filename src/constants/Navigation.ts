import projectIcon from "../assets/icons/Icon-project.svg?react";
import projectEpicIcon from "../assets/icons/Icon-project-ipik.svg?react";
import projectTaskIcon from "../assets/icons/Icon-project.-tasksvg.svg?react";
import projectMemberIcon from "../assets/icons/Icon-project-member.svg?react";
import projectDetailsIcon from "../assets/icons/Icon-project-detail.svg?react";

export const getNavigationItems = (projectId?: string) => {
  if (!projectId) {
    return [
      {
        id: "projects",
        label: "Projects",
        icon: projectIcon,
        path: "/project",
      },
    ];
  }

  return [
    {
      id: "projects",
      label: "Projects",
      icon: projectIcon,
      path: "/project",
    },
    {
      id: "epics",
      label: "Project Epics",
      icon: projectEpicIcon,
      path: `/project/${projectId}/epics`,
    },
    {
      id: "tasks",
      label: "Project Tasks",
      icon: projectTaskIcon,
      path: `/project/${projectId}/tasks`,
    },
    {
      id: "members",
      label: "Project Members",
      icon: projectMemberIcon,
      path: `/project/${projectId}/members`,
    },
    {
      id: "details",
      label: "Project Details",
      icon: projectDetailsIcon,
      path: `/project/${projectId}/edit`,
    },
  ];
};