# R.OTi Lab - 빛나는 작업치료사의 지식 실험실

Rehabilitation + OT + Innovation. 작업치료사를 위한 교육용 웹앱과 커뮤니티를 지향합니다.

## 🚀 주요 기능

- **교육용 웹앱**: 키오스크 훈련, 인지 훈련 게임 등
- **웹게임**: Memory, Stroop, Pencil 게임 등 20개 목표
- **블로그**: 작업치료 관련 지식 공유
- **커뮤니티**: 작업치료사들의 협업 공간

## 🛠️ 기술 스택

- **Frontend**: React 19, Next.js 15, TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Deployment**: Vercel

## 📱 카카오톡 채널 연동

Contact 폼에서 메시지를 보내면 카카오톡 채널로 실시간 알림이 전송됩니다.

### 카카오톡 채널 정보:
- **채널 URL**: [http://pf.kakao.com/_pxjxlWn](http://pf.kakao.com/_pxjxlWn)
- **채널 ID**: `_pxjxlWn`

### 설정 방법:

1. **카카오톡 채널 관리자 설정**
   - [Kakao Developers](https://developers.kakao.com)에서 채널 선택
   - API 설정 → Access Token 발급

2. **환경 변수 설정**
   ```bash
   # .env.local 파일 생성
   KAKAO_CHANNEL_ID=_pxjxlWn
   KAKAO_ACCESS_TOKEN=your_access_token_here
   ```

3. **메시지 템플릿 설정**
   - 카카오톡 채널에서 메시지 템플릿 생성
   - 템플릿 ID를 API 코드에 설정
   - 변수: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`, `{{type}}`

### 템플릿 예시:
```
제목: R.OTi Lab 문의 메시지

내용:
새로운 문의가 도착했습니다!

📝 문의자: {{name}}
📧 이메일: {{email}}
📋 제목: {{subject}}
💬 문의 유형: {{type}}

📄 메시지:
{{message}}

빠른 답변 부탁드립니다!
```

## 🎮 교육용 웹앱

- **키오스크 훈련(아동용)**: [바로가기](https://order-one-rho.vercel.app/)
- **키오스크 훈련(심화)**: [바로가기](https://cafe-two-dusky.vercel.app/)
- **새 교육용 앱**: Coming Soon

## 🎯 웹게임

- **Memory 게임**: [바로가기](https://memory-blond-sigma.vercel.app/)
- **Stroop 게임**: [바로가기](https://stroop-pi.vercel.app/)
- **Pencil 게임**: [바로가기](https://pencil-cyan.vercel.app/)
- **추가 17개 게임**: 개발 중

## 📞 연락처

- **이메일**: h2g0614@gmail.com
- **카카오톡**: [채널 바로가기](http://pf.kakao.com/_pxjxlWn)
- **인스타그램**: @starlight_daddy

## 🚀 개발 및 배포

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 📄 라이선스

© 2025 R.OTi Lab . All rights reserved. 대표 함형광
