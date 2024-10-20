import { useEffect, useState } from "react"
import React from 'react'
import { deleteEmployee, listEmployers } from "../services/EmployeeService"
import { useNavigate} from "react-router-dom"

const ListEmployeeComponent = () => {

    const navigator = useNavigate();
    const [employees,setEmployees] = useState([]) 

    //ele bate na function de listar os funcionarios 
    //adiciona esses funcionarios ao array de employees
    // caso não venha nenhum employee ele seta como uma array vazio pra evitar bugs
    
    useEffect(() => {
        listEmployers().then((response) => {
            if (Array.isArray(response.data)) {
                setEmployees(response.data);
            } else {
                setEmployees([]);
            }
        }).catch(error => {
            console.log(error);
            setEmployees([]);
        });
    }, []);


    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/update-employee/${id}`)
    }

    function deleteById(id){

        deleteEmployee(id).then((response) => {
            navigator('/')

        }).catch((error)=>{
            console.log(error)
        })

    }
    
    return (
        <div className='container vw-100 vh-100'>

            <button className="btn btn-primary mt-2" onClick={addNewEmployee}>Add new employee</button>

            <h2 className='text-center'>List of employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee first name</th>
                        <th>Employee last name</th>
                        <th>Employee email </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td> <div className="d-flex align-items-center justify-content-around">
                                <button className="btn btn-dark" onClick={() =>updateEmployee(employee.id)}>Update</button>
                                <button className=" btn btn-danger" onClick={() => deleteById(employee.id)}>Delete</button>
                                </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployeeComponent