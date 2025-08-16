import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MessageSquare, Pin, Calendar, User } from "lucide-react";

export function Board() {
  const announcements = [
    {
      id: 1,
      title: "8월 정기 훈련 일정 안내",
      content: "8월 정기 훈련은 매주 화요일, 목요일 오후 7시에 진행됩니다. 모든 멤버의 참석 부탁드립니다.",
      author: "관리자",
      date: "2025-08-01",
      isPinned: true,
      category: "공지사항",
      comments: 5,
    },
    {
      id: 2,
      title: "신규 멤버 환영합니다!",
      content: "이번 달에 새로 가입한 멤버들을 소개합니다. 모두 함께 따뜻하게 맞이해주세요.",
      author: "팀장",
      date: "2025-07-28",
      isPinned: true,
      category: "공지사항",
      comments: 12,
    },
    {
      id: 3,
      title: "다음 경기 응원 가능한 분들?",
      content: "8월 20일 경기에 응원 가능한 멤버들 댓글로 알려주세요!",
      author: "김현수",
      date: "2025-07-25",
      isPinned: false,
      category: "자유게시판",
      comments: 8,
    },
    {
      id: 4,
      title: "풋살화 공동구매 어떠신가요?",
      content: "새로운 풋살화 공동구매를 진행하려고 합니다. 관심 있는 분들은 댓글 남겨주세요.",
      author: "박지민",
      date: "2025-07-22",
      isPinned: false,
      category: "자유게시판",
      comments: 15,
    },
    {
      id: 5,
      title: "팀 회식 장소 추천받습니다",
      content: "다음 주 팀 회식 장소를 추천받고 있습니다. 좋은 곳 아시는 분들은 댓글로 알려주세요!",
      author: "이동훈",
      date: "2025-07-20",
      isPinned: false,
      category: "자유게시판",
      comments: 7,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "공지사항":
        return "bg-red-100 text-red-800";
      case "자유게시판":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "오늘";
    if (diffDays === 2) return "어제";
    if (diffDays <= 7) return `${diffDays - 1}일 전`;
    
    return date.toLocaleDateString("ko-KR", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="board" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="mb-4">게시판</h2>
            <p className="text-muted-foreground">
              팀 소식과 멤버들 간의 소통 공간입니다.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground">
            글 작성하기
          </Button>
        </div>

        <div className="grid gap-6">
          {announcements.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {post.isPinned && (
                      <Pin className="h-4 w-4 text-primary fill-primary" />
                    )}
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </div>
                
                <h3 className="mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments}개의 댓글</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    자세히 보기 →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              이전
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              다음
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}