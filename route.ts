import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  const NEIS_API_KEY = process.env.NEIS_API_KEY;
  const ATPT_OFCDC_SC_CODE = "T10"; // 제주도
  const SD_SCHUL_CODE = "9290066"; // 학교 코드

  try {
    const response = await fetch(
      `https://open.neis.go.kr/hub/mealServiceDietInfo` +
      `?ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}` +
      `&SD_SCHUL_CODE=${SD_SCHUL_CODE}` +
      `&KEY=${NEIS_API_KEY}` +
      `&MLSV_YMD=${date?.replace(/-/g, '')}` +
      `&Type=json`
    );

    const data = await response.json();
    
    // NEIS API 응답 데이터를 우리 형식으로 변환
    const meals = {
      breakfast: { 메뉴: [], 칼로리: "", 시간: "조식" },
      lunch: { 메뉴: [], 칼로리: "", 시간: "중식" },
      dinner: { 메뉴: [], 칼로리: "", 시간: "석식" }
    };

    // API 응답 에러 체크 추가
    if (data.RESULT?.CODE === 'INFO-200') {
      // 데이터가 없는 경우 빈 응답 반환
      return NextResponse.json(meals);
    }

    if (!data.mealServiceDietInfo) {
      console.error('NEIS API 응답 데이터 오류:', data);
      throw new Error('급식 데이터 형식이 올바르지 않습니다.');
    }

    if (data.mealServiceDietInfo) {
      data.mealServiceDietInfo[1].row.forEach((meal: any) => {
        const menuItems = meal.DDISH_NM.split('<br/>').map((item: string) => 
          item.trim().replace(/\([^)]*\)/g, '') // 알레르기 정보 제거
        ).filter((item: string) => item !== '');
        
        const mealType = {
          메뉴: menuItems,
          칼로리: meal.CAL_INFO,
          시간: meal.MMEAL_SC_NM // 식사 시간 정보 추가
        };

        switch (meal.MMEAL_SC_CODE) {
          case "1": meals.breakfast = mealType; break;
          case "2": meals.lunch = mealType; break;
          case "3": meals.dinner = mealType; break;
        }
      });
    }

    return NextResponse.json(meals);
  } catch (error) {
    console.error('NEIS API 호출 실패:', error);
    return NextResponse.json(
      { 
        error: '급식 정보를 가져오는데 실패했습니다.',
        details: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    );
  }
}
