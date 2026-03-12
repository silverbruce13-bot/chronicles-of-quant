---
description: [API 보안 규약] 폴샘팀과 동역자들을 위한 API 키 유출 방지 및 관리 프로토콜
---

# 🛡️ 헤븐 프로젝트 API 보안 관리 규약 (API Security Protocol)

본 규약은 폴샘 버추얼팀과 모든 동역자가 외부 서비스(Google Gemini API, Vercel 등)를 연동할 때 지켜야 하는 **절대적인 보안 규칙**입니다. API 키가 코드에 하드코딩되어 유출되는 대참사를 영구적으로 막기 위해 제정되었습니다.

## 제 1 조 (하드코딩 절대 금지)
어떠한 경우에도 소스 코드(`.ts`, `.js`, `.json`, `.tsx` 등) 내부에 API Key를 직접 입력(하드코딩)하지 않습니다.
* **❌ 금지 사례:** `const apiKey = "AIzaSy..."`
* **✅ 권장 사례:** `const apiKey = process.env.VITE_GEMINI_API_KEY || ""`

## 제 2 조 (환경 변수 파일 사용의 원칙)
API Key와 같은 민감한 정보는 오직 `.env` (또는 `.env.local`) 파일에만 저장합니다.
`.env` 파일은 절대로 버전 관리 시스템(Git)에 포함되지 않도록 `.gitignore`에 확실히 명시되어야 합니다.

## 제 3 조 (스크립트 실행 시의 보안)
자동화 스크립트 작성 시에는 반드시 `dotenv` 라이브러리를 통해 환경 변수를 로드하도록 구성합니다.
스크립트 실행 전, 해당 모듈 최상단에 `import 'dotenv/config';`가 존재하는지 점검해야 합니다.

## 제 4 조 (프로덕션 환경 배포의 원칙)
Vercel 등의 배포 서버(Cloud) 환경에서는 코드를 통해 비밀번호를 전달하지 않으며, 반드시 Vercel 대시보드 환경 변수(Environment Variables) 설정 메뉴나 Vercel CLI (`vercel env add`)를 통해 주입합니다.

// turbo
## 제 5 조 (만약 키 유출이 의심될 경우의 자동 대처 파이프라인)
1. 당황하지 않고 기존 환경 변수 키를 Vercel과 로컬 `.env`에서 우선 제거한다.
2. 구글 AI Studio에서 새로운 API 키를 발급 받는다.
3. 다음 명령어를 실행하여 새로운 키를 주입한다:
```bash
npx vercel env rm VITE_GEMINI_API_KEY production -y
# 새로 발급받은 키를 파이프라인으로 넘겨서 Vercel 서버에 입력
echo -n "새로_발급받은_키" | npx vercel env add VITE_GEMINI_API_KEY production
npx vercel --prod --yes
```

이 규약은 프로젝트 저장소 `.agents/workflows/api-security-protocol.md`에 보관되며, 모든 AI 요원과 개발자가 새로운 파일/코드를 생성할 때마다 최우선으로 검증해야 하는 강제 규율입니다.
