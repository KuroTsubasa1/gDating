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
