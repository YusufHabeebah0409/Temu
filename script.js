const cart = []

const addItem = () => {
    if (item.value === "") {
        // alert("Input something joor")
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'
        cart.push(item.value)
        document.getElementById('item').value = ''
        console.log(cart);
        if (cart.length >= 1) {
            btnDelete.style.display = 'block'
        }

        show.innerHTML = ''
        for (let i = 0; i < cart.length; i++) {
            show.innerHTML += `
            <p>${i + 1}.${cart[i]}</p>
           `
        }
    }

}

const deleteAnyItem = () => {
    7
}

