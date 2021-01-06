import React,{useState,useMemo} from 'react'

const PersonAge = () => {
    const [studentName,setName] =useState('Urooj ahmad')
    const [percentage,setPercentage] =useState(55)
    const [studentAge,setStudentAge] =useState(20)

    const  handleIncreaseAge = ()=>{
        setStudentAge(studentAge + 1 ); 
    }
    const handleIncreasePercentage = () => {
       setPercentage(percentage + 1);
    }

    const handleGrade = useMemo(()=>{
        let i = 0 
        while(i <300000000)i++
      if(percentage >= 60){
          return <span>First Division</span>
      }   
     return <span>Second Division</span>
    },[percentage])
    
    return (
        <div style={{ height: '200px', width: '600px', border: '1px solid red', background: '#e1f5fe', margin: '20px' }}>
            <h4>Student Name {studentName}</h4>
            <h4>Student Percentage {percentage}% <button onClick={handleIncreasePercentage}>Increase percentage</button> <span>{handleGrade}</span></h4>  
            <h4>Student Age {studentAge} <button onClick={handleIncreaseAge}>Increase Age</button></h4>
        </div>
    )
}

export default PersonAge
