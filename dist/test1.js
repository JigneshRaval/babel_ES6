'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
  function Car(name) {
    _classCallCheck(this, Car);

    this.name = name;
  }

  _createClass(Car, [{
    key: 'getName',
    value: function getName() {
      console.log(this.name);
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
      console.log(this.name);
    }
  }]);

  return Car;
}();

var carInstance = new Car('Maruti');

carInstance.getName();