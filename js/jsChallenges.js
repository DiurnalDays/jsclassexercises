function challenge1(checkboxelement){
    console.log("In challenge 1")
    if (checkboxelement.checked){
        document.querySelector("#emailDiv").style.display = "block"
    }
    else{
        document.querySelector("#emailDiv").style.display = "None"
    }
}
function challenge2(checkboxelement){
    console.log("In challenge 2")
    bill=document.querySelector("#bill")
    console.log("The value in bill is..." + bill.value)
    home = document.querySelector("#home")
    console.log("The value in home is..." + home.value)
    if (checkboxelement.checked == true){
        home.value=bill.value
        home.disabled=true
    }
    else{
        home.value=""
        home.disabled=false
    }
}
function challenge5(imageElement){
    console.log("In challenge 5")
    console.log(imageElement.src) //Print image src''
    console.log(imageElement.alt) //Print out image alt

    displayImage=document.querySelector("#display")
    displayImage.innerHTML= imageElement.alt
    displayImage.style.backgroundImage="url(" + imageElement.src+")"
}

function reset(){
    displayImage.innerHTML= "Hover over an image"
    displayImage.style.backgroundImage = "url()"
}