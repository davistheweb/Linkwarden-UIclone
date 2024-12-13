const UseCaseTitles = document.querySelectorAll(".usecase-title"),
    UseCaseSubtitle = document.querySelectorAll(".usecase_subtitle"),
    useCaseSelectLists = document.querySelectorAll(".usecase_section");
const displayUseCase = () => {
    fetch("assets/js/usecase.json")
        .then((res) => {
            return res.json();
        })
        .then((resData) => {
            const UseCaseData1 = resData[0],
                UseCaseData2 = resData[1][0],
                UseCaseData3 = resData[2][0],
                UseCaseData4 = resData[3][0];
            const PersonalUseCaseTitles = Object.values(
                UseCaseData1.PersonalUseCaseTitles
            ),
                PersonalUseCaseSubtitles = Object.values(
                UseCaseData1.PersonalUseCaseSubtitles
            ),
                DesignInspirationsCaseTitles = Object.values(
                UseCaseData2.DesignInspirationsCaseTitles
            ),
                DesignInspirationsCaseSubtitles = Object.values(
                UseCaseData2.DesignInspirationsCaseSubtitles
            ),
                Research_and_ReferenceUseCasesTitles = Object.values(
                UseCaseData3.Research_and_ReferenceUseCasesTitles
            ),
                Research_and_ReferenceUseCasesSubtitles = Object.values(
                UseCaseData3.Research_and_ReferenceUseCaseSubtitles
            ),
                ProjectCollaborationUseCaseTitles = Object.values(
                UseCaseData4.ProjectCollaborationUseCaseTitles
            ),
                ProjectCollaborationUseCaseSubtitles = Object.values(
                UseCaseData4.ProjectCollaborationUseCaseSubtitles
            );
            const displayPersonalUseCaseContent = () => {
                for (let personal_use_case_titles = 0; personal_use_case_titles < PersonalUseCaseTitles.length; personal_use_case_titles++) {
                    UseCaseTitles[personal_use_case_titles].textContent = PersonalUseCaseTitles[personal_use_case_titles];
                }
                for (let personal_use_case_subtitles = 0; personal_use_case_subtitles < PersonalUseCaseSubtitles.length; personal_use_case_subtitles++) {
                    UseCaseSubtitle[personal_use_case_subtitles].textContent = PersonalUseCaseSubtitles[personal_use_case_subtitles];
                }
            };
            const displayDesign_and_InspirationUseCaseContent = () => {
                for (let design_inspirations_case_titles = 0; design_inspirations_case_titles < DesignInspirationsCaseTitles.length; design_inspirations_case_titles++) {
                    UseCaseTitles[design_inspirations_case_titles].textContent = DesignInspirationsCaseTitles[design_inspirations_case_titles];
                }
                for (let design_inspirations_case_subtitles = 0; design_inspirations_case_subtitles < DesignInspirationsCaseSubtitles.length; design_inspirations_case_subtitles++) {
                    UseCaseSubtitle[design_inspirations_case_subtitles].textContent = DesignInspirationsCaseSubtitles[design_inspirations_case_subtitles];
                }
            }
            const displayResearch_and_ReferenceUseCaseContent = () => {
                for(let research_and_reference_use_case_titles = 0; research_and_reference_use_case_titles < Research_and_ReferenceUseCasesTitles.length; research_and_reference_use_case_titles++) {
                    UseCaseTitles[research_and_reference_use_case_titles].textContent = Research_and_ReferenceUseCasesTitles[research_and_reference_use_case_titles]
                }
                for(let research_and_reference_use_cases_subtitles = 0; research_and_reference_use_cases_subtitles  < Research_and_ReferenceUseCasesSubtitles.length; research_and_reference_use_cases_subtitles ++) {
                    UseCaseSubtitle[research_and_reference_use_cases_subtitles].textContent = Research_and_ReferenceUseCasesSubtitles[research_and_reference_use_cases_subtitles];
                }
            };

            const displayProjectCollabContent = () => {
                for(let project_collaboration_use_case_titles = 0; project_collaboration_use_case_titles< ProjectCollaborationUseCaseTitles.length; project_collaboration_use_case_titles++) {
                    UseCaseTitles[project_collaboration_use_case_titles].textContent = ProjectCollaborationUseCaseTitles[project_collaboration_use_case_titles];
                }
                for(let project_collaboration_use_case_subtitles = 0; project_collaboration_use_case_subtitles < ProjectCollaborationUseCaseSubtitles.length; project_collaboration_use_case_subtitles++) {
                    UseCaseSubtitle[project_collaboration_use_case_subtitles].textContent = ProjectCollaborationUseCaseSubtitles[project_collaboration_use_case_subtitles];
                }
            }

            for (let i = 0; i < resData.length; i++) {
                useCaseSelectLists.forEach((useCaseSelectList, index) => {
                    useCaseSelectList.addEventListener("click", () => {
                        if (index == 0) {
                            displayPersonalUseCaseContent ();
                        }else if (index == 1) {
                            displayDesign_and_InspirationUseCaseContent();
                        }else if(index == 2) {
                            displayResearch_and_ReferenceUseCaseContent();
                        }else if (index == 3) {
                            displayProjectCollabContent();
                        }
                    });
                });
            };
            displayPersonalUseCaseContent();
        });     
};
displayUseCase();