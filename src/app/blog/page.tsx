export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "키오스크 훈련 앱 개발 과정",
      excerpt: "작업치료에서 활용할 수 있는 키오스크 훈련 웹앱을 개발하면서 겪은 경험과 배운 점들을 공유합니다.",
      image: "/blog/kiosk-dev.jpg",
      date: "2025-01-15",
      category: "개발일기",
      readTime: "5분"
    },
    {
      id: 2,
      title: "인지 훈련 게임의 효과",
      excerpt: "Memory, Stroop, Pencil 게임을 통해 작업치료에서 인지 능력 향상을 도울 수 있는 방법을 알아봅니다.",
      image: "/blog/cognitive-games.jpg",
      date: "2025-01-10",
      category: "연구",
      readTime: "8분"
    },
    {
      id: 3,
      title: "작업치료사와 기술 융합",
      excerpt: "최신 웹 기술을 작업치료에 접목시켜 새로운 가능성을 탐구하는 과정을 소개합니다.",
      image: "/blog/tech-ot.jpg",
      date: "2025-01-05",
      category: "기술",
      readTime: "6분"
    },
    {
      id: 4,
      title: "커뮤니티 구축의 중요성",
      excerpt: "작업치료사들이 지식을 공유하고 협력할 수 있는 커뮤니티의 중요성과 구축 방안을 다룹니다.",
      image: "/blog/community.jpg",
      date: "2024-12-28",
      category: "커뮤니티",
      readTime: "7분"
    },
    {
      id: 5,
      title: "웹앱 개발 팁과 노하우",
      excerpt: "작업치료사가 웹앱을 개발할 때 알아두면 좋은 기술적 팁과 노하우를 공유합니다.",
      image: "/blog/dev-tips.jpg",
      date: "2024-12-20",
      category: "개발팁",
      readTime: "10분"
    },
    {
      id: 6,
      title: "AI와 작업치료의 미래",
      excerpt: "인공지능 기술이 작업치료 분야에 미칠 영향과 새로운 가능성에 대해 탐구합니다.",
      image: "/blog/ai-future.jpg",
      date: "2024-12-15",
      category: "미래기술",
      readTime: "12분"
    }
  ];

  return (
    <main className="bg-[var(--background)] min-h-screen text-[var(--foreground)] font-sans flex flex-col items-center px-4 gap-16 pt-8">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-[var(--card-bg)] rounded-3xl shadow-xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight text-center">
          Blog
        </h1>
        <p className="text-xl text-[var(--text-sub)] text-center max-w-3xl leading-relaxed">
          작업치료사와 개발자로서의 경험과 지식을 공유하는 공간입니다.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-[var(--card-border)] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#4F8CFF]/20 to-[#B3D8FF]/20 flex items-center justify-center">
                <div className="text-[var(--text-sub)] text-lg font-medium">
                  📝 {post.title}
                </div>
              </div>
              
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[#4F8CFF] font-medium bg-[#4F8CFF]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-[var(--text-sub)]">
                    {post.date}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-[var(--text-sub)] mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Read Time and Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-sub)]">
                    ⏱️ {post.readTime}
                  </span>
                  <button className="text-[#4F8CFF] hover:text-[#B3D8FF] font-medium transition-colors">
                    더보기 →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full max-w-4xl">
        <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)] text-center">
          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            새로운 글 알림 받기
          </h3>
          <p className="text-[var(--text-sub)] mb-6">
            새로운 블로그 글이 올라오면 이메일로 알려드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
            />
            <button className="px-6 py-3 bg-[#4F8CFF] text-white font-medium rounded-lg hover:bg-[#B3D8FF] transition-colors">
              구독하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-[#888] bg-transparent select-none">
        © 2025 R.OTi Lab . All rights reserved.  대표 함형광
      </footer>
    </main>
  );
} 