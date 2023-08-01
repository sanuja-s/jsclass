studentId=10;
studentNo =100;
userName = "San";
marks =[80,80,55];
student= { name: "san", age:"25", phone:"1234565464"};

console.log(typeof(student));
console.log(studentId);
console.log(userName);
console.log(marks);
console.log(student);

console.log('Admission number of ' + userName +' is ' + studentNo);

console.log(`StudentID of ${userName} is ${studentId}`);

console.log(`marks of ${userName} is ${marks[1]}`);

console.log(student.name);
console.log(student["age"]);
console.log(student.phone);


var num1 = 25;
var num2 = 35;
var result = num1 +num2 ;
console.log(result);

console.log("**************")
function add(a,b){
    var sum = a + b;
    // console.log(sum);
    return sum;
    // console.log('ddsfdsf');
    }

    console.log(add(28,33));