const displayContext = () => {
    fetch("assets/js/features.json")
    .then(res=> {
        
        return res.json();
    })
    .then(context => {
        const contextData1 = context[0];
        const contextData2 = context[1];
        const contextData3 = context[2];
        const featuresArr1 = Object.values(contextData1.featuresDescription);
        const featuresArr2 = Object.values(contextData1.featuresDescription2);
        const featuresArr3 = Object.values(contextData1.featuresDescription3);

        //console.table(featuresArr);
        const textS = document.querySelectorAll('.feature_subtitle')

        for(let i = 0; i < featuresArr1.length; i++){
            textS[i].textContent = featuresArr1[i]; 
        }
        const textS1 = document.querySelectorAll('.feature_subtitle1')

        for(let n = 0; n < featuresArr2.length; n++){
            textS1[n].textContent = featuresArr2[n]; 
        }
        const textS2 = document.querySelectorAll('.feature_subtitle2')

        for(let x = 0; x < featuresArr3.length; x++){
            textS2[x].textContent = featuresArr3[x]; 
        }
    })
}

displayContext();