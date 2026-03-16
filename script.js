let studentName;

document.getElementById("btn").onclick = function(){
    studentName = document.getElementById("student-name").value;
    document.getElementById("feedback").textContent = 
    `Dear ${studentName}, you did a good job saying` 

}


    