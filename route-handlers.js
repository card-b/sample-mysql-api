const Mysql = require('./mysql-connection');

//all of these should take two parameters, req (data about the request), and res (functions that let us respond to the user)
function handleRoot(req, res) {
    res.send("Hello World!");
}

async function getPosts(req, res) {
    try {
        //write out your mysql query
        const query = `
            SELECT
                *
            FROM
                posts
        `;

        //gets the results from the mysql server
        const results = await Mysql.query(query);

        //send the results to the user making the request
        res.send(results);
    } catch (e) {

        //something went wrong, log the error, return a 500 Internal Server Error
        console.error(e);
        res.sendStatus(500);
    }
}

//list exported functions here
module.exports = {
    handleRoot,
    getPosts
}