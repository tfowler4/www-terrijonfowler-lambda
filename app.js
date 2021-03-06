'use strict';

(function() {
    var mongo  = require('mongodb');
    //var dbUrl  = 'mongodb://localhost:27017';
    var dbName = 'terrijon-fowler';
    var dbUser = 'admin';
    var dbPass = 'TNk6AOXEfR81VK5j';
    var dbUrl = 'mongodb://' + dbUser + ':' + dbPass + '@cluster0-shard-00-00-0bvuw.mongodb.net:27017,cluster0-shard-00-01-0bvuw.mongodb.net:27017,cluster0-shard-00-02-0bvuw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

    connectToDatabase(mongo, dbUrl, dbName);
    
    function launchApplication(db, dbName) {
        var express      = require('express');
        var bodyParser   = require('body-parser');
        var cookieParser = require('cookie-parser');
        var path         = require('path');
        var port         = process.env.PORT || 3000;
        var app          = express();
    
        app.set('view engine', 'pug');
        app.set('views','./views');
        app.set('dist', './dist');
        
        app.use(express.static('dist'));
        
        app.use(cookieParser());
        
        //To parse URL encoded data
        app.use(bodyParser.urlencoded({ extended: false }));
        
        //To parse json data
        app.use(bodyParser.json());
        
        //Route handler
        var router = require('./router.js');
        app.use('/', router);

        app.use('/db/get/:collection', function(req, res){
            console.log('api call');
            console.log(req.params.collection);
            
            switch( req.params.collection ) {
                case 'profile':
                    findDataInCollection(db, 'profile-collection', { name: 'Terrijon Fowler' }, { }, res); // use regular expressions to filter, also use other fields  in the object
                    break;
                case 'resume':
                    findDataInCollection(db, 'experience-collection', { }, { order: -1 }, res);
                    break; 
                case 'portfolio':
                    break; 
                case 'contact':
                    break; 
                case 'history':
                    break; 
            }
        });

        app.listen(port);
        console.log('Express server listening on port ' + port);
    }
    
    function connectToDatabase(mongo, dbUrl, dbName) {
        var MongoClient = mongo.MongoClient;

        MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
            handleDatabaseError(err);

            launchApplication(db, dbName);
        });
    }
    
    function createCollection(db, collection) {
        console.log('createCollection');

        var dbo = db.db(dbName);

        dbo.createCollection(collection, function(err, res) {
            handleDatabaseError(err);
    
            console.log(collection + ' created!');     
        });
    }

    function insertIntoCollection(db, collection) {
        console.log('insertIntoCollection');

        var dbo = db.db(dbName);

        // convert to array of objects to insert multiple and use 'insertMany'
        var myobj = { 
            name: "Company Inc", 
            address: "Highway 38" 
        };
        
        dbo.collection(collection).insertOne(myobj, function(err, res) {
            handleDatabaseError(err);

            console.log("1 document inserted");
        });
    }
    
    function findDataInCollection(db, collection, query, sortByQuery, callback) {
        console.log('findDataInCollection');

        var dbo = db.db(dbName);

        dbo.collection(collection).find(query).sort(sortByQuery).toArray(function(err, result) {
            handleDatabaseError(err);
            
            callback.send(result);
        });
    }

    function closeDatabaseConnection(db) {
        db.close();
    }

    function handleDatabaseError(err) {
        if ( err ) {
            console.log('error');
            console.log(err);
            throw err;
        }
    }
})();