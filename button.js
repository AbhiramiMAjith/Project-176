alphabets_list = ["a","b","c","d","e","f","g",
"h","i","j","k","l","m","n",
"o","p","q","r","s","t",
"u",'v','w','x','y','z']

$(document).ready(function(){
    createAlphabets()
})
function createAlphabets(){
    for (a in alphabets_list){
        let letter = `<button type="button" id=${alphabets_list[a]} class="btn btn-outline-primary clickable">${alphabets_list[a]}</button>`
        $("#alphabets").append(letter)
    }
}