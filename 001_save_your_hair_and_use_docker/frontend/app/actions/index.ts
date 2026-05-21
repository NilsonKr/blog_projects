'use server'
import sql from '../database'

export async function fetchSubjects() {
  const subjects = await sql`SELECT * FROM subject;`
  return subjects
}
