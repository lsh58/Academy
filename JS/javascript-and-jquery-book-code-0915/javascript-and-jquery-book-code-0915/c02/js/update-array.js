// Create the array and assign it values
var colors = ["white", "black", "custom"];

// Update the third item in the array
colors[2] = "beige";
colors.push("beige2"); // 해당배열의 맨 끝에 붙는다.
colors.shift(); // 첫번쨰 값 제거
colors.pop(); //마지막 값 제거
colors = colors.concat("aa", "bb"); //두개의 배열을 합쳐준다.

var font = ["dotum", "gulim"];
colors = colors.concat(font);

// colors.join("/"); //배열값 사이에 원하는 문자를 삽입

colors = colors.reverse(); // 배열 역순으로 재배치

colors2 = colors.slice(1, 4); //배열 일부분 반환 (원본에 영향X) (시작점, 종료점)

var a = colors.splice(1, 2); // 배열값을 추가하거나 제거하여 반환 (원본에 영향줌) (시작점,갯수)

var el = document.getElementById("colors");

el.textContent = colors[2];

console.log(colors);
console.log(a);
console.log(colors2);

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issues on p228-231
el.innerHTML = colors[2];
*/
