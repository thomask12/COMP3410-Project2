var count = 1;
function change(){
  if(count == 1){
    count = 2;
    var change = document.getElementById("mainPic1").src="cats/max(cat).jpg";
  }
  else if(count == 2){
    count = 3;
    var change = document.getElementById("mainPic1").src="dogs/misty(dog).jpg";
  }
  else{
    count = 1;
    var change = document.getElementById("mainPic1").src="dogs/henri(dog).jpg";
  }
}

var newCount = 1;
function change1(){
  if(newCount == 1){
    newCount = 2;
    var change = document.getElementById("mainPic2").src="cats/possum(cat).jpg";
  }
  else if(newCount == 2){
    newCount = 3;
    var change = document.getElementById("mainPic2").src="cats/reese(cat).jpg";
  }
  else{
    newCount = 1;
    var change = document.getElementById("mainPic2").src="dogs/bud(dog).jpg";
  }
}

var newCount2 = 1;
function change2(){
  if(newCount2 == 1){
    newCount2 = 2;
    var change = document.getElementById("mainPic3").src="cats/luna(cat).jpg";
  }
  else if(newCount2 == 2){
    newCount2 = 3;
    var change = document.getElementById("mainPic3").src="cats/andersoncooper(cat).jpg";
  }
  else{
    newCount2 = 1;
    var change = document.getElementById("mainPic3").src="cats/ember(cat).jpg";
  }
}
count3 = 0;
function addInput(){
  count3++;
  var inputAdd = document.createElement("input");
  inputAdd.type = "text";
  document.getElementById("inputArea").appendChild(inputAdd);
}
function removeInput(){
  if(count3 > 0){
    count3--;
    var section = document.getElementById("inputArea");
    section.removeChild(section.lastChild);
  }
}
