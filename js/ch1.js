document.querySelector("#subscribe").addEventListener("click", function(){
    console.log("Made it to Challenge 1")
    
    console.log(this.checked)
    if (this.checked){
        document.querySelector("#emailDiv").style.display = "block"
    }
    else{
        document.querySelector("#emailDiv").style.display = "None"
    }
});
