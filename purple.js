const cart = []
const itemAdd = () => {
    if(product.value ===''){
    //    alert("Input a product")
       errorMsg.style.display = 'block'
    }else{
        errorMsg.style.display = 'none'
        delProduct.style.display = 'block'
        cart.push(product.value)
        console.log(cart); 
        document.getElementById('product').value =""
        disp()
    } 
}

const itemDelete = () => {
    if(cart.length >=1){
        const nothing = Number(prompt("What number do u want to delete"))
        cart.splice(nothing+1, 1)
        disp()
        if(cart.length < 1){
          delProduct.style.display = 'none'
        }
    }
        
}
const disp = () => {
    show.innerHTML = ""
        cart.map((data, index)=>{
            show.innerHTML += `<p>${index+1}. ${data}</p>`
        })
}