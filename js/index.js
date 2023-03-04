function toplama(x, y) {
    return parseInt(x) + parseInt(y);
}


$(document).on("click", ".sum", function () {
    var number1 = $(".number1").val();
    var number2 = $(".number2").val();
    $(".result").val(toplama(number1, number2));

})

