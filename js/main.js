/* Взаимодействия с элементами */

// $('h2, p').css('border', '2px solid #000')  // Первый, второй, третий и т.д.
$('h2 span') // outer и inner 
$('h2 > span') // parent > child 
$('h2 + p').css('') // prev + next 
// $('h2 ~ p').css('border', '2px solid #000'); // prev ~ next
$('.container  span ').css('border', '2px solid #000'); // prev ~ next
