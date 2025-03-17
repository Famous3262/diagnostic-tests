import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const test = await prisma.diagnosticTest.findUnique({
    where: { id: params.id },
  });
  
  if (!test) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  
  return NextResponse.json(test);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const json = await request.json();
    const test = await prisma.diagnosticTest.update({
      where: { id: params.id },
      data: json,
    });
    return NextResponse.json(test);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await prisma.diagnosticTest.delete({
    where: { id: params.id },
  });
  return new NextResponse(null, { status: 204 });
}
