const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(myObject[key]);
    }
}
