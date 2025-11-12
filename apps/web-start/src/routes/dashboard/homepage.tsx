import { Link, createFileRoute } from '@tanstack/react-router'
import {useCourses,useCurrentUser,useDeleteCourse,useUpdateCourse,useApiQuery } from '../../integrations/api' // or useQuery directly
import type { CourseOut } from '@repo/api';



export const Route = createFileRoute('/dashboard/homepage')({
  component: DashboardComponent,
})

export function DashboardComponent() {
  const {data :user, showLoading: userLoading, isAuthPending} = useCurrentUser();
  const { data: courses, error, isLoading: coursesLoading, refetch } = useCourses(user?.id);
  
  const updateCourse = useUpdateCourse();
  const deleteCourse = useDeleteCourse();

  const isL = userLoading || coursesLoading;
  if (isL) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const numC = courses && courses.length > 0
  

  return (
    <div>
      <h1>Welcome to dashboard!</h1>
      <h1>Welcome, {user?.name}</h1>
      <h2>Select a course</h2>
      <div> 
      {!numC &&(
        <div>
          <p> You dont have any courses yet </p>
          <button
        
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'lightblue',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
      
      <li>
        <Link to="/dashboard/create">Create New Course</Link>
      </li>
      </button>
      
          </div>
      )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {courses.map((course: CourseOut) => (
          <div
            key={course.courseId}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h3>{course.title}</h3>
              <Link
                to="/dashboard/$courseID"
                params={{ courseID: course.courseId }}
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'pink',
                  color: 'black',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                Go to {course.title} Dashboard
              </Link>
            </div>
            <button
                onClick={() => {
                  const newTitle = prompt('Enter new title:', course.title);
                  if (newTitle && newTitle !== course.title) {
                    updateCourse.mutate(
                      { courseId: course.courseId, name: newTitle },
                      {
                        onSuccess: () => {
                          alert('Course updated!');
                          refetch();
                        },
                      }
                    );
                  }
                }}
                style={{
                  backgroundColor: 'orange',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Update
              </button>

            <button
              onClick={() => {
                if (confirm(`Are you sure you want to delete "${course.title}"?`)) {
                  deleteCourse.mutate(
                    { courseId: course.courseId },
                    {
                      onSuccess: () => {
                        refetch(); // refresh course list after delete
                      },
                    }
                  );
                }
              }}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => refetch()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'lightblue',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Refetch Courses
      </button>
      <button
        
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'lightblue',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
      
      <li>
        <Link to="/dashboard/create">Create New Course</Link>
      </li>
      </button>
    </div>
    
  );

}