import * as readline from 'readline-sync';
import * as xlsx from 'xlsx';

const excelFile = xlsx.readFile('exam_result.xlsx');
const sheet_name = excelFile.SheetNames[0];
const worksheet = excelFile.Sheets[sheet_name];

const data: any[] = xlsx.utils.sheet_to_json(worksheet);
function checkResult(rollno: number) {
    const student = data.find(row => row['Roll Number'] === rollno);

    if (student) {
        console.log("Congrats you are passed");
    } else {
        console.log("Unfortunately you are failed");
    }
}

const rollNo = parseInt(readline.question('Enter your roll no: '));
checkResult(rollNo);