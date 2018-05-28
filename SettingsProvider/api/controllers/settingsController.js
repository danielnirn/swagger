var util = require('util');
var service = require('../services/settingsService');

module.exports = {
    getSettingByKey: getSettingByKey,
    getAllSettings: getAllSettings
};

function getAllSettings(req,res){
    service.getAllSettings((err, data) => {
        if(err){
            res.status(500).json({message:"kuku"});
            return;
        }
        res.json(data.recordset);
    });

   
}

function getSettingByKey(req,res){
    service.getSettingByKey(req.swagger.params.body.value.settingKey,(err,data)=>{
        if(err){
            res.status(500).json({error:"kuku"});
            return;
        }
        res.json(data);
    });
    
}

// function danielPromise(req,res){
//     service.getAllSettingAsync()
//     .then(records => res.json(records))
//     .catch(err => res.status(500).json({error:"kuku"}));
// }