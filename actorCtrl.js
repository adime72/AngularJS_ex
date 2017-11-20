
app.controller("actorCtrl", function ($scope) {


    function actors(fName, lName, image, imdb) {
        this.fName = fName;
        this.lName = lName;
        this.image = image;
        this.imdb = imdb;
    }


    $scope.actors = [new actors("Gal", "Gadot", "https://goo.gl/cXzVR4","http://www.imdb.com/name/nm2933757/"),
    new actors("Ben", "Affleck", "https://goo.gl/SjcNBA", "http://www.imdb.com/name/nm0000255/?ref_=tt_ov_st_sm"),
    new actors("Robin", "Wright ", "https://goo.gl/JR6sB4", "http://www.imdb.com/name/nm0000705/?ref_=nmmi_mi_nm"),
    new actors("Jaso", "Momoa", "https://goo.gl/18URXx", "http://www.imdb.com/name/nm0597388/?ref_=tt_ov_st_sm"),
    new actors("Henry", "Cavill", "https://goo.gl/Uk3GjS", "http://www.imdb.com/name/nm0147147/?ref_=ttfc_fc_cl_i2")];


});