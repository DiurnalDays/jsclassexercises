function challenge5(element){
    console.log("Hovering")
    console.log(element.src)
    console.log(element.alt)
    document.querySelector("#display").style.backgroundImage = "url('" +
    element.src + "')"
    document.querySelector("#display").innerHTML = element.alt
    }
function challenge5leave(element){
    console.log("Leaving")
    document.querySelector("#display").style.backgroundImage = ""
    document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
    }    
    thumbnails= document.querySelectorAll(".thumbnail")
    for (var index=0; index < thumbnails.length;index++){
        console.log("Adding image listener index")
        console.log(thumbnails[index])
        thumbnails[index].addEventListener('mouseover', function(){
            document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
            document.querySelector("#display").innerHTML = this.alt
        });
        thumbnails[index].addEventListener('focus', function(){
            document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
            document.querySelector("#display").innerHTML = this.alt
        });
        thumbnails[index].setAttribute("tabindex","0")
    }