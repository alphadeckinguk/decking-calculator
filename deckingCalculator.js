// Alpha Decking Decking Calculator Copyright 2020. All Rights Reserved. No unauthorised use.

//Page Load Hides
$('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fede791e3645f2263910856]), .decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa])').hide();
//Set All quantity boxes to have a min of 1 and a initial value of 0
$(document).ready(function() {
    $('input[name=commerce-add-to-cart-quantity-input]').attr({
       "min" : 1,
       "value": 0        // values (or variables) here
    });
});
//Start of the Calculator

// Define Variables

//inputs
var lengthM = $(".length-input-m"); //Length in Metres
var widthM = $(".width-input-m"); //Length in Metres

//outputs
var totalBoardsTextOuputM = $('#totalboardstextouputM');// Output for No. of Boards as Text

//prices
var boardPrice = 21.00; // Per 3.66m Boards
var starterClipsPrice = 14.99; // Per Box of 50
var joistPrice = 16.28;
var pedastalPrice = 9.00;
var spacerPrice = 32.00;

// Colour Select Options

$('#Anthracite').click(function(){
$("#option-set-c0cc19d3c706a50acdb3d0058f61e21f").val('09b0c58bf9a127b07468b384e9003ed6').trigger('change');
   updateAll();
});

$('#Grey').click(function(){
$("#option-set-c0cc19d3c706a50acdb3d0058f61e21f").val('38d053f3dcf87331945d9448f09a352b').trigger('change');
   updateAll();
});

$('#Oak').click(function(){
$("#option-set-c0cc19d3c706a50acdb3d0058f61e21f").val('e729de1f63465444c5cf1c106b043d7e').trigger('change');
   updateAll();
});

$('#Teak').click(function(){
$("#option-set-c0cc19d3c706a50acdb3d0058f61e21f").val('e0b8e3d2ec7e7bfb4fa29e9e9ebaaf13').trigger('change');
   updateAll();
});

//Subframe options checkbox

// Pedastal---------------------------------------------------------------

$('input[name="pedastalCheckbox"]').click(function(){

  if ($(this).prop("checked") == true){

$('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa])').show();

var numberOfPedastalsQuantity = ( (widthM.val() * lengthM.val() / 1));
//Check if less than or equal to 1

if (numberOfPedastalsQuantity = 0) {
  numberOfPedastalsQuantity = 0;
}
else if ((numberOfPedastalsQuantity >0) && (numberOfPedastalsQuantity <=1)) {
  numberOfPedastalsQuantity = 1;
}
else {
  numberOfPedastalsQuantity = ( Math.ceil (widthM.val() * lengthM.val() / 1));;
}

// Output Total Pedestal needed into Quantity Field
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", numberOfPedastalsQuantity);

// Set Pedestal Price
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find("#price").text('£' + (numberOfPedastalsQuantity * pedastalPrice).toFixed(2));
}
else if ($(this).prop("checked") == false){

// Output Total Pedestal needed into Quantity Field
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", 0);

// Set Pedestal Price
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find("#price").text('£' + (0).toFixed(2));

//$('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa])').hide();

}

});

//Joist-----------------------------------------------------------------

$('input[name="joistsCheckbox"]').click(function(){

  if ($(this).prop("checked") == true){

   $('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fede791e3645f2263910856])').show();

   var numberOfJoistsQuantity = ( Math.ceil ((widthM.val() * lengthM.val() * 4) / 2.2) );

   // Output Total Joists needed into Quantity Field
   $('form[data-commerce-product-id=5fede791e3645f2263910856]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", numberOfJoistsQuantity);

   // Set Joists Price
   $('form[data-commerce-product-id=5fede791e3645f2263910856]').find("#price").text('£' + (numberOfJoistsQuantity * joistPrice).toFixed(2));

}
else if ($(this).prop("checked") == false){

//$('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fede791e3645f2263910856])').hide();

// Output Total Joists needed into Quantity Field as 0
$('form[data-commerce-product-id=5fede791e3645f2263910856]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", 0);

// Set Joists Price to £0.00
$('form[data-commerce-product-id=5fede791e3645f2263910856]').find("#price").text('£' + (0).toFixed(2));

}
});

//when an input is changed
$('.length-input-m, .width-input-m').keyup
(function(){
totalBoardsTextOuputM.text ( Math.round( ( ( (widthM.val() / 0.144) * lengthM.val() ) / 3.66) * 1.05) + ' boards'); // Update No. of Boards needed text

// Decking Board Line -------------------------------------------------
var numberOfBoardsQuantity = ( Math.round( ( ( (widthM.val() / 0.144) * lengthM.val() ) / 3.66) * 1.05) ); //Set Variables for Decking boards needed

// Output Total Boards needed into Quantity Field
$('form[data-commerce-product-id=5fd13c6bd1d6e9dad947e04f]') // get the form with data-commerce-product-id = 5fd13c6bd1d6e9dad947e04f
.find('input[name=commerce-add-to-cart-quantity-input]') // locate the input element with attribute name = commerce-add-to-cart-quantity-input
.attr("value", numberOfBoardsQuantity ); //  set the attribute value with var
// Set Decking Boards Price
$("#deckingBoardPrice").text('£' + (numberOfBoardsQuantity * boardPrice).toFixed(2));


// Starter Clips Line -------------------------------------------------
var numberOfStainlessSteelStarterClipsQuantity = ( Math.ceil (widthM.val() * lengthM.val() / 15));
//Check if less than or equal to 1
if (numberOfStainlessSteelStarterClipsQuantity <= 1) {
  numberOfStainlessSteelStarterClipsQuantity = 1;
} else {
  numberOfStainlessSteelStarterClipsQuantity = ( Math.ceil (widthM.val() * lengthM.val() / 15));;
}

// Output Total Starter Clips needed into Quantity Field
$('form[data-commerce-product-id=5fd56e026bf66f410e9ea500]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", numberOfStainlessSteelStarterClipsQuantity);

// Set Starter Clips Price
$('form[data-commerce-product-id=5fd56e026bf66f410e9ea500]').find("#price").text('£' + (numberOfStainlessSteelStarterClipsQuantity * starterClipsPrice).toFixed(2));

// Spacer Clips Line -------------------------------------------------
var numberOfSpacersQuantity = ( Math.ceil (widthM.val() * lengthM.val() / 5));
//Check if less than or equal to 1
if (numberOfSpacersQuantity <= 1) {
  numberOfSpacersQuantity = 1;
} else {
  numberOfSpacersQuantity = ( Math.ceil (widthM.val() * lengthM.val() / 5));
}

// Output Total Spacer Clips needed into Quantity Field
$('form[data-commerce-product-id=5fd56e27c7800c4e72ebda83]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", numberOfSpacersQuantity);

// Set Spacer Clips Price
$('form[data-commerce-product-id=5fd56e27c7800c4e72ebda83]').find("#price").text('£' + (numberOfSpacersQuantity * spacerPrice).toFixed(2));

//Pedastal-------------------------------------------------------------

   if ($('input[name="pedastalCheckbox"]').prop("checked") == true){

$('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa])').show();

var numberOfPedastalsQuantity = ( (widthM.val() * lengthM.val() / 1));
//Check if less than or equal to 1

if (numberOfPedastalsQuantity = 0) {
  numberOfPedastalsQuantity = 0;
}
else if ((numberOfPedastalsQuantity >0) && (numberOfPedastalsQuantity <=1)) {
  numberOfPedastalsQuantity = 1;
}
else {
  numberOfPedastalsQuantity = ( Math.ceil (widthM.val() * lengthM.val() / 1));;
}

// Output Total Pedestal needed into Quantity Field
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", numberOfPedastalsQuantity);

// Set Pedestal Price
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find("#price").text('£' + (numberOfPedastalsQuantity * pedastalPrice).toFixed(2));
}
else if ($('input[name="pedastalCheckbox"]').prop("checked") == false){

// Output Total Pedestal needed into Quantity Field
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", 0);

// Set Pedestal Price
$('form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa]').find("#price").text('£' + (0).toFixed(2));

//$('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fd56e56b1b5fd6614bc76aa])').hide();

}


//Joist--------------------------------------------------------------

  if ($('input[name="joistsCheckbox"]').prop("checked") == true){

   $('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fede791e3645f2263910856])').show();

   var numberOfJoistsQuantity = ( Math.ceil ((widthM.val() * lengthM.val() * 4) / 2.2) );

   // Output Total Joists needed into Quantity Field
   $('form[data-commerce-product-id=5fede791e3645f2263910856]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", numberOfJoistsQuantity);

   // Set Joists Price
   $('form[data-commerce-product-id=5fede791e3645f2263910856]').find("#price").text('£' + (numberOfJoistsQuantity * joistPrice).toFixed(2));

}
else if ($('input[name="joistsCheckbox"]').prop("checked") == false){

//$('.decking-calculator-product-wrapper:has(form[data-commerce-product-id=5fede791e3645f2263910856])').hide();

// Output Total Joists needed into Quantity Field as 0
$('form[data-commerce-product-id=5fede791e3645f2263910856]').find('input[name=commerce-add-to-cart-quantity-input]').attr("value", 0);

// Set Joists Price to £0.00
$('form[data-commerce-product-id=5fede791e3645f2263910856]').find("#price").text('£' + (0).toFixed(2));

}

});



// Code not used, kept for future reference -----------------------------------------

/*Output value to the quantity field if single id object
$('#5fd14e3840d79054bf86a779').attr('value', test);*/

/*// Output a var value as text that is not defined in the vars
$("#ID").text(defineVar.val());
$("#beamsneeded").text('You will also need ' + (totalboardsM.val() * beams) + ' beams.');
$("#screwsneeded").text('You will also need ' + (totalboardsM.val() * screws) + ' screws.');*/



/// Show Message if over Min or Max
/*
$(".length-input-m").keyup(function() {
  if ($('.length-input-m').val() < 0 || $('.length-input-m').val() > 10) {
    $('#lengthInputErrorMsg').show();
  } else {
    $('#lengthInputErrorMsg').hide();
  }
});
*/
