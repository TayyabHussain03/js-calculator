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

function remove() {
    var xyz = document.getElementById('fn')
    xyz.value = xyz.value.slice(0,xyz.value.length-1)
}



