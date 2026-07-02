export type MemberRole = 'owner' | 'admin' | 'member' | 'viewer';
export interface ProjectMember {
  member_id: string;
  user_id: string;
  project_id: string;
  role: MemberRole;
  email: string;
  metadata: {
    sub: string;
    name: string;
    email: string;
    jobTitle?: string;
    email_verified: boolean;
    phone_verified: boolean;
  };
}