Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields:[ 'firstname', 'middlename', 'lastname'],
    data: [
        { firstname: '', middlename: '', lastname: '' },
        
    ]
});

Ext.define('MyApp.view.trail.grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridlist', 
    title: 'Simpsons',
    id:'grid-view',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { text: 'First Name', dataIndex: 'firstname' },
        { text: 'Middle NAme', dataIndex: 'middlename', flex: 1 },
        { text: 'Last Name', dataIndex: 'lastname' }
    ],
    height: 200,
    width: 400

})