"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const xlsx = __importStar(require("xlsx"));
const excelFile = xlsx.readFile('exam_result.xlsx');
const sheet_name = excelFile.SheetNames[0];
const worksheet = excelFile.Sheets[sheet_name];
const data = xlsx.utils.sheet_to_json(worksheet);
function checkResult(rollno) {
    const student = data.find(row => row['Roll Number'] === rollno);
    if (student) {
        console.log("Congrats you are passed");
    }
    else {
        console.log("Unfortunately you are failed");
    }
}
const rollNo = parseInt(readline.question('Enter your roll no: '));
checkResult(rollNo);
