let studentName;

const form = document.querySelector('form');

form.addEventListener('btn', (e) => {
    e.preventDefault();

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        
        let words = [];
        if (item.checked === true) {
            words.push(item.value);
        }
    })
    console.log(words);
})

document.getElementById("btn").onclick = function(){
    studentName = document.getElementById("student-name").value;
    document.getElementById("feedback").textContent = 
    `Dear ${studentName}, you did a good job saying` 

}


    