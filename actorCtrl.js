
app.controller("actorCtrl", function ($scope, $http, convert, Actor) {


    $scope.convert = convert;
/*
    function Actor(fName, lName, image, imdb,length) {
        this.fName = fName;
        this.lName = lName;
        this.image = image;
        this.imdb = imdb;
        this.length = length;
    } */
    $scope.actors =[];
    $http.get("App/model/dataJustice_League.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.actors.push(new Actor(response.data[i].fName, response.data[i].lName,
                response.data[i].image, response.data[i].imdb, response.data[i].length))
        }
    }, function myError(response) {
        alert("error "  + response);
      })

        /*
            $scope.actors = [new actors("Gal", "Gadot", "https://goo.gl/cXzVR4","http://www.imdb.com/name/nm2933757/"),
            new actors("Ben", "Affleck", "https://goo.gl/SjcNBA", "http://www.imdb.com/name/nm0000255/?ref_=tt_ov_st_sm"),
            new actors("Robin", "Wright ", "https://goo.gl/JR6sB4", "http://www.imdb.com/name/nm0000705/?ref_=nmmi_mi_nm"),
            new actors("Jaso", "Momoa", "https://goo.gl/18URXx", "http://www.imdb.com/name/nm0597388/?ref_=tt_ov_st_sm"),
            new actors("Henry", "Cavill", "https://goo.gl/Uk3GjS", "http://www.imdb.com/name/nm0147147/?ref_=ttfc_fc_cl_i2")];
        
        */
    
    });

    