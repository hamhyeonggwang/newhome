export default function About() {
  return (
    <main className="bg-[var(--background)] min-h-screen text-[var(--foreground)] font-sans flex flex-col items-center px-4 gap-16 pt-8">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-[var(--card-bg)] rounded-3xl shadow-xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight text-center">
          About R.OTi Lab
        </h1>
        <p className="text-xl text-[var(--text-sub)] text-center max-w-3xl leading-relaxed">
          빛나는 작업치료사의 지식 실험실에서 혁신적인 교육 도구와 커뮤니티를 만들어갑니다.
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">미션</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">교육 혁신</h3>
            <p className="text-[var(--text-sub)] leading-relaxed">
              작업치료사와 학생들을 위한 혁신적인 교육용 웹앱을 개발하여 
              실무 능력 향상에 기여합니다.
            </p>
          </div>
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">커뮤니티 구축</h3>
            <p className="text-[var(--text-sub)] leading-relaxed">
              작업치료사들이 지식을 공유하고 협력할 수 있는 
              활발한 커뮤니티를 만들어갑니다.
            </p>
          </div>
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">기술 융합</h3>
            <p className="text-[var(--text-sub)] leading-relaxed">
              최신 기술과 작업치료를 융합하여 
              새로운 가능성을 탐구합니다.
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