export default function About() {
  return (
    <main className="bg-[var(--background)] min-h-screen text-[var(--foreground)] font-sans flex flex-col items-center px-4 gap-16 pt-8">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-[var(--card-bg)] rounded-3xl shadow-xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight text-center">
          About <span className="text-[#4F8CFF] font-bold drop-shadow-[0_0_8px_rgba(79,140,255,0.3)]">R</span>.<span className="text-[#B3D8FF] font-bold drop-shadow-[0_0_8px_rgba(179,216,255,0.3)]">OT</span>i <span className="text-[#4F8CFF] font-bold drop-shadow-[0_0_8px_rgba(79,140,255,0.3)]">L</span>ab
        </h1>
      </section>

      {/* History Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">우리의 역사</h2>
        <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#4F8CFF] rounded-full flex items-center justify-center text-white font-bold">
                2018
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">RTL Reader To Leader 시작</h3>
                <p className="text-[var(--text-sub)] leading-relaxed">
                  작업치료사들이 함께 책을 읽고 지식을 공유하는 독서모임으로 시작했습니다. 
                  전문성을 높이고 실무에 도움이 되는 내용을 중심으로 활발한 토론과 학습이 이루어졌습니다.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B3D8FF] rounded-full flex items-center justify-center text-white font-bold">
                2020
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">온라인 커뮤니티 확장</h3>
                <p className="text-[var(--text-sub)] leading-relaxed">
                  코로나19 상황을 맞아 온라인으로 활동 영역을 확장했습니다. 
                  더 많은 작업치료사들이 참여할 수 있는 디지털 플랫폼을 구축하기 시작했습니다.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#4F8CFF] rounded-full flex items-center justify-center text-white font-bold">
                2023
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">R.OTi Lab으로 발전</h3>
                <p className="text-[var(--text-sub)] leading-relaxed">
                  단순한 독서모임을 넘어서 작업치료사들을 위한 교육용 웹앱과 게임을 개발하기 시작했습니다. 
                  Rehabilitation + OT + Innovation의 의미를 담아 R.OTi Lab으로 새로운 시작을 했습니다.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B3D8FF] rounded-full flex items-center justify-center text-white font-bold">
                2025
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">빛나는 작업치료사의 지식 실험실</h3>
                <p className="text-[var(--text-sub)] leading-relaxed">
                  현재는 교육용 웹앱, 인지 훈련 게임, 블로그, 커뮤니티를 아우르는 
                  종합적인 작업치료사 플랫폼으로 발전했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">미션</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">지식 공유</h3>
            <p className="text-[var(--text-sub)] leading-relaxed">
              독서모임에서 시작된 지식 공유 문화를 이어가며, 
              작업치료사들이 함께 성장할 수 있는 환경을 만들어갑니다.
            </p>
          </div>
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">기술 혁신</h3>
            <p className="text-[var(--text-sub)] leading-relaxed">
              최신 웹 기술을 활용하여 작업치료사들을 위한 
              혁신적인 교육 도구와 플랫폼을 개발합니다.
            </p>
          </div>
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">커뮤니티 구축</h3>
            <p className="text-[var(--text-sub)] leading-relaxed">
              작업치료사들이 지식을 나누고 협력할 수 있는 
              활발한 커뮤니티를 만들어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">개발 포트폴리오</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 키오스크 훈련 앱 */}
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">키오스크 훈련 시리즈</h3>
            <p className="text-[var(--text-sub)] mb-6 leading-relaxed">
              아동부터 성인까지 다양한 연령대와 상황에 맞춘 키오스크 훈련 웹앱을 개발했습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-sub)]">아동용 키오스크</span>
                <a href="https://order-one-rho.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="text-[#4F8CFF] hover:underline">바로가기</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-sub)]">심화 키오스크</span>
                <a href="https://cafe-two-dusky.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="text-[#4F8CFF] hover:underline">바로가기</a>
              </div>
            </div>
          </div>

          {/* 웹게임 시리즈 */}
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">인지 훈련 게임</h3>
            <p className="text-[var(--text-sub)] mb-6 leading-relaxed">
              작업치료에서 활용할 수 있는 다양한 인지 훈련 웹게임을 개발했습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-sub)]">Memory 게임</span>
                <a href="https://memory-blond-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="text-[#4F8CFF] hover:underline">바로가기</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-sub)]">Stroop 게임</span>
                <a href="https://stroop-pi.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="text-[#4F8CFF] hover:underline">바로가기</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-sub)]">Pencil 게임</span>
                <a href="https://pencil-cyan.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="text-[#4F8CFF] hover:underline">바로가기</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">기술 스택</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React", level: "90%" },
            { name: "Next.js", level: "85%" },
            { name: "TypeScript", level: "80%" },
            { name: "Tailwind CSS", level: "85%" },
            { name: "Node.js", level: "75%" },
            { name: "Vercel", level: "90%" },
            { name: "Git", level: "80%" },
            { name: "Figma", level: "70%" }
          ].map((skill) => (
            <div key={skill.name} className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-[var(--card-border)]">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{skill.name}</h3>
              <div className="w-full bg-[var(--background)] rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#4F8CFF] to-[#B3D8FF] h-2 rounded-full transition-all duration-1000"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="text-sm text-[var(--text-sub)] mt-1">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-[#888] bg-transparent select-none">
        © 2025 R.OTi Lab . All rights reserved.  대표 함형광
      </footer>
    </main>
  );
} 