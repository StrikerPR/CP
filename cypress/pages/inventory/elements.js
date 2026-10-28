export const elements = {
    addToCart: (ItemName) => `[data-test="add-to-cart-${transform(ItemName)}"]`,
    removeFromCart: (ItemName) => `[data-test="remove-${transform(ItemName)}"]`
}

function transform(texto){
    return texto.replaceAll(' ', '-').toLowerCase()
}