$("#navbar").load("./components/common/navbar.html");

$(document).ready(function(){
    $("#shop").click(function(){
        loadShopContent();
      });
  });
   var loadShopContent = function(){
    $("#bodyContainer").load("./components/shop/shop-container.html");

  }

