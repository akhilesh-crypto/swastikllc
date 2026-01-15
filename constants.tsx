import React from 'react';
import { UserRole, User, ServiceCharge, Earning, Job, Application, ApplicationStatus } from './types';

/**
 * The SVG for the swastikllc logo.
 * Precision-matched to the user-provided image.
 * Clockwise curved arms, 4 dots, and 3 vertical bars on each side.
 */
export const LOGO_SVG = (className?: string) => (
  <svg viewBox="0 0 140 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left side 3 vertical bars */}
    <rect x="10" y="15" width="4" height="70" fill="#FF0000" rx="1" />
    <rect x="20" y="15" width="4" height="70" fill="#FF0000" rx="1" />
    <rect x="30" y="15" width="4" height="70" fill="#FF0000" rx="1" />
    
    {/* Central Swastika Section */}
    <g transform="translate(42, 12)">
      {/* Central Intersection */}
      <path 
        d="M28 8 V60 M4 34 H52" 
        stroke="#FF0000" 
        strokeWidth="9" 
        strokeLinecap="round" 
      />
      
      {/* Clockwise Curved Arms (Correct orientation from image) */}
      <path d="M28 8 Q56 8 56 30" fill="none" stroke="#FF0000" strokeWidth="9" strokeLinecap="round" />
      <path d="M52 34 Q52 62 30 62" fill="none" stroke="#FF0000" strokeWidth="9" strokeLinecap="round" />
      <path d="M28 60 Q0 60 0 38" fill="none" stroke="#FF0000" strokeWidth="9" strokeLinecap="round" />
      <path d="M4 34 Q4 6 26 6" fill="none" stroke="#FF0000" strokeWidth="9" strokeLinecap="round" />

      {/* 4 dots in the quadrants */}
      <circle cx="16" cy="22" r="4" fill="#FF0000" />
      <circle cx="40" cy="22" r="4" fill="#FF0000" />
      <circle cx="16" cy="46" r="4" fill="#FF0000" />
      <circle cx="40" cy="46" r="4" fill="#FF0000" />
    </g>

    {/* Right side 3 vertical bars */}
    <rect x="106" y="15" width="4" height="70" fill="#FF0000" rx="1" />
    <rect x="116" y="15" width="4" height="70" fill="#FF0000" rx="1" />
    <rect x="126" y="15" width="4" height="70" fill="#FF0000" rx="1" />
  </svg>
);

export const BRAND_COLOR = "#FF0000";

export const MOCK_SERVICE_CHARGES: ServiceCharge[] = [
  { id: '1', country: 'India', amount: 45000, currency: 'INR' },
  { id: '2', country: 'USA', amount: 160000, currency: 'INR' },
  { id: '3', country: 'UK', amount: 120000, currency: 'INR' },
  { id: '4', country: 'UAE', amount: 95000, currency: 'INR' },
];

export const MOCK_FRANCHISES: User[] = [
  { id: 'f1', uniqueId: 'FRA-9012', name: 'Global Talent Partners', email: 'gtp@swastikllc.com', role: UserRole.FRANCHISE, country: 'India' },
  { id: 'f2', uniqueId: 'FRA-3345', name: 'Euro Recruitment LLC', email: 'euro@swastikllc.com', role: UserRole.FRANCHISE, country: 'UK' },
];

export const MOCK_EARNINGS: Earning[] = [
  { id: 'e1', franchiseId: 'f1', amount: 35000, source: 'Candidate Selection: Rahul S.', date: '2024-05-10' },
  { id: 'e2', franchiseId: 'f1', amount: 48000, source: 'Candidate Selection: Priya M.', date: '2024-05-12' },
  { id: 'e3', franchiseId: 'f2', amount: 95000, source: 'Candidate Selection: John D.', date: '2024-05-14' },
];

export const MOCK_JOBS: Job[] = [
  { id: 'j1', title: 'Senior React Developer', description: 'Experience in high-scale apps.', employerId: 'emp1', employerName: 'TechCorp', location: 'San Francisco', salaryRange: '₹80L - ₹1Cr', status: 'Open' },
  { id: 'j2', title: 'Marketing Manager', description: 'Drive growth and strategy.', employerId: 'emp1', employerName: 'TechCorp', location: 'Remote', salaryRange: '₹25L - ₹40L', status: 'Open' },
  { id: 'j3', title: 'HR Generalist', description: 'Manage employee relations.', employerId: 'emp2', employerName: 'GlobalLogistics', location: 'London', salaryRange: '₹35L - ₹50L', status: 'Open' },
];

export const MOCK_APPLICATIONS: Application[] = [
  { id: 'a1', jobId: 'j1', jobTitle: 'Senior React Developer', seekerId: 's1', seekerName: 'Rahul Sharma', status: ApplicationStatus.SELECTED, updatedAt: '2024-05-15', employerId: 'emp1', franchiseId: 'f1' },
  { id: 'a2', jobId: 'j1', jobTitle: 'Senior React Developer', seekerId: 's2', seekerName: 'Alice Johnson', status: ApplicationStatus.INTERVIEWING, updatedAt: '2024-05-16', employerId: 'emp1' },
  { id: 'a3', jobId: 'j2', jobTitle: 'Marketing Manager', seekerId: 's3', seekerName: 'Priya Mehta', status: ApplicationStatus.SHORTLISTED, updatedAt: '2024-05-17', employerId: 'emp1', franchiseId: 'f1' },
];

export const generateUniqueId = (role: UserRole) => {
  const prefix = role === UserRole.SUPER_ADMIN ? 'ADM' : role === UserRole.FRANCHISE ? 'FRA' : role === UserRole.EMPLOYER ? 'EMP' : 'SEK';
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${randomNum}`;
};