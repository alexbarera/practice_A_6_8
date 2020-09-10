let barWidth = 0;
let newbarWidth = 0;
$('.j-one').click(function(){
  newbarWidth = barWidth+1;
  if (newbarWidth <= 100) {barWidth = newbarWidth}
  else (barWidth = 100)
  $("#my-progress-bar").width(barWidth+"%");
  $('.result').html(barWidth+"%");
})
$('.j-three').click(function(){
  newbarWidth = barWidth+3;
  if (newbarWidth <= 100) {barWidth = newbarWidth}
  $("#my-progress-bar").width(barWidth+"%");
  $('.result').html(barWidth+"%");
})
$('.j-seven').click(function(){
  newbarWidth = barWidth+7;
  if (newbarWidth <= 100) {barWidth = newbarWidth}
  $("#my-progress-bar").width(barWidth+"%");
  $('.result').html(barWidth+"%");
})

$('.j-reset').click(function(){
  barWidth =0;
  $("#my-progress-bar").width(barWidth+"%");
  $('.result').html(barWidth+"%");
})