var Game = (function(){
    var word
    var display
    var wrong = []
    var turns = 5
    

 function chooseWord(arr){
    const guessable = arr.filter(word => word.length  >= 3)
    const randomIndex = Math.floor(Math.random() * guessable.length)

   word = guessable[randomIndex]
   display = word.split('').map(l => '_')
console.log('word')
I.publish('guess', {
    display: display,
    wrong: wrong,
    turns: turns
})
 }
function guess(l) {
    var index = word.indexOf(l)
    if (index !== -1) {
       for (let i = 0; i< word.length; i+=1) {
           if (word.charAt(i) === l) {
               display[i] = l
           }
       }
    } else {
        wrong.push(l)
        turns--
        console.log('wrong',wrong)
    }

    if(display.indexOf('_') ===-1 ){
        I.publish('win')

    }else if(turns === 0){ 
        I.publish('lose')
    }else{
        I.publish('guess', {
            display: display,
            wrong : wrong,
            turns: turns 
        })
    }
}

 return{
     chooseWord: chooseWord,
     guess: guess
 }
}())