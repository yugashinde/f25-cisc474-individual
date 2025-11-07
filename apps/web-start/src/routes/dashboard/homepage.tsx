import { Link, createFileRoute } from '@tanstack/react-router'
import { useApiQuery,useCurrentUser,useCourses, useCreateCourse,useDeleteCourse,useUpdateCourse } from '../../integrations/api' // or useQuery directly
import type { CourseOut } from '@repo/api';

export const Route = createFileRoute('/dashboard/homepage')({
  component: DashboardComponent,
})

export function DashboardComponent() {

  const { data: user, showLoading: userLoading, isAuthPending } = useCurrentUser();
  console.log("User from useCurrentUser:", user, "Auth pending:", isAuthPending);

  const { data: courses, error, showLoading: coursesLoading, refetch } = useCourses(user?.id);
  const createCourse = useCreateCourse();
  const updateCourse = useUpdateCourse();
  const deleteCourse = useDeleteCourse();

  const isL = userLoading || coursesLoading;
  if (isL) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!courses || courses.length === 0) {
    return <div>No courses found.</div>;
  }
  
  return (
    <div>
      <h1>Welcome to dashboard!</h1>
      <h1>Welcome, {user?.name}</h1>
      <h2>Select a course</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {courses.map((course : CourseOut) => (
          <CourseButton key={course.courseId} course={course} />
        ))}
      </div>

      <button onClick={() => refetch()}>Refetch Courses</button>
    
    </div>
  )
}

type Props = { course: CourseOut };

function CourseButton({ course }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '3rem', color: 'black', borderRadius: '8px' }}>
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
  );
}