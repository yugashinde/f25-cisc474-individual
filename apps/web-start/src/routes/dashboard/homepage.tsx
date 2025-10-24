import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/homepage')({
  component: DashboardComponent,
})

export function DashboardComponent() {
  const courses = ['MATH243', 'CISC372', 'CICS484', 'CISC474', 'CISC489']
  return (
    <div>
      <h1>Welcome to dashboard!</h1>
      <h2> Select a course </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {courses.map((course) => (
          <CourseButton key={course} courseID={course} />
        ))}
      </div>
    </div>
  );
}


function CourseButton({ courseID }: { courseID: string }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '3rem', color: 'black', borderRadius: '8px' }}>
      <h3>{courseID}</h3>
      <Link
        to="/dashboard/$courseID"
        params={{ courseID }}
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: 'pink',
          color: 'black',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        Go to {courseID} Dashboard
      </Link>
    </div>
  );
}