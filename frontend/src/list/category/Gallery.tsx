import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Play, Calendar, Camera } from "lucide-react";

export function Gallery() {
  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "2023 시즌 우승 순간",
      date: "2023-12-15",
      category: "경기",
      image: "https://images.unsplash.com/photo-1551390415-0de411440ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1MTgwNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      type: "video",
      title: "팀 하이라이트 영상",
      date: "2024-01-20",
      category: "하이라이트",
      image: "https://images.unsplash.com/photo-1680537732560-7dd5f9b1ed53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBpbmRvb3IlMjBzb2NjZXJ8ZW58MXx8fHwxNzU1MjIzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      type: "image",
      title: "신년 팀 회식",
      date: "2024-01-15",
      category: "팀 행사",
      image: "https://images.unsplash.com/photo-1581588535512-4dbe198fbbee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtJTIwbGlnaHRzfGVufDF8fHx8MTc1NTIyMzAyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      type: "image",
      title: "훈련 중인 모습",
      date: "2024-02-10",
      category: "훈련",
      image: "https://images.unsplash.com/photo-1677119966332-8c6e9fb0efab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzU1MjIzMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      type: "video",
      title: "최고의 골 모음",
      date: "2024-03-05",
      category: "하이라이트",
      image: "https://images.unsplash.com/photo-1680537732560-7dd5f9b1ed53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBpbmRvb3IlMjBzb2NjZXJ8ZW58MXx8fHwxNzU1MjIzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      type: "image",
      title: "팀 단체 사진",
      date: "2024-04-01",
      category: "팀 행사",
      image: "https://images.unsplash.com/photo-1551390415-0de411440ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1MTgwNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "경기":
        return "bg-green-100 text-green-800";
      case "하이라이트":
        return "bg-blue-100 text-blue-800";
      case "팀 행사":
        return "bg-purple-100 text-purple-800";
      case "훈련":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">갤러리</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            B.G Futsal Club의 소중한 순간들을 사진과 영상으로 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Media Type Icon */}
                <div className="absolute top-4 left-4">
                  {item.type === "video" ? (
                    <div className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center">
                      <Play className="h-5 w-5 text-white fill-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {formatDate(item.date)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            더 많은 미디어 보기 →
          </button>
        </div>
      </div>
    </section>
  );
}