import React from "react";

export const renderIcons = (icon: string) => {
  switch (icon) {
    case "X":
      return <img src="/etc/X.png" alt="X" width={40} height={40} />;
    case "Github":
      return (
        <img src="/skill/github.png" alt="Github" width={40} height={40} />
      );
    case "App Store":
      return (
        <img src="/etc/App Store.png" alt="App Store" width={40} height={40} />
      );
    case "Play Store":
      return (
        <img
          src="/etc/Play Store.png"
          alt="Play Store"
          width={40}
          height={40}
        />
      );
    case "Website":
      return (
        <img src="/etc/Website.png" alt="Website" width={40} height={40} />
      );
    case "velog":
      return <img src="/etc/velog.png" alt="velog" width={40} height={40} />;
    case "Figma":
      return <img src="/skill/Figma.png" alt="Figma" width={40} height={40} />;
    default:
      return null;
  }
};
