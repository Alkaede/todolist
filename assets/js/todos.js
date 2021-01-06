//check off specific todos by clicking
$('ul').on("click", 'li', function(){  //we changed $('li') to ul so that it grabs the parent and so when we click a new li it will actually run the code below when the page loads
    $(this).toggleClass("completed"); //we made a class in the css so that the code ends up being shorter a
});

//Click on X to delete To-do
$('ul').on('click', 'span', function(event){ //add in the event object; same change as the very first line
    $(this).parent().fadeOut(500, function(){ //removes the parent element as a jquery element the li in this case
        $(this).remove(); //this in this line is referring to the li not the span
    }); 
    event.stopPropagation(); //stops the event from bubbling up to other elements so it only affects the span
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){    //which === 13 is the enter key
       //grabbing new todo text form input
       var todoText = $(this).val();  //.val method gives us the value of the input 
       $(this).val(""); //the empty string is a setter instead of a getter
       //create a new li and add to ul
       $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); //.append will take the string of html and add it to the element we choose -> this case adding it to the li in the parent ul
    }
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});