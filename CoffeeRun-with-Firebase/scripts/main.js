(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var REMOTE_CHECKLIST_SELECTOR = '[data-coffee-order="remotechecklist"]';
    var SERVER_URL = 'https://co.audstanley.com/coffeeorders';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var RemoteCheckList = App.RemoteCheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var myTruck = new Truck('ncc-1701', remoteDS);
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    var remoteList = new RemoteCheckList(REMOTE_CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    remoteList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var FormHandler = new FormHandler(FORM_SELECTOR);

    FormHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
        remoteList.addRow.call(remoteList, data);
        setTimeout(function(){window.location.reload();},30);
    });

    FormHandler.addInputHandler(Validation.isCompanyEmail);

})(window);