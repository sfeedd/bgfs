import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">문의하기</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            궁금한 점이 있으시거나 팀에 관심이 있으시면 언제든지 연락해주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-6">연락처 정보</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">주소</h4>
                    <p className="text-muted-foreground">
                      스포츠 컴플렉스 A<br />
                      서울시 강남구 테헤란로 123<br />
                      서울 06234
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">전화번호</h4>
                    <p className="text-muted-foreground">010-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">이메일</h4>
                    <p className="text-muted-foreground">info@bgfutsal.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">카카오톡 채널</h4>
                    <p className="text-muted-foreground mb-2">@BGFutsalClub</p>
                    <Button variant="outline" size="sm" className="bg-yellow-400 border-yellow-400 text-black hover:bg-yellow-500">
                      카카오톡으로 문의하기
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">훈련 일정</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>화요일, 목요일: 오후 7시 - 9시</p>
                      <p>토요일: 오전 10시 - 12시</p>
                      <p>일요일: 휴무</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SNS 연결 */}
            <Card>
              <CardHeader>
                <CardTitle>SNS에서 만나요</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  팀의 최신 소식과 경기 하이라이트를 SNS에서 확인하세요!
                </p>
              </CardContent>
            </Card>

            {/* 관리진 정보 */}
            <Card>
              <CardHeader>
                <CardTitle>관리진 연락처</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">팀장: 김현수</h4>
                    <p className="text-muted-foreground text-sm">전화: 010-1111-2222</p>
                    <p className="text-muted-foreground text-sm">이메일: captain@bgfutsal.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium">총무: 박지민</h4>
                    <p className="text-muted-foreground text-sm">전화: 010-3333-4444</p>
                    <p className="text-muted-foreground text-sm">이메일: manager@bgfutsal.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 문의 폼 */}
          <Card>
            <CardHeader>
              <CardTitle>온라인 문의</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">이름</Label>
                    <Input id="firstName" placeholder="성함을 입력해주세요" />
                  </div>
                  <div>
                    <Label htmlFor="phone">연락처</Label>
                    <Input id="phone" type="tel" placeholder="전화번호를 입력해주세요" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="이메일 주소를 입력해주세요" />
                </div>

                <div>
                  <Label htmlFor="subject">문의 유형</Label>
                  <select 
                    id="subject" 
                    className="w-full p-2 border border-border rounded-md bg-input-background"
                  >
                    <option value="">문의 유형을 선택해주세요</option>
                    <option value="join">가입 문의</option>
                    <option value="training">훈련 문의</option>
                    <option value="match">경기 문의</option>
                    <option value="general">일반 문의</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">문의 내용</Label>
                  <Textarea 
                    id="message" 
                    placeholder="궁금한 점을 자세히 적어주세요..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground">
                  문의하기
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>답변 시간:</strong> 평일 24시간 이내, 주말 48시간 이내에 답변드립니다.
                  급한 문의사항은 카카오톡 채널을 이용해주세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}