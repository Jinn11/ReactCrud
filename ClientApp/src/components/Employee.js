import React, { Component } from 'react'
import axios from 'axios';

export class Employee extends Component {
    constructor() {
        super();
        this.state = {
            ID: 0,
            FirstName: "",
            LastName: "",
            ManagerId:0,
            Salary: 0,
            HireDate: Date,
           Employee:[],

        }
    }
    //this the life cycle metthods go
    async componentDidMount() {
        try {
            const res = await axios.get('/employee');
            console.log(res)
            this.setState({
                Employee: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    }

    //below this method are going live here


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    addEmployee = async (event) => {
        event.preventDefault();
        const { ID, FirstName, LastName, ManagerId, DepartmentId, Salary, Hiredate  } = this.state
        try {
            await axios.post('/employee', {ID, FirstName, LastName,ManagerId,DepartmentId, Salary,Hiredate })
            alert('emp Sucfuly added')
            const res = await axios.get('/Employee')
            this.setState({
                Employee: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    deleteEmployee = async (id) => {
        try {
            await axios.delete(`/Employee/${id}`);
            this.refresh();

        } catch (error) {
            console.log(error)
        }
    }
    refresh = async () => {
        try {
            const res = await axios.get("/Employee")
            this.setState({
                Employee: res.data
            })
        } catch (error) {

        }
    }

    render() {
        if (this.state.Employee) {
            return (
                <div>
                    <ul>
                        {this.state.Employee.map(el => {
                            return <li key={el.ID}>FirstName:{el.FirstName} LastName: {el.LastName}
                                ManagerId:{el.ManagerId} DepartmentId:{el.DepartmentId} Salary: {el.Salary} HireDate:{el.HireDate}
                                <button type="button" onclick={() => this.deleteEmployee(el.ID)}>DELETE
                                </button></li>

                        })}
                    </ul>
                    <form>
                        <input name="Name" Placeholder="Enter Employee Name :" onChange={this.handleChange} />
                    </form>
                </div>
            )
        } else {
            return (
                <div>Loading</div>
            )
        }
    }
}
