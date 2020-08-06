
$( window ).load(function() {
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
$('#userNameErrorMessage').hide();
$('#emailErrorMessage').hide();
$('#userNameErrorComment').hide();
$('#optionSelect').hide();
$('#locations').hide();
$('#comment').hide();
$('#submit').hide();
   
});

/*open link onclick start*/
function openGenderJewelry(evt, gender) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].className = tablinks[i].className.replace(" clickhighlight", "");
    }

    document.getElementById(gender).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.className += " clickhighlight";
}


/*Toggle Navbar start*/

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*Toggle Navbar end*/


/*Carousel Start*/
$(document).ready(function () {

    $(".js__p_start, .js__p_another_start").simplePopup();

    // slider main
    $('#carousel-4').carousel();

     $('.owl-theme-product').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navigation: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
                nav: true,
                margin: 10
            }
        }
    })
});
/*owl carousel End*/

// Form Validations

$("#nameEmailValidation").on( "click", function() {
    var isName = check_username();
    var isEmail = check_email();
    if (isName && isEmail) {
        $('#nameEmailValidation').hide();
        $('#locations').show();
        $('#comment').show();
    }
});
$("#nameEmailCommentValidation").click(function () {
    var isName = check_username();
    var isEmail = check_email();
    var isComment = check_comment();
    var isSelected = check_option();
    if (isName && isEmail && isComment && isSelected) {
        $('#submit').show();
        $('#nameEmailCommentValidation').hide();
    }
});

$("#finalSubmit").click(function () {
    var isName = check_username();
    var isEmail = check_email();
    var isComment = check_comment();
    var isSelected = check_option();
    if (isName && isEmail && isComment && isSelected) {
        $(".p_close, .js__p_close").click();
        $('#fname').val("");
        $('#femail').val("");
        $('#fcomment').val("");
        $('#select').val(0);
    }
});

$(".p_close, .js__p_close").on( "click", function() {
    $('#fname').val("");
    $('#femail').val("");
    $('#fcomment').val("");
    $('#select').val(0);

});


//Name Validation
function check_username() {
    var isNameValid = false;

    var fnameLenght = $('#fname').val().length;
    if (fnameLenght < 5 || fnameLenght > 20) {
        $('#userNameErrorMessage').html("Should be between 5-20 characters");
        $('#userNameErrorMessage').show();
    } else {
        isNameValid = true;
        $('#userNameErrorMessage').hide();
    }

    return isNameValid;

}
//email validation
function check_email() {
    var isEmailValid = false;
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var email = $('#femail').val();
    if (testEmail.test(email)) {
        $('#emailErrorMessage').hide();
        isEmailValid = true;
    } else {
        $('#emailErrorMessage').html("Invalid email addres");
        $('#emailErrorMessage').show();
        emailErrorMessage = true;
    }
    return isEmailValid;
}
//Comment Validation
function check_comment() {
    var isComment = false;

    var fcommentLenght = $('#fcomment').val().length;
    if (fcommentLenght < 20 || fcommentLenght > 200) {
        $('#userNameErrorComment').html("Should be between 20-200 characters");
        $('#userNameErrorComment').show();
    } else {
        isComment = true;
        $('#userNameErrorComment').hide();
    }
    return isComment;

}

// option select validation

function check_option() {
    var isSelected = false;

    var selectedFiled = $('#select').val();
    console.log(selectedFiled);
    if (selectedFiled == 0) {
        $('#optionSelect').html("Select any One option");
        $('#optionSelect').show();
    } else {
        isSelected = true;
        $('#optionSelect').hide();
    }
    return isSelected;

} 