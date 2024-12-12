'use strict';

const displayContext = () => {
  fetch("assets/js/contexts.json")
    .then((res) => {
      return res.json();
    })
    .then((context) => {
      const contextData1 = context[0],
        contextData2 = context[1][0],
        headingData = contextData2.UserExperienceHeading,
        SubtitleData = contextData2.UserExperienceSubtitles,
        featuresArr1 = Object.values(contextData1.featuresDescription),
        featuresArr2 = Object.values(contextData1.featuresDescription2),
        featuresArr3 = Object.values(contextData1.featuresDescription3);
      const headingContent = Object.values(headingData);
      const subtitleContent = Object.values(SubtitleData);

     /*  console.table(headingContent);
      console.log(headingContent)
      console.table(subtitleContent) */;
      //console.table(featuresArr);
      const textS = document.querySelectorAll(".feature_subtitle"),
        textS1 = document.querySelectorAll(".feature_subtitle1"),
        textS2 = document.querySelectorAll(".feature_subtitle2"),
        userExperienceSubtitleText = document.querySelectorAll(
          ".experience-subtitle"
        );

      for (let i = 0; i < featuresArr1.length; i++) {
        textS[i].textContent = featuresArr1[i];
      }
      for (let n = 0; n < featuresArr2.length; n++) {
        textS1[n].textContent = featuresArr2[n];
      }

      for (let x = 0; x < featuresArr3.length; x++) {
        textS2[x].textContent = featuresArr3[x];
      }

      for (let j = 0; j < headingContent.length; j++) {
        const userExperienceHeadingText =
          document.querySelectorAll(".experience_title");
        userExperienceHeadingText[j].textContent = headingContent[j];
      }
      for (let subtitleExp = 0;subtitleExp < subtitleContent.length; subtitleExp++){
        userExperienceSubtitleText[
          subtitleExp
        ].innerHTML = `<p class='experience-subtitle'>${subtitleContent[subtitleExp]}</p>`;
      }
    });
};


const removeLoadingAnimation = ()=> {
  const paragraphText = document.querySelectorAll('.features_paragraph_loading')

  paragraphText.forEach(paragraphTexts => {
    paragraphTexts.classList.remove('features_paragraph_loading');

  paragraphTexts.style.animation = "none"
  })
  
}

window.addEventListener('load', () => {
  displayContext();
  removeLoadingAnimation(); 
})

