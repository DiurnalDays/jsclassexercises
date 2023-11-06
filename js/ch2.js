function challenge2(element){
    console.log(element.checked)
    
    bill = document.querySelector("#bill")
    home = document.querySelector("#home")
    console.log("Home value is" + home.value)
    console.log("Billing value is" + bill.value)
    if (element.checked){
        console.log("Set it")
        home.value = bill.value
        home.disabled = true
    }
    else{
        console.log("Unset it")
        home.value = ""
        home.disabled = false
    }
    }