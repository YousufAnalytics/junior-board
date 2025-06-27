// hooks/useGetJobs.ts
import { useQuery } from '@tanstack/react-query';

interface Job {
  id: string;
  title: string;
  location: string;
  status: 'open' | 'closed';
  postedDate: string;
  applications: Application[];
}

interface Application {
  id: string;
  applicantName: string;
  email: string;
  resumeUrl: string;
  status: string;
  appliedDate: string;
}

const fetchJobs = async (): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/v1/jobs?page=1&limit=10');
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return response.json();
};

export const useGetJobs = () => {
  return useQuery<any>({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });
};
