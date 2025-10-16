const studentForm = document.getElementById('studentForm');
const tableBody = document.getElementById('tableBody');
const noData = document.getElementById('noData');
let students = [];
let editIndex = null;

studentForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const grid = document.getElementById('grid').value.trim();
    const age = document.getElementById('age').value.trim();
    const course = document.getElementById('course').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!name || !grid || !age) return;

    const student = { name, grid, age, course, gender };

    if (editIndex !== null) {
        students[editIndex] = student;
        editIndex = null;
    } else {
        students.push(student);
    }

    studentForm.reset();
    displayStudents();
});

function displayStudents() {
    if (students.length === 0) {
        noData.style.display = 'block';
        tableBody.innerHTML = '';
        return;
    }
    noData.style.display = 'none';
    
    let rows = '';
    students.forEach((data, idx) => {
        rows += `
            <tr>
                <td>${idx + 1}</td>
                <td>${data.name}</td>
                <td>${data.grid}</td>
                <td>${data.age}</td>
                <td>${data.course}</td>
                <td>${data.gender}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editStudent(${idx})">
                        <i class="ri-edit-line"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteStudent(${idx})">
                        <i class="ri-delete-bin-5-line"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    tableBody.innerHTML = rows;
}


function editStudent(index) {
    const s = students[index];
    document.getElementById('name').value = s.name;
    document.getElementById('grid').value = s.grid;
    document.getElementById('age').value = s.age;
    document.getElementById('course').value = s.course;
    document.querySelector(`input[value="${s.gender}"]`).checked = true;
    editIndex = index;

    if(editIndex !== null){
        document.getElementById('addbtn').textContent = "UPDATE STUDENT";
    } else {
        document.getElementById('addbtn').textContent = "ADD STUDENT";
    }

}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
