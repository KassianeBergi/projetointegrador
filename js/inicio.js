
function atualizarDataHora() {
    var dataHora = new Date();
    var dataHoraFormatada = dataHora.toLocaleString();
    document.getElementById("data-hora").innerHTML = dataHoraFormatada;
  }
  setInterval(atualizarDataHora, 1000);