function calcular() {
    var inpvel = document.getElementById(`inpvel`);
    var res = document.getElementsByClassName(`res`)[0];
    var vel = Number(inpvel.value);
    res.innerHTML = `<p>Sua velocidade atual é de <b>${vel}km/h</b></p>`
    res.innerHTML += `<p>Dirija sempre usando o cinto de segurança!</p>`

}