var money = parseInt(localStorage.getItem("money"))
function createAcc(){
  usrname = document.getElementById('usrName').value
  pswd = document.getElementById('usrPswd').value
  if(localStorage.getItem("accStore")){
    alert("There is already an account on this computer. Please log in.")
  }else{
    localStorage.setItem("usrname", usrname)
    localStorage.setItem("pswd", pswd)
    localStorage.setItem("accStore", true)
    localStorage.setItem("money", 5)
  }
}
function login(){
  usrname = document.getElementById('loginUsr').value
  pswd = document.getElementById('loginPswd').value
  if(localStorage.getItem("usrname") == usrname && localStorage.getItem("pswd") == pswd){
    window.location.href = "games.html";
  }else{
    alert("incorect")
  }
}
function playCoinflip(){
  window.location.href = "coinflip.html";
}
function coinflipload(){
  document.getElementById('moneyinput').innerHTML = "<p id='moneyout'>Money: " + parseInt(localStorage.getItem("money")) + "<p>Bet: <input type='number' min='1' max='" + parseInt(localStorage.getItem("money")) + "' id='bet' placeholder='Input Bet'></p>"
}
function flipCoin(){
  flip = Math.floor(Math.random() * 2);
  bet = parseInt(document.getElementById('bet').value)
  if(flip == 1){
    alert("you win!")
    if(confirm("Double or nothing?")){
      flip = Math.floor(Math.random() * 2);
      bet = bet * 2
      if(flip == 1){
        alert("You win double!")
        money = money + (bet)
        document.getElementById('moneyout').innerHTML = "Money: " + money;
        localStorage.setItem("money", money)
      }else{
        alert("You lose everything!")
        money = money - (bet / 2)
        document.getElementById('moneyout').innerHTML = "Money: " + money;
        localStorage.setItem("money", money)
      }
    }else{
    money = money + (bet)
    document.getElementById('moneyout').innerHTML = "Money: " + money;
    localStorage.setItem("money", money)
    }
  }else{
    money = money - (bet)
    document.getElementById('moneyout').innerHTML = "Money: " + money;
    localStorage.setItem("money", money)
    alert("you lose!")
  }
}
