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
      `?KEY=${NEIS_API_KEY}` +
      `&Type=json` +
      `&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}` +
      `&SD_SCHUL_CODE=${SD_SCHUL_CODE}` +
      `&MLSV_YMD=${date?.replace(/-/g, '')}`
    );

    const data = await response.json();

    // NEIS API 응답 데이터를 우리 형식으로 변환
    const meals = {
      breakfast: { 메뉴: [], 칼로리: " " },
      lunch: { 메뉴: [], 칼로리: " " },
      dinner: { 메뉴: [], 칼로리: " " }
    };

    if (data.mealServiceDietInfo) {
      data.mealServiceDietInfo[1].row.forEach((meal: any) => {
        const menuItems = meal.DDISH_NM.split('<br/>');
        const mealType = {
          메뉴: menuItems,
          칼로리: meal.CAL_INFO
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
      { error: '급식 정보를 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}