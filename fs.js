const fs = require("fs");
const path = require("path");
console.log(__dirname, __filename);
console.log(path.join(__dirname, "..", "db.json"));

const db = {
  users: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "John Doe" },
  ],
};
const dbJsonPath = path.join(__dirname, "db.json");
const testJsonPath = path.join(__dirname, "test.json");
fs.writeFile(dbJsonPath, JSON.stringify(db), (err) => {
  if (err) {
    console.error(`Error! writing to the file`, err);
    return;
  }
  fs.readFile(dbJsonPath, (err, data) => {
    if (err) console.error(`Error! reading data from the file`, err);

    console.log(data.toString());
    const dbData = JSON.parse(data.toString());
    dbData.users.push({ id: 3, name: "Jonas Doe" });

    fs.appendFile(dbJsonPath, JSON.stringify(dbData), (err) => {
      if (err) console.error(`Error! reading data from the file`, err);
      console.log("Data appended successfully");
    });
  });
  console.log("Successfully written to the file");
});

const writeFileRes = fs.writeFileSync(testJsonPath, JSON.stringify(db));
console.log(writeFileRes);
const readFileRes = fs.readFileSync(testJsonPath);
console.log(JSON.parse(readFileRes.toString()));
const testData = JSON.parse(readFileRes.toString());
testData.users.push({ id: 3, name: "Jonas Doe" });
const appendFileRes = fs.appendFileSync(testJsonPath, JSON.stringify(testData));
console.log(appendFileRes);
