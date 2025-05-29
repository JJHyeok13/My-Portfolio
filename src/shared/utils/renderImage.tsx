import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-2">
      <p className="titleSm">
        🎆 작업 화면
        <span className="caption text-[#ACADB4] ml-4">
          구현된 화면과 차이가 있을 수 있습니다.
        </span>
      </p>
      <div className="flex flex-row flex-wrap gap-x-4">{children}</div>
    </div>
  );
};

export const renderImages = (slug: string) => {
  switch (slug) {
    case "dice":
      return (
        <ImageWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}온보딩{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/onBoarding.png"
                alt="온보딩"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}회원가입{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/signUp.png"
                alt="회원가입"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}공간 목록 화면{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/spaceList.png"
                alt="공간 목록 화면"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}공간 필터링 화면{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/spaceFiltering.png"
                alt="공간 필터링 화면"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}공간 상세 화면{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/spaceDetail.png"
                alt="공간 상세 화면"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}공간 예약 화면{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/spaceReservation.png"
                alt="공간 예약 화면"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}공고 목록 화면{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/announcementList.png"
                alt="공고 목록 화면"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}공고 상세 화면{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/announcementDetail.png"
                alt="공고 상세 화면"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}마이페이지{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/myPage.png"
                alt="마이페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}쪽지 상세 화면{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/dice/chatDetail.png"
                alt="쪽지 상세 화면"
              />
            </div>
          </div>
        </ImageWrapper>
      );
    case "cozymate":
      return (
        <ImageWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}홈 화면 - 라이프스타일 X{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/cozymate/home1.png"
                alt="cozy1"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}홈 화면 - 라이프스타일 O{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/cozymate/home2.png"
                alt="cozy1"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}룸메이트 구하기{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/cozymate/findRoommate.png"
                alt="cozy1"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}방 추천{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/cozymate/recommendRoom.png"
                alt="cozy1"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}롤앤룰{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/cozymate/todoList.png"
                alt="cozy1"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}유저 상세{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/cozymate/userDetail.png"
                alt="cozy1"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}방 상세{" >"}
              </p>
              <StaticImage
                src="../../assets/images/projects/cozymate/roomDetail.png"
                alt="cozy1"
              />
            </div>
          </div>
        </ImageWrapper>
      );
    case "gradu-inha":
      return (
        <ImageWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}메인 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/gradu-inha/main.png"
                alt="메인 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}이수과목 관리 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/gradu-inha/insertCourse.png"
                alt="이수과목 관리 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}내 졸업요건 확인하기 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/gradu-inha/checkRequirement.png"
                alt="내 졸업요건 확인하기 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}마이 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/gradu-inha/myPage.png"
                alt="마이 페이지"
              />
            </div>
          </div>
        </ImageWrapper>
      );
    case "Tube Slice":
      return (
        <ImageWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}메인 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/TubeSlice/main.png"
                alt="메인 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}변환 결과 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/TubeSlice/translateResult.png"
                alt="변환 결과 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}요약 결과 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/TubeSlice/summarizeResult.png"
                alt="요약 결과 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}스크립트 목록 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/TubeSlice/scriptList.png"
                alt="스크립트 목록 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}마이페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/TubeSlice/myPage.png"
                alt="마이페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}게시물 목록 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/TubeSlice/postList.png"
                alt="게시물 목록 페이지"
              />
            </div>

            <div className="space-y-1">
              <p className="textSm text-[#ACADB4] text-center">
                {"< "}게시물 상세 페이지{" >"}
              </p>

              <StaticImage
                src="../../assets/images/projects/TubeSlice/postDetail.png"
                alt="게시물 상세 페이지"
              />
            </div>
          </div>
        </ImageWrapper>
      );
    default:
      return null;
  }
};
