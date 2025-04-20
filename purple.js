const cart = []
const itemAdd = () => {
    if(product.value.trim() ==='' ){
    //    alert("Input a product")
       errorMsg.style.display = 'block'
    }
    // else if(/^\s*$/.test(product.value)){
        // alert("Input a product")
    else{
        errorMsg.style.display = 'none'
        delProduct.style.display = 'block'
        delFirstProduct.style.display = 'block'
        delLastProduct.style.display = 'block'
        editProduct.style.display = 'block'
        cart.push(product.value)
        console.log(cart); 
        document.getElementById('product').value =""
        disp()
    } 
}

const itemDelete = () => {
        const nothing = Number(prompt("What number do u want to delete"))
        cart.splice(nothing+1, 1)
        disp()
        
}


const itemEdit = () => {
    const editNumber = Number(prompt("what number do u want to edit"))
    const editEdit = prompt(" Your New Product ")
    if(editEdit === ""){
        // errorMsg.style.display = 'block'
        alert('Input a New Product')
    }else{
        cart.splice(editNumber,1, editEdit)
        disp()
    }
    
}



const itemFirstDelete = () => {
    cart.shift()
    disp()
}

const itemLastDelete = () => {
    cart.pop()
    disp()
}
const disp = () => {
    show.innerHTML = ""
        cart.map((data, index)=>{
            show.innerHTML += `<p>${index+1}. ${data}</p>`
        })
}