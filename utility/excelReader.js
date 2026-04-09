import path from 'node:path';
import XLSX from 'xlsx';

export function excelReader () {
  const  path = "testdata/Utility.xlsx";
 const workbook = XLSX.readFile(path);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);
return data;
}