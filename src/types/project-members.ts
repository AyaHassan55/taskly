export interface ProjectMember {
  member_id: string;
  project_id: string;
  user_id: string;
  email: string;
  role: string;
  metadata: {
    sub: string;
    name: string;
    email: string;
    job_title?: string;
    email_verified: boolean;
  };
}