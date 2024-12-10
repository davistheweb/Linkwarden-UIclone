const displayContext = () => {
    fetch("assets/js/features.json")
    .then(res=> {
        
        return res.json();
    })
    .then(context => {
        const contextData = context[0];
        const featuresArr = Object.values(contextData.featuresDescription);

        //console.table(featuresArr);
        const textS = document.querySelectorAll('.feature_subtitle')

        for(let i = 0; i < featuresArr.length; i++){
            textS[i].textContent = featuresArr[i]; 
        }
    })
}

displayContext();