// base values
var MU = 8;
var KL = 8;
var IN = 8;
var CH = 8;
var FF = 8;
var GE = 8;
var KO = 8;
var KK = 8;

function onClickMen() {
    var answerP11 = "1";
    showGender(answerP11);
}

function onClickWomen() {
    var answerP11 = "2";
    showGender(answerP11);
}

function onClickOther() {
    var answerP11 = "3";
    showGender(answerP11);
}

function onClickLast() {
    var answerP11 = "4"
    showGender(answerP11)
}

function showGender(answerP11) {
    $('#displayAnswer1').val(answerP11);
}

<<<<<<< Updated upstream
function deterLep(gwLep,KO) {
    return gwLep + (KO*2);
}

function deterAusw(GE){
return GE/2;
}

function deterIni(MU,GE){
return (MU+GE)/2;
}

// Gibt den Astralpunktewert an, braucht die Leiteigenschaft der Zauberertradition an
function deterAsp(LE) {
    return 20+LE;
}

// Gibt den Karmawert an, braucht die Leiteigenschaft der Geweihtentradition
function deterKsp(LE) {
    return 20+LE;
}

// Berechnet die Seelenkraft aus Grundwert der Spezies für Seelenkraft, Mut, Klugheit, Intuition
function deterSK(gwSK,MU,KL,IN) {
    return (MU+KL+IN/6)+ gwSK;
}

// Berechnet die Zähigkeit aus Grundwert der Spezies für Zähigkeit, Kondition, Körperkraft
function deterZK(gwZK,KO,KK) {
    return ((KO+KO+KK)/6) + gwZK;
}


=======
var fruits = ['Parameter1', 'Parameter2', 'Parameter3'];
var widget = new AutoComplete('search_bar', fruits);

  $('#showVal').on('click', function() {
    console.log("Current value of the search bar:");
    var search_barTest = widget.getValue();
    search_barTest = search_barTest[0][0].value;
    console.log(search_barTest);
  });
>>>>>>> Stashed changes
