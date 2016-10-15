(function () {
    'use strict';

    angular.module("ShoppingListCheckOff", [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService']
    function ToBuyController($scope, ShoppingListCheckOffService){
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyUtems();

        toBuy.buy = function(to_buy_index){
            ShoppingListCheckOffService.buy(to_buy_index);
        };

    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService){
        var Bought = this;

        Bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var to_buy = [
            {name: "cookies", quantity: 1},
            {name: "cookies", quantity: 10},
            {name: "cookies", quantity: 100},
            {name: "cookies", quantity: 1000},
            {name: "cookies", quantity: 100},
            {name: "cookies", quantity: 10},
            {name: "cookies", quantity: 1}
        ];
        var bought = [];

        service.getToBuyUtems = function(){
            return to_buy
        }
        service.getBoughtItems = function(){
            return bought
        }
        service.buy = function(to_buy_index){
            bought.push(to_buy[to_buy_index]);
            to_buy.splice(to_buy_index, 1)
        }
    }

})();
