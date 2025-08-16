// Django API 서비스

// 선수 데이터 타입 정의
export interface Player {
  id: number;
  name: string;
  position: string;
  jersey_number: number;
  age: number;
  gender: 'M' | 'F';
  profile_image?: string;
  join_date: string;
  phone?: string;
  email?: string;
  is_active: boolean;
}

// API 기본 설정 - 브라우저 환경에서 안전하게 접근
const getApiBaseUrl = (): string => {
  // 환경 변수가 없는 경우를 대비한 안전한 접근
  try {
    return (typeof process !== 'undefined' && process.env?.REACT_APP_DJANGO_API_URL) || 'http://localhost:8000/api';
  } catch {
    return 'http://localhost:8000/api';
  }
};

const API_BASE_URL = getApiBaseUrl();

// 개발 모드에서 mock 데이터를 우선 사용할지 결정
const USE_MOCK_DATA = true; // 개발 단계에서는 true로 설정

// 타임아웃을 포함한 fetch 래퍼
const fetchWithTimeout = async (url: string, options: RequestInit = {}, timeout = 5000): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// API 연결 테스트 함수
const testAPIConnection = async (): Promise<boolean> => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/players/`, {}, 3000);
    return response.ok;
  } catch {
    return false;
  }
};

// Mock 데이터 (Django API가 준비되지 않은 경우 사용)
function getMockPlayers(): Player[] {
  return [
    {
      id: 1,
      name: "김민수",
      position: "골키퍼",
      jersey_number: 1,
      age: 28,
      gender: 'M',
      profile_image: undefined,
      join_date: "2020-03-15",
      phone: "010-1234-5678",
      email: "minsu.kim@email.com",
      is_active: true
    },
    {
      id: 2,
      name: "박지훈",
      position: "수비수",
      jersey_number: 3,
      age: 26,
      gender: 'M',
      profile_image: undefined,
      join_date: "2020-08-20",
      phone: "010-2345-6789",
      email: "jihun.park@email.com",
      is_active: true
    },
    {
      id: 3,
      name: "이성호",
      position: "미드필더",
      jersey_number: 8,
      age: 24,
      gender: 'M',
      profile_image: undefined,
      join_date: "2021-01-10",
      phone: "010-3456-7890",
      email: "sungho.lee@email.com",
      is_active: true
    },
    {
      id: 4,
      name: "최준영",
      position: "공격수",
      jersey_number: 10,
      age: 23,
      gender: 'M',
      profile_image: undefined,
      join_date: "2021-05-22",
      phone: "010-4567-8901",
      email: "junyoung.choi@email.com",
      is_active: true
    },
    {
      id: 5,
      name: "강태우",
      position: "윙어",
      jersey_number: 7,
      age: 25,
      gender: 'M',
      profile_image: undefined,
      join_date: "2021-09-15",
      phone: "010-5678-9012",
      email: "taewoo.kang@email.com",
      is_active: true
    },
    {
      id: 6,
      name: "임수빈",
      position: "수비수",
      jersey_number: 4,
      age: 27,
      gender: 'M',
      profile_image: undefined,
      join_date: "2020-11-30",
      phone: "010-6789-0123",
      email: "subin.lim@email.com",
      is_active: true
    },
    {
      id: 7,
      name: "윤도현",
      position: "미드필더",
      jersey_number: 6,
      age: 22,
      gender: 'M',
      profile_image: undefined,
      join_date: "2022-02-14",
      phone: "010-7890-1234",
      email: "dohyun.yoon@email.com",
      is_active: true
    },
    {
      id: 8,
      name: "서민재",
      position: "공격수",
      jersey_number: 9,
      age: 29,
      gender: 'M',
      profile_image: undefined,
      join_date: "2020-06-18",
      phone: "010-8901-2345",
      email: "minjae.seo@email.com",
      is_active: true
    }
  ];
}

// API 호출 함수들
export const playersAPI = {
  // 모든 선수 목록 가져오기
  getAll: async (): Promise<Player[]> => {
    // 개발 모드에서 mock 데이터 우선 사용
    if (USE_MOCK_DATA) {
      console.log('개발 모드: Mock 데이터를 사용합니다.');
      return getMockPlayers();
    }

    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/players/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.log('API 요청 타임아웃: Mock 데이터를 사용합니다.');
        } else if (error.message.includes('Failed to fetch')) {
          console.log('Django 서버에 연결할 수 없습니다. Mock 데이터를 사용합니다.');
        } else {
          console.log('API 오류:', error.message, '- Mock 데이터를 사용합니다.');
        }
      }
      // Django API가 준비되지 않은 경우 mock 데이터 반환
      return getMockPlayers();
    }
  },

  // 특정 선수 정보 가져오기
  getById: async (id: number): Promise<Player | null> => {
    // 개발 모드에서 mock 데이터 우선 사용
    if (USE_MOCK_DATA) {
      const mockPlayers = getMockPlayers();
      return mockPlayers.find(player => player.id === id) || null;
    }

    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/players/${id}/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log('선수 정보를 가져올 수 없습니다:', error);
      // Mock 데이터에서 해당 선수 찾기
      const mockPlayers = getMockPlayers();
      return mockPlayers.find(player => player.id === id) || null;
    }
  },

  // 활성 선수만 가져오기
  getActive: async (): Promise<Player[]> => {
    // 개발 모드에서 mock 데이터 우선 사용
    if (USE_MOCK_DATA) {
      console.log('개발 모드: 활성 선수 Mock 데이터를 사용합니다.');
      return getMockPlayers().filter(player => player.is_active);
    }

    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/players/?is_active=true`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.log('API 요청 타임아웃: 활성 선수 Mock 데이터를 사용합니다.');
        } else if (error.message.includes('Failed to fetch')) {
          console.log('Django 서버에 연결할 수 없습니다. 활성 선수 Mock 데이터를 사용합니다.');
        } else {
          console.log('활성 선수 API 오류:', error.message, '- Mock 데이터를 사용합니다.');
        }
      }
      return getMockPlayers().filter(player => player.is_active);
    }
  },

  // API 연결 상태 확인
  checkConnection: testAPIConnection
};

// 에러 처리를 위한 헬퍼 함수
export function isAPIError(error: any): error is Error {
  return error instanceof Error;
}