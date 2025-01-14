'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '@/app/components/Footer/Footer';
import { useRouter } from 'next/navigation'
import MealSection from '../components/MealSection/MealSection'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function TestPage() {
  const [userData, setUserData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [specialRoomRequests, setSpecialRoomRequests] = useState<any[]>([])
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // 페이지네이션을 위한 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = specialRoomRequests.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(specialRoomRequests.length / itemsPerPage)

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const teachers_data = [
    { id: 1, name: "김민철", subject: "수학" },
    { id: 2, name: "고경석", subject: "물리" },
    { id: 3, name: "김태경", subject: "물리" },
    { id: 4, name: "양은심", subject: "정보" },
    { id: 5, name: "유지호", subject: "역사" },
    { id: 6, name: "이경진", subject: "국어" },
    { id: 7, name: "최정호", subject: "수학" },
    { id: 8, name: "현지수", subject: "국어" },
    { id: 9, name: "박주희", subject: "" },
    { id: 10, name: "이윤우", subject: "" },
    { id: 11, name: "박강희", subject: "" },
    { id: 12, name: "오동율", subject: "수학" },
    { id: 13, name: "최바울", subject: "생명" },
    { id: 14, name: "김진욱", subject: "체육" },
    { id: 15, name: "양원", subject: "국어" },
    { id: 16, name: "한승진", subject: "화학" },
    { id: 17, name: "이경숙", subject: "보건" },
    { id: 18, name: "정지용", subject: "수학" },
    { id: 19, name: "문지섭", subject: "생명" },
    { id: 20, name: "차민서", subject: "화학" },
    { id: 21, name: "강지연", subject: "영어" },
    { id: 22, name: "강신혜", subject: "정보" },
    { id: 23, name: "양동애", subject: "" },
    { id: 24, name: "조현태", subject: "지구" },
    { id: 25, name: "최원태", subject: "지구" }
  ];

  const student_data = [
    // 1학년 1반
    { id: 1101, name: "강수완", grade: "1", class: "1" },
    { id: 1102, name: "고대욱", grade: "1", class: "1" },
    { id: 1103, name: "고미르", grade: "1", class: "1" },
    { id: 1104, name: "김도현", grade: "1", class: "1" },
    { id: 1105, name: "김미래", grade: "1", class: "1" },
    { id: 1106, name: "김범석", grade: "1", class: "1" },
    { id: 1107, name: "김영한", grade: "1", class: "1" },
    { id: 1108, name: "김예은", grade: "1", class: "1" },
    { id: 1109, name: "김유진", grade: "1", class: "1" },
    { id: 1110, name: "김재준", grade: "1", class: "1" },
    { id: 1111, name: "김지현", grade: "1", class: "1" },
    { id: 1112, name: "김태원", grade: "1", class: "1" },
    { id: 1113, name: "김형건", grade: "1", class: "1" },
    { id: 1114, name: "문지환", grade: "1", class: "1" },
    { id: 1115, name: "박민준", grade: "1", class: "1" },
    { id: 1116, name: "부지성", grade: "1", class: "1" },
    { id: 1117, name: "양예솔", grade: "1", class: "1" },
    { id: 1118, name: "이주하", grade: "1", class: "1" },
    { id: 1119, name: "정예찬", grade: "1", class: "1" },
    { id: 1120, name: "조민석", grade: "1", class: "1" },
    { id: 1121, name: "현민서", grade: "1", class: "1" },
    // 1학년 2반
    { id: 1201, name: "고은우", grade: "1", class: "2" },
    { id: 1202, name: "김가현", grade: "1", class: "2" },
    { id: 1203, name: "김동연", grade: "1", class: "2" },
    { id: 1204, name: "김동휘", grade: "1", class: "2" },
    { id: 1205, name: "김라엘", grade: "1", class: "2" },
    { id: 1206, name: "김소진", grade: "1", class: "2" },
    { id: 1207, name: "김승준", grade: "1", class: "2" },
    { id: 1208, name: "문대원", grade: "1", class: "2" },
    { id: 1209, name: "문지원", grade: "1", class: "2" },
    { id: 1210, name: "박서율", grade: "1", class: "2" },
    { id: 1211, name: "박소은", grade: "1", class: "2" },
    { id: 1212, name: "부권준", grade: "1", class: "2" },
    { id: 1213, name: "성준석", grade: "1", class: "2" },
    { id: 1214, name: "손문진", grade: "1", class: "2" },
    { id: 1215, name: "양선홍", grade: "1", class: "2" },
    { id: 1216, name: "정유근", grade: "1", class: "2" },
    { id: 1217, name: "조현준", grade: "1", class: "2" },
    { id: 1218, name: "현유진", grade: "1", class: "2" },
    { id: 1219, name: "현채은", grade: "1", class: "2" },
    { id: 1220, name: "홍은찬", grade: "1", class: "2" },
    // 2학년 1반
    { id: 2101, name: "강서현", grade: "2", class: "1" },
    { id: 2102, name: "고민석", grade: "2", class: "1" },
    { id: 2103, name: "고창환", grade: "2", class: "1" },
    { id: 2104, name: "김나연", grade: "2", class: "1" },
    { id: 2105, name: "김도율", grade: "2", class: "1" },
    { id: 2106, name: "김도훈", grade: "2", class: "1" },
    { id: 2107, name: "김아영", grade: "2", class: "1" },
    { id: 2108, name: "김예림", grade: "2", class: "1" },
    { id: 2109, name: "김채현", grade: "2", class: "1" },
    { id: 2110, name: "박건우", grade: "2", class: "1" },
    { id: 2111, name: "박태현", grade: "2", class: "1" },
    { id: 2112, name: "양승우", grade: "2", class: "1" },
    { id: 2113, name: "오치영", grade: "2", class: "1" },
    { id: 2114, name: "이예찬", grade: "2", class: "1" },
    { id: 2115, name: "이건우", grade: "2", class: "1" },
    { id: 2116, name: "이은상", grade: "2", class: "1" },
    { id: 2117, name: "장지호", grade: "2", class: "1" },
    { id: 2118, name: "정우진", grade: "2", class: "1" },
    { id: 2119, name: "최향아", grade: "2", class: "1" },
    { id: 2120, name: "현승원", grade: "2", class: "1" },
    // 2학년 2반
    { id: 2201, name: "강지윤", grade: "2", class: "2" },
    { id: 2202, name: "김빛나", grade: "2", class: "2" },
    { id: 2203, name: "김승환", grade: "2", class: "2" },
    { id: 2204, name: "김태이", grade: "2", class: "2" },
    { id: 2205, name: "김현상", grade: "2", class: "2" },
    { id: 2206, name: "김효빈", grade: "2", class: "2" },
    { id: 2207, name: "박성빈", grade: "2", class: "2" },
    { id: 2208, name: "변용훈", grade: "2", class: "2" },
    { id: 2209, name: "송민준", grade: "2", class: "2" },
    { id: 2210, name: "양다현", grade: "2", class: "2" },
    { id: 2211, name: "선우준", grade: "2", class: "2" },
    { id: 2212, name: "유서준", grade: "2", class: "2" },
    { id: 2213, name: "이권", grade: "2", class: "2" },
    { id: 2214, name: "이세호", grade: "2", class: "2" },
    { id: 2215, name: "이준이", grade: "2", class: "2" },
    { id: 2216, name: "정하정", grade: "2", class: "2" },
    { id: 2217, name: "최승운", grade: "2", class: "2" },
    { id: 2218, name: "현도훈", grade: "2", class: "2" },
    { id: 2219, name: "현정운", grade: "2", class: "2" }
  ];

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    const userDataStr = sessionStorage.getItem('userData')

    if (!isLoggedIn || !userDataStr) {
      document.location.href = '/'
      return
    }

    try {
      const parsedUserData = JSON.parse(userDataStr)
      setUserData(parsedUserData)
    } catch (error) {
      console.error('Failed to parse user data:', error)
      document.location.href = '/'
      return
    }
    
    // 특별실 신청 데이터 가져오기
    const fetchSpecialRoomRequests = async () => {
      try {
        const { data, error } = await supabase
          .from('special_room_requests')
          .select('*')
          .order('created_at', { ascending: true })

        if (error) throw error
        setSpecialRoomRequests(data || [])
      } catch (error) {
        console.error('특별실 신청 데이터 조회 실패:', error)
      }
    }

    fetchSpecialRoomRequests()
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    sessionStorage.clear()
    router.push('/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative w-full h-[590px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10 h-[590px]" 
          style={{ backgroundImage: 'url("/background01.jpg")' }}
        ></div>

        {/* Noise overlay */}
        <div 
          className="absolute inset-0 opacity-[0.25] mix-blend-soft-light z-0 h-[590px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>

        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20 z-0 h-[590px]"></div>

        {/* Special Room Requests Table Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 h-[590px]">
          <div className="p-6 h-full relative">
            <div className="flex items-center pb-4">
              <h2 className="text-xl font-bold text-gray-100">특별실 신청 현황</h2>
              <button 
                className="text-gray-600 bg-gray-100 hover:bg-gray-200 text-xs font-medium transition-colors ml-3 px-2.5 py-1 rounded-full"
                onClick={() => router.push('/home/specialroom')}
              >
                신청하기
              </button>
            </div>
            
            <div className="overflow-x-auto h-[400px]">
              <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">시간</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">장소</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">목적</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">신청 학생</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider min-w-[93px]">담당교사</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">상태</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800/30 divide-y divide-gray-800">
                  {currentItems.length === 0 ? (
                    <tr className="hover:bg-gray-800/50 transition-colors">
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-300 font-semibold">
                        현재 특별실 신청 내역이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    currentItems.map((request, index) => (
                      <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-semibold">{request.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-semibold">{request.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-semibold">{request.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">
                          <div className="flex flex-wrap gap-1">
                            {request.students.map((studentId: number, idx: number) => {
                              const studentInfo = student_data.find(s => s.id === studentId);
                              return (
                                <span 
                                  key={idx}
                                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
                                >
                                  {studentInfo ? studentInfo.name : `Unknown(${studentId})`}
                                </span>
                              );
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-semibold">{teachers_data[request.teacher-1].name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                            ${request.status === 'pending' ? 'bg-yellow-900/60 text-yellow-200' : 
                              request.status === 'approved' ? 'bg-green-900/60 text-green-200' : 
                              'bg-red-900/60 text-red-200'}`}>
                            {request.status === 'pending' ? '대기중' : 
                             request.status === 'approved' ? '승인됨' : '거절됨'}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Component */}
            {specialRoomRequests.length > 0 && (
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
                      ${currentPage === pageNum 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Meal Section */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center pr-5 pl-5 pb-2 mt-5">
            <h2 className="text-xl font-bold">
              {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </h2>
            <button 
              className="text-gray-600 bg-gray-100 hover:bg-gray-200 text-xs font-medium transition-colors ml-3 px-2.5 py-1 rounded-full"
              onClick={() => {/* 더보기 기능 추가 */}}
            >
              더보기
            </button>
          </div>
          <div className="flex flex-col">
            <MealSection />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}