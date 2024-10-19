import { useEffect, useState } from "react"
import React from 'react'
import { listEmployers } from "../services/EmployeeService"

const ListEmployeeComponent = () => {

    const [employees,setEmployees] = useState([]) 

    useEffect( () =>{
        listEmployers().then((Response) => {
            setEmployees(Response.data)
            console.log(Response.data)
        }).catch(error =>{
            console.log(error)
        })
    })
    
    return (
        <div className='container'>

            <h2 className='text-center'>List of employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee first name</th>
                        <th>Employee last name</th>
                        <th>Employee email </th>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployeeComponent