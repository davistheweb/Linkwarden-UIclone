'use strict';
const UseCaseTitles = document.querySelectorAll(".usecase-title"),
    UseCaseSubtitle = document.querySelectorAll(".usecase_subtitle"),
    useCaseSelectLists = document.querySelectorAll(".usecase_section"),
    SelectBtn = document.querySelector(".select-use_case"),
    CaseSelectBody = document.querySelector('.use_case_unlist'),
    useCaseListBodyTitle = document.querySelectorAll('.use-case_list_title'),
    useCaseListBodyIcon = document.querySelectorAll('.use-case_list_icon'),
    useCaseButtonTitle = document.querySelector('.use_case_name-title'),
    useCaseButtionIcon = document.querySelector('.usecase_button-select_icon');

const openAndCloseUseCaseList = () => {
    SelectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        CaseSelectBody.classList.toggle('openlist');
    });
    document.addEventListener('click', (ev) => { 
        if(!SelectBtn.contains(ev.target) && !CaseSelectBody.contains(ev.target)) {
            CaseSelectBody.classList.remove('openlist');
        }
    });
    useCaseSelectLists.forEach((selectList) => {
        selectList.addEventListener('click', () => {
            CaseSelectBody.classList.remove('openlist');
        });
    });
};
openAndCloseUseCaseList();
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
                    let UseCaseTextTitle = useCaseListBodyTitle[index].textContent;
                    let UseCaseIcon = useCaseListBodyIcon[index].src;
                        useCaseButtonTitle.textContent = UseCaseTextTitle;
                        useCaseButtionIcon.src = UseCaseIcon;
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
