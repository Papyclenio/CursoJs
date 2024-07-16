var data = new Date()
var hora = data.getHours()
console.log(`São ${hora}`);
if (hora < 12 && hora > 5){
    console.log(`Bom dia`);
} else {
    if (hora >= 12 && hora < 18) {
        console.log(`Boa Tarde`);
    } else {
        if (hora >= 18 && hora > 24) {
            console.log(`Boa noite`);
        } else {
            console.log(`Boa Madrugada`);
        }
    }
}