import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Subjects from './Subjects'

export default function Topics() {
  
    let{SubjectId}=useParams();

    let[Topicdata,setTopicdata]=useState([
      {
        Topic_id:1,
        name:"Geometry",
        Subject_Id:1
      },
      {
        Topic_id:2,
        name:"Algebra",
        Subject_Id:1
      },
      {
        Topic_id:3,
        name:"Trigonometry",
        Subject_Id:1
      },
      {
        Topic_id:4,
        name:"Geometry",
        Subject_Id:1
      },
      {
        Topic_id:1,
        name:"Grammer",
        Subject_Id:2
      },
      {
        Topic_id:2,
        name:"Books",
        Subject_Id:2
      },
      {
        Topic_id:3,
        name:"Literature",
        Subject_Id:2
      },
      {
        Topic_id:1,
        name:"Geography",
        Subject_Id:3
      },
      {
        Topic_id:2,
        name:"History",
        Subject_Id:3
      },
      {
        Topic_id:3,
        name:"Economy",
        Subject_Id:3
      },
      {
        Topic_id:1,
        name:"Biology",
        Subject_Id:4
      },
      {
        Topic_id:2,
        name:"Physics",
        Subject_Id:4
      },
      {
        Topic_id:3,
        name:"Chemistry",
        Subject_Id:4
      }
    ])

  return (
    <div>
      {
        Topicdata.filter(e =>e.Subject_Id===parseInt(SubjectId)).map(e=>(
          <div key={e.Topic_id}>
              <h1>{e.Topic_id}</h1>
              <p>{e.name}</p>
          </div>
        ))
      }
    </div>
  )
}
