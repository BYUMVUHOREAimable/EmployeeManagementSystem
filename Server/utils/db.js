import mysql from 'mysql2';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3Nyamiyaga100%",
    database: "employeems",
    port: 3306
});

con.connect(function(err) {
    if (err) {
        console.error("Connection error:", err.code, err.message);
        return;
    }
    console.log("Connected successfully to MySQL");
});

export default con;
