'use client'

import { useEffect, useState } from 'react';

type MealType = {
  메뉴: string[];
  칼로리: string;
  시간?: string;
}

export default function MealSection() {
  const [meals, setMeals] = useState<{
    breakfast: MealType;
    lunch: MealType;
    dinner: MealType;
  }>({
    breakfast: { 메뉴: [], 칼로리: " ", 시간: "조식" },
    lunch: { 메뉴: [], 칼로리: " ", 시간: "중식" },
    dinner: { 메뉴: [], 칼로리: " ", 시간: "석식" }
  });

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const today = new Date(new Date().getTime() + (9 * 60 * 60 * 1000))
          .toISOString()
          .split('T')[0];
        
        const response = await fetch(`/api/meals?date=${today}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data) {
          throw new Error('데이터가 비어있습니다');
        }
        
        setMeals({
          breakfast: {
            메뉴: data.breakfast?.메뉴 || [],
            칼로리: data.breakfast?.칼로리 || "정보 없음",
            시간: "조식"
          },
          lunch: {
            메뉴: data.lunch?.메뉴 || [],
            칼로리: data.lunch?.칼로리 || "정보 없음",
            시간: "중식"
          },
          dinner: {
            메뉴: data.dinner?.메뉴 || [],
            칼로리: data.dinner?.칼로리 || "정보 없음",
            시간: "석식"
          }
        });
      } catch (error) {
        console.error('급식 정보를 불러오는데 실패했습니다:', error);
        setMeals({
          breakfast: { 메뉴: [], 칼로리: "정보 없음", 시간: "조식" },
          lunch: { 메뉴: [], 칼로리: "정보 없음", 시간: "중식" },
          dinner: { 메뉴: [], 칼로리: "정보 없음", 시간: "석식" }
        });
      }
    };

    fetchMeals();
  }, []);

  // 현재 시간 가져오기
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  // 바의 위치 결정
  let barPosition = null;
  if (currentTime >= 0 && currentTime <= 480) {
    // 00:00-08:00
    barPosition = "아침";
  } else if (currentTime >= 481 && currentTime <= 780) {
    // 08:01-13:00
    barPosition = "점심";
  } else if (currentTime >= 781 && currentTime <= 1439) {
    // 13:01-23:59
    barPosition = "저녁";
  }

  const renderMeal = (mealType: string, meal: { 메뉴: string[]; 칼로리: string }) => {
    return (
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-xl">{mealType}</h3>
          <p className="text-[13px] text-gray-500 px-[6px] py-[2px] bg-gray-100 rounded-sm">{meal.칼로리}</p>
        </div>
        <ul className="list-none pl-0 max-w-[300px] w-full md:w-[280px]" style={{ height: '250px' }}>
          {meal.메뉴.length > 2 ? (
            meal.메뉴.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            )) 
          ) : (
            <li className="mb-2">맛있는 집밥!</li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around bg-white shadow-md rounded-lg m-4 p-4">
      <div className="p-4 hover:bg-gray-100 transition-colors duration-100 rounded-sm">
        <div className={`h-2 mb-2 max-w-[312px] w-full md:w-[312px] rounded-[2px] ${barPosition === "아침" ? 'bg-[#3ECF8E]' : 'bg-transparent'}`} />
        {renderMeal("아침", meals.breakfast)}
      </div>
      <div className="p-4 hover:bg-gray-100 transition-colors duration-100 rounded-sm">
        <div className={`h-2 mb-2 max-w-[312px] w-full md:w-[312px] rounded-[2px] ${barPosition === "점심" ? 'bg-[#3ECF8E]' : 'bg-transparent'}`} />
        {renderMeal("점심", meals.lunch)}
      </div>
      <div className="p-4 hover:bg-gray-100 transition-colors duration-100 rounded-sm">
        <div className={`h-2 mb-2 max-w-[312px] w-full md:w-[312px] rounded-[2px] ${barPosition === "저녁" ? 'bg-[#3ECF8E]' : 'bg-transparent'}`} />
        {renderMeal("저녁", meals.dinner)}
      </div>
    </div>
  );
}
