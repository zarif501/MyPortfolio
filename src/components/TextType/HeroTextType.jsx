import TextType from "./TextType";

function HeroTextType() {
  return (
    <TextType
      text={["Crafted to inspire.", "I enjoy to code", "Happy coding!"]}
      className="hero-hook-text"
      typingSpeed={75}
      pauseDuration={1500}
      deletingSpeed={50}
      deleteMode="backspace"
      typeEffect="none"
      mistakes={0}
      cursorStyle="underscore"
      cursorGlide
      showCursor
      cursorColor="currentColor"
      prefixColor="currentColor"
      textColors={["#ffffff"]}
      cursorBlinkDuration={0.5}
      cursorCharacter="_"
      prefix=""
    />
  );
}

export default HeroTextType;
