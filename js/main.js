let button = document.getElementById('button')
let amount = document.getElementById('amount')



button.addEventListener('click',function(){
    let functionName ='astak'+parseInt(Math.random()*100000,10);
    let script = document.createElement('script')
    script.src = 'http://frank.com:7777/pay?callback='+functionName
    document.body.appendChild(script)


    window[functionName] = function(result){
        alert(`我得到的结果是${result}`)
    }
    script.onload = function(e){
        e.currentTarget.remove()
    }
    script.onerror =function (e) {
        e.currentTarget.remove()
    }
})