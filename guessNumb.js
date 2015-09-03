var aCount = 0;
var bCount = 0;
var answer = "2345";

function run(){
    document.write("猜對了，答案是");
while(aCount!==4){
	var guess = String(document.getElementById("guess").value);
for (var n = 0; n < answer.length; n += 1) {
    for (var m = 0; m < guess.length; m += 1) {
        if (answer[n] === guess[m]) {
            if (n === m) {
                aCount += 1;
            }else {bCount += 1;

        	}
    	}
	}
}
}
}
document.write(aCount + "A" + bCount + "B"+'<br>');
if (aCount === 4) {
    document.write("猜對了，答案是" + answer);
    break;
} else {
    aCount = 0;
    bCount = 0;
	}
}







