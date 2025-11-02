
import { PrismaClient } from '../generated/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const students = [];
  const professors = [];

 
  for (let i = 0; i < 5; i++) {
    const student = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'Student',
        emailVerified: faker.date.past(),
        studentProfile: {
          create: {
            college: faker.company.name(),
            startYr: faker.date.past({ years: 4 }),
            graduationYr: faker.date.future({ years: 1 }),
            gpa: parseFloat(faker.number.float({ min: 2.0, max: 4.0 }).toFixed(2)),
          },
        },
      },
    });
    students.push(student);
  }

  for (let i = 0; i < 3; i++) {
    const professor = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'Professor',
        emailVerified: faker.date.past(),
        professorProfile: {
          create: {
            title: faker.person.jobTitle(),
            department: faker.commerce.department(),
            joinedYr: faker.date.past({ years: 10 }),
            tenured: faker.datatype.boolean(),
            office: faker.location.streetAddress(),
          },
        },
      },
    });
    professors.push(professor);
  }

 
  const courses = [];
  for (const prof of professors) {
    for (let i = 0; i < 2; i++) {
      const course = await prisma.course.create({
        data: {
          courseId: faker.string.uuid(),
          
          title: faker.lorem.words(3),
          description: faker.lorem.sentence(),
          department: faker.commerce.department(),
          credits: faker.number.int({ min: 2, max: 5 }),
          professorId: prof.id,
          ownerId : prof.id,
        },
      });
      courses.push(course);
    }
  }

 
  const assignments = [];
  for (const course of courses) {
    for (let i = 0; i < 3; i++) {
      const assignment = await prisma.assignment.create({
        data: {
          assignmentId: faker.string.uuid(),
          title: faker.lorem.words(4),
          description: faker.lorem.paragraph(),
          points: faker.number.float({ min: 10, max: 100 }),
          status: faker.helpers.arrayElement(['open', 'closed', 'graded']),
          dueDate: faker.date.future(),
          courseId: course.courseId,
        },
      });
      assignments.push(assignment);
    }
  }

  
  for (const assignment of assignments) {
    for (const student of students) {
      await prisma.grade.create({
        data: {
          studentId: student.id,
          assignmentId: assignment.assignmentId,
          score: faker.number.float({ min: 0, max: assignment.points }),
          feedback: faker.lorem.sentence(),
        },
      });
    }
  }

  console.log('Seeding complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
