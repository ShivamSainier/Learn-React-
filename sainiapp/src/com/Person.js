import React from 'react'
import Higher from './higher'

function Person() {
const person=[
{
    id:0,
    name:'shviam',
    age:20
},  
{
    id:1,
    name:'saini',
    age:21
},
{
    id:2,
    name:'shubham',
    age:23
},
{
    id:3,
    name:'sahil',
    age:26
},
]
const data=person.map(
    name=><Higher person={name} />
)
    return (
        <div>
            {data}
        </div>
    )

    }
export default Person
