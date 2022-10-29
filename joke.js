$(document).ready(function () {
  // function data(){
  //     $.ajax({
  //       url: "/api/getWeather",
  //       data: {
  //         zipcode: 97201,
  //       },
  //       success: function (result) {
  //         $("#weather-temp").html("<strong>" + result + "</strong> degrees");
  //       },
  //     });
  // }
  //   $.ajax({
  //     type: "GET",
  //     url: "https://v2.jokeapi.dev/joke/Any?type=single",
  //     data: {},
  //     success: function (data) {
  //       p.innerText = data["joke"];
  //       category.innerText = data["category"];
  //       // console.log(result["joke"]);
  //     },
  //   });
  let p = document.querySelector(".joke");
  let category = document.querySelector(".category");
  $(".btn").on("click", function () {
    $.ajax({
      type: "GET",
      url: "https://v2.jokeapi.dev/joke/Programming,Dark,Pun,Spooky,Christmas?blacklistFlags=sexist&type=single",
      data: {},
      success: function (data) {
        p.innerText = data["joke"];
        category.innerText = data["category"] + " Joke";
        // console.log(result["joke"]);
      },
    });
  });
});
