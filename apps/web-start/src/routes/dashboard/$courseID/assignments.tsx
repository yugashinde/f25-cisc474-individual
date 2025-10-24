import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$courseID/assignments')({
  component: assignmentsComponent,
})

function assignmentsComponent() {
    const assignments = ['Assignment1', 'Assignment2', 'Assignment3', 'Assignment4', 'Assignment5']
    return (
      <div>
        <h1>Assignments</h1>
        <h2> </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {assignments.map((a) => (
            <AButton key={a} assignmentID={a} />
          ))}
        </div>
      </div>
    );
  }
  
  
  function AButton({ assignmentID }: { assignmentID: string }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '3rem', color: 'black', borderRadius: '8px' }}>
        <h3>{assignmentID}</h3>
        <Link 
          to="/dashboard/$courseID/$assignmentID"
         
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: 'pink',
            color: 'black',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          Go to {assignmentID} Dashboard
        </Link>
      </div>
    );
  }

