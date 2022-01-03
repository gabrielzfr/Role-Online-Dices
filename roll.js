let rollelement = document.getElementById('roll')
let res = document.getElementById('res')
let dado = 'd6'
let escd = document.getElementById('escd')
let hisnum = []
res.innerHTML = dado

//#region rolar o dado

//#region selecionar os dados 
function seld4 (){
    dado = 'd4'
    escd.innerText = `Você escolheu o ${dado}`
}
function seld6 (){
    dado = 'd6'
    escd.innerText = `Você escolheu o ${dado}`
}
function seld10 (){
    dado = 'd10'
    escd.innerText = `Você escolheu o ${dado}`
}
function seld20 (){
    dado = 'd20'
    escd.innerText = `Você escolheu o ${dado}`
}
function seld100 (){
    dado = 'd100'
    escd.innerText = `Você escolheu o ${dado}`
}
//#endregion

function rolar() {
    res.style.position = 'fixed'
    res.style.display = 'flex'

    if (dado == 'd4') {
        let number = Math.floor(Math.random() * 4 + 1)
        res.innerHTML = `<input type="button" value="X" id="x" onclick="fechar()">
        <h3 id = 'h3'>O resultado foi</h3>
        <p id = 'p'>${number}</p>`

        //historico
        var tbd = document.getElementById('tbd')
        var novotr = document.createElement('tr')
        var tddado = document.createElement('td')
        var tdres = document.createElement('td')
    
        novotr.appendChild(tddado)
        novotr.appendChild(tdres)
    
        tbd.appendChild(novotr)
    
        hisnum.push(number)
        var ultimo = hisnum.length - 1
        
        tddado.innerText = dado
        tdres.innerText = hisnum[ultimo]

       

    } else if (dado == 'd6') {
        let number = Math.floor(Math.random() * 6 + 1)
        res.innerHTML = `<input type="button" value="X" id="x" onclick="fechar()">
        <h3 id = 'h3'>O resultado foi</h3>
        <p id = 'p'>${number}</p>`

        //historico
        var tbd = document.getElementById('tbd')
        var novotr = document.createElement('tr')
        var tddado = document.createElement('td')
        var tdres = document.createElement('td')
    
        novotr.appendChild(tddado)
        novotr.appendChild(tdres)
    
        tbd.appendChild(novotr)
    
        hisnum.push(number)
        var ultimo = hisnum.length - 1
        
        tddado.innerText = dado
        tdres.innerText = hisnum[ultimo]
    } else if (dado == 'd10') {
        let number = Math.floor(Math.random() * 10 + 1)
        res.innerHTML = `<input type="button" value="X" id="x" onclick="fechar()">
        <h3 id = 'h3'>O resultado foi</h3>
        <p id = 'p'>${number}</p>`

        //historico
        var tbd = document.getElementById('tbd')
        var novotr = document.createElement('tr')
        var tddado = document.createElement('td')
        var tdres = document.createElement('td')
    
        novotr.appendChild(tddado)
        novotr.appendChild(tdres)
    
        tbd.appendChild(novotr)
    
        hisnum.push(number)
        var ultimo = hisnum.length - 1
        
        tddado.innerText = dado
        tdres.innerText = hisnum[ultimo]
    } else if (dado == 'd20') {
        let number = Math.floor(Math.random() * 20 + 1)
        res.innerHTML = `<input type="button" value="X" id="x" onclick="fechar()">
        <h3 id = 'h3'>O resultado foi</h3>
        <p id = 'p'>${number}</p>`

        //historico
        var tbd = document.getElementById('tbd')
        var novotr = document.createElement('tr')
        var tddado = document.createElement('td')
        var tdres = document.createElement('td')
    
        novotr.appendChild(tddado)
        novotr.appendChild(tdres)
    
        tbd.appendChild(novotr)
    
        hisnum.push(number)
        var ultimo = hisnum.length - 1
        
        tddado.innerText = dado
        tdres.innerText = hisnum[ultimo]
    } else if (dado == 'd100') {
        let number = Math.floor(Math.random() * 100 + 1)
        res.innerHTML = `<input type="button" value="X" id="x" onclick="fechar()">
        <h3 id = 'h3'>O resultado foi</h3>
        <p id = 'p'>${number}</p>`

        //historico
        var tbd = document.getElementById('tbd')
        var novotr = document.createElement('tr')
        var tddado = document.createElement('td')
        var tdres = document.createElement('td')
    
        novotr.appendChild(tddado)
        novotr.appendChild(tdres)
    
        tbd.appendChild(novotr)
    
        hisnum.push(number)
        var ultimo = hisnum.length - 1
        
        tddado.innerText = dado
        tdres.innerText = hisnum[ultimo]
    } else {
        let number = Math.floor(Math.random() * 6 + 1)
        res.innerHTML = `<input type="button" value="X" id="x" onclick="fechar()">
        <h3 id = 'h3'>O resultado foi</h3>
        <p id = 'p'>${number}</p>`

        dado == 'd6'

        //historico
        var tbd = document.getElementById('tbd')
        var novotr = document.createElement('tr')
        var tddado = document.createElement('td')
        var tdres = document.createElement('td')
    
        novotr.appendChild(tddado)
        novotr.appendChild(tdres)
    
        tbd.appendChild(novotr)
    
        hisnum.push(number)
        var ultimo = hisnum.length - 1
        
        tddado.innerText = dado
        tdres.innerText = hisnum[ultimo]
        
    }

     tdres.setAttribute('class', 'num')

}

function fechar() {
    res.style.position = 'relative'
    res.style.display = 'none'
    
    let h3 = document.getElementById('h3')
    let p = document.getElementById('p')
    let x = document.getElementById('x')
    
    h3.parentNode.removeChild(h3)
    p.parentNode.removeChild(p)
    x.parentNode.removeChild(x)


    
}
//#endregion

