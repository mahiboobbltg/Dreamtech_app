import React, { useState } from "react";
import Button from "./button";
import Count from "./count";
import Heading from "./heading";
import 'bootstrap/dist/css/bootstrap.min.css'


const Parent = () => {
    const [age, setage] = useState(20)
    const [salary, setsalary] = useState(1000)


    const incrementage = () => {
        setage(() => age + 2)
    }
    const incrementsalary = () => {
        setsalary(() => salary + 1000)
    }

    return (
        <div >
            <Heading />
            <Count text="age" count={age} />
            <Button handlebtn={incrementage}>increment age</Button>
            <Count text="salary" count={salary} />
            <Button handlebtn={incrementsalary}>increment salary</Button>
        </div>
    )
}



export default Parent








