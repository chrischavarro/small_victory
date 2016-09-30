// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require_tree .
//= require bootstrap-sprockets
//= require Chart.bundle.min
//= require TimeCircles.js
//= require moment.min.js
//= require jquery.mousewheel.min.js
//= require raphael-2.1.4.min.js
//= require justgage.js
//= require jquery.timepicker.min.js
//= require jquery.knob.js



$(document).ready(function(){
    // $('#calendar').datepicker({
    //     inline: true,
    //     firstDay: 1,
    //     showOtherMonths: true,
    //     dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // });

	 $('#wakeup_time_select').TimePickerAlone({
	    inputFormat: 'HH:mm',
	    // hours: true,
	    // minutes: true,
	    // seconds: false,
	    // ampm: true,
     //    twelveHoursFormat:true,
        mouseWheel: false,
        listenKeyPress: true,
        defaultTime: '12:00',
        inline: true
	  });
	  window.onerror = function (m){
	  alert(m)
	  }

    $('.victor').click(function(){
    	$('.victor').toggleClass("animated bounce")
    });

    $( function() {
    	$( "#menu" ).menu();
  })

    $('.step_2').hide();
    $('.step_3').hide();

    $('.next_step_1').click(function(event){
        event.preventDefault();
        $('.step_1').fadeOut();
        $('.step_2').fadeIn();
    })

    $('.next_step_2').click(function(event){
        event.preventDefault();
        $('.step_2').fadeOut();
        $('.step_3').fadeIn();
    })
// CHART.JS
    // var ctx = document.getElementById("myChart");
    //     var myChart = new Chart(ctx, {
    //     type: 'pie',
    //     data: {
    //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         // maintainAspectRatio: false,
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero:true
    //                 }
    //             }]
    //         }
    //     }
    // })

// JustGage JS
  // var g = new JustGage({
  //   id: "gauge",
  //   value: 67,
  //   min: 0,
  //   max: 100,
  //   title: "Visitors"
  // });

    $("#DateCountdown").TimeCircles(
        { time: {
        Days: {show: false},
        Hours: {show: false},
        Minutes: {show: false},
        Seconds: {show: true}
        },
        count_past_zero: false,
        circle_bg_color: "#3C78D8",
        use_background: false,
        start: false,
        total_duration: "Auto",
        start_angle: 0
    });
    $("#start").click(function(){ 
        $(".demo.stopwatch").TimeCircles().start(); 
    });
        var $container = $('#DateCountdown .textDiv_Seconds');
        $container.find('h4').text('Minutes');
        var $original = $container.find('span');
        var $clone = $original.clone().appendTo($container);
        $original.hide();

        $('#DateCountdown').TimeCircles().addListener(function(unit, value, total) {
            total = Math.abs(total);
            var minutes = Math.floor(total / 60) % 60;
            $clone.text(minutes);
        });
 

});