import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "카카오톡", icon: MessageCircle, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  const quickLinks = [
    { name: "홈", href: "#home" },
    { name: "팀 소개", href: "#team-intro" },
    { name: "멤버", href: "#members" },
    { name: "갤러리", href: "#gallery" },
    { name: "게시판", href: "#board" },
    { name: "가입 신청", href: "#join" },
    { name: "문의하기", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 설명 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold">BG</span>
              </div>
              <div>
                <h3 className="font-bold">B.G Futsal Club</h3>
                <p className="text-sm text-primary-foreground/70">설립 2020</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              열정과 기술, 팀워크로 풋살 세계를 정복해나가는 B.G Futsal Club과 함께 성장의 여정에 동참하세요.
            </p>
            
            {/* SNS 링크 */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-medium mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="font-medium mb-4">연락처</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>스포츠 컴플렉스 A</p>
              <p>서울시 강남구 테헤란로 123</p>
              <p>서울 06234</p>
              <p className="mt-4">010-1234-5678</p>
              <p>info@bgfutsal.com</p>
              <p className="mt-2">카카오톡: @BGFutsalClub</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 B.G Futsal Club. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}