const UseCaseTitles = document.querySelectorAll(".usecase-title"),
    UseCaseSubtitle = document.querySelectorAll(".usecase_subtitle"),
    useCaseSelectLists = document.querySelectorAll(".usecase_section");

const displayUseCase = () => {
    fetch("assets/js/usecase.json")
        .then((res) => res.json())
        .then((resData) => {
            const UseCaseData1 = resData[0],
                UseCaseData2 = resData[1][0],
                UseCaseData3 = resData[2][0],
                UseCaseData4 = resData[3][0];

            const PersonalUseCaseTitles = Object.values(UseCaseData1.PersonalUseCaseTitles),
                PersonalUseCaseSubtitles = Object.values(UseCaseData1.PersonalUseCaseSubtitles),
                DesignInspirationsCaseTitles = Object.values(UseCaseData2.DesignInspirationsCaseTitles),
                DesignInspirationsCaseSubtitles = Object.values(UseCaseData2.DesignInspirationsCaseSubtitles),
                Research_and_ReferenceUseCasesTitles = Object.values(UseCaseData3.Research_and_ReferenceUseCasesTitles),
                Research_and_ReferenceUseCasesSubtitles = Object.values(UseCaseData3.Research_and_ReferenceUseCaseSubtitles),
                ProjectCollaborationUseCaseTitles = Object.values(UseCaseData4.ProjectCollaborationUseCaseTitles),
                ProjectCollaborationUseCaseSubtitles = Object.values(UseCaseData4.ProjectCollaborationUseCaseSubtitles);

         
            const displayPersonalUseCaseContent = () => {
                UseCaseTitles.forEach((title, index) => {
                    title.textContent = PersonalUseCaseTitles[index] || "";
                });
                UseCaseSubtitle.forEach((subtitle, index) => {
                    subtitle.textContent = PersonalUseCaseSubtitles[index] || "";
                });
            };

            const displayDesign_and_InspirationUseCaseContent = () => {
                UseCaseTitles.forEach((title, index) => {
                    title.textContent = DesignInspirationsCaseTitles[index] || "";
                });
                UseCaseSubtitle.forEach((subtitle, index) => {
                    subtitle.textContent = DesignInspirationsCaseSubtitles[index] || "";
                });
            };

            const displayResearch_and_ReferenceUseCaseContent = () => {
                UseCaseTitles.forEach((title, index) => {
                    title.textContent = Research_and_ReferenceUseCasesTitles[index] || "";
                });
                UseCaseSubtitle.forEach((subtitle, index) => {
                    subtitle.textContent = Research_and_ReferenceUseCasesSubtitles[index] || "";
                });
            };

            const displayProjectCollabContent = () => {
                UseCaseTitles.forEach((title, index) => {
                    title.textContent = ProjectCollaborationUseCaseTitles[index] || "";
                });
                UseCaseSubtitle.forEach((subtitle, index) => {
                    subtitle.textContent = ProjectCollaborationUseCaseSubtitles[index] || "";
                });
            };

           
            useCaseSelectLists.forEach((useCaseSelectList, index) => {
                useCaseSelectList.addEventListener("click", () => {
                  
                    useCaseSelectLists.forEach(list => list.classList.remove('active_usecase'));

                    
                    useCaseSelectList.classList.add('active_usecase');

                   
                    if (index === 0) {
                        displayPersonalUseCaseContent();
                    } else if (index === 1) {
                        displayDesign_and_InspirationUseCaseContent();
                    } else if (index === 2) {
                        displayResearch_and_ReferenceUseCaseContent();
                    } else if (index === 3) {
                        displayProjectCollabContent();
                    }
                });
            });

            
            displayPersonalUseCaseContent();
            useCaseSelectLists[0].classList.add('active_usecase');
        });
};

displayUseCase();
