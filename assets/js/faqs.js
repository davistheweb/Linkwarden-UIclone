const FaqQuestionElement = document.querySelectorAll('.faq-text'),
    FaqAnswerElement = document.querySelectorAll('.faq-answer_text'),
    faqParentElement = document.querySelectorAll('.faq-question'),
    faqAnswerParentElement = document.querySelectorAll('.faq-answer');
const fetchFaqs = async () => {
    const data = await fetch('assets/js/faqs.json', {'method' : "GET"}),
        response = await data.json(),
        responseData = response[0],
        FaqsQuestions = Object.values(responseData.FaqS),
        faqsAnswer = Object.values(responseData.FaqAnswer);

        FaqQuestionElement.forEach((ele, index) => {
            ele.textContent = FaqsQuestions[index];
        });
        FaqAnswerElement.forEach((ele, index) => {
            ele.innerHTML = `<p class="faq-answer_text">${faqsAnswer[index]}</p>`;
        });
        faqParentElement.forEach((elem, index) => {
            elem.addEventListener('click', () => {
                const faqAnswerisAlreadyOpen = faqAnswerParentElement[index].classList.contains('popup');
                
                faqAnswerParentElement.forEach(faqAnswer => {
                    faqAnswer.classList.remove('popup');
                });
                
                if (!faqAnswerisAlreadyOpen) {
                    faqAnswerParentElement[index].classList.add('popup');
                }
            });
        });      
};
fetchFaqs();