const fetchFaqs = async () => {
    const data = await fetch('assets/js/faqs.json', {'method' : "GET"}),
        response = await data.json(),
        responseData = response[0],
        FaqsQuestion = Object.values(responseData.FaqS),
        faqsAnswer = Object.values(responseData.FaqAnswer);

    
}
fetchFaqs();