import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // 실제 카카오톡 채널 API 호출
    // 환경 변수에서 API 키를 가져옵니다
    const KAKAO_CHANNEL_ID = process.env.KAKAO_CHANNEL_ID;
    const KAKAO_ACCESS_TOKEN = process.env.KAKAO_ACCESS_TOKEN;
    
    if (!KAKAO_CHANNEL_ID || !KAKAO_ACCESS_TOKEN) {
      console.log('Kakao API credentials not configured');
      // 개발 환경에서는 성공으로 처리
      return NextResponse.json({ success: true, message: 'Development mode - message logged' });
    }
    
    // 카카오톡 채널 API 호출
    const kakaoResponse = await fetch(
      `https://api.kakao.com/v1/talk/channels/${KAKAO_CHANNEL_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${KAKAO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          template_id: 'contact_form_message', // 템플릿 ID
          template_args: {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            type: formData.type,
          },
        }),
      }
    );
    
    if (!kakaoResponse.ok) {
      throw new Error(`Kakao API error: ${kakaoResponse.status}`);
    }
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error in send-kakao API:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 