'use client'

type MealType = {
  메뉴: string[];
  칼로리: string;
}

type MealData = {
  [key: string]: MealType;
}

const mealData = {
  "급식": {
    "조식": {
      "2025-01-13": {
        "메뉴": [
          " ",
          " "
        ],
        "칼로리": " "
      },
      "2025-01-14": {
        "메뉴": [
          "수제소시지구이 (1.2.5.6.10.15.16)",
          "베이글/크림치즈/딸기쨈 (1.2.5.6.13)",
          "시리얼/유기농우유 (2.5.6)",
          "과일(청포도)",
          "누룽지(탐)",
          "주스(망고맛) (13)"
        ],
        "칼로리": "1003.4 Kcal"
      },
      "2025-01-15": {
        "메뉴": [
          "찹쌀밥(탐)아침",
          "쇠고기미역국(탐) (5.6.16)",
          "오이배초무침(탐) (13)",
          "마파두부(탐) (5.6.10.12.13.18)",
          "새우튀김/소스 (1.5.6.9.13)",
          "배추김치(탐) (9)"
        ],
        "칼로리": "880.8 Kcal"
      },
      "2025-01-16": {
        "메뉴": [
          "찹쌀밥(탐)아침",
          "참치김치찌개 (5.9)",
          "*도라지오징어포무침(탐) (5.6.13.17)",
          "도토리묵/양념장 (5.6.13)",
          "*닭다리살데리야끼구이 (5.6.13.15)",
          "배추김치(탐) (9)",
          "요플레(블루베리맛) (2)"
        ],
        "칼로리": "912.8 Kcal"
      },
      "2025-01-17": {
        "메뉴": [
          "소불고기볶음밥 (2.5.6.13.16.18)",
          "*어묵탕 (1.5.6)",
          "청경채겉절이 (5.6.13)",
          "배추김치(탐) (9)",
          "피자소떡(탐) (1.2.5.6.10.12.16.18)",
          "딸기우유 (2)"
        ],
        "칼로리": "877.8 Kcal"
      },
      "2025-01-18": {
        "메뉴": [
          " ",
          " "
        ],
        "칼로리": " "
      },
      "2025-01-19": {
        "메뉴": [
          " ",
          " "
        ],
        "칼로리": " "
      },
      "2025-01-20": {
        "메뉴": [
          " ",
          " "
        ],
        "칼로리": " "
      },
      "2025-01-21": {
        "메뉴": [
          "찹쌀밥(탐)아침",
          "쇠고기무국 (16)",
          "매콤두부조림(탐) (5.6)",
          "미트볼피자소스볶음 (1.2.5.6.10.12.13.15.16)",
          "배추김치(탐) (9)",
          "요구르트(비피더스) (2)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "877.5 Kcal"
      },
      "2025-01-22": {
        "메뉴": [
          "*자장밥 (2.5.6.10.13.16)",
          "짬뽕국(탐) (5.6.8.9.13.17.18)",
          "*오이탕탕이(중국식오이무침) (5.6)",
          "치킨너겟(탐) (1.2.5.6.13.15)",
          "깍두기(탐) (9.13)",
          "과일(파인애플스틱)"
        ],
        "칼로리": "1033.7 Kcal"
      },
      "2025-01-23": {
        "메뉴": [
          "달걀간장비빔밥_아침(탐) (1.5.6)",
          "*호박된장찌개 (5.6)",
          "상추겉절이(탐) (5.6.13)",
          "돼지고기숙주볶음(탐) (5.6.10.13.18)",
          "배추김치(탐) (9)",
          "토핑요거트 (2)"
        ],
        "칼로리": "852.4 Kcal"
      }
    },
    "중식": {
      "2025-01-13": {
        "메뉴": [
          "검정쌀밥(탐)",
          "찹쌀붕어빵 (1.2.5.6)",
          "팽이버섯무된장국(탐) (5.6)",
          "과일요플레샐러드(망,방,배,사)(탐) (1.2.5.12)",
          "새송이브로콜리볶음(탐)! (5)",
          "수제돈가스(탐)! (1.2.5.6.10.12.13.16)",
          "배추김치(탐) (9)"
        ],
        "칼로리": "972.8 Kcal"
      },
      "2025-01-14": {
        "메뉴": [
          "검정쌀밥(탐)",
          "찹쌀붕어빵 (1.2.5.6)",
          "팽이버섯무된장국(탐) (5.6)",
          "과일요플레샐러드(망,방,배,사)(탐) (1.2.5.12)",
          "새송이브로콜리볶음(탐)! (5)",
          "수제돈가스(탐)! (1.2.5.6.10.12.13.16)",
          "배추김치(탐) (9)"
        ],
        "칼로리": "851.8 Kcal"
      },
      "2025-01-15": {
        "메뉴": [
          "검정쌀밥(탐)",
          "찹쌀붕어빵 (1.2.5.6)",
          "팽이버섯무된장국(탐) (5.6)",
          "과일요플레샐러드(망,방,배,사)(탐) (1.2.5.12)",
          "새송이브로콜리볶음(탐)! (5)",
          "수제돈가스(탐)! (1.2.5.6.10.12.13.16)",
          "배추김치(탐) (9)"
        ],
        "칼로리": "994.5 Kcal"
      },
      "2025-01-16": {
        "메뉴": [
          "검정쌀밥(탐)",
          "찹쌀붕어빵 (1.2.5.6)",
          "팽이버섯무된장국(탐) (5.6)",
          "과일요플레샐러드(망,방,배,사)(탐) (1.2.5.12)",
          "새송이브로콜리볶음(탐)! (5)",
          "수제돈가스(탐)! (1.2.5.6.10.12.13.16)",
          "배추김치(탐) (9)"
        ],
        "칼로리": "852.1 Kcal"
      },
      "2025-01-17": {
        "메뉴": [
          "검정쌀밥(탐)",
          "찹쌀붕어빵 (1.2.5.6)",
          "팽이버섯무된장국(탐) (5.6)",
          "과일요플레샐러드(망,방,배,사)(탐) (1.2.5.12)",
          "새송이브로콜리볶음(탐)! (5)",
          "수제돈가스(탐)! (1.2.5.6.10.12.13.16)",
          "배추김치(탐) (9)"
        ],
        "칼로리": "846.2 Kcal"
      },
      "2025-01-18": {
        "메뉴": [
          "검정쌀밥(탐)",
          "찹쌀붕어빵 (1.2.5.6)",
          "팽이버섯무된장국(탐) (5.6)",
          "과일요플레샐러드(망,방,배,사)(탐) (1.2.5.12)",
          "새송이브로콜리볶음(탐)! (5)",
          "수제돈가스(탐)! (1.2.5.6.10.12.13.16)",
          "배추김치(탐) (9)"
        ],
        "칼로리": "2100 Kcal"
      }
    },
    "석식": {
      "2025-01-02": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9.13)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "500 Kcal"
      },
      "2025-01-03": {
        "메뉴": [
          "양지쌀국수 (5.6.15.16.18)",
          "새우튀김/타르타르 (1.5.6.9.13)",
          "배추김치(탐) (9)",
          "양배추샐러드(참깨D)(탐) (1.5.6.13)",
          "착즙사과주스 (13)"
        ],
        "칼로리": "600 Kcal"
      },
      "2025-01-04": {
        "메뉴": [
          "닭갈비볶음밥(탐) (2.5.6.9.12.13.15.16.18)",
          "맑은콩나물국 (5)",
          "도토리묵/양념장 (5.6.13)",
          "배추김치(탐) (9)",
          "치즈화덕피자 (1.2.5.6.10.12.13.15.16)",
          "착즙사과주스 (13)"
        ],
        "칼로리": "700 Kcal"
      },
      "2025-01-05": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "800 Kcal"
      },
      "2025-01-06": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "900 Kcal"
      },
      "2025-01-07": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1000 Kcal"
      },
      "2025-01-08": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1100 Kcal"
      },
      "2025-01-09": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1200 Kcal"
      },
      "2025-01-10": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1300 Kcal"
      },
      "2025-01-11": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1400 Kcal"
      },
      "2025-01-12": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1500 Kcal"
      },
      "2025-01-13": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "964.2 Kcal"
      },
      "2025-01-14": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "896.7 Kcal"
      },
      "2025-01-15": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1090.5 Kcal"
      },
      "2025-01-16": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "1131.9 Kcal"
      },
      "2025-01-17": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "846.2 Kcal"
      },
      "2025-01-18": {
        "메뉴": [
          "김가루김치볶음밥(탐) (5.6.9.10.13.18)",
          "팽이버섯두부미소국(탐) (5.6)",
          "멸치아몬드볶음 (5.6.13)",
          "치즈돈까스 (1.2.5.6.10.12.13.16)",
          "깍두기(탐) (9)",
          "친환경감귤주스(탐) (13)",
          "치커리사과유자무침 (13)"
        ],
        "칼로리": "2100 Kcal"
      }
    }
  }
}

export default function MealSection() {
  const today = new Date(new Date().getTime() + (9 * 60 * 60 * 1000))
    .toISOString()
    .split('T')[0];
  const breakfast = (mealData.급식.조식 as MealData)[today] || { 메뉴: [], 칼로리: " " };
  const lunch = (mealData.급식.중식 as MealData)[today] || { 메뉴: [], 칼로리: " " };
  const dinner = (mealData.급식.석식 as MealData)[today] || { 메뉴: [], 칼로리: " " };

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
        {renderMeal("아침", breakfast)}
      </div>
      <div className="p-4 hover:bg-gray-100 transition-colors duration-100 rounded-sm">
        <div className={`h-2 mb-2 max-w-[312px] w-full md:w-[312px] rounded-[2px] ${barPosition === "점심" ? 'bg-[#3ECF8E]' : 'bg-transparent'}`} />
        {renderMeal("점심", lunch)}
      </div>
      <div className="p-4 hover:bg-gray-100 transition-colors duration-100 rounded-sm">
        <div className={`h-2 mb-2 max-w-[312px] w-full md:w-[312px] rounded-[2px] ${barPosition === "저녁" ? 'bg-[#3ECF8E]' : 'bg-transparent'}`} />
        {renderMeal("저녁", dinner)}
      </div>
    </div>
  );
}
