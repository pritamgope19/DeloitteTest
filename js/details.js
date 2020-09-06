console.log("Selected Card in details", selectedData);
console.log("Image URL", "../../img/bed/" + selectedData.details.images[0]);


(function ($) {

    var urlImg = "../../img/bed/" + selectedData.details.images[0];

    $(document).ready(function () {
        /* Load Details with Images */
        var currentIndex = 0;
        var container = document.getElementById("imageContainer");
        var img = document.createElement('img');
        img.id = "imageContain";
        img.src = urlImg;
        container.append(img);
        document.getElementById("rightArrow").setAttribute("onclick", "nextImage()");
        document.getElementById("leftArrow").setAttribute("onclick", "prevImage()");
        document.getElementById("leftArrow").style.display = "none";

        for (var i = 0; i < 3; i++) {
            // debugger
            var inQueContain = document.getElementById("imageInQue");
            var ediv = document.createElement('div');
            ediv.className = "nextImages mr-1";
            ediv.id = "nextImages" + i;
            $(ediv).appendTo('body').css('background-image', 'url(../img/bed/' + selectedData.details.images[i] + ')');
            document.getElementById(ediv.id).style.backgroundSize = "cover";
            // filter: blur(8px);
            //   -webkit-filter: blur(8px);
            if (i > 0) {
                document.getElementById(ediv.id).style.filter = "blur(1px)";
                // document.getElementById(ediv.id).style.webkitFilter = "blur(1px)";
            }
            inQueContain.append(ediv);
        }
        /* Load details with Price and other Info */

        document.getElementById("item-type").innerHTML = selectedData.type;
        document.getElementById("item-name").innerHTML = selectedData.displayName;
        document.getElementById("item-details").innerHTML = selectedData.details.text;
        document.getElementById("priceValue").innerHTML = '<span class="mt-1">'+selectedData.price+'</span>';

        var colorBox = document.getElementById("colorHolder");
        for (let i = 0; i < selectedData.details.color.length; i++) {
            //  debugger
            var colorX = document.createElement('div');
            colorX.id = "color"+selectedData.details.color[i].replace(" ","");
            colorX.className = "colorAvailable m-1";
            colorBox.append(colorX);           
            document.getElementById(colorX.id).style.backgroundColor = selectedData.details.color[i].replace(" ","").toLowerCase();
            if(selectedData.details.color[i].toLowerCase()==selectedData.details.selectedColor.toLowerCase()){
                document.getElementById(colorX.id).innerHTML = '<i id="iTag'+colorX.id+'" class="fas fa-check"></i>';
                if(selectedData.details.selectedColor.toLowerCase()=='white'){
                    document.getElementById("iTag"+colorX.id).style.color = "black";
                }
            }

        }

        nextImage = function () {
            document.getElementById("nextImages" + currentIndex).style.filter = "blur(1px)";
            currentIndex++;
            if (currentIndex > 0 && currentIndex <= 2) {
                document.getElementById("leftArrow").style.display = "block";
                document.getElementById("imageContain").src = "../../img/bed/" + selectedData.details.images[currentIndex];
                document.getElementById("nextImages" + currentIndex).style.filter = "none";
                // document.getElementById("nextImages").style.webkitFilter = "blur(1px)";
            }
            if (currentIndex == 2) {
                document.getElementById("rightArrow").style.display = "none";
            }
        }
        prevImage = function () {
            document.getElementById("nextImages" + currentIndex).style.filter = "blur(1px)";
            currentIndex--;
            if (currentIndex < 2 && currentIndex >= 0) {
                document.getElementById("rightArrow").style.display = "block";
                document.getElementById("imageContain").src = "../../img/bed/" + selectedData.details.images[currentIndex];
                document.getElementById("nextImages" + currentIndex).style.filter = "none";
            }
            if (currentIndex == 0) {
                document.getElementById("leftArrow").style.display = "none";
            }
        }


    });


}(jQuery));