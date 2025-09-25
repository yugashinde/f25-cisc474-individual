import { prisma } from "./client"
import type {
  User,
  Student,
  Professor,
  Course,
  Enrollment,
  Grade,
} from "../generated/client"
import fs from "fs"
import path from "path"

// Generic JSON loader with typing
function loadJson<T>(file: string): T[] {
  const filePath = path.join(__dirname, "seed-data", file)
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T[]
}

async function main() {
  // Seed Users
  const users = loadJson<User>("user.json")
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email! }, // email is optional in schema
      update: user,
      create: user,
    })
  }
  console.log(`✅ Seeded ${users.length} users.`)

  // Seed Students
  const students = loadJson<Student>("student.json")
  for (const s of students) {
    await prisma.student.create({ data: s })
  }
  console.log(`✅ Seeded ${students.length} students.`)

  // Seed Professors
  const professors = loadJson<Professor>("professor.json")
  for (const p of professors) {
    await prisma.professor.create({ data: p })
  }
  console.log(`✅ Seeded ${professors.length} professors.`)

  // Seed Courses
  const courses = loadJson<Course>("course.json")
  for (const c of courses) {
    await prisma.course.create({ data: c })
  }
  console.log(`✅ Seeded ${courses.length} courses.`)

  // Seed Enrollments
  const enrollments = loadJson<Enrollment>("enrollment.json")
  for (const e of enrollments) {
    await prisma.enrollment.create({ data: e })
  }
  console.log(`✅ Seeded ${enrollments.length} enrollments.`)

  // Seed Grades
  const grades = loadJson<Grade>("grade.json")
  for (const g of grades) {
    await prisma.grade.create({ data: g })
  }
  console.log(`✅ Seeded ${grades.length} grades.`)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
