"use client";

import Link from 'next/link';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import { useUser } from './hooks/useUser';

export default function Home() {
  const { user } = useUser();

  return (
    <main className="flex h-100vh w-full bg-[#f7f7f7]">
      <div className="w-[290px] h-full bg-white shadow-md">
        <Sidebar />
      </div>
      <div className="flex-1 h-full flex flex-col">
        <div className="fixed top-0 left-[290px] right-0 z-50">
          <Header />
        </div>
        <div className="flex-1 pt-[64px]">
          <div className="flex flex-col ml-[47px] mr-[47px] h-[100vh]">
            <div>
              <h1 className="text-[32px] font-bold">이디저디</h1>
              <div className="w-full h-[1px] bg-[#EDECEC] mt-[10px]"></div>
            </div>
            <div 
              className="flex mt-[20px] w-full h-[130px] rounded-[11px]"
              style={{
                backgroundImage: 'url(/background03.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="flex w-full items-center justify-between p-[40px]">
                <span className="text-white text-[21px]">반갑습니다 <span className="font-bold">{user?.name}</span> 님, 새로워진 <span className="font-bold">이디저디</span>를 만나보세요</span>
                <button className="w-[110px] h-[55px] bg-[#FFFFFF] text-[17px] text-[#007aff] rounded-[11px]">
                  <span className="font-semibold">시작하기</span>
                </button>
              </div>
            </div>
            <div className="flex mt-[10px] w-full h-[390px] rounded-[11px] bg-[#ffffff]">

            </div>
            <div className="flex mt-[10px] w-full h-[100px] rounded-[11px] bg-[#ffffff]">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-700">
                    {user.name}님 환영합니다
                  </span>
                  <button
                    onClick={() => {
                      sessionStorage.removeItem('user');
                      window.location.href = '/auth/login';
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <a
                  href="/auth/login"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  로그인
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
