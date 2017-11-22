app.factory("convert", function() {

var hour = number;
var minuts = number;

function convertMinToHpurs(length) {
    hour = parseInt( length/60);
    minuts= (length-hour)*60;
    return  hour + "h " + minuts + "min";
}

var temp = {
    min2String: convertMinToHpurs
}

return temp;

/*
return {
    min2String: convertMinToHpurs
}
*/




});
document.getElementById("showHour").innerHTML = convert();