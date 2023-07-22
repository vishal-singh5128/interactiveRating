
let userRated = localStorage.getItem('userRated');

if (userRated) {
    $(".userRating").text("You selected " + userRated + " out of 5");
  }
/*var numberOfStars = document.querySelectorAll(".ratingPoint").length;
console.log(numberOfStars)


for (var i = 0; i < numberOfStars; i++){
document.getElementsByClassName(".ratingPoint")[i].addEventListener("click",function(){
    var starInnerHTML = this.innerHTML;
    console.log(starInnerHTML)
})
}*/

$(".ratingPoint").hover(function(){
    $(".ratingPoint").removeClass("hover")
    $(this).addClass("hover")

})

$(".ratingPoint").click(function(){
    $(".ratingPoint").removeClass("pressed")
    $(this).addClass("pressed")
    console.log($(this).html())
    userRated = $(this).html();
   
    console.log("userRated is "+userRated)
$(".userRating").text(" You selected "+userRated +"out of 5")
})

$(".btn").click(function() {
    // Store the userRated value in localStorage before navigating to the next page
    localStorage.setItem('userRated', userRated);
  });
