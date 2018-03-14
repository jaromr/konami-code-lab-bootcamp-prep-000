const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init() {
 document.body.addEventListener('keydown',listen)
}
debugger
function listen(e){
  const key = parseInt(e.keyCode)
  
  
  if (key === code[index]){
    index++
    
    if (index === code.length){
    alert('You have unlocked the secrets of the web. Use your power wisely')
    index = 0
    }
  }
  else {
    index = 0
  }
  

}


