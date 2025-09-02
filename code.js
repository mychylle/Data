function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Append to sheet → name, score, timestamp
    sheet.appendRow([data.name, data.score, new Date()]);

    return ContentService.createTextOutput("Saved Successfully!");
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message);
  }
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index'); // loads your index.html
}