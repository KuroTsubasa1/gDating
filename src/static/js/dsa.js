// create charakter object
var charakter = {
    name: "",
    family: "",
    birthday: "",
    species: {name: "", LeP: 0, SK: 0, ZK: 0, GS: 0, trait: "", ApCosts: 0},
    haircolor: "",
    culture: {
        title: "",
        ApCost: 0
    },
    title: "",
    characteristics: "",
    birthplace: "",
    age: 0,
    height: 0,
    eyeColor: "",
    profession: "",
    socialStatus: "",
    gender: "",
    weight: 0,
    experienceLevel: 0,
    apTotal: 0,
    apAvailable: 0,
    apSpend: 0,
    MU: 8,
    KL: 8,
    IN: 8,
    CH: 8,
    FF: 8,
    GE: 8,
    KO: 8,
    KK: 8,
    lifeEnergie: 0,
    astralEnergie: 0,
    karmaEnergie: 0,
    soulPower: 0,
    toughness: 0,
    evasion: 0,
    initiative: 0,
    speed: 0,
    destinyPoints: 3,
    languages: ["", "", "", "", "", ""]
};

document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }
});

// get the upper limit for each experienceLevel and returns it as array
function getCounterLimits() {
    var experienceLevel = getLevel();
    var lowerLimit = 8;
    var upperLimit = 0;
    switch (experienceLevel) {

        case 1:
            upperLimit = 12;
            break;

        case 2:
            upperLimit = 13;
            break;

        case 3:
            upperLimit = 14;
            break;

        case 4:
            upperLimit = 15;
            break;

        case 5:
            upperLimit = 16;
            break;

        case 6:
            upperLimit = 17;
            break;

        case 7:
            upperLimit = 18;
            break;
    }

    var limits = [
        upperLimit,
        lowerLimit
    ];
    return limits;
}

// changes the text value of the MU box
$(document).ready(function () {
    $('#mu-val').text(charakter.MU);
    $('#kl-val').text(charakter.KL);
    $('#in-val').text(charakter.IN);
    $('#ch-val').text(charakter.CH);
    $('#ff-val').text(charakter.FF);
    $('#ge-val').text(charakter.GE);
    $('#ko-val').text(charakter.KO);
    $('#kk-val').text(charakter.KK);
})

// counts +1 to the text value of the MU box
$('#mu-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.MU < upper) {
        charakter.MU = charakter.MU + 1;
        $('#mu-val').text(charakter.MU);
    }
});

// counts -1 to the text value of the MU box
$('#mu-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.MU > lower) {
        charakter.MU = charakter.MU - 1;
        $('#mu-val').text(charakter.MU);
    }
});

$('#kl-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.KL < upper) {
        charakter.KL = charakter.KL + 1;
        $('#kl-val').text(charakter.KL);
    }
});

// counts -1 to the text value of the MU box
$('#kl-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.KL > lower) {
        charakter.KL = charakter.KL - 1;
        $('#kl-val').text(charakter.KL);
    }
});

$('#in-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.IN < upper) {
        charakter.IN = charakter.IN + 1;
        $('#in-val').text(charakter.IN);
    }
});

// counts -1 to the text value of the MU box
$('#in-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.IN > lower) {
        charakter.IN = charakter.IN - 1;
        $('#in-val').text(charakter.IN);
    }
});

$('#ch-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.CH < upper) {
        charakter.CH = charakter.CH + 1;
        $('#ch-val').text(charakter.CH);
    }
});

// counts -1 to the text value of the MU box
$('#ch-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.CH > lower) {
        charakter.CH = charakter.CH - 1;
        $('#ch-val').text(charakter.CH);
    }
});

$('#ff-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.FF < upper) {
        charakter.FF = charakter.FF + 1;
        $('#ff-val').text(charakter.FF);
    }
});

// counts -1 to the text value of the MU box
$('#ff-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.FF > lower) {
        charakter.FF = charakter.FF - 1;
        $('#ff-val').text(charakter.FF);
    }
});

$('#ge-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.GE < upper) {
        charakter.GE = charakter.GE + 1;
        $('#ge-val').text(charakter.GE);
    }
});

// counts -1 to the text value of the MU box
$('#ge-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.GE > lower) {
        charakter.GE = charakter.GE - 1;
        $('#ge-val').text(charakter.GE);
    }
});

$('#ko-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.KO < upper) {
        charakter.KO = charakter.KO + 1;
        $('#ko-val').text(charakter.KO);
    }
});

// counts -1 to the text value of the MU box
$('#ko-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.KO > lower) {
        charakter.KO = charakter.KO - 1;
        $('#ko-val').text(charakter.KO);
    }
});

$('#kk-counter-up').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.KK < upper) {
        charakter.KK = charakter.KK + 1;
        $('#kk-val').text(charakter.KK);
    }
});

// counts -1 to the text value of the kk box
$('#kk-counter-down').on('click', function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }
    limits = getCounterLimits();
    var upper = limits[0];
    var lower = limits[1];
    if (charakter.KK > lower) {
        charakter.KK = charakter.KK - 1;
        $('#kk-val').text(charakter.KK);
    }
});

// TO DO Noticing Senpai later :(
function noticeMeSenpai() {

}


$('#btn-experienceLevel').click(function () {
    if (charakter.experienceLevel == 0) {
        noticeMeSenpai();
    }

    charakter.MU = 8;
    charakter.KL = 8;
    charakter.IN = 8;
    charakter.CH = 8;
    charakter.FF = 8;
    charakter.GE = 8;
    charakter.KO = 8;
    charakter.KK = 8;
    $('#mu-val').text(charakter.MU);
    $('#kl-val').text(charakter.KL);
    $('#in-val').text(charakter.IN);
    $('#ch-val').text(charakter.CH);
    $('#ff-val').text(charakter.FF);
    $('#ge-val').text(charakter.GE);
    $('#ko-val').text(charakter.KO);
    $('#kk-val').text(charakter.KK);
});

// support function of experienceLevel dropdown
function onClickUnerfahren() {
    var LevelId = "1";
    charakter.experienceLevel = 1;
    showLevel(LevelId);
}

// support function of experienceLevel dropdown
function onClickDurchschnitt() {
    var LevelId = "2";
    charakter.experienceLevel = 2;
    showLevel(LevelId);
}

// support function of experienceLevel dropdown
function onClickErfahren() {
    var LevelId = "3";
    charakter.experienceLevel = 3;
    showLevel(LevelId);
}

// support function of experienceLevel dropdown
function onClickKompetent() {
    var LevelId = "4";
    charakter.experienceLevel = 4;
    showLevel(LevelId)
}

// support function of experienceLevel dropdown
function onClickMeister() {
    var LevelId = "5";
    charakter.experienceLevel = 5;
    showLevel(LevelId)
}

// support function of experienceLevel dropdown
function onClickBilliant() {
    var LevelId = "6";
    charakter.experienceLevel = 6;
    showLevel(LevelId)
}

// support function of experienceLevel dropdown
function onClickLegend() {
    var LevelId = "7";
    charakter.experienceLevel = 7;
    showLevel(LevelId)
}

function onClickHuman() {
    var species = "Mensch";
    setSpecies(species, 5, -5, -5, 8, "Eine beliebige Eigenschaft +1", 0);
    showSpecies(species);
}
function onClickElf() {
    var species = "Elf";
    setSpecies(species, 2, -4, -6, 8, "IN und GE +1 und KL oder KK -2", 18);
    showSpecies(species);
}
function onClickHalfelf() {
    var species = "Halbelf";
    setSpecies(species, 5, -4, -6, 8, "Eine beliebige Eigenschaft +1", 0);
    showSpecies(species);
}
function onClickDwarf() {
    var species = "Zwerg";
    setSpecies(species, 8, -4, -4, 6, "KO und KK +1; CH oder GE -2", 61);
    showSpecies(species);
}
function showSpecies(species) {
    $('#displayspecies').val(species);
}

function setSpecies(name, lep, sk, zk, gs, trait, apcost) {
    charakter.species.name = name;
    charakter.species.LeP = lep;
    charakter.species.SK = sk;
    charakter.species.ZK = zk;
    charakter.species.GS = gs;
    charakter.species.trait = trait;
    charakter.species.ApCosts = apcost;
}

function getLevel() {
    return charakter.experienceLevel;
}

function showLevel(LevelId) {
    var LevelText = "";
    switch (LevelId) {
        case "1":
            LevelText = "Unerfahren";
            break;
        case "2":
            LevelText = "Durchschnittlich";
            break;
        case "3":
            LevelText = "Erfahren";
            break;
        case "4":
            LevelText = "Kompetent";
            break;
        case "5":
            LevelText = "Meisterlich";
            break;
        case "6":
            LevelText = "Brilliant";
            break;
        case "7":
            LevelText = "Legendär";
            break;
    }
    setTotalAp(LevelId);
    $('#displayAnswer1').val(LevelText);
}

/*
 function deterLep(gwLep, charakter.KO) {
 return gwLep + (charakter.KO * 2);
 }

 function deterAusw(charakter.GE) {
 return charakter.GE / 2;
 }

 function deterIni(charakter.MU, charakter.GE) {
 return (charakter.MU + charakter.GE) / 2;
 }

 // Gibt den Astralpunktewert an, braucht die Leiteigenschaft der Zauberertradition an
 function deterAsp(charakter.LE) {
 return 20 + charakter.astralEnergie;
 }

 // Gibt den Karmawert an, braucht die Leiteigenschaft der Geweihtentradition
 function deterKsp(charakter.LE) {
 return 20 + charakter.karmaEnergie;
 }

 // Berechnet die Seelenkraft aus Grundwert der Spezies für Seelenkraft, Mut, Klugheit, Intuition
 function deterSK(gwSK, charakter.MU, charakter.KL, charakter.IN) {
 return (charakter.MU + charakter.KL + charakter.IN / 6) + gwSK;
 }

 // Berechnet die Zähigkeit aus Grundwert der Spezies für Zähigkeit, Kondition, Körperkraft
 function deterZK(gwZK, charakter.KO, charakter.KK) {
 return ((charakter.KO + charakter.KO + charakter.KK) / 6) + gwZK;
 }
 */
var fruits = ['Parameter1', 'Parameter2', 'Parameter3'];
var widget = new AutoComplete('search_bar', fruits);

$('#showVal').on('click', function () {
    console.log("Current value of the search bar:");
    var search_barTest = widget.getValue();
    search_barTest = search_barTest[0][0].value;
    console.log(search_barTest);
});

function writeCultureInChar(Culture) {
    if (charakter.culture.title = "") {
        charakter.culture.title = dropbox.culturegroup[charakter.species].culture[Culture].title;
        charakter.culture.ApCost = dropbox.culturegroup[charakter.species].culture[Culture].ApCost;
    } else {
        addCurrAp(charakter.culture.ApCost);
        charakter.culture.title = dropbox.culturegroup[charakter.species].culture[Culture].title;
        charakter.culture.ApCost = dropbox.culturegroup[charakter.species].culture[Culture].ApCost;
        subtractCurrAp(charakter.culture.ApCost)
    }
}

function addCurrAp(ApValue) {
    charakter.apAvailable = charakter.apAvailable + ApValue;
    refreshSpentAp();
}

function subtractCurrAp(ApValue) {
    charakter.apAvailable = charakter.apAvailable - ApValue;
    refreshSpentAp();
}

function refreshSpentAp() {
    charakter.apSpend = charakter.apTotal - charakter.apAvailable;
}

function refreshAvailAP() {
    charakter.apAvailable = charakter.apTotal - charakter.apSpend;
}

function refreshTotalAP() {
    charakter.apTotal = charakter.apAvailable + charakter.apSpend;
}

function setTotalAp(experiencelevel) {
    var ApTotal = "0";
    switch (experiencelevel) {
        case "1":
            ApTotal = 1100;
            break;
        case "2":
            ApTotal = 1200;
            break;
        case "3":
            ApTotal = 1300;
            break;
        case "4":
            ApTotal = 1400;
            break;
        case "5":
            ApTotal = 1500;
            break;
        case "6":
            ApTotal = 1600;
            break;
        case "7":
            ApTotal = 1700;
            break;
    }
    charakter.apTotal = ApTotal;
    $('#ApTotalValue').val(ApTotal);
}
