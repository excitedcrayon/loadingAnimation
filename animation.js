var Animation = function(){
    
    var loadAnimation = function(element){
        var button = document.getElementById(element);
        button.addEventListener("click", function(){
            var loadingScreen = document.getElementById("overlay");
            loadingScreen.style.visibility = "visible";
        }, false);
        return this;
    };
    
    return {loadAnimation:loadAnimation}
};