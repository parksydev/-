import { useState, useEffect } from 'react';

interface User {
  id: number;
  username: string;
  name: string;
  userType: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 세션 스토리지에서 사용자 정보 가져오기
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return { user, logout };
} 