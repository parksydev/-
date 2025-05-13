'use client'

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // allowed_users 테이블에서 사용자 확인
      const { data: user, error: userError } = await supabase
        .from('allowed_users')
        .select('id, username, password, name, user_type')
        .eq('username', username)
        .single();

      if (userError || !user) {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        return;
      }

      // 비밀번호 확인
      if (user.password !== password) {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        return;
      }

      // 사용자 정보를 세션 스토리지에 저장
      const userData = {
        id: user.id,
        username: user.username,
        name: user.name,
        userType: user.user_type
      };
      
      sessionStorage.setItem('user', JSON.stringify(userData));

      // 로그인 성공 시 메인 페이지로 이동
      router.push('/');
    } catch (error) {
      console.error('로그인 에러:', error);
      setError('로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen bg-white flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1512px] h-full flex flex-col items-center justify-between py-[33px]">
        {/* 로고와 로그인 카드를 감싸는 컨테이너 */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-0 mb-[40px]">
              <Image 
                src="/3dlogo2.png" 
                alt="Logo" 
                width={40} 
                height={40}
                priority
              />
              <span className="text-[32px] leading-[38px] font-bold text-black ml-3">이디저디</span>
            </div>

            {/* 로그인 카드 */}
            <div className="w-[302.19px]">
              {/* 로그인 폼 */}
              <form onSubmit={handleLogin}>
                <div className="text-center mb-[30px]">
                  <p className="text-[#0F1010] text-[14px] leading-[21px] mb-[10px]">
                    제주과학고등학교의 특별실 신청 • 관리를
                  </p>
                  <p className="text-[#0F1010] text-[14px] leading-[10px]">
                    더욱 쉽고 편하게 해보세요
                  </p>
                </div>

                {/* 아이디 입력 */}
                <div className="w-[250px] h-[44.37px] mx-auto mb-[5.22px]">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                    className="w-full h-full px-[12.5px] border border-[#D6D6D6] rounded-[8px] text-black text-[14px]"
                  />
                </div>

                {/* 비밀번호 입력 */}
                <div className="w-[250px] h-[44.37px] mx-auto mb-[40.39px]">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    className="w-full h-full px-[12.5px] border border-[#D6D6D6] rounded-[8px] text-black text-[14px]"
                  />
                </div>

                {/* 로그인 상태 유지 */}
                <div className="flex items-center justify-center gap-[9.5px] mb-[19.64px]">
                  <div className="w-[15.86px] h-[15.95px] border border-[#D6D6D6] rounded-[2px]">
                    <input
                      type="checkbox"
                      checked={keepLoggedIn}
                      onChange={(e) => setKeepLoggedIn(e.target.checked)}
                      className="hidden"
                    />
                  </div>
                  <span className="text-[#6D6D6D] text-[14px] leading-[19px]">
                    로그인 상태를 유지 할래요
                  </span>
                </div>

                {/* 로그인 버튼 */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-[250px] h-[44.37px] bg-[#449664] rounded-[8px] text-white text-[14px] mb-[19.64px] mx-auto block disabled:opacity-50"
                >
                  {loading ? '로그인 중...' : '로그인'}
                </button>

                {/* 에러 메시지 표시 */}
                {error && (
                  <div className="text-red-500 text-[14px] text-center mb-[19.64px]">
                    {error}
                  </div>
                )}

                {/* 구분선 */}
                <div className="w-[302.19px] h-[1px] mb-[23.6px] bg-gradient-to-r from-[#F0F0F0]/0 via-[#F0F0F0] to-[#F0F0F0]/0" />

                {/* 링크 섹션 */}
                <div className="flex flex-col items-center gap-[12.11px]">
                  <Link href="/auth/password_reset" className="text-[#4B80CB] text-[14px] leading-[17px]">
                    아이디 혹은 암호를 잊으셨나요?
                  </Link>
                  <Link href="/auth/signup" className="text-[#4B80CB] text-[14px] leading-[17px]">
                    새로운 계정 만들기
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="w-full px-[103px]">
          <div className="flex justify-between items-center">
            <span className="text-[#6C6C6D] text-[14px] leading-[17px]">
              Copyright © 2025 Bunker
            </span>
            <div className="flex items-center gap-1">
              <span className="text-[#4B80CB] text-[14px] leading-[17px]">
                도움이 필요하세요?
              </span> 
              <svg 
              width="9" 
              height="9" 
              viewBox="0 0 9 9" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M8.59277 6.11475C8.59277 6.50684 8.28662 6.80762 7.92676 6.80762C7.56689 6.80762 7.27686 6.50146 7.27686 6.12549V4.10059L7.36279 2.10254L6.50342 3.06396L1.54053 8.02148C1.39551 8.1665 1.229 8.2417 1.05176 8.2417C0.691895 8.2417 0.369629 7.90869 0.369629 7.55957C0.369629 7.3877 0.450195 7.21045 0.589844 7.0708L5.54736 2.10791L6.50879 1.25391L4.43018 1.3291H2.48047C2.10986 1.3291 1.80371 1.03906 1.80371 0.68457C1.80371 0.324707 2.09375 0.0239258 2.49121 0.0239258H7.88379C8.30811 0.0239258 8.5874 0.308594 8.5874 0.727539L8.59277 6.11475Z" fill="#4B80CB"
              />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}