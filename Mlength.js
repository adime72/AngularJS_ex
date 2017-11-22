app.factory("convert", function () {


    function convertMinToHpurs(length) {
        var hour = parseInt(length / 60);
        var minuts =  Math.round((length/60 - hour) * 60);
        return hour + "h " + minuts + "min";
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
