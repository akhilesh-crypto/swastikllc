
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  FRANCHISE = 'FRANCHISE',
  EMPLOYER = 'EMPLOYER',
  JOB_SEEKER = 'JOB_SEEKER'
}

export interface User {
  id: string;
  uniqueId: string;
  name: string;
  email: string;
  role: UserRole;
  country: string;
  avatar?: string;
  franchiseId?: string; // For job seekers or employers linked to a franchise
}

export interface ServiceCharge {
  id: string;
  country: string;
  amount: number;
  currency: string;
}

export interface Earning {
  id: string;
  franchiseId: string;
  amount: number;
  source: string;
  date: string;
}

export enum ApplicationStatus {
  APPLIED = 'Applied',
  SHORTLISTED = 'Shortlisted',
  INTERVIEWING = 'Interviewing',
  SELECTED = 'Selected',
  REJECTED = 'Rejected'
}

export interface Job {
  id: string;
  title: string;
  description: string;
  employerId: string;
  employerName: string;
  location: string;
  salaryRange: string;
  status: 'Open' | 'Closed';
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  seekerId: string;
  seekerName: string;
  status: ApplicationStatus;
  updatedAt: string;
  employerId: string;
  franchiseId?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
