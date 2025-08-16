import { Button } from "../ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1680537732560-7dd5f9b1ed53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBpbmRvb3IlMjBzb2NjZXJ8ZW58MXx8fHwxNzU1MjIzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Futsal court"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              B.G Futsal Club
            </h1>
            <p className="text-xl mb-8 text-white/90">
              2020년부터 풋살 코트를 지배해온 우리 팀과 함께 지역 최고의 풋살팀이 되어가는 여정에 동참하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                팀 가입하기
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                하이라이트 보기
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="font-medium">리그 챔피언</p>
                  <p className="text-sm text-white/70">2023 시즌</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="font-medium">다음 경기</p>
                  <p className="text-sm text-white/70">8월 20일 오후 7시</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-green-400" />
                <div>
                  <p className="font-medium">홈 구장</p>
                  <p className="text-sm text-white/70">스포츠 컴플렉스 A</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-white mb-6">시즌 통계</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15</div>
                <div className="text-white/70">승</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-white/70">패</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">42</div>
                <div className="text-white/70">득점</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">18</div>
                <div className="text-white/70">무실점</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}