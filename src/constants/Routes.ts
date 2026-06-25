export const ROUTES = {
   
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  DASHBOARD: "/dashboard",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROJECTS:"/project",
  ADD_PROJECT:"/project/add",
  //--------------------- dynamic route------------------
  PROJECT_DETAILS: "/project/:projectId/edit",
  PROJECT_EPICS: "/project/:projectId/epics",
  ADD_EPIC: "/project/:projectId/epics/new",
  PROJECT_TASKS: "/project/:projectId/tasks",
  PROJECT_MEMBERS: "/project/:projectId/members",

  

};
export const PATHS = {
  projectDetails: (projectId: string) =>
    `/project/${projectId}/edit`,

  projectEpics: (projectId: string) =>
    `/project/${projectId}/epics`,

  addEpic: (projectId: string) =>
    `/project/${projectId}/epics/new`,

  projectTasks: (projectId: string) =>
    `/project/${projectId}/tasks`,

  projectMembers: (projectId: string) =>
    `/project/${projectId}/members`,
};