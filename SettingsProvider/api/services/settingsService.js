module.exports = {
    getAllSettings: getAllSettings,
    getSettingByKey: getSettingByKey

};

var sql = require("mssql");

var config = require('config');

//var dbConfig = config.get('Settings.dbConfig');

 //config for your database
 var config = {
    user: 'ig2',
    password: 'ig2test',
    server: 'localhost\\SQLEXPRESS01',
    database: 'IG2DB-DEV' 
};

function getSettingByKey(settingKey,cb){
        
    // connect to your database
    sql.connect(dbConfig, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from dbo.IG2_SETTINGS where name = \'' + settingKey + '\'', cb);
    });
}

function getAllSettings(cb){
        
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from dbo.IG2_SETTINGS', (err,data)=>{
            cb(null,data);
            sql.close();
        });
    });


}

// function getAllSettingsAsync(){
//     return new Promise((resolve, reject) => {

//         sql.connect(config, function (err) {
//             if (err) console.log(err);
    
//             // create Request object
//             var request = new sql.Request();
               
//             // query to the database and get the records
//             request.query('select * from dbo.IG2_SETTINGS', (err, recordset)=> {
//                 if(err) {
//                     reject(err);
//                     return;
//                 }

//                 resolve(recordset);
//             });
//         });

//     })
// }