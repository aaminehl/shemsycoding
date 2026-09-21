//**********************************NewStudent*************************************//

function generateID() {

    // نأخذ الطلاب من localStorage
    let students = localStorage.getItem("students");

    // إذا لا يوجد طلاب نبدأ بمصفوفة فارغة
    if (students) {
        students = JSON.parse(students);
    } else {
        students = [];
    }

    let newID;

    // إذا كان هناك طلاب
    if (students.length > 0) {
        newID = students[students.length - 1].id + 1;
    } else {
        newID = 1;
    }

    // إظهار الـ ID في input
    document.getElementById("iiid").value = newID;
}

function SaveData(){
    
    let id = Number(document.getElementById("iiid").value);
    let FirstName = document.getElementById('firstname').value;
    let SecondName = document.getElementById('scndname').value;
    let age = document.getElementById('ageee').value;
    let division = document.getElementById('division').value;
    let level = document.getElementById('lvll').value;
    

    if (!id || !FirstName || !SecondName|| !age || !division || !level) {
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    //infos array *************
    
    let student = {
        id : id,
        FirstName : FirstName,
        SecondName : SecondName,
        age : age,
        division : division,
        level : level,
    }

    let infos = localStorage.getItem("students");
    let students;
    if(infos){
        students = JSON.parse(infos);
    }else{
        students = [];
    }

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    
 
    // write againnn *******
    document.getElementById("iiid").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("scndname").value = "";
    document.getElementById("ageee").value = "";
    document.getElementById("division").value = "";
    document.getElementById("lvll").value = "";
    
    let count = students.length;
    localStorage.setItem("StudentsNumberr", count);
    
    location.reload();
}

//**********************************Students*************************************//
let talamidnumber = localStorage.getItem("StudentsNumberr");
let talamid = JSON.parse(localStorage.getItem("students"));
let clonedtable = document.getElementById('tableBody')

for(i=0 ; i<talamidnumber ; i++){
    clonedtable.innerHTML += `
                    <tr>
                        <td class="table-body pfp-body-table" data-index="${i}" onclick="showpfp(this)"><i class="bi bi-person-lines-fill"></i></td>
                        <td class="table-body id-body-table">#000${talamid[i].id}</td>
                        <td class="table-body First-Name-body-table" >${talamid[i].FirstName}</td>
                        <td class="table-body Second-Name-body-table">${talamid[i].SecondName}</td>
                        <td class="table-body Age-body-table">${talamid[i].age}</td>
                        <td class="table-body Division-body-table">${talamid[i].division}</td>
                        <td class="table-body Level-body-table">${talamid[i].level}</td>                        
                    </tr>
    `
}

let studentshowup = ""

function showpfp(element){
    document.getElementById("overlay").style.display = "block";
    let StudentIndex = element.dataset.index;
    let avatar = document.getElementById("avatar");
    document.getElementById('pfp-window-idd').innerHTML = '#000' + talamid[StudentIndex].id
    document.getElementById('pfp-window-fname').innerHTML =  talamid[StudentIndex].FirstName
    document.getElementById('pfp-window-sname').innerHTML =  talamid[StudentIndex].SecondName
    document.getElementById('pfp-window-age').innerHTML =  talamid[StudentIndex].age
    document.getElementById('pfp-window-division').innerHTML =  talamid[StudentIndex].division
    document.getElementById('pfp-window-level').innerHTML =  talamid[StudentIndex].level
    avatar.textContent = talamid[StudentIndex].FirstName.charAt(0).toUpperCase() + talamid[StudentIndex].SecondName.charAt(0).toUpperCase();
    studentshowup = StudentIndex
    
}   

function removestudent() {
    if (studentshowup === "") return;
    talamid.splice(studentshowup, 1);
    localStorage.setItem("students", JSON.stringify(talamid));
    localStorage.setItem("StudentsNumberr", talamid.length);
    closeModal();
    location.reload();
} 

function closeModal() {
  document.getElementById("overlay").style.display = "none";
}

