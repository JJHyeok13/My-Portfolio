import { ProjectDetail } from "../type/projectDetail";

export const ProjectDetailItems: ProjectDetail[] = [
  {
    slug: "포트폴리오 사이트",
    mainColor: "#353B47",
    title: "개인 포트폴리오 사이트",
    description: "Gatsby 학습 및 개인 포트폴리오 제작",
    date: "2025.05",
    skills: ["TypeScript", "React.js", "Gatsby.js", "tailwindcss"],
    role: [
      { title: "Gatsby를 통한 정적 사이트 생성", content: "" },
      { title: "Github Action을 통한 CI/CD 적용", content: "" },
      {
        title: "react-type-animation와 framer-motion를 통한 애니메이션 적용",
        content: "",
      },
    ],
    references: [
      { title: "Github", link: "https://github.com/JJHyeok13/My-Portfolio" },
    ],
  },
  {
    slug: "dice",
    mainColor: "#000000",
    icon: "/My-Portfolio/project/dice.png",
    title: "dice - 팝업 운영 올인원 솔루션",
    description:
      "소상공인 · 자영업자를 위한 팝업공간 대여 및 운영 지원 올인원 플랫폼",
    date: "2024.12 ~ 진행 중",
    member:
      "PM 1, Design 1, FrontEnd 2, BackEnd 1 => PM 1, Design 2, App 1, Web 1, BackEnd 1",
    background:
      "Central MakeUs Challenge 16th Web 파트로서 진행한 데모데이 프로젝트로,\n최근 팝업스토어의 인기가 급증하면서 높은 임대료와 운영 비용으로 인해 소상공인과 자영업자들이 진입 장벽을 느끼고 있고,\n다양한 지원 프로그램이 있지만 쉽게 찾고 활용하기 어려움을 겪고 있는 상황입니다.\n이를 해소하기 위해 효율적으로 저렴한 공간을 찾을 수 있도록 지원하고, 쉽게 정부 지원 프로그램을 찾을 수 있도록 정보를 모아서 보여주는 서비스 개발",
    skills: [
      "TypeScript",
      "React.js",
      "expo",
      "tailwindcss",
      "Tanstack Query",
      "zustand",
    ],
    role: [
      { title: "Expo 및 EAS를 활용한 iOS 및 Android 앱 개발", content: "" },
      {
        title:
          "홈, 팝업스토어 검색, 지원 프로그램 등 주요 화면 UI/UX 설계 및 구현",
        content: "",
      },
      {
        title: "TanStack Query를 활용한 API 통신 최적화 및 캐싱 전략 설계",
        content: "",
      },
      {
        title:
          "Zustand를 활용한 로그인 상태, 사용자 정보 등의 전역 상태 관리 구현",
        content: "",
      },
      {
        title:
          "ESLint 및 Prettier 설정을 통한 코드 스타일 통일 및 개발 환경 개선",
        content: "",
      },
    ],
    references: [
      { title: "Github", link: "https://github.com/Central-MakeUs/dice-Front" },
      {
        title: "App Store",
        link: "https://apps.apple.com/us/app/dice-%ED%8C%9D%EC%97%85-%EC%9A%B4%EC%98%81-%EC%98%AC%EC%9D%B8%EC%9B%90-%EC%86%94%EB%A3%A8%EC%85%98/id6742072988",
      },
      {
        title: "Play Store",
        link: "https://play.google.com/store/apps/details?id=com.cmc.dice.minipop.expo&hl=ko",
      },
    ],
  },
  {
    slug: "cozymate",
    mainColor: "#68A4FF",
    icon: "/My-Portfolio/project/cozymate.png",
    title: "cozymate - 룸메이트 매칭 및 생활 종합 관리 폐쇄형 커뮤니티 서비스",
    description: "룸메이트와 함께 만드는 우리의 편안한 공간",
    date: "2024.06 ~ 진행 중",
    member:
      "PM & Design 1, iOS 1, Android 3, BackEnd 5 => PM & Design 1, iOS 2, Android 3, BackEnd 4",
    background: `University MakeUs Challenge 6th에서 진행한 데모데이 프로젝트로,\n대학교 기숙사의 룸메이트를 구하는 과정에서 룸메이트를 구하는 플랫폼이 따로 있지 않아 에브리타임과 같은 앱을 사용하고 있으나\n원하는 룸메이트를 구하는 것에 제약사항이 많고 룸메이트를 구했지만 라이프스타일이 맞지않아서\n정신적 스트레스가 쌓이는 대학생들의 고민을 해소하고자 해당 서비스 개발`,
    skills: [
      "TypeScript",
      "React.js",
      "expo",
      "tailwindcss",
      "Tanstack Query",
      "zustand",
    ],
    role: [
      {
        title: "React Native 기반 iOS 앱 프론트엔드 개발 전반을 담당",
        content: "",
      },
      {
        title:
          "Kakao 및 Apple 소셜 로그인 기능 구현 (@react-native-seoul/kakao-login)",
        content: "",
      },
      {
        title:
          "온보딩, 룸메이트 찾기, 홈 화면 등 핵심 화면 UI/UX 구성 및 기능 개발",
        content: "",
      },
      {
        title:
          "TanStack Query 기반 API 요청 최적화 및 캐싱 전략 설계 (데이터 재사용, 로딩/에러 처리 개선)",
        content:
          "회원 프로필 데이터를 가져오는 과정에서 useSuspenseQuery를 사용하여 로딩 상태를 컴포넌트 외부에서 일관성 있게 제어하고, useMutation과 invalidateQueries를 결합하여 사용자 정보 수정 이후 관련 쿼리만 효율적으로 무효화함으로써 최신 서버 상태를 자동으로 반영하도록 구현했습니다. 이를 통해 불필요한 네트워크 요청을 줄이고, 서버 데이터와 클라이언트 UI의 상태 불일치 문제를 해결했으며, 캐시 기반의 구조로 응답 속도 향상과 유지보수성 높은 코드 구조를 만들어냈습니다.",
        image: "/project/code/cozymate/code.png",
      },
      {
        title:
          "Zustand를 활용한 로그인 상태 및 사용자 정보 등의 전역 상태 관리 구조 설계 및 구현",
        content: "",
      },
      {
        title:
          "Expo 환경으로의 마이그레이션 및 ESLint, 모듈 설치 이슈 해결을 통한 개발 환경 안정화",
        content:
          "기존 React Native CLI 기반 프로젝트를 Expo 환경으로 마이그레이션하면서 발생한 ESLint 설정 충돌, 네이티브 모듈 호환성 문제, 패키지 버전 불일치 등의 이슈를 분석하고 해결하여 개발 환경을 안정화했습니다. Expo의 빠른 빌드 및 디버깅 환경을 적극 활용할 수 있도록 설정을 재정비하고, 불필요한 모듈을 제거하거나 대체 라이브러리로 교체함으로써 의존성 충돌을 최소화했습니다. 또한 ESLint와 Prettier 설정을 Expo 환경에 맞게 통합하여 팀원 간 코드 스타일 일관성을 확보했으며, 이러한 초기 환경 정비를 통해 개발 생산성과 협업 효율을 높였습니다.",
      },
    ],
    references: [
      { title: "Github", link: "https://github.com/cozy-mate/cozymate-iOS" },
      {
        title: "App Store",
        link: "https://apps.apple.com/us/app/cozymate-%EB%A3%B8%EB%A9%94%EC%9D%B4%ED%8A%B8-%EB%A7%A4%EC%B9%AD-%EC%84%9C%EB%B9%84%EC%8A%A4/id6657994700",
      },
    ],
  },
  {
    slug: "READ.ME",
    mainColor: "#509BF7",
    icon: "/My-Portfolio/project/readme.png",
    title: "READ.ME",
    description:
      "공지 안 읽는 부원들을 관리해 주는, 지친 운영진을 위한 공지 확인 체크 서비스",
    date: "2024.06 ~ 2024.08",
    member: "PM 1, Design 1, Web 4, BackEnd 4",
    background:
      "University MakeUs Challenge 6th에서 Node.js 파트로서 진행한 프로젝트로, 가톨릭대학교, 인하대학교, 한국공학대학교, 숭실대학교 운영진이 공지를 읽지 않는 부원들에 대한 관리를 더 간편하게 할 방법이 없을지 고민하면서 기획한 서비스로, 부원들이 공지를 읽지 않으면서 생기는 스트레스 및 불화 발생을 줄이고, 부원들이 공지를 읽지 않음에 따라 생기는 이슈 발생을 줄이며 해당 이슈에 대한 시간과 인력 소모를 줄이도록 도와주는 서비스를 기획하고 개발하였다.",
    skills: ["JavaScript", "express"],
    role: [
      {
        title: "JWT 기반 사용자 인증 시스템 구현",
        content:
          "jsonwebtoken 라이브러리를 사용하여 사용자 인증을 위한 JWT(JSON Web Token) 기반 시스템을 구현하였습니다. 사용자가 로그인하면 서버는 사용자 정보를 기반으로 JWT를 생성하고, 이를 클라이언트에 전달하여 이후 요청 시 인증 수단으로 활용할 수 있도록 하였습니다. 이러한 방식은 세션 기반 인증보다 확장성이 높고, RESTful API 설계에 적합하여 전체 시스템의 보안성과 효율성을 향상시켰습니다.",
      },
      {
        title: "비밀번호 보안을 위한 해시 처리 로직 적용",
        content:
          "사용자 비밀번호의 보안을 강화하기 위해 crypto 모듈을 활용하여 해시 처리 로직을 적용하였습니다. 회원가입 시 입력된 비밀번호는 해시 함수를 통해 암호화되어 데이터베이스에 저장되며, 로그인 시에도 동일한 방식으로 입력된 비밀번호를 해시화하여 비교함으로써 원본 비밀번호의 노출을 방지하였습니다. 이러한 보안 조치는 사용자 정보 보호와 시스템의 신뢰성을 높이는 데 기여하였습니다.",
      },
    ],
    references: [
      { title: "Github", link: "https://github.com/UMC-README/back-end" },
    ],
  },
  {
    slug: "gradu-inha",
    mainColor: "#005BAC",
    icon: "/My-Portfolio/project/gradu-inha.png",
    title: "gradu-inha",
    description: "인하대학교 졸업 요건 확인 서비스",
    date: "2024.03 ~ 2025.03",
    member: "Design 1, Web 1, BackEnd 7",
    background:
      "인하대학교 내에서 각 대학 및 학과 그리고 학번에 따른 졸업요건이 모두 달라 재학생들이 본인의 졸업 요건을 정확하게 판별하기 어려운 점을 해소하기 위해 해당 서비스 개발",
    skills: [
      "TypeScript",
      "React.js",
      "vite",
      "Vercel",
      "tailwindcss",
      "Tanstack Query",
      "zustand",
    ],
    role: [
      {
        title:
          "react-pdftotext, pdfjs-dist 등의 라이브러리를 활용한 PDF 성적표 파싱 및 등록 기능 구현",
        content: "",
      },
      {
        title:
          "Zustand를 활용한 사용자 정보, 졸업 요건 데이터 등의 전역 상태 관리 구조 설계 및 구현",
        content: "",
      },
      {
        title:
          "TanStack Query 기반 API 요청 최적화 및 캐싱 전략 설계 (데이터 재사용, 로딩/에러 처리 개선)",
        content: "",
      },
      {
        title:
          "vite를 통한 개발 환경 구축 및 Vercel을 통해 CI/CD 파이프라인을 구축하여 자동 배포 구현",
        content: "",
      },
    ],
    references: [
      { title: "Github", link: "https://github.com/ICURRICULUM/Front-end" },
      {
        title: "Website",
        link: "https://gradu-inha.com/",
      },
    ],
  },
  {
    slug: "Tube Slice",
    mainColor: "#0075FF",
    icon: "/My-Portfolio/project/tube-slice.png",
    title: "Tube Slice",
    description: "Youtube 동영상 스크립트 생성 서비스",
    date: "2024.03 ~ 2024. 08",
    member: "PM & Design & Web 1, BackEnd 2",
    background:
      "Youtube와 같은 영상 미디어를 기반으로 정보를 얻은 사람들의 수가 기하급수적으로 늘어남에 따라 정보를 더 효율적으로 얻기 위해 해당 서비스 개발\n또한 짧은 시간을 갖는 Youtube Shorts, Instagram Reels 등의 콘텐츠에 적용하여 10분 길이의 영상도 집중하지 못하는 사람들을 위해 개발 수행",
    skills: [
      "TypeScript",
      "React.js",
      "vite",
      "Vercel",
      "styled-components",
      "Recoil",
    ],
    role: [
      {
        title:
          "프로젝트 기획을 포함한 프로젝트 스프린트 설정 등의 Project Manager 역할 수행",
        content: "",
      },
      {
        title: "Figma를 이용한 UI/UX 디자인",
        content: "",
      },
      {
        title: "React를 이용한 Web 프론트엔드 개발",
        content: "",
      },
      {
        title:
          "vite를 통한 개발 환경 구축 및 Vercel을 통해 CI/CD 파이프라인을 구축하여 자동 배포 구현",
        content: "",
      },
    ],
    references: [
      { title: "Github", link: "https://github.com/Tube-Slice/Tube-Slice-FE" },
      {
        title: "Figma",
        link: "https://www.figma.com/proto/HWaV6wkqG5faEXaH91co66/Tube-Slice?page-id=853%3A2&node-id=853-5&viewport=312%2C80%2C0.08&t=m7QtGTILLJhGb3tg-1&scaling=min-zoom&starting-point-node-id=853%3A5",
      },
    ],
  },
];
