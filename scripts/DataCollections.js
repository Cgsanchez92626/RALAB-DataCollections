 console.log("R-ALAB 308.4.1 Data Collections");
// Example CSV string 
 const csvString ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
 console.log(csvString);
// Step 1-2 - Refactor & Expand Functionality
let rows = csvString.split("\n");
let headers = rows[0].split(",");
let numColumns = headers.length;
console.log("Step 1-2 - Refactor & Expand Functionality");
console.log("Step 1-2 - Number Of Rows", rows.length);
console.log("Step 1-2 - Number Of Colums", numColumns);
console.log("Header: ",headers);
console.log("Rows: ",rows);
// Step 3: Store data in a two-dimensional array
let resultArray = [];
for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].split(",");
    let rowData = [];
    for (let j = 0; j < numColumns; j++) {
        rowData.push(cells[j]);
    }
    resultArray.push(rowData);
}
console.log("Step 3 - 2 Dimentional Array:", resultArray);

// Part 3: Convert Array to objects
let objectsArray = [];
for (let i = 0; i < resultArray.length; i++) {
    let obj = {};
    for (let j = 0; j < numColumns; j++) {
        obj[headers[j].toLowerCase()] = resultArray[i][j];
    }
    objectsArray.push(obj);
}
console.log("Step 3 - Objects Array:", objectsArray);

// Step 4: Modify Objects array
// Array Methods Tasks
// Remove last element
objectsArray.pop();

// Insert object at index 1
objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add object to end of array
objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log("Step 4 - Sorting and Manipulating Data");
console.log(objectsArray);

// Calculate average age
let totalAge = 0;
for (let i = 0; i < objectsArray.length; i++) {
    totalAge += parseInt(objectsArray[i].age);
}

let averageAge = totalAge / objectsArray.length;
console.log("Step 4 - Average Age");
console.log("Average Age:", averageAge);


// Step 5: Convert back to CSV
// Transform Object back to CSV format
console.log("Step 5 - Full Circle");
if (objectsArray.length === 0) {
  console.log('No data to convert to CSV');
} else {
  const headers = Object.keys(objectsArray[0]); // Assuming all objects have the same structure
  const headerRow = headers.join(',') + '\n';

  const rows = objectsArray.map(obj => {
    return headers.map(header => obj[header]).join(',');
  });

  const csvOutput = headerRow + rows.join('\n');
  console.log('Output CSV String');
  console.log(csvOutput);
}