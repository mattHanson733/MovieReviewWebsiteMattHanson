$(".button-one ").click(function() {
    let review = $(".review-field-1").val();
    review = (review === "" ? null : review);
    let username = $(".review-username-1").val();
    username = (username === "" ? null : username);
    if (review === null || username === null){
    	alert("Invaild Input: Please provide username AND review");
    } else {
    	$(".reviews-1").append(`<p class="userReview">\"${review}\" -${username}</p>`);
    }
});


//Show 2 start
$(".button-two ").click(function() {
    let review = $(".review-field-2").val();
    review = (review === "" ? null : review);
    let username = $(".review-username-2").val();
    username = (username === "" ? null : username);
    if (review === null || username === null){
    	alert("Invaild Input: Please provide username AND review");
    } else {
    	$(".reviews-2").append(`<p class="userReview">\"${review}\" -${username}</p>`);
    }
    console.log($(".reviews-2").children());
});


