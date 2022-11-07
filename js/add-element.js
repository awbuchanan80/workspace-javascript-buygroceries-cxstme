/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
$('#two').next().text('milk');
// add a new element by clicking the plus sign
$('#todo').append('<li>candy</li>');
$('#todo').append('<li>cake</li>');
console.log("right here");

// before and after are for siblings
// append and prepend are for parent
$('#add').click(addElement);
function addElement() {
  $('#todo').append('<li><input type="text"></li>');
  // add a new element
  // add a input text box
  // whenever the user are done add the element
  $('input').blur(function(){
    $(this).parent().addClass('cool');
    var userinput = $(this).val();
    $(this).parent().text(userinput);
    $('li').click(changeStyle);
  });
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  }else if($(this).hasClass('complete')){
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }else{
    $(this).removeClass('hot');
    $(this).addClass('complete');
}
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}
