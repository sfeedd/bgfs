import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { UserPlus, CheckCircle, Users, Calendar } from "lucide-react";

export function JoinApplication() {
  const requirements = [
    "만 16세 이상",
    "풋살에 대한 기본적인 이해",
    "정기 훈련 참여 가능",
    "팀워크와 스포츠맨십 중시",
    "주 2회 이상 훈련 참석 가능"
  ];

  const benefits = [
    "전문적인 풋살 훈련 프로그램",
    "정기 경기 참가 기회",
    "팀 유니폼 및 장비 지원",
    "팀 행사 및 회식 참여",
    "실력 향상을 위한 개별 코칭"
  ];

  return (
    <section id="join" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">멤버 가입 신청</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            B.G Futsal Club과 함께 성장하고 싶은 분들의 가입을 환영합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 가입 조건 및 혜택 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  가입 조건
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  멤버 혜택
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  훈련 일정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>정기 훈련:</strong> 화요일, 목요일 오후 7-9시</p>
                  <p><strong>주말 훈련:</strong> 토요일 오전 10-12시</p>
                  <p><strong>장소:</strong> 스포츠 컴플렉스 A</p>
                  <p><strong>월 회비:</strong> 50,000원</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 신청 폼 */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  가입 신청서
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" placeholder="성함을 입력해주세요" />
                    </div>
                    <div>
                      <Label htmlFor="age">나이 *</Label>
                      <Input id="age" type="number" placeholder="만 나이" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gender">성별 *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="성별을 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">남성</SelectItem>
                          <SelectItem value="female">여성</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="position">선호 포지션</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="포지션을 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="goalkeeper">골키퍼</SelectItem>
                          <SelectItem value="defender">수비수</SelectItem>
                          <SelectItem value="midfielder">미드필더</SelectItem>
                          <SelectItem value="forward">공격수</SelectItem>
                          <SelectItem value="any">상관없음</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" type="tel" placeholder="010-0000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="email">이메일 *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">풋살 경험</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="경험 수준을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">초보자 (1년 미만)</SelectItem>
                        <SelectItem value="intermediate">중급자 (1-3년)</SelectItem>
                        <SelectItem value="advanced">상급자 (3년 이상)</SelectItem>
                        <SelectItem value="professional">프로 수준</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="motivation">가입 동기</Label>
                    <Textarea
                      id="motivation"
                      placeholder="B.G Futsal Club에 가입하고 싶은 이유를 간단히 작성해주세요..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability">참여 가능 시간</Label>
                    <Textarea
                      id="availability"
                      placeholder="정기 훈련 참여 가능 여부와 시간을 알려주세요..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        개인정보 수집 및 이용에 동의합니다 *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rules" />
                      <Label htmlFor="rules" className="text-sm">
                        팀 규칙 및 운영 방침에 동의합니다 *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground" size="lg">
                    가입 신청하기
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>안내사항:</strong> 가입 신청서 제출 후 3-5일 내에 연락드리겠습니다. 
                    추가 문의사항이 있으시면 아래 문의하기 섹션을 이용해주세요.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}