import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import HeaderComponent from "../shared/ui/Header";
import FooterComponent from "../shared/ui/Footer";
import MainSection from "../features/main";
import ContentSection from "../features/content";
import TopButton from "../shared/ui/TopButton";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="bg-mainColor">
        <HeaderComponent />
        <MainSection />
        <ContentSection />
        <TopButton />
      </main>
      <FooterComponent />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="ko" />
    <title>정진혁 포트폴리오</title>
    <meta name="description" content="프론트엔드 개발자 - 정진혁 포트폴리오" />
    <meta
      name="keywords"
      content="포트폴리오,프론트엔드,FE,Frontend,React,Gatsby,TypeScript"
    />
    <meta name="author" content="정진혁, 눈꽃" />
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:image" content="http://localhost:8000/snow.png" />
    <link rel="icon" href="/favicon.ico" />

    {/* Open Graph */}
    <meta property="og:title" content="프론트엔드 개발자 - 정진혁 포트폴리오" />
    <meta
      property="og:description"
      content="프론트엔드 개발자 정진혁 포트폴리오입니다"
    />
    <meta property="og:type" content="website" />
  </>
);
