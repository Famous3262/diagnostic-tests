import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const TestSchema = z.object({
  patientName: z.string().min(1),
  testType: z.string().min(1),
  result: z.string().min(1),
  testDate: z.string().datetime(),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = TestSchema.parse(json);

    const test = await prisma.diagnosticTest.create({
      data: {
        ...body,
        testDate: new Date(body.testDate),
      },
    });

    return NextResponse.json(test);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  const tests = await prisma.diagnosticTest.findMany({
    orderBy: { testDate: 'desc' },
  });
  return NextResponse.json(tests);
}
