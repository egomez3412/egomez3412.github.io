(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteCheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
        
        //Firebase
        db.collection('order').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                //console.log(doc.data());
                var rowElement = new remoteRow(doc.data(), doc.id);
                this.$element.append(rowElement.$element);
            });
        });
    }

    RemoteCheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input', function (event) {
            event.stopPropagation();
            //Firebase
            let id = event.target.parentElement.parentElement.getAttribute('data-id');
            //console.log(id);
            var email = event.target.value;
            this.removeRow(email);

            //Firebase
            db.collection('order').doc(id).delete();
            fn(email);
            
        }.bind(this));
    };

    RemoteCheckList.prototype.addRow = function (coffeeOrder) {
        this.removeRow(coffeeOrder.emailAddress);
        var rowElement = new Row(coffeeOrder);
        this.$element.append(rowElement.$element);
    };

    RemoteCheckList.prototype.removeRow = function (email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
    }
    
    function Row(coffeeOrder) {
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });

        var $label = $('<label></label>');

        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        var description = coffeeOrder.size + ' ';
        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
        }

        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }
    
    function remoteRow(coffeeOrder, orderId) {
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox',
            'data-id': orderId
        });
        // id here?
        var $label = $('<label></label>');

        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        var description = coffeeOrder.size + ' ';
        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
        }

        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }
    

    App.RemoteCheckList = RemoteCheckList;
    window.App = App;
})(window);

