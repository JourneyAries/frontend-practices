// Studi Kasus 5: Sistem Universitas (Level 5 - Very Hard)

function createUniversity(universityName) {
  return {
    universityName: universityName,
    faculties: [],
  }
}

function createFaculties(name, dean) {
  return {
    name: name,
    dean: dean,
    students: [],
  }
}

function createStudents(name, major) {
  return {
    name: name,
    major: major,
  }
}

const MyUniversity = createUniversity('UGM');
console.log(MyUniversity);

const faculty1 = createFaculties('Teknik', 'Amar');
const faculty2 = createFaculties('Pendidikan', 'Ucup');

const mhs1 = createStudents('Fachrul', 'Informatika');
const mhs2 = createStudents('Aries', 'Data Sains');
const mhs3 = createStudents('Jesika', 'Bhs Indonesia');
const mhs4 = createStudents('Sena', 'Seni');
const mhs5 = createStudents('Ariel', 'Informatika');


function addFaculty(university, faculty) {
  university.faculties.push(faculty);
}

addFaculty(MyUniversity, faculty1);
addFaculty(MyUniversity, faculty2);
console.log(MyUniversity);

function addStudentToFaculty(university, facultyName, student) {
  const faculty = university.faculties.find(faculty => faculty.name === facultyName);
  if (faculty) {
    faculty.students.push(student);
  } else {
    console.log(`fakultas ${facultyName} tidak ditemukan`);
  }
}

addStudentToFaculty(MyUniversity, 'Teknik', mhs1);
addStudentToFaculty(MyUniversity, 'Teknik', mhs2);
addStudentToFaculty(MyUniversity, 'Teknik', mhs5);
addStudentToFaculty(MyUniversity, 'Pendidikan', mhs3);
addStudentToFaculty(MyUniversity, 'Pendidikan', mhs4);

function findStudentByMajor(university, major) {
  return university.faculties.reduce((students, faculty) => {
    return students.concat(faculty.students.filter(student => student.major === major));
  },[]);
}

const filteredByMajor = findStudentByMajor(MyUniversity, 'Informatika');
console.log(filteredByMajor);