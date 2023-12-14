import React from 'react'
import ChildProp from './ChildProp'
const ParentProp =()=> {
    const name1 = "Varsha K V"
    const name2 = " Sanvi S"
    return (
        <>
        <ChildProp name ={name1}/>
        <ChildProp name ={name2}/>
        </>
    )
}
export default ParentProp