import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product"
        data-price="${product.price}"
        data-name="${product.name}"
        >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "product") {
            const price = parseFloat(itemClicked.dataset.price)
            const item = itemClicked.dataset.name
            window.alert(`${item} costs\n$${parseFloat(price)}`)
        }
    }

)
