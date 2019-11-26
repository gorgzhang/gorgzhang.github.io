var home = 
  "<p>" +
    "Hey, I'm George, a rising senior studying computer science at Berkeley." +
    "Currently, I'm interning at " +
    "<a href='https://www.databricks.com' target='_blank'>Databricks</a> in San Francisco" +
  "</p>" +

  "<p>" +
    "Previously, I worked at <a href='https://www.rubrik.com' target='_blank'>Rubrik</a>" +
    "and " + 
    "<a href='https://www.marlettefunding.com' target='_blank'>Marlette Funding</a>" +
  "</p>" + 


  "<p>" +
    "Feel free to contact me at georgeluzhang@berkeley.edu" +
  "</p>" + 

  "<div id='other'> other... </div>" + 
  "<script src='js/lastfm-yellowstone.js'></script>" + "hello"

home = $.parseHTML(home, true)

$("#home").click(function() {
    console.log("hello")
    $(".right").html(home)
})