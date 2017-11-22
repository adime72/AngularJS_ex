app.factory("Actor", function(convert) {

    function ActorConstructor(fName, lName, image, imdb,length) {
        this.fName = fName;
        this.lName = lName;
        this.image = image;
        this.imdb = imdb;
        this.length = length;
    }
    return ActorConstructor;

});

