export interface User {
  id: number;
  email: string;
  fullname: string;
  orcid?: string;
  is_admin: boolean;
  profile_url?: string;
}
