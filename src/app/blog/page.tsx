"use client";

import { useState, useEffect } from "react";
import { BlogPost } from "../lib/blog-types";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [showWriteForm, setShowWriteForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // 게시글 목록 가져오기
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setBlogPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setShowWriteForm(false);
        fetchBlogPosts(); // 게시글 목록 새로고침
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

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
        <button
          onClick={() => setShowWriteForm(!showWriteForm)}
          className="mt-6 px-8 py-3 bg-[#4F8CFF] text-white font-bold rounded-lg hover:bg-[#B3D8FF] transition-colors"
        >
          {showWriteForm ? "작성 취소" : "새 글 작성"}
        </button>
      </section>

      {/* Write Form Section */}
      {showWriteForm && (
        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">새 글 작성</h2>
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                게시글이 성공적으로 작성되었습니다!
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                게시글 작성에 실패했습니다. 다시 시도해주세요.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    제목 *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                    placeholder="제목을 입력하세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    카테고리 *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                  >
                    <option value="">카테고리 선택</option>
                    <option value="개발일기">개발일기</option>
                    <option value="연구">연구</option>
                    <option value="기술">기술</option>
                    <option value="커뮤니티">커뮤니티</option>
                    <option value="개발팁">개발팁</option>
                    <option value="미래기술">미래기술</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  요약 *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] resize-none"
                  placeholder="게시글 요약을 입력하세요"
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  내용 *
                </label>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={10}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] resize-none"
                  placeholder="게시글 내용을 입력하세요"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    작성자 *
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                    placeholder="작성자 이름"
                  />
                </div>
                
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    태그
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                    placeholder="태그1, 태그2, 태그3"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  이미지 (선택사항)
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#4F8CFF] text-white font-bold rounded-lg hover:bg-[#B3D8FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "작성 중..." : "게시글 작성"}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">최신 게시글</h2>
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#4F8CFF] font-semibold text-lg">아직 작성된 게시글이 없습니다.</p>
            <p className="text-[#4F8CFF] font-semibold mt-2">첫 번째 게시글을 작성해보세요!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-[var(--card-border)] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Image */}
                {post.image ? (
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[#4F8CFF]/20 to-[#B3D8FF]/20 flex items-center justify-center">
                    <div className="text-[var(--text-sub)] text-lg font-medium">
                      📝 {post.title}
                    </div>
                  </div>
                )}
                
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
                  
                  {/* Author and Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-sub)]">
                      👤 {post.author}
                    </span>
                    <span className="text-sm text-[var(--text-sub)]">
                      ⏱️ {post.readTime}
                    </span>
                  </div>
                  
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-[#4F8CFF] bg-[#4F8CFF]/10 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
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