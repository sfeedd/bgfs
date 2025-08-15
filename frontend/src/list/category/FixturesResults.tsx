import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export function FixturesResults() {
  const upcomingFixtures = [
    {
      id: 1,
      opponent: "번개 FC",
      date: "2025-08-20",
      time: "19:00",
      venue: "스포츠 컴플렉스 A",
      isHome: true,
    },
    {
      id: 2,
      opponent: "스톰 유나이티드",
      date: "2025-08-27",
      time: "20:30",
      venue: "시티 아레나",
      isHome: false,
    },
    {
      id: 3,
      opponent: "파이어 호크스",
      date: "2025-09-03",
      time: "18:00",
      venue: "스포츠 컴플렉스 A",
      isHome: true,
    },
  ];

  const recentResults = [
    {
      id: 1,
      opponent: "이글 FC",
      date: "2025-08-13",
      homeScore: 4,
      awayScore: 2,
      isHome: true,
      result: "win",
    },
    {
      id: 2,
      opponent: "울브스 유나이티드",
      date: "2025-08-06",
      homeScore: 1,
      awayScore: 3,
      isHome: false,
      result: "loss",
    },
    {
      id: 3,
      opponent: "팬더스 FC",
      date: "2025-07-30",
      homeScore: 3,
      awayScore: 3,
      isHome: true,
      result: "draw",
    },
    {
      id: 4,
      opponent: "타이거스 유나이티드",
      date: "2025-07-23",
      homeScore: 5,
      awayScore: 1,
      isHome: true,
      result: "win",
    },
  ];

  const getResultBadge = (result: string) => {
    switch (result) {
      case "win":
        return <Badge className="bg-green-100 text-green-800">승</Badge>;
      case "loss":
        return <Badge className="bg-red-100 text-red-800">패</Badge>;
      case "draw":
        return <Badge className="bg-yellow-100 text-yellow-800">무</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 예정된 경기 */}
          <Card id="fixtures">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                예정된 경기
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingFixtures.map((fixture) => (
                  <div
                    key={fixture.id}
                    className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">
                          {fixture.isHome ? "B.G FC" : fixture.opponent} vs{" "}
                          {fixture.isHome ? fixture.opponent : "B.G FC"}
                        </h4>
                        {fixture.isHome && (
                          <Badge variant="outline" className="text-xs">
                            홈
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(fixture.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {fixture.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {fixture.venue}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 최근 결과 */}
          <Card id="results">
            <CardHeader>
              <CardTitle>최근 경기 결과</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentResults.map((result) => (
                  <div
                    key={result.id}
                    className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium">
                          {result.isHome ? "B.G FC" : result.opponent} vs{" "}
                          {result.isHome ? result.opponent : "B.G FC"}
                        </h4>
                        {getResultBadge(result.result)}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {result.isHome 
                            ? `${result.homeScore} - ${result.awayScore}`
                            : `${result.awayScore} - ${result.homeScore}`
                          }
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {formatDate(result.date)}
                      {result.isHome && (
                        <Badge variant="outline" className="text-xs ml-2">
                          홈
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}