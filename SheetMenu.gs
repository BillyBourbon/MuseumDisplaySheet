// 
//    Museum Sets And Display Case Spreadsheet
//    Code To Go Inside The Spreadsheets Code Editor
//

//  RUN ME!!!!!!
function runME(){
  console.log("HI!!!")
  console.log("You only ran this to enable the permissions for the script")
}

// //  Inserts the MENU Into The Spreadsheets Toolbar
function onOpen(e){
  const subMenus = LibaryMuseumDisplaySheet.buildMenus()

  const ui = SpreadsheetApp.getUi()
  const menuMain = ui.createMenu("Script")
  subMenus.forEach(menu=>menuMain.addSubMenu(menu))
  
  menuMain.addToUi()  
}
