'use server'

import sql from '../database'

import { Subject } from '@/app/types'

export async function fetchSubjects() {
  const subjects: Subject[] = await sql`SELECT * FROM subject;`
  return subjects
}
