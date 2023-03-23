let form = document.getElementById('form')
let itemName = document.getElementById('itemName')
let itemPrice = document.getElementById('itemPrice')
let total = document.getElementById('total')
let cash = document.getElementById('cash')
let change = document.getElementById('change')
let list = document.getElementById('list')
let tbody = document.getElementById('tbody')
let q = document.getElementById('q')
let final = document.getElementById('final')
let phone = document.getElementById('phone')
let date = document.getElementById('date')
let time = document.getElementById('time')
let y = document.getElementById('year')
let phoneNo = `Phone: (+880) 000-0000000`
let sum = 0
let c = ''

setInterval(function() {
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()
    let day = today.getDay()
    let currentDate = `${day}/${month}/${year}`
    let currentTime = today.toLocaleTimeString()
    date.innerText = currentDate
    phone.innerText = phoneNo
    y.innerText = year
    time.innerText = currentTime
}, 1000)


form.addEventListener('submit', function(e) {
    e.preventDefault()
    let item = itemName.value
    let quantity = Math.abs(q.value)
    let price = Math.abs(itemPrice.value)
    if (item == '') {
        itemName.style.border = '2px dashed red'
        itemName.setAttribute('placeholder', 'Item Name Required')
        return false
    } else {
        itemName.style.border = '2px dashed green'
    }
    if (quantity == '' || quantity < 1) {
        q.style.border = '2px dashed red'
        q.setAttribute('placeholder', 'no.')
        console.log(quantity)
        return false
    } else {
        q.style.border = '2px dashed green'
    }
    if (price == '' || isNaN(price)) {
        itemPrice.style.border = '2px dashed red'
        itemPrice.setAttribute('placeholder', 'Item Price Required')
        if (isValid) {
            alert(`Price Can be Only Number!\nYou Inserted: (${itemPrice.value}), which is not a number!`)
            return false
        }
        return false
    } else {
        itemPrice.style.border = '2px dashed green'
    }
    if (item != '' && price != '' && quantity != '') {
        itemName.style.border = '2px dashed #ddd'
        itemPrice.style.border = '2px dashed #ddd'
        q.style.border = '2px dashed #ddd'
    }
    updateIDs(item, quantity, price)
    let priceSet = []
    priceSet.push(price * quantity)
    for (let v of priceSet) {
        sum += v
    }
    finalCalculation()
    form.reset()
    console.log(c)
})
let n = 1

function updateIDs(item, quantity, price) {
    let newElement = document.createElement('tr')
    let newList = `list${n}`
    newElement.setAttribute('id', newList)
    let newTd1 = document.createElement('td')
    let newTd2 = document.createElement('td')
    newElement.appendChild(newTd1)
    newElement.appendChild(newTd2)
    let iID = `i${n}`
    let pID = `p${n}`
    let id1 = newElement.children[0]
    let newSpan = document.createElement('span')
    newElement.children[1].appendChild(newSpan)
    let id2 = newElement.children[1].children[0]
    tbody.appendChild(newElement)
    id1.setAttribute('id', iID)
    id2.setAttribute('id', pID)
    id1.appendChild(document.createTextNode(`(${n}) ${item}*${quantity}`))
    id2.appendChild(document.createTextNode(price))
    n++
}

function finalCalculation() {
    total.innerText = sum
    cash.innerText = c
    change.innerText = c - sum
}
final.addEventListener('click', function(e) {
    if (c == '') {
        while (c == '') {
            c = prompt('Please Enter How Much Cash You Recive:')
            c = Math.abs(c)
            if (isNaN(c)) {
                c = ''
            }
        }
    }
    finalCalculation()
    window.print();
    return false;
})