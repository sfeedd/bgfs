import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Trophy, Target, Users, Star } from "lucide-react";

export function TeamIntro() {
  const history = [
    { year: "2020", event: "B.G Futsal Club 창단" },
    { year: "2021", event: "지역리그 참가 및 3위 입상" },
    { year: "2022", event: "시청컵 대회 우승" },
    { year: "2023", event: "지역리그 챔피언 달성" },
    { year: "2024", event: "전국대회 진출" },
  ];

  const values = [
    {
      icon: Trophy,
      title: "승리",
      description: "끊임없는 노력으로 승리를 추구합니다"
    },
    {
      icon: Users,
      title: "팀워크",
      description: "서로를 믿고 의지하는 진정한 팀"
    },
    {
      icon: Target,
      title: "정확성",
      description: "정확한 패스와 슈팅으로 경기를 지배"
    },
    {
      icon: Star,
      title: "열정",
      description: "풋살에 대한 뜨거운 열정과 사랑"
    }
  ];

  return (
    <section id="team-intro" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 팀 소개 */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-primary-foreground font-bold text-3xl">BG</span>
          </div>
          <h2 className="mb-6">B.G Futsal Club</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            B.G Futsal Club은 2020년에 창단된 아마추어 풋살팀으로, 풋살에 대한 열정과 팀워크를 바탕으로 
            꾸준히 성장해온 팀입니다. 우리는 단순히 경기에서 이기는 것뿐만 아니라, 스포츠맨십과 
            동료애를 중시하며 함께 발전해 나가는 것을 목표로 합니다.
          </p>
        </div>

        {/* 비전과 가치 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>우리의 비전</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                지역을 대표하는 최고의 풋살팀이 되어 전국 무대에서 당당히 경쟁하는 것이 우리의 목표입니다.
              </p>
              <p className="text-muted-foreground">
                모든 선수가 개인의 기량을 향상시키는 동시에 팀의 일원으로서 성장할 수 있는 
                환경을 만들어 나가겠습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>우리의 미션</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                풋살을 통해 건강한 스포츠 문화를 만들고, 지역사회와 함께 성장하는 
                모범적인 스포츠 클럽이 되겠습니다.
              </p>
              <p className="text-muted-foreground">
                페어플레이 정신과 상호 존중을 바탕으로 진정한 스포츠맨십을 실천하겠습니다.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 핵심 가치 */}
        <div className="mb-16">
          <h3 className="text-center mb-8">핵심 가치</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 연혁 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">팀 연혁</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {history.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{item.year}</span>
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}