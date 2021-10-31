const http = require('http');
const mysql = require("mysql2");
const mysqlPromise = require("mysql2/promise");

const hostname = '127.0.0.1';
const port = 3090;

const config = {
    user: "admin",
    host: "localhost",
    database: "stpTest",
    password: "99459945"
}


// async function query(query) {

//     let resJSON;

//     const connectionDB = mysql.createConnection({
//         host: "localhost",
//         user: "admin",
//         database: "stpTest",
//         password: "99459945"
//     });

//     (await connectionDB).query("query",
//         function (err, results, fields) {
//             console.log(err);
//             // console.log(results); // собственно данные
//             reqResult = JSON.parse(results);
//         }
//     );

//     connectionDB.end();
//     return resJSON;
// }


const server = http.createServer((req, res) => {


    if (req.method == "GET") {

        let responseJSON;

        function sendBack(responseJSON) {
            if(req.url === "/posts") {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                console.log(responseJSON);
                res.write(responseJSON);
                res.end();     
            }
        }
        
        const connectionDB = mysql.createConnection({
            host: "localhost",
            user: "admin",
            database: "stpTest",
            password: "99459945"
        });

        connectionDB.execute("SELECT * FROM posts;",
            function (err, results, fields) {
                // console.log(err);
                // console.log(results); // собственно данные
                responseJSON = JSON.stringify(results).toString();
                // добавить обработку ошибок
                sendBack(responseJSON);
            }
        );

        connectionDB.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});






