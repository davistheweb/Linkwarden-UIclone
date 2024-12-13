"use strict";
const firstFeatureSubtitles = document.querySelectorAll(".feature_subtitle"),
        secondFeatureSubtitles = document.querySelectorAll(".feature_subtitle1"),
        thirdFeatureSubtitles = document.querySelectorAll(".feature_subtitle2"),
        userExperienceHeadingTexts = document.querySelectorAll(".experience_title"),
        userExperienceSubtitleTexts = document.querySelectorAll(".experience-subtitle");

const displayContext = () => {
  fetch("assets/js/contexts.json")
    .then((res) => {
      return res.json();
    })
    .then((context) => {
      const contextData1 = context[0],
        contextData2 = context[1][0],
        featuresArr1 = Object.values(contextData1.featuresDescription),
        featuresArr2 = Object.values(contextData1.featuresDescription2),
        featuresArr3 = Object.values(contextData1.featuresDescription3),
        headingContent = Object.values(contextData2.UserExperienceHeading),
        subtitleContent = Object.values(contextData2.UserExperienceSubtitles);

        firstFeatureSubtitles.forEach((firstfeaturesubtitle, index) => {
          firstfeaturesubtitle.textContent = featuresArr1[index];
        });
        secondFeatureSubtitles.forEach((secondfeaturesubtitle, index) => {
          secondfeaturesubtitle.textContent = featuresArr2[index];
        });
        thirdFeatureSubtitles.forEach((thirdfeaturessubtitle, index) => {
          thirdfeaturessubtitle.textContent = featuresArr3[index];
        });
        userExperienceHeadingTexts.forEach((userexperienceheading, index) => {
          userexperienceheading.textContent = headingContent[index];
        });
        userExperienceSubtitleTexts.forEach((userexperiencesubtitle, index) => {
          userexperiencesubtitle.textContent = subtitleContent[index];
        });
    });
};

const removeLoadingAnimation = () => {
  const paragraphText = document.querySelectorAll(
    ".features_paragraph_loading"
  );
  paragraphText.forEach((paragraphTexts) => {
    paragraphTexts.classList.remove("features_paragraph_loading");
    paragraphTexts.style.animation = "none";
  });
};
window.addEventListener("load", () => {
  displayContext();
  removeLoadingAnimation();
});
