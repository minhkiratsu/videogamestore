var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("shopping");
    var myobj = {
        fullname: 'admin',
        email: 'taikhoantest@gmail.com',
        password: '$2b$10$Hsjy6oOttwiip7Leh4MbTeMwYIBKI0ziP3DWvNhhCoeOodzmB33ai',
    };
    dbo.collection("user").insertOne(myobj, function (err, response) {
        if (err) throw err;
        console.log('1 document')
        db.close();                             
    });
});