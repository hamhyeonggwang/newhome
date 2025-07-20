"use client";

import { useState } from "react";
import { sendToKakaoChannel } from "../lib/kakao-api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "collaboration" // collaboration, idea, question, other
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      // 카카오톡 채널로 메시지 전송
      const result = await sendToKakaoChannel(formData);
      
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          type: "collaboration"
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // 성공 메시지 3초 후 사라지게
      if (submitStatus === "success") {
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    }
  };

  return (
    <main className="bg-[var(--background)] min-h-screen text-[var(--foreground)] font-sans flex flex-col items-center px-4 gap-16 pt-8">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-[var(--card-bg)] rounded-3xl shadow-xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight text-center">
          Contact
        </h1>
        <p className="text-xl text-[var(--text-sub)] text-center max-w-3xl leading-relaxed">
          앱 개발 아이디어나 함께하고 싶은 분들이 연락할 수 있는 공간입니다.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">연락 방법</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)] text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">이메일</h3>
            <p className="text-[var(--text-sub)] mb-4">
              가장 빠른 연락 방법입니다.
            </p>
            <a 
              href="mailto:h2g0614@gmail.com" 
              className="text-[#4F8CFF] hover:text-[#B3D8FF] font-medium transition-colors"
            >
              h2g0614@gmail.com
            </a>
          </div>
          
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)] text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">카카오톡</h3>
            <p className="text-[var(--text-sub)] mb-4">
              메시지를 보내면 카카오톡으로 알림을 받습니다.
            </p>
            <span className="text-[#4F8CFF] font-medium">
              실시간 알림
            </span>
          </div>
          
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)] text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">메시지</h3>
            <p className="text-[var(--text-sub)] mb-4">
              아래 폼을 통해 연락하세요.
            </p>
            <span className="text-[#4F8CFF] font-medium">
              빠른 응답 보장
            </span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">메시지 보내기</h2>
        <div className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[var(--card-border)]">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              메시지가 성공적으로 전송되었습니다! 카카오톡으로 알림을 받으셨을 것입니다. 빠른 시일 내에 답변드리겠습니다.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              메시지 전송에 실패했습니다. 다시 시도해주세요.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                  placeholder="이름을 입력하세요"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                  placeholder="이메일을 입력하세요"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                문의 유형 *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
              >
                <option value="collaboration">협업 제안</option>
                <option value="idea">앱 개발 아이디어</option>
                <option value="question">질문/문의</option>
                <option value="other">기타</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                제목 *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                placeholder="제목을 입력하세요"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                메시지 *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] resize-none"
                placeholder="메시지를 입력하세요..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-[#4F8CFF] text-white font-bold rounded-lg hover:bg-[#B3D8FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "전송 중..." : "메시지 보내기"}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-[var(--card-bg)] mb-8 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          {[
            {
              question: "메시지를 보내면 어떻게 되나요?",
              answer: "메시지를 보내시면 카카오톡 채널로 즉시 알림이 전송되고, 빠른 시일 내에 답변드리겠습니다."
            },
            {
              question: "어떤 종류의 협업을 찾고 계신가요?",
              answer: "작업치료 관련 웹앱 개발, 연구 프로젝트, 교육 자료 제작 등 다양한 분야에서 협업을 찾고 있습니다."
            },
            {
              question: "앱 개발 아이디어는 어떻게 제안하나요?",
              answer: "위의 폼을 통해 아이디어를 제안해주시면 검토 후 연락드립니다. 구체적인 기획서나 와이어프레임이 있으면 더욱 환영합니다."
            },
            {
              question: "답변은 얼마나 걸리나요?",
              answer: "보통 24시간 이내에 답변드리며, 주말이나 공휴일에는 다음 영업일에 답변드립니다."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[var(--card-border)]">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
                {faq.question}
              </h3>
              <p className="text-[var(--text-sub)] leading-relaxed">
                {faq.answer}
              </p>
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