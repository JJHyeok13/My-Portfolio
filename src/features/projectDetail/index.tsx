import React from "react";
import { HeadFC, PageProps } from "gatsby";
import { ProjectDetail } from "./type/projectDetail";
import { renderIcons } from "../../shared/utils/renderIcon";
import { renderSkillIcons } from "../../shared/utils/renderSkillIcon";
import { renderImages } from "../../shared/utils/renderImage";

const ProjectTemplate: React.FC<PageProps<null, ProjectDetail>> = ({
  pageContext,
}) => {
  const {
    slug,
    mainColor,
    icon,
    title,
    description,
    date,
    member,
    background,
    skills,
    role,
    references,
  } = pageContext;

  const formatContent = (content: string): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex = /\[(.*?)\]/g; // 대괄호 안의 텍스트를 찾는 정규표현식
    let match;
    let key = 0;

    // 정규표현식을 통해 대괄호 안의 텍스트를 순차적으로 탐색
    while ((match = regex.exec(content)) !== null) {
      const startIndex = match.index;
      // 대괄호 이전의 일반 텍스트를 결과 배열에 추가
      if (startIndex > lastIndex) {
        result.push(content.substring(lastIndex, startIndex));
      }
      // 대괄호 안의 텍스트를 <span> 태그로 감싸서 하이라이트 처리 (예: .highlight 클래스로 스타일 적용)
      result.push(
        <span key={key++} className="textMdSemibold text-[#50C878]">
          {match[1]}
        </span>
      );
      // 다음 검색 시작 인덱스 업데이트
      lastIndex = regex.lastIndex;
    }
    // 남은 일반 텍스트가 있으면 배열에 추가
    if (lastIndex < content.length) {
      result.push(content.substring(lastIndex));
    }
    return result;
  };

  return (
    <div
      style={{ backgroundColor: mainColor }}
      className="min-h-dvh p-6 lg:p-10"
    >
      <button
        onClick={() => window.history.back()}
        className="fixed top-2 left-2 lg:top-4 lg:left-4 bg-white p-2 rounded-xl"
      >
        {renderIcons("X")}
      </button>
      <div className="space-y-8 bg-white p-6 rounded-[32px]">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:flex-row gap-x-5 gap-y-2">
            {icon && (
              <img src={icon} alt="프로젝트 아이콘" width={120} height={120} />
            )}
            <div className="flex flex-col justify-center gap-y-1">
              <p className="titleSm">{title}</p>
              <p className="textXlg">{description}</p>
              <p className="textSm text-[#ACADB4]">{date}</p>
            </div>
          </div>

          <div className="flex flex-row gap-x-4 items-end">
            {references.map((item) => (
              <a key={item.title} href={item.link} target="_blank">
                {renderIcons(item.title)}
              </a>
            ))}
          </div>
        </div>

        {member && (
          <div className="space-y-2">
            <p className="textXlgBold">👬 개발 인원</p>

            {/* 모바일 (sm 미만)에서는 줄바꿈해서 표시 */}
            <p className="textMd sm:hidden whitespace-pre-line">
              {formatContent(member.replace(/ => /g, "\n=> "))}
            </p>

            {/* sm 이상에서는 원본 그대로 한 줄로 표시 */}
            <p className="textMd hidden sm:block">{formatContent(member)}</p>
          </div>
        )}

        {background && (
          <div className="space-y-2">
            <p className="textXlgBold">✨ 개발 배경</p>
            <p className="textMd">{background}</p>
          </div>
        )}

        <div className="space-y-2">
          <p className="textXlgBold">🛠 사용 기술</p>
          <div className="flex flex-row flex-wrap gap-2">
            {skills.map((item) => (
              <div
                key={item}
                className="flex flex-row items-center py-1.5 px-3 bg-[#F7F9FB] rounded-3xl gap-x-2"
              >
                {renderSkillIcons(item, 24, 24)}
                <p className="text-mainColor textMd font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="textXlgBold">🙋🏻‍♂️ 역할</p>
          <div className="space-y-3">
            {role.map((item) => (
              <div className="space-y-1">
                <p className="textLgSemibold">• {item.title}</p>
                <p className="textMd ml-1">{formatContent(item.content)}</p>
                {item.image && <img src={item.image} alt="사진" />}
              </div>
            ))}
          </div>
        </div>

        {renderImages(slug)}
      </div>
    </div>
  );
};

export default ProjectTemplate;

export const Head: HeadFC<null, ProjectDetail> = ({ pageContext }) => {
  const { title, description } = pageContext;
  return (
    <>
      <title>{title} | 프로젝트 상세</title>
      <meta name="description" content={description} />
    </>
  );
};
