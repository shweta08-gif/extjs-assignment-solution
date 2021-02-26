Ext.define('MyApp.view.TestViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.test', // connects to viewModel/type below

    data: {
        // firstName: 'John',
        // lastName: 'Doe'
        listeners1: {
            change: function () {
                Ext.getCmp('middle-name-id').enable();
            }
        },
        listeners2: {
            change: function () {
                Ext.getCmp('last-name-id').enable();
            }
        },
        handler: {
        handler: function () {
            var form = this.up('traillist').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function (form, action) {
                        Ext.Msg.alert('Success', action.result.message);
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                    }
                });
            }
        }
    }
    },

    formulas: {
        // We'll explain formulas in more detail soon.
        hideandshow: function (get) {
            // var fn = get('firstName'), ln = get('lastName');
            // return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
            Ext.getCmp('middle-name-id').enable();
        }
    }
});

// Ext.define('MyApp.view.TestView', {
//     extend: 'Ext.panel.Panel',
//     layout: 'form',

//     // Always use this form when defining a view class. This
//     // allows the creator of the component to pass data without
//     // erasing the ViewModel type that we want.
//     viewModel: {
//         type: 'test'  // references alias "viewmodel.test"
//     },

//     bind: {
//         title: 'Hello {name}'
//     },

//     defaultType: 'textfield',
//     items: [{
//         fieldLabel: 'First Name',
//         bind: '{firstName}'
//     },{
//         fieldLabel: 'Last Name',
//         bind: '{lastName}'
//     },{
//         xtype: 'button',
//         text: 'Submit',
//         bind: {
//             hidden: '{!name}'
//         }
//     }]
// });