const cart = []
const addItem = () => {
    if (item.value === "") {
        alert("Input something joor")
    } else {
        cart.push(item.value)
        document.getElementById('item').value =''
        console.log(cart);
        
        show.innerHTML = ''
        for(let i=0;i<cart.length;i++){
           show.innerHTML += `
            <p>${i+1}.${cart[i]}</p>
           `
        }
    }

}