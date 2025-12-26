import { useState } from "react";

interface Student {
    id: number;
    name: string;
    email: string;
}

const UseState = () => {
    const [person, setPerson] = useState<string> ("Budi");
    const [students, setStudents] = useState<Student[]>([])
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const addStudent = () => {
        if(!name || !email) {
            return alert("Name or Email cannot be emplty!");
        }

        const emailTerdaftar = students.find(
            (student) => student.email === email
        );

        if (emailTerdaftar) {
            return alert("Email tidak boleh sama!");
        }

        const newStudent: Student = {
            id: Date.now(),
            name: name,
            email: email,
        };

        setStudents((prev) =>[...prev, newStudent]);
        setName("")
        setEmail("")
    };


    const onClickPerson = () => {
        setPerson("Joko");
    };



  return (
    <div>
        <h1>Use State</h1>

        <p>{person}</p>
        <button onClick={onClickPerson}>Change Person</button>

        <hr />

        <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" placeholder="Your Email"  onChange={(e) => setEmail(e.target.value)} value={email}  />

        <button onClick={addStudent}>Save</button>

        {students.map((student)=>{
            return <p key={student.id}>{student.name} - {student.email}</p>;
        })}
    </div>
  )
}

export default UseState