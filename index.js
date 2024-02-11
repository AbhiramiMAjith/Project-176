let words = [
    {
        "inputs" : 5,
        "category" : "Food item",
        "word" : "bread"
    },
    {
        "inputs" : 6,
        "category" : "Book name",
        "word" : "hobbit"
    },
    {
        "inputs" : 6,
        "category" : "Anime",
        "word" : "bleach"
    },
    {
        "inputs" : 5,
        "category" : "Country in Asia",
        "word" : "china"
    },
]

$(document).ready(function(){
    fillBlanks()
})

var gameOver = false

function fillBlanks(){
    
    var random_word = words[Math.floor(Math.random()*words.length)]

    for(let i=0; i<random_word.word.length; i++){
        let html = `<span class="fill_blanks">${random_word.word[i]}</span>`
        $("#blanks").append(html)
    }

    $("#hint").append(random_word.category)

    $(".clickable").click(function(){
        var correctGuess = false

        let id= $(this).attr("id")

        var life = parseInt($("#life").text())

        for(var i=0; i < random_word.word.length; i++){

            if(random_word.word.charAt(i).toLowerCase()==id){

                if(life>0 && ($(".fill_blanks").eq(i).html()== "_" || $(".fill_blanks").eq(i).html()==id)){
                    
                    $(".fill_blanks").eq(i).html(id)
                    correctGuess = true

                    console.log(correctGuess)
                }

                if($("#blanks").text() === random_word.word.toLowerCase()){
                    $("#result").text("You win!")
                    correctGuess = true
                    gameOver = true
                }
            }
        }
    })
}