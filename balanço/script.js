
var insti = window.prompt('Qual é o seu nome ou o nome da sua instituição?')
var recept = window.alert(`Bem vindo ${insti}`)





var bot_ = window.document.getElementById('btn1')
bot_.addEventListener('click',Balanco)

var caixa = window.document.getElementById('icaixa')
var credito = window.document.getElementById('icredit')
var capex = window.document.getElementById('icapex')
var opex = window.document.getElementById('iopex')
var socios = window.document.getElementById('isocios')
var _result = window.document.getElementById('result') 



function Balanco(){
    var cx = Number(caixa.value)
    var crt = Number(credito.value)
    var cpx = Number(capex.value)
    var opx = Number(opex.value)
    var scs = Number(socios.value)
 
    var cash = cx + crt 
    var debt = cpx + opx
    var bln = (cash - debt) / scs
 
  
  if(cash > debt) {
    _result.innerHTML = `Ola ${insti} Você tem ${cash}$ um debito de -${debt}$ 
     e um Balanço total de ${bln} 'Parabens! muito ouro e rum`
    _result.style.color = 'blue'
  }else if(cash < debt) {
     _result.innerHTML = `Ola ${insti} Você tem ${cash}$ um debito de -${debt}$ 
     e um Balanço total de ${bln} Tempos melhores virão melhore a  sua gestão`
     _result.style.color = 'red'
   
}
}

  
  




