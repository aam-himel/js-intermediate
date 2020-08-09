/*
Falsy:
    0
    ""
    NaN
    undefined
    null

Truthy:
    []
    {}
    "0" or " "

*/

let name;
if (name) {
    console.log("True");
} else {
    console.log("false");
}