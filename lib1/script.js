const realtime = new Date();
var countDownDate = new Date((realtime.getMonth() + 1)+" "+realtime.getDate()+", "+realtime.getFullYear()+ " 15:30:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var whatisit;
// Update the count down every 1 second
var countdownfunction = setInterval(function() {
  
  // Output the result in an element with id="demo"
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // If the count down is over, write some text 
  if (distance < 0) {
    document.getElementById("maintext").innerHTML = "School is over";
    document.getElementById("demo").innerHTML = "Wait till tomorrow";
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = "images/clock.svg";
  }else if(distance > 6){
    countDownDate = new Date((realtime.getMonth() + 1)+" "+realtime.getDate()+", "+realtime.getFullYear()+ " 8:30:00").getTime();
    var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("maintext").innerHTML = "School starts in:"
    document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("tabName").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  }else if(distance <= 6 && distance >= 0){
    countDownDate = new Date((realtime.getMonth() + 1)+" "+realtime.getDate()+", "+realtime.getFullYear()+ " 15:30:00").getTime();
    var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("tabName").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("maintext").innerHTML = "School ends in:"
  }
}, 1000);
function randomize(){
  var bkgno = Math.floor(Math.random() * 3);
  if(bkgno == 0){
    document.getElementById("bgimgid").style = "background-image: url('https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg');height: 100%;background-position: center;background-size: cover;position: relative;color: white;font-family: 'Dela Gothic One', sans-serif; font-size: 25px; text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;"
  }else{ if(bkgno == 1){
    document.getElementById("bgimgid").style = "background-image: url('https://c0.wallpaperflare.com/preview/771/757/79/aerial-photography-of-river-between-trees.jpg');height: 100%;background-position: center;background-size: cover;position: relative;color: white;font-family: 'Dela Gothic One', sans-serif; font-size: 25px; text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;"
  }else{ if(bkgno == 2){
    document.getElementById("bgimgid").style = "background-image: url('https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/24220D05-C580-4CEE-BF600801B906E712/97C2F5A1-B4E6-4543-8F35006A0AAFD991/WebsiteJpg_XL-FFGC_Main%20Visual_Green_Website.jpg');height: 100%; background-position: center; background-size: cover;position: relative;color: white; font-family: 'Dela Gothic One', sans-serif; font-size: 25px; text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;"
  }}}
}
//Favicon Stuff
