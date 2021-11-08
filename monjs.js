var verifCar;
var brandCar;

var brandCar = prompt('Quel est la marque de votre véhicule?').toLowerCase()
brandCar = brandCar.replace("ë","e") //
brandCar = brandCar.trim(); //le trim sert a enlever les espaces des chaines de caractere
switch (brandCar) {
    case 'citroen':
        verifCar = true;
        break;
    case 'renault':
        verifCar = true;
        break;
    case 'peugeot':
        verifCar = true; 
        break;
    default:
        verifCar = false;
        break;    
}

function maFonction(){
if(verifCar = true) {
    var typeCarbu = 
    var age = parseInt(prompt('Quel âge a le véhicule?'))

    if((typeCarbu === 'gazoil' && age > 5) || (typeCarbu === 'essence' && age >10)) {
        alert('Vous pouvez bénéficier du bonus!!!')
    } else {
        alert('Vous ne pouvez pas bénéficier du bonus car votre voiture est trop récente!')
    }

} else {
    document.getElementById("msg").innerHTML = "<br>Désolé vous ne pouvez pas bénéficier du bonus";
    //alert("Désolé ce n'est pas une marque française, vous ne pouvez pas bénéficier du bonus")
}
}