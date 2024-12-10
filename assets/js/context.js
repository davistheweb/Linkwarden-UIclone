const displayContext = () => {
    fetch("assets/js/features.json")
    .then(res=> {
        
        return res.json();
    })
    .then(context => {
        console.table(context)
        const contextData = context[0];
        document.querySelector('.feature_subtitle1').textContent = contextData.featuresDescription.features_des1; 
        document.querySelector('.feature_subtitle2').textContent = contextData.featuresDescription.features_des2;
        document.querySelector('.feature_subtitle3').textContent = contextData.featuresDescription.features_des3;
    })
}

displayContext();