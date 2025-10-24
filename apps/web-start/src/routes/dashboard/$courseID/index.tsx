import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$courseID/')({
  component: CourseComponent,
})

function CourseComponent() {
    //link for assignments, grades - static routes 

  return <div><h1> course # dashboard </h1>
  
  <Link to="/dashboard/$courseID/assignments">
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Assignments
                </button>
              </Link>
              <Link to = "/dashboard/$courseID/grade">
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Grades
                </button>
              </Link>
 </div>
}
