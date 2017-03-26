// base values
var MU = 8;
var KL = 8;
var IN = 8;
var CH = 8;
var FF = 8;
var GE = 8;
var KO = 8;
var KK = 8;

function onClickUnerfahren() {
    var LevelId = "1";
    showLevel(LevelId);
}

function onClickDurchschnitt() {
    var LevelId = "2";
    showLevel(LevelId);
}

function onClickErfahren() {
    var LevelId = "3";
    showLevel(LevelId);
}

function onClickKompetent() {
    var LevelId = "4"
    showLevel(LevelId)
}

function onClickMeister() {
    var LevelId = "5"
    showLevel(LevelId)
}

function onClickBilliant() {
    var LevelId = "6"
    showLevel(LevelId)
}

function onClickLegend() {
    var LevelId = "7"
    showLevel(LevelId)
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
    $('#displayAnswer1').val(LevelText);
}

function deterLep(gwLep, KO) {
    return gwLep + (KO * 2);
}

function deterAusw(GE) {
    return GE / 2;
}

function deterIni(MU, GE) {
    return (MU + GE) / 2;
}

// Gibt den Astralpunktewert an, braucht die Leiteigenschaft der Zauberertradition an
function deterAsp(LE) {
    return 20 + LE;
}

// Gibt den Karmawert an, braucht die Leiteigenschaft der Geweihtentradition
function deterKsp(LE) {
    return 20 + LE;
}

// Berechnet die Seelenkraft aus Grundwert der Spezies für Seelenkraft, Mut, Klugheit, Intuition
function deterSK(gwSK, MU, KL, IN) {
    return (MU + KL + IN / 6) + gwSK;
}

// Berechnet die Zähigkeit aus Grundwert der Spezies für Zähigkeit, Kondition, Körperkraft
function deterZK(gwZK, KO, KK) {
    return ((KO + KO + KK) / 6) + gwZK;
}

var fruits = ['Parameter1', 'Parameter2', 'Parameter3'];
var widget = new AutoComplete('search_bar', fruits);

$('#showVal').on('click', function () {
    console.log("Current value of the search bar:");
    var search_barTest = widget.getValue();
    search_barTest = search_barTest[0][0].value;
    console.log(search_barTest);
});
