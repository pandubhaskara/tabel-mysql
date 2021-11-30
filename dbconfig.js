const config = {
    user:"root",
    password:"admin",
    server: "127.0.0.1",
    database:"poolpack_test",
    options:{
        trustedConnection:true,
        enableArithPort: true,
        instancename:"mydb"
    },
    port : 53892
}

module.exports = config