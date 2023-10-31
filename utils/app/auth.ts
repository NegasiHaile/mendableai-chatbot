export const getEndpoint = (type: 'signin' | 'signup' | null) => {
  if (type === 'signin') {
    return 'api/signin';
  }

  return 'api/signup';
};
