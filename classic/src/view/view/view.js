/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.trail.List', {
    extend: 'Ext.form.Panel',
    xtype: 'traillist',

    width: '100%',
    height: '55%',
    viewModel: {
        type: 'test'
    },
    scrollable: true,
    padding: 20,
 
    title: 'Trail',

    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'First Name',
            name: 'firstName',
            id: 'first-name-id',
            value: '',
            bind : { listeners : '{listeners1}'}
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Middle Name',
            name: 'middlename',
            id: 'middle-name-id',
            bind : { listeners : '{listeners2}'},
            disabled: true
            
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            name: 'lastName',
            id: 'last-name-id',
            disabled: true
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date',
            id:'date-filed',
            name: 'birthDate',
            listeners: {
                change: function () {
                    var date = Ext.getCmp('date-filed').getValue();
                    var day= date.getDay();
                    var year= date.getFullYear();
                    var leapyear = year%4 ===0 ? 'Leap Year' : 'not a leap year';
                    Ext.getCmp('yaer-container').setHtml(leapyear);
                    var yearday = day ===0 ? 'sunday' : day ===1 ? 'monday' : day===2 ? 'tuesday' : day===3 ? 'wednessday' :day===4 ? 'thursday' : day ===5 ? 'friday' : day=== 6 ? 'saturday' : '' // this can be simplified by using a file to store constants
                    Ext.getCmp('day-container').setHtml(yearday);
                }


            }
        },{

            xtype: 'container',
            layout: 'vbox',
            items : [{
                xtype: 'container',
                id: 'yaer-container'
        
            },
        {
            xtype: 'container',
            id: 'day-container'
        }]
        }
        
    ],    
    url: 'save-form.php',
    buttons: [{
        text: 'Submit',
        
        handler: function () {
            var form = this.up('traillist').getForm();
            if(form.wasDirty) {
                var j = Ext.getCmp('first-name-id').getValue();
                var k = Ext.getCmp('middle-name-id').getValue();
                var l = Ext.getCmp('last-name-id').getValue();
                var extstore = Ext.getStore('simpsonsStore');
                extstore.loadData({ firstname: j, middlename: k, lastname: l });
                var grid = Ext.getCmp('grid-view');
                grid.getStore().reload();            
            }
    }
}]
});