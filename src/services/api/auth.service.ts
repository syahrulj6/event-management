type LoginResponse = {
  token: string;
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!email || !password) {
    throw new Error('Invalid credentials');
  }

  return {
    token: 'mock-jwt-token',
  };
};

export const logout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
};
