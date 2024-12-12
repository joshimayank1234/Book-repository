import React, { useState } from 'react'
import { BookOpen } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Subjects() {
  let navigate = useNavigate()

  const [subjects] = useState([
    {SubjectId: 1, name: 'Maths', icon: 'calculator', color: 'bg-blue-100'},
    {SubjectId: 2, name: 'English', icon: 'book-open', color: 'bg-green-100'},
    {SubjectId: 3, name: 'Social Science', icon: 'globe', color: 'bg-yellow-100'},
    {SubjectId: 4, name: 'Science', icon: 'flask', color: 'bg-purple-100'}
  ])


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Subjects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <div 
              key={subject.SubjectId} 
              className={`
                ${subject.color} 
                rounded-xl 
                shadow-md 
                hover:shadow-xl 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2 
                p-6 
                text-center 
                relative 
                overflow-hidden
              `}
            >
              <div className="absolute top-0 right-0 opacity-10">
                <BookOpen 
                  size={100} 
                  className="text-gray-900"
                />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">
                    {subject.SubjectId}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  {subject.name}
                </h2>
                <button 
                  onClick={()=>{
                    navigate(`/Subjects/${subject.SubjectId}/Topics`)
                  }}
                  className="
                    w-full 
                    bg-blue-500 
                    text-white 
                    py-2 
                    rounded-lg 
                    hover:bg-blue-600 
                    transition-colors 
                    duration-300 
                    flex 
                    items-center 
                    justify-center 
                    gap-2
                  "
                >
                  Read Topics
                  <BookOpen size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}