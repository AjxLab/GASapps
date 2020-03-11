function addGrade(userId, score) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('grade');
  const users = sheet.getRange("A2:A" + sheet.getLastRow()).getValues();
  for(var i = 0; i < users.length; i++) {
    if(users[i] == userId) {
      var userData = sheet.getRange('B' + (i+2) + ':G' + (i+2)).getValues();
      // weekly
      userData[0][0] += 1;
      userData[0][1] += score;
      // monthly
      userData[0][2] += 1;
      userData[0][3] += score;
      // helf_period
      userData[0][4] += 1;
      userData[0][5] += score;
      sheet.getRange('B' + (i+2) + ':G' + (i+2)).setValues(userData);
      return true;
    }
  }
  // 新規登録
  const newData = [[userId, 1, score, 1, score, 1, score]];
  const newRow = sheet.getLastRow() + 1;
  sheet.getRange('A' + newRow + ':G' + newRow).setValues(newData);
  return false;
}

