'use client';

import React from 'react';

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const userContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(userContext);
  if (context === null)
    throw new Error('useContext deve estar dentro do Provider');
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = React.useState<User | null>(user);

  return (
    <userContext.Provider value={{ user: userState, setUser }}>
      {children}
    </userContext.Provider>
  );
}
