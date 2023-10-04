const realtime = new Date();
var countDownDate = new Date((realtime.getMonth() + 1)+" "+realtime.getDate()+", "+realtime.getFullYear()+ " 15:30:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("tabName").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("icon").innerHTML = "<link rel='icon' href='https://i.ibb.co/y44mD31/circle-FILL1-wght400-GRAD0-opsz24.png'>"
  // If the count down is over, write some text 
  var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'https://stackoverflow.com/favicon.ico';

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "Error :(";
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
