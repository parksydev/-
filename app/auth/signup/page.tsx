'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Supabase 클라이언트 초기화
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// 스타일 상수
const styles = {
  container: "w-full min-h-screen bg-white flex flex-col items-center",
  wrapper: "w-full max-w-[1512px] min-h-screen flex flex-col items-center justify-between py-[33px]",
  logoContainer: "flex items-center ml-[50px] mb-[40px] w-[302.19px]",
  logoText: "text-[21px] leading-[21px] font-bold text-black ml-2",
  formContainer: "w-[302.19px]",
  formTitle: "ml-[25px] mb-[30px] text-[24px] font-bold",
  inputLabel: "ml-[28px] text-[15px]",
  inputWrapper: "w-[250px] h-[44.37px] mx-auto mb-[20px]",
  input: "w-full h-full px-[12.5px] border border-[#D6D6D6] rounded-[8px] text-black text-[14px]",
  submitButton: "w-[250px] h-[44.37px] bg-[#449664] rounded-[8px] text-white text-[14px] mb-[19.64px] mx-auto block",
  divider: "w-[302.19px] h-[1px] mb-[23.6px] bg-gradient-to-r from-[#F0F0F0]/0 via-[#F0F0F0] to-[#F0F0F0]/0",
  footer: "w-full px-[103px]",
  footerText: "text-[#6C6C6D] text-[14px] leading-[17px]",
  helpLink: "text-[#4B80CB] text-[14px] leading-[17px]"
};

// 입력 필드 컴포넌트
interface InputFieldProps {
  label: string;
  type: 'text' | 'number' | 'password';
  placeholder: string;
  maxLength?: number;
  pattern?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, type, placeholder, maxLength, pattern, value, onChange }: InputFieldProps) => (
  <>
    <span className={styles.inputLabel}>{label}</span>
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        maxLength={maxLength}
        pattern={pattern}
        value={value}
        onChange={onChange}
      />
    </div>
  </>
);

// 푸터 컴포넌트
const Footer = () => (
  <div className={styles.footer}>
    <div className="flex justify-between items-center">
      <span className={styles.footerText}>
        Copyright © 2025 Bunker
      </span>
      <div className="flex items-center gap-1">
        <span className={styles.helpLink}>
          도움이 필요하세요?
        </span>
        <svg 
          width="9" 
          height="9" 
          viewBox="0 0 9 9" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.59277 6.11475C8.59277 6.50684 8.28662 6.80762 7.92676 6.80762C7.56689 6.80762 7.27686 6.50146 7.27686 6.12549V4.10059L7.36279 2.10254L6.50342 3.06396L1.54053 8.02148C1.39551 8.1665 1.229 8.2417 1.05176 8.2417C0.691895 8.2417 0.369629 7.90869 0.369629 7.55957C0.369629 7.3877 0.450195 7.21045 0.589844 7.0708L5.54736 2.10791L6.50879 1.25391L4.43018 1.3291H2.48047C2.10986 1.3291 1.80371 1.03906 1.80371 0.68457C1.80371 0.324707 2.09375 0.0239258 2.49121 0.0239258H7.88379C8.30811 0.0239258 8.5874 0.308594 8.5874 0.727539L8.59277 6.11475Z" fill="#4B80CB"/>
        </svg>
      </div>
    </div>
  </div>
);

interface FormData {
  name: string;
  studentId: string;
  username: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.studentId || !formData.username || !formData.password) {
      setError('모든 필드를 입력해주세요.');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return false;
    }

    if (!formData.agreeToTerms) {
      setError('개인정보 수집 및 이용에 동의해주세요.');
      return false;
    }

    // 학번이 4자리 숫자인지 확인
    if (!/^\d{4}$/.test(formData.studentId)) {
      setError('학번은 4자리 숫자여야 합니다.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // 1. 먼저 username이 이미 존재하는지 확인
      const { data: existingUser } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', formData.username)
        .single();

      if (existingUser) {
        setError('이미 사용 중인 아이디입니다.');
        return;
      }

      // 2. 새 프로필 생성
      const { data, error: insertError } = await supabase
        .from('profiles')
        .insert([
          {
            name: formData.name,
            student_id: formData.studentId,
            username: formData.username,
            password: formData.password // 실제 프로덕션에서는 비밀번호를 해시화해야 합니다
          }
        ])
        .select()
        .single();

      if (insertError) throw insertError;

      // 3. 실시간 구독 설정 (선택사항)
      const channel = supabase.channel('profile-changes')
        .on(
          'postgres_changes',
          { 
            event: 'INSERT', 
            schema: 'public', 
            table: 'profiles',
            filter: `id=eq.${data.id}`
          },
          (payload) => {
            console.log('프로필이 생성되었습니다:', payload);
          }
        )
        .subscribe();

      // 4. 성공 시 로그인 페이지로 이동
      router.push('/auth/login');
    } catch (error) {
      console.error('Error:', error);
      setError('회원가입 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div className="flex-1 flex flex-col items-center mt-[50px] w-full mb-[50px]">
          <div className="flex flex-col items-center w-full">
            <div className={styles.logoContainer}>
              <Image 
                src="/3dlogo2.png" 
                alt="Logo" 
                width={29} 
                height={29}
                priority
              />
              <span className={styles.logoText}>이디저디</span>
            </div>

            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formTitle}>
                  <span>회원가입</span>
                </div>

                {error && (
                  <div className="text-red-500 text-sm mb-4 text-center">
                    {error}
                  </div>
                )}

                <InputField 
                  label="이름" 
                  type="text" 
                  placeholder="" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <InputField 
                  label="학번" 
                  type="text" 
                  placeholder="" 
                  maxLength={4}
                  pattern="[0-9]*"
                  value={formData.studentId}
                  onChange={(e) => handleInputChange('studentId', e.target.value)}
                />
                <InputField 
                  label="아이디" 
                  type="text" 
                  placeholder="" 
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                />
                <InputField 
                  label="비밀번호" 
                  type="password" 
                  placeholder="" 
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                <InputField 
                  label="비밀번호 확인" 
                  type="password" 
                  placeholder="" 
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                />

                <div className="flex items-center justify-center gap-[9.5px] mb-[19.64px]">
                  <input
                    type="checkbox"
                    className="w-[15.86px] h-[15.95px] border border-[#D6D6D6] rounded-[2px] accent-[#449664]"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                  />
                  <span className="text-[#6D6D6D] text-[14px] leading-[19px]">
                    [필수] 개인정보 수집 및 이용동의
                  </span>
                </div>

                <button 
                  type="submit" 
                  className={`${styles.submitButton} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? '처리 중...' : '계정 만들기'}
                </button>

                <div className={styles.divider} />

                <div className="flex flex-col items-center gap-[12.11px]">
                  <Link href="/auth/password_reset" className={styles.helpLink}>
                    아이디 혹은 암호를 잊으셨나요?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}