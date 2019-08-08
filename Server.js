const express = require('express');
const app = express();
const morgan = require('morgan');
const sql = require("mssql")
const port = process.env.PORT || 5000
const path = require ('path')



app.get('/', (req,res) =>{

    const config = {
        server: 'DESKTOP-Q29DMOC\SQLEXPRESS',
        // user: 'TWStudent',
        //password: 'TechWorks!',
        database: 'Admin',
        port: "1433",
        multipleStatements: true
    }
   })


// sql.connect(config, function (err) {

//     if (err) console.log(err);

//     const request = new sql.Request()

//        request.query('select * from Employee', function (err, recordset) {

//         if(err) console.log(err)

//         res.send(recordset);

//         });
//     });
// });



//Middleware

app.use(morgan('dev'))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



const server = app.listen(port, () => {

    console.log('Server Started');

});

if(process.env.NODE_ENV==="production"){
    app.use(express.static("clientApp/build"))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"ClientApp/build"))
    })
}


//Get all employees

app.get('/employee', (req, res) => {

    request.query('SELECT * FROM Employee', (err, rows, field) => {

        if (!err) res.send(rows);

        else console.log(err);

    });

});



//Get an employee

app.get('/Employee/:id', (req, res) => {

    sqlconnect.query(

        'SELECT * FROM Employee WHERE ID =?',

        [req.params.id],

        (err, rows, field) => {

            if (!err) res.send(rows);

            else console.log(err);

        }

    );

});



//Delete an employee

app.delete('/Employee/:id', (req, res) => {

    sqlconnect.query(

        'DELETE FROM Employee WHERE ID =?',

        [req.params.id],

        (err, rows, field) => {

            if (!err) res.send('Deleted Successfully');

            else console.log(err);

        }

    );

});



//Insert an employee

// app.post('/Employee', (req, res) => {

//     let Emp = req.body;

//     Emp.ID = 0;

//     // let sql = "SET @ID = ?;SET @FirstName = ?;SET @LastName = ?; @ManagerId = ?; @DepartmentId = ?;SET @Salary = ?; @HireDate = ?; \CALL EmployeeAddOrEdit(@ID, @FirstName, @LastName,@ManagerId,@DepartmentId, @Salary,@HireDate);"

// sqlconnect.query(

//     sql, [Emp.ID, Emp.FirstName,Emp.LastName,Emp.ManagerId,Emp.DepartmentId,Emp.Salary,Emp.HireDate],

//     (err, rows, field) => {

//         if (!err) res.json("Added Successfully");

//         else console.log(err);

//     }

// );

// });



// Update an employee

// app.put('/Employee', (req, res) => {

//     let Emp = req.body;

//     let sql = 'SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \

//     CALL EmployeeAddOrEdit(@ID, @FirstName, @LastName, @ManagerId, @DepartmentId, @Salary, @HireDate); ';

// sqlconnect.query(

//     sql, [Emp.ID, Emp.FirstName,Emp.LastName,Emp.ManagerId,Emp.DepartmentId,Emp.Salary,Emp.HireDate],

//     (err, rows, field) => {

//         if (!err) res.send("Updated Successfully");

//         else console.log(err);

//     }

// );

// });
