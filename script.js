var valorConvertido = 0;

function converter() {
    var converterDe = document.querySelector('.converter-de').value;
    var converterValorDe = Number(document.querySelector('#valor-de').value)
    var converterPara = document.querySelector('.converter-para').value;

    if (converterDe == "celsius") {
        if (converterPara == "farenheit") {
            valorConvertido = (converterValorDe * 9/5) + 32;
    }
        else if (converterPara == "kelvin") {
            valorConvertido = converterValorDe + 273.15;
    }
        else {
            valorConvertido = converterValorDe;
    }
  }
  
  else if (converterDe == "farenheit") {
    if (converterPara == "celsius") {
      valorConvertido =  (converterValorDe - 32) * 5/9;
    }
    else if (converterPara == "kelvin") {
      valorConvertido =  (converterValorDe - 32) * 5/9 + 273.15;
    }
    else {
      valorConvertido = converterValorDe;
    }
  }
  
  else if(converterDe == "kelvin") {
    if (converterPara == "farenheit") {
      valorConvertido =  ( converterValorDe - 273.15) * 9/5 + 32;
    }
    else if (converterPara == "celsius") {
      valorConvertido = converterValorDe - 273.15;
    }
    else {
      valorConvertido = converterValorDe;
    }
  }

  document.querySelector('#valor-para').innerHTML = "" + valorConvertido.toFixed(1);
}