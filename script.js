$("button").click(function() {

//write your code to save the values of your inputs as variables here:
var question1= $(".age").val();
    
//write your conditional statements here
var question2= $(".gender").val();
if (question2 ==="male" && question1<18){
$(".answer").text("Miles Morales");
}
else if (question2 ==="male" && question1>18){
$(".answer").text("spiderman");
}
else if (question2 ==="female" && question1<18){
$(".answer").text("Mary Jane");
}
else if (question2 ==="female" && question1>18){
$(".answer").text("Aunt May");
}


    
    
    
});