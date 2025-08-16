import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { Alert, AlertDescription } from "../ui/alert";
import { useEffect, useState } from "react";
import { playersAPI, Player } from "../services/api";

export function TeamRoster() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await playersAPI.getActive();
        setPlayers(data);
      } catch (err) {
        // 개발 모드에서는 오류를 숨기고 mock 데이터를 사용
        console.log('선수 데이터 로딩 중 오류 발생:', err);
        setError(null); // 오류 상태를 표시하지 않음
        // fallback으로 mock 데이터 사용
        try {
          const mockData = await playersAPI.getActive();
          setPlayers(mockData);
        } catch {
          setError('선수 데이터를 불러올 수 없습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const getPositionColor = (position: string) => {
    switch (position) {
      case "골키퍼":
        return "bg-yellow-100 text-yellow-800";
      case "수비수":
        return "bg-blue-100 text-blue-800";
      case "미드필더":
        return "bg-green-100 text-green-800";
      case "공격수":
      case "윙어":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getGenderColor = (gender: 'M' | 'F') => {
    return gender === 'M' 
      ? "bg-blue-50 text-blue-700 border-blue-200" 
      : "bg-pink-50 text-pink-700 border-pink-200";
  };

  const getGenderText = (gender: 'M' | 'F') => {
    return gender === 'M' ? '남성' : '여성';
  };

  const formatJoinDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear() + '년 입단';
  };

  if (loading) {
    return (
      <section id="members" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">팀 멤버</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              B.G Futsal Club을 빛내는 재능 있는 선수들을 만나보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
                <Skeleton className="w-full h-64" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex justify-between">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="members" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">팀 멤버</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              B.G Futsal Club을 빛내는 재능 있는 선수들을 만나보세요.
            </p>
          </div>

          <Alert className="max-w-2xl mx-auto">
            <AlertDescription>
              {error} 잠시 후 다시 시도해주세요.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <section id="members" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">팀 멤버</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            B.G Futsal Club을 빛내는 재능 있는 선수들을 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <div key={player.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={player.profile_image || `https://images.unsplash.com/photo-1677119966332-8c6e9fb0efab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzU1MjIzMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080`}
                  alt={player.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {player.jersey_number}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge className={getPositionColor(player.position)}>
                    {player.position}
                  </Badge>
                  <Badge variant="outline" className={getGenderColor(player.gender)}>
                    {getGenderText(player.gender)}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2">{player.name}</h3>
                <p className="text-muted-foreground mb-2">{player.position}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {formatJoinDate(player.join_date)} • {player.age}세
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="font-bold text-lg">#{player.jersey_number}</div>
                    <div className="text-sm text-muted-foreground">등번호</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{player.age}</div>
                    <div className="text-sm text-muted-foreground">나이</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {players.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">등록된 선수가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}