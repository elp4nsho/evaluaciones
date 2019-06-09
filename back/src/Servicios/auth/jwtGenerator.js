'use strict';
const fs = require('fs');
const jwt = require('jsonwebtoken');
const decoder = require("./decoder.js");
var privateKEY = fs.readFileSync('./private.key', 'utf8');
var publicKEY = fs.readFileSync('./public.key', 'utf8');
/*
 ====================   JWT Signing =====================
*/
/*
var payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
};
var i  = 'Mysoft corp';
var s  = 'some@user.com';
var a  = 'http://mysoftcorp.in';
var signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "1s",
    algorithm:  "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
};
var token = jwt.sign(payload, privateKEY, signOptions);
console.log("Token :" + token);
/!*
 ====================   JWT Verify =====================
*!/
var verifyOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "16h",
    algorithm:  ["RS256"]
};
var legit = jwt.verify(token, publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));
console.log("SDAS");*/

var payload = {
    datos: "muchos datos",
};
var signOptions = {
    issuer: "TOKENPROVIDER",
    subject: "USUARIO",
    audience: "usuario",
};
/*

var token = decoder.sign(payload,signOptions);
console.log(token)


console.log(decoder.verify(token,signOptions));
token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.rEkg53_IeCLzGHlmaHTEO8KF5BNfl6NEJ8w-VEq2PkE`;
console.log(decoder.decode(token));
*/


exports.generateToken = (d) => {
    var token = decoder.sign(d, {issuer: "", subject: "", audience: ""})
    /*   console.log(token);
       console.log(decoder.verify(token,{}));
       console.log(decoder.decode(token));*/
    return token;
};


