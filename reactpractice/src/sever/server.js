// mysoda.js

const oracledb = require('oracledb');

oracledb.initOracleClient({ libDir: 'C:/Oracle_util'});



oracledb.autoCommit = true;

async function run() {
    connection = await oracledb.getConnection( {
        user          : "klimtest",
        password      : "klim1234",
        connectString : "192.168.200.105/XE"
    });

    // Create a new (or open an existing) document collection
    const soda = connection.getSodaDatabase();
    const collectionName = 'nodb_soda_collection';
    const myCollection = await soda.createCollection(collectionName);

    // Insert a new document
    const myContent = { name: "Sally", address: {city: "Melbourne"} };
    await myCollection.insertOne(myContent);

    // Print names of people living in Melbourne
    const filterSpec = { "address.city": "Melbourne" };
    const myDocuments = await myCollection.find().filter(filterSpec).getDocuments();
    myDocuments.forEach(function(element) {
        const content = element.getContent();
        console.log(content.name + ' lives in Melbourne.');
    });

    await connection.close();
}

run();