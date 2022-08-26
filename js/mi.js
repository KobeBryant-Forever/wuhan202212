var deBtns = document.querySelectorAll('.deBtn')
var inBtns = document.querySelectorAll('.inBtn')
var itemCounts = document.querySelectorAll('.itemCount')
var price = document.querySelectorAll('.price')
var totalPrice = document.querySelectorAll('.totalPrice')
var checks = document.querySelectorAll('.check')
var selectAll = document.querySelector('#selectAll')
var itemAll = document.querySelector('.itemAll')
var selectCnt = document.querySelector('.selectCnt')
var rmItems = document.querySelectorAll('.rmItem')
var prices = document.querySelector('.prices')
var sum = 0
for (let i = 0; i < deBtns.length; i++) {
    var cnt = 0
    deBtns[i].onclick = function () {
        if (itemCounts[i].value <= 1) {
            alert('商品数量不能小于1!')
        } else {
            itemCounts[i].value--
            subtotal(i)
            prices.innerHTML = totalUnitDe(i)
        }
    }
    inBtns[i].onclick = function () {
        itemCounts[i].value++
        subtotal(i)
        prices.innerHTML = totalUnitAdd(i)

    }
    checks[i].onclick = function () {
        if (isAllSelect()) {
            selectAll.checked = true
        } else {
            selectAll.checked = false
        }
        if (this.checked) {
            cnt++
            prices.innerHTML = total(i)
        } else {
            cnt--
            prices.innerHTML = totalSUB(i)
        }
        selectCnt.innerHTML = cnt
    }
    selectAll.onclick = function () {
        if (selectAll.checked) {
            for (var i = 0; i < checks.length; i++) {
                checks[i].checked = true

            }
            selectCnt.innerHTML = checks.length
            prices.innerHTML = allPrice()
        } else {
            for (var i = 0; i < checks.length; i++) {
                checks[i].checked = false
            }
            selectCnt.innerHTML = 0
            prices.innerHTML = 0
        }
    }
    rmItems[i].onclick = function () {
        rmItem(i)
    }
    itemAll.innerHTML = checks.length
}
function subtotal(index) {
    var sum = 0
    sum = itemCounts[index].value * price[index].innerHTML
    totalPrice[index].innerHTML = sum.toFixed(2)
}
function total(index) {
    sum += Number(totalPrice[index].innerHTML)
    return sum.toFixed(2)
}
function totalSUB(index) {
    sum -= Number(totalPrice[index].innerHTML)
    return sum.toFixed(2)
}
function isAllSelect() {
    var cnt = 0
    for (var i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            cnt++
        }
    }
    return cnt == checks.length
}
function rmItem(index) {
    rmItems[index].parentElement.parentElement.remove()
    if (checks[index].checked) {
        sum -= itemCounts[index].value * price[index].innerHTML
    }
    prices.innerHTML = sum.toFixed(2)
}

function allPrice() {
    sum = 0
    for (var i = 0; i < checks.length; i++) {
        sum += itemCounts[i].value * price[i].innerHTML
    }
    return sum
}

function totalUnitAdd(index) {
    sum += Number(price[index].innerHTML)
    return sum.toFixed(2)
}
function totalUnitDe(index) {
    sum -= Number(price[index].innerHTML)
    return sum.toFixed(2)
}