function submitData(num) {
    var xyz = document.getElementById('fn')
    xyz.value += num
}

function clearResult() {
    var xyz = document.getElementById('fn')
    xyz.value = ""
}

function getResult() {
    var xyz = document.getElementById('fn')
    xyz.value = eval(xyz.value)
}


