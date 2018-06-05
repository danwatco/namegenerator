
function getName(){
  var boyRandom1 = parseInt(Math.random() * boyNames.length);
  var boyRandom2 = parseInt(Math.random() * boyNames.length);
  var girlRandom1 = parseInt(Math.random() * girlNames.length);
  var girlRandom2 = parseInt(Math.random() * girlNames.length);
  var lastRandom1 = parseInt(Math.random() * lastNames.length);
  var lastRandom2 = parseInt(Math.random() * lastNames.length);

  var boyName = boyNames[boyRandom1];
  var middleBoyName = boyNames[boyRandom2];
  var girlName = girlNames[girlRandom1];
  var middleGirlName = girlNames[girlRandom2];
  var lastName = lastNames[lastRandom1];
  var extendedLastName = lastNames[lastRandom2];

  var n = parseInt(Math.random() * 100);
  var name = "";

  if(n <= 35){
    name = boyName  + " " + lastName;
  } else if (n > 35 && n <=45){
    name = boyName + " " + middleBoyName + " " + lastName;
  } else if(n > 45 && n <=50){
    name = boyName + " " + lastName + " " + lastName;
  } else if(n > 50 && n <=85){
    name = girlName + " " + lastName;
  } else if(n >85 && n <=95) {
    name = girlName + " " + middleGirlName + " " + lastName;
  } else {
    name = girlName + " " + lastName + " " + lastName;
  }
  return name;
}

function getNames(amount) {
  var names = [];
  for(var i = 0; i < amount; i++){
    names[i] = getName();
  }
  return names;
}

$('#generateBtn').click(function(e){
  var names = getNames(6);
  $('#names').empty();
  for(var i = 0; i < names.length; i++){
    $('#names').append("<p> " + names[i] + " </p>");
  }
});
