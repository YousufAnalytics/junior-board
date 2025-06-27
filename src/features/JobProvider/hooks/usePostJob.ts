// hooks/usePostJob.ts
import { useMutation } from '@tanstack/react-query';

const postJob = async (data: any) => {
  const response = await fetch('http://localhost:3000/api/v1/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to post job');
  }

  return response.json();
};

export const usePostJob = () => {
  return useMutation({ mutationFn: postJob });
};
