
 /*
  ❏ ❐ ❏ ❐ ❏ ❐ ❏ ❐ ❑ ❒ ❏ ❐ ❏ ❐ ❑ ❒ ❏ ❐ ❑ ❒
  ❐ ********************************************** ❑
  ❑ *  AUTHOR:                 Dr. Mayson        * ❒
  ❐ *  GENERATOR:         Visual Studio Code     * ❑
  ❑ *  WEBSITE:           http://www.***.com/    * ❒
  ❐ *  E-MAIL:            motrik_xxl@mail.ru     * ❑
  ❑ *  TEMPLATE NAME:         StroyKontrol       * ❒
  ❐ *  VERSION:                    1.0           * ❑
  ❑ *  LAST MODIFIED:       November-20-2020     * ❒
  ❐ ********************************************** ❑
  ❑ ❐ ❑ ❒ ❏ ❐ ❏ ❐ ❑ ❒ ❏ ❐ ❑ ❒ ❑ ❒ ❑ ❐ ❑ ❒ 
*/ 


function testWebP(callback) {

    webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });






    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });





   