// This will make sure the function doesn't load until the document has loaded
 $(document).ready(function () {

  //Displays the date on the header page
  function showTime() {
    var curDay = dayjs().format('dddd MMMM D YYYY');
    $('#currentDay').text('Today is ' + curDay);
  } 

  showTime(); //calls the fuction
  setInterval(showTime, 1000);

  // use conditional statement for adjusting the color depending on time
  $('.time-block').each(function() {
    var currentHour = dayjs().hour();
    var timeDay = $(this).attr('id');
    if (timeDay == currentHour) {
      $(this).removeClass('future');
      $(this).removeClass('past');
      $(this).addClass('present');
    } else if (timeDay < currentHour) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');
    } else if (timeDay > currentHour) {
      $(this).removeClass('present')
      $(this).removeClass('past');
      $(this).addClass('future');
    }

    // once save button is pressed it will save to local storage
  
    $('.saveBtn').on('click', function() {
      var key = $(this).parent().attr('id');
      var value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
    
    $('.description').each(function() {
      $(this).val(localStorage.getItem($(this).parent().attr('id')))
    })
  });
 });