import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$courseID/$assignmentID/')({
  component: AComponent,
})

function AComponent({ params }: { params: { assignmentID: string } }) {
  return <div><h1> you made it  </h1></div>
}