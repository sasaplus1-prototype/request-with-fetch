(function(){

  'use strict';

  function ViewModel() {
    this.request = (function() {
      var that = this;

      fetch('./data.json').then(function(res) {
        return res.json();
      }).then(function(json) {
        that.result(JSON.stringify(json, null, 2));
      });
    });

    this.result = ko.observable('');
  }

  ko.applyBindings(new ViewModel);

}());
