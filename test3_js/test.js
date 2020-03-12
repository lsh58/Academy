window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelectorAll("td input");
    var resultbtn = document.querySelector(".result");
    var cancelbtn = document.querySelector(".cancel");
    var result_value = document.querySelectorAll("#result_table tr td");
    var origin_value = [];
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < result_value.length; i++) {
        origin_value[i] = result_value[i].innerHTML;
    }
    resultbtn.addEventListener("click", function() {
        if (input[0].value == "" || input[1].value == "" || input[2].value == "" || input[3].value == "") {
            alert("공백없이 입력해주세요.");
        } else {
            for (var j = 1; j < input.length; j++) {
                sum += parseInt(input[j].value);
            }
            avg = sum / (input.length - 1);
            result_value[0].innerHTML = input[0].value;
            result_value[1].innerHTML = sum;
            result_value[2].innerHTML = avg;
            if (avg >= 60) {
                result_value[3].innerHTML = "합격";
            } else {
                result_value[3].innerHTML = "불합격";
            }
        }
    });
    cancelbtn.addEventListener("click", function() {
        for (var i = 0; i < result_value.length; i++) {
            result_value[i].innerHTML = origin_value[i];
        }
    });
});
