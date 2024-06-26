import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li 
        data-type="employee"
        data-id="${employee.id}"
        data-name="${employee.name}"
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.dataset.type === "employee"){
    const name = itemClicked.dataset.name
    const id = itemClicked.dataset.id
    let saleCounter = 0
    const sales = getOrders()
    for (const sale of sales) {
        if(parseInt(id) === sale.employeeId){
            saleCounter++
        }
    }
    window.alert(`${name} has sold ${saleCounter} products`)
    }
    }
)