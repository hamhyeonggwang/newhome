import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[var(--background)] min-h-screen text-[var(--foreground)] font-sans flex flex-col items-center px-4 gap-32">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center gap-6 py-32 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl shadow-xl mb-10 animate-fadein">
        <div className="bg-blue-300/80 rounded-2xl px-10 py-4 shadow-2xl">
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight drop-shadow-[0_4px_24px_rgba(80,80,80,0.18)] text-[#F8F6F0]">
            R.OTi Lab
          </h1>
        </div>
        <p className="text-3xl sm:text-4xl font-bold text-[#B0B3B8] mt-2 drop-shadow">빛나는 작업치료사의 지식연구소</p>
        <p className="text-xl sm:text-2xl text-[var(--text-sub)] mt-4 font-semibold leading-relaxed text-center max-w-2xl">IT와 작업치료의 만남, 교육과 커뮤니티를 한 곳에.<br/>전문성과 따뜻함을 모두 담은 공간입니다.</p>
      </section>

      {/* Apps & Community Section */}
      <section className="w-full max-w-6xl flex flex-col items-center gap-14 bg-[var(--background)]">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-[#B0B3B8]">교육용 웹앱</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 w-full">
          {/* 키오스크 훈련(아동용) */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-t-3xl rounded-b-xl flex flex-col items-center justify-between p-10 min-h-64 shadow-2xl border border-[var(--card-border)] transition hover:shadow-blue-200 hover:scale-105 duration-200">
            {/* 상단 동그라미 */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#B0B3B8] rounded-full shadow"></div>
            <h3 className="text-2xl font-extrabold text-[#232323] mb-3 mt-4">키오스크 훈련(아동용)</h3>
            <p className="text-lg text-[var(--text-sub)] mb-6 text-center leading-relaxed">실제 키오스크를 아동 눈높이에 맞춰 연습할 수 있는 웹앱</p>
            <a href="https://order-one-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold shadow hover:opacity-90 hover:shadow-blue-200 transition text-lg">바로가기</a>
          </div>
          {/* 키오스크 훈련(심화) */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-t-3xl rounded-b-xl flex flex-col items-center justify-between p-10 min-h-64 shadow-2xl border border-[var(--card-border)] transition hover:shadow-blue-200 hover:scale-105 duration-200">
            {/* 상단 동그라미 */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#B0B3B8] rounded-full shadow"></div>
            <h3 className="text-2xl font-extrabold text-[#232323] mb-3 mt-4">키오스크 훈련(심화)</h3>
            <p className="text-lg text-[var(--text-sub)] mb-6 text-center leading-relaxed">다양한 상황별 키오스크 주문/결제 심화 훈련 웹앱</p>
            <a href="https://cafe-two-dusky.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold shadow hover:opacity-90 hover:shadow-blue-200 transition text-lg">바로가기</a>
          </div>
          {/* 새 교육용 앱(Coming Soon) */}
          <div className="relative bg-white/70 backdrop-blur-md rounded-t-3xl rounded-b-xl flex flex-col items-center justify-between p-10 min-h-64 shadow-2xl border border-[var(--card-border)] opacity-60 transition hover:shadow-blue-200 hover:scale-105 duration-200">
            {/* 상단 동그라미 */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#B0B3B8] rounded-full shadow"></div>
            <h3 className="text-2xl font-extrabold text-[#B0B3B8] mb-3 mt-4 animate-pulse">새 교육용 앱</h3>
            <button disabled className="mt-auto px-6 py-3 rounded-full bg-gray-200 text-gray-500 font-bold cursor-not-allowed text-lg">Coming Soon</button>
          </div>
        </div>
      </section>

      {/* 웹게임 섹션 */}
      <section className="w-full max-w-4xl flex flex-col items-center gap-6 mt-20 bg-[var(--background)]">
        <h2 className="text-4xl font-extrabold mb-2 text-[#B0B3B8] tracking-tight">웹게임</h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* 첫 번째 웹게임: Memory */}
          <a href="https://memory-blond-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" className="aspect-square bg-white rounded-2xl dark:bg-[#232323] flex flex-col items-center justify-center shadow border border-[var(--card-border)] dark:border-[#444] hover:shadow-blue-200 hover:scale-105 transition group">
            <img src="/memory-thumb.png" alt="Memory Game" className="w-2/3 h-2/3 object-contain mb-2 rounded-xl shadow group-hover:shadow-lg" />
            <span className="text-[#232323] dark:text-[#F4F9FF] font-bold text-base mt-1">Memory 게임</span>
          </a>
          {/* 나머지 19개: Coming Soon */}
          {Array.from({ length: 19 }).map((_, i) => (
            <div key={i} className="aspect-square bg-white/80 dark:bg-[#232323]/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow border border-[var(--card-border)] dark:border-[#444] opacity-60 text-[#B0B3B8] dark:text-[#F4F9FF] font-extrabold text-lg animate-pulse">
              Coming Soon
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-4xl flex flex-col items-center gap-6 mt-20 bg-[var(--background)]">
        <h2 className="text-4xl font-extrabold mb-2 text-[#B0B3B8] tracking-tight">About</h2>
        <div className="h-40 w-full bg-white/80 dark:bg-[#232323]/80 backdrop-blur-md rounded-3xl flex items-center justify-center text-2xl font-bold text-[var(--text-sub)] dark:text-[#F4F9FF] border border-[var(--card-border)] dark:border-[#444] shadow-xl p-8 text-center">
          <span className="text-xl font-semibold text-[#232323] dark:text-[#F4F9FF]">
            R.OTi Lab은 작업치료와 IT, AI의 융합을 실험하는 지식연구소입니다.<br/>
            AI 기반 웹게임 개발과, 작업치료사 실무에 도움이 되는 AI 활용법을<br/>
            함께 연구하고 자유롭게 나누는 커뮤니티를 지향합니다.
          </span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl flex flex-col items-center gap-6 mt-12 mb-32 bg-[var(--background)]">
        <h2 className="text-4xl font-extrabold mb-2 text-[#B0B3B8] tracking-tight">Contact</h2>
        <div className="h-24 w-full bg-white/80 dark:bg-[#232323]/80 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center gap-2 text-2xl font-bold text-[var(--text-sub)] dark:text-[#F4F9FF] border border-[var(--card-border)] dark:border-[#444] shadow-xl p-6">
          <div className="flex items-center gap-3 text-lg font-semibold text-[#232323] dark:text-[#F4F9FF]">
            <a href="mailto:h2g0614@gmail.com" className="underline hover:text-blue-500 dark:hover:text-blue-300">h2g0614@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-lg font-semibold text-[#232323] dark:text-[#F4F9FF]">
            <a href="https://instagram.com/starlight_daddy" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500 dark:hover:text-blue-300">@starlight_daddy</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-[#888] dark:text-[#bbb] bg-transparent select-none">
        © 2024 R.OTi Lab. All rights reserved.
      </footer>
    </main>
  );
}
