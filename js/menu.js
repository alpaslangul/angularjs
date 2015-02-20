//ANGULAR

var app = angular.module("sultaniumMenu",[]);

app.controller("MenuController",function($scope, $http) {

    $scope.items = [
        {"itemId":1, "title":"Google", "href":"#home", "aciklama":"Home"},
        {"itemId":2, "title":"Yahoo", "href":"#service", "aciklama":"Services"},
        {"itemId":3, "title":"Bing", "href":"#portfolio", "aciklama":"Portfolio"},
        {"itemId":4, "title":"Dogpile", "href":"#clients", "aciklama":"Clients"},
        {"itemId":5, "title":"Dogpile", "href":"#price", "aciklama":"Price"},
        {"itemId":5, "title":"Dogpile", "href":"#contact", "aciklama":"Contact"}
    ];

}),

app.controller("detailController", function () {

}
)

function veriGir($scope, $http) {
    $scope.errors = [];
    $scope.msgs = [];

    $scope.Kaydet = function() {

        $http.post('kaydet.php', {'ad': $scope._adi, 'ml': $scope._mail, 'yrm': $scope._yorum}
        ).success(function(data, status, headers, config) {
                if (data.msg != '')
                {
                    $scope.msgs.push(data.msg);
                }
                else
                {
                    $scope.errors.push(data.error);
                }
            }).error(function(data, status) {

                $scope.errors.push(status);
            });
    }
}




$(document).ready(function () {


    //FANCY BOX PLUGIN SCRIPT FOR POPUP IMAGE
    $('.fancybox-media').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
    //ISOTOPE  PLUGIN SCRIPT FOR FILTER FUCNTIONALITY
    $(window).load(function () {
        var $container = $('#portfolio-div');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.caegories a').click(function () {
            $('.caegories .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

});

