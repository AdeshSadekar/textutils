import React, { use, useState } from "react"

export default function Datatable() {

    const [users, setUsers] = useState([])

    const [name, setName] = useState("")

    const [age, setAge] = useState(0)

    const [email, setEmail] = useState("")

    const [editIndex, setIndex] = useState(null)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleDeleteClick = (index) => {
        const deleteduser = users.filter((_, i) => i !== index)
        setUsers(deleteduser)
        // if(index>-1){
        //     const allUsers = [...users]
        //     allUsers.splice(index, 1)
        //     setUsers(allUsers)
        // }
    }

    const handleEditClick = (index) => {
        const selectedUser = users[index];
        setName(selectedUser.firstName);
        setAge(selectedUser.age);
        setEmail(selectedUser.email);

        setIndex(index);
    }

    const handleAddClick = () => {
        const newUser = {
            firstName: name,
            age: age,
            email: email
        }
        const exists = users.some(i => i.firstName.toLowerCase() === name.toLowerCase())
        if (exists) {
            alert("Duplicate Input Name")
            return
        }
        if (age < 18 || age > 60) {
            alert("Age is Invalid")
            return
        }

        const emailexists = users.some(item => item.email.toLowerCase() === email.toLowerCase())
        if (emailexists) {
            alert("Email already exists")
            return
        }

        const userData = [...users]
        userData.push(newUser)
        setUsers(userData)
        setName("")
        setAge(0)
        setEmail("")
    }


    return (

        <div>

            <table style={{ color: "black", fontSize: "20px", padding: "50px", width: "100%" }}>
                <thead style={{ color: "black", fontSize: "20px", padding: "50px", width: "100%" }}>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        // Use a unique ID as the key for each row
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.firstName}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>

                            <td style={{ whiteSpace: "nowrap" }}>
                                <button
                                    className="btn btn-danger btn-sm mx-1"
                                    onClick={() => handleDeleteClick(index)}
                                >
                                    Delete
                                </button>

                                <button
                                    className="btn btn-warning btn-sm mx-1"
                                    onClick={() => handleEditClick(index)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>

                    ))}


                </tbody>
            </table>

            <div>
                <input style={{ color: "black", fontSize: "20px", padding: "10px", width: "100%" }}
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={handleNameChange}

                    id="myBox"
                    rows="8"
                ></input>

                <input style={{ color: "black", fontSize: "20px", padding: "10px", width: "100%" }}
                    type="number"
                    className="form-control"
                    value={age}
                    onChange={handleAgeChange}

                    id="myBox"
                    rows="8"
                ></input>

                <input style={{ color: "black", fontSize: "20px", padding: "10px", width: "100%" }}
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    placeholder="name@example.com"
                />
                <button className="btn btn-primary mx-2 my-2" onClick={handleAddClick}>
                    Add
                </button>

            </div>
        </div>

    )
}