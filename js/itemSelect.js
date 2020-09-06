(function ($) {

    $(document).ready(function () {

        $.getJSON("../data/data.json", function (res) {
            var length = res.data.length;
            var additional = length % 3 == 0 ? 0 : 1;
            var tolarRow = (length / 3) + additional;
            console.log(res.data)
            loadedData = res.data;
            var container = document.getElementById("card-container");
            var idx = 0;
            for (var i = 0; i <= tolarRow; i++) {
                var el0 = document.createElement("div");
                el0.className = "row p-0 m-0";
                el0.id = "row" + i;
                container.append(el0);
                var rowContainer = document.getElementById(el0.id);
                for (var j = 0; j < 3 && idx < length; j++) {
                    var el1 = document.createElement("div");
                    el1.className = " col col-sm-4 col-md-4 col-xs-4 col-lg-4 m-0 p-2";
                    el1.id = "col" + idx;
                    rowContainer.append(el1);
                    var colContainer = document.getElementById(el1.id);
                    var el2 = document.createElement("div");
                    el2.className = "card m-auto";
                    el2.id = "card" + idx;
                    $(el2).appendTo('body').css('background-image', 'url(' + res.data[idx].displayImg + ')');
                    document.getElementById(el2.id).style.backgroundSize = "cover";
                    document.getElementById(el2.id).setAttribute("onclick", "gotoDetails(" + idx + ")");
                    colContainer.append(el2);
                    var cardContainer = document.getElementById(el2.id);
                    var el3 = document.createElement("div");
                    var el4 = document.createElement("div");
                    el3.className = "card-bottom-left";
                    el3.id = "rating" + idx;
                    el4.className = "card-bottom-right";
                    el4.id = "price" + idx;
                    cardContainer.append(el3);
                    cardContainer.append(el4);

                    var htmlLeft = '<div class="productName0 mt-3" id="name' + idx + '"></div><div class="productName1" id="typeName' + idx + '"></div><div class="ratings pb-2" id="ratings' + idx + '"></div>';
                    $("#" + el3.id).html(htmlLeft);

                    var htmlRatings = `
                    <span id="rating`+ idx + `_star1" class="far fa-star"></span>
                    <span id="rating`+ idx + `_star2" class="far fa-star"></span>
                    <span id="rating`+ idx + `_star3" class="far fa-star"></span>
                    <span id="rating`+ idx + `_star4" class="far fa-star"></span>
                    <span id="rating`+ idx + `_star5" class="far fa-star"></span>
                    `

                    document.getElementById("name" + idx).innerHTML = res.data[idx].displayName;
                    document.getElementById("typeName" + idx).innerHTML = res.data[idx].type;
                    document.getElementById("ratings" + idx).innerHTML = htmlRatings;
                    for (var k = 1; k <= res.data[idx].rating; k++) {
                        document.getElementById("rating" + idx + "_star" + k).setAttribute("class", "fas fa-star");
                    }

                    var htmlRight = '<div class="_price mt-2" id="price-' + idx + '"></div><div class="addToCart pb-2" id="cart' + idx + '"></div>';
                    $("#" + el4.id).html(htmlRight);
                    document.getElementById("price-" + idx).innerHTML = res.data[idx].price;
                    document.getElementById("cart" + idx).innerHTML = '<i class="fas fa-cart-plus"></i>';
                    gotoDetails = function (data) {
                        selectedData = res.data[data];

                        $("#bodyContainer").load("../components/shop/item-detail.html",);
                    }

                    idx++;

                }
            }

            // var html = "";
            // for (i = 1; i <= length; i++) {
            //     html += "<div class='card' id='card" + i + "'>card " + i + "</div>";
            //     html += "<br>";

            //     var urlString = "url('" + res?.data[i]["displayImg"] + "')";
            //     console.log(urlString)
            //     // document.getElementById("card" + i).style.backgroundImage = urlString;
            // }
            // $("#card-container").html(html);


        }).fail(function () {
            console.log("An error has occurred.");
        });
    });
    

}(jQuery));