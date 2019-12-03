// Unit Converter Script

function weightConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputPounds = document.getElementById("inputPounds");
    var inputKilograms = document.getElementById("inputKilograms");
    var inputOunces = document.getElementById("inputOunces");
    var inputGrams = document.getElementById("inputGrams");

    if (source == "inputPounds") {
      inputKilograms.value = (valNum / 2.2046).toFixed(2);
      inputGrams.value = (valNum / 0.0022046).toFixed();
      inputOunces.value = (valNum * 0.071429).toFixed(3);
    }
    if (source == "inputKilograms") {
      inputPounds.value = (valNum * 2.2046).toFixed(2);
      inputOunces.value = (valNum * 35.274).toFixed(2);
      inputGrams.value = (valNum * 1000).toFixed();
    }
    if (source == "inputOunces") {
      inputPounds.value = (valNum * 0.062500).toFixed(4);
      inputKilograms.value = (valNum / 35.274).toFixed(4);
      inputGrams.value = (valNum / 0.035274).toFixed(1);
    }
    if (source == "inputGrams") {
      inputPounds.value = (valNum * 0.0022046).toFixed(4);
      inputKilograms.value = (valNum / 1000).toFixed(4);
      inputOunces.value = (valNum * 0.035274).toFixed(3);
    }


  }