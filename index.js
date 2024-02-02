window.addEventListener("load", function () {
  const game = document.querySelectorAll("#game div");
  const can = document.getElementById("can");
  const xal = document.getElementById("xal");
  const ad = document.getElementById("ad");
  const olke = document.getElementById("olke");


  ad.innerText=prompt('adinizi yazin') || 'Qonaq'
  olke.innerText=prompt('olkenizi yazin') || 'Qerib'

  for (let i = 0; i < game.length; i++) {
    game[i].addEventListener("click", function () {
      // console.log(isUrek(i));
      if (isUrek(i)) {
        xalArtir()
        // console.log("artirdim");
      } else {
        // console.log("azaltdim");

           canAzalt()
      }
      clear(i);
    });
  }

  const interval = setInterval(function(){
    clear();
    let index = Random(0,game.length-1)
    game[index].classList.add('daire')
  },3000)

  function xalArtir(){
      let x = Number(xal.innerText)
      xal.innerText = x + 1
  }
  function canAzalt(){
      let c = Number(can.innerText)
      can.innerText = c - 1
      if((c-1)<=0){
         do{
            var izin = confirm('caniniz bitdi. oyunu davam edek?')
        // console.log(izin);
     }while(!izin)
     open('index.html','_parent')
      }
  }

  function isUrek(i) {
    let cls = game[i].classList;
    return cls[0] === "daire" ? true : false;
  }

  function clear(index = "all") {
    if (index === "all") {
      for (let i = 0; i < game.length; i++) game[i].classList.remove("daire");
    } else {
      game[index].classList.remove("daire");
    }
  }

  //   //   return  game[3].classList.remove('daire')

  function Random(s, e) {
    return Math.floor(s + Math.random() * (e - s));
  }
});
