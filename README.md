# Diagnostic Tests Manager

A Next.js application for managing diagnostic test results in medical laboratories.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up PostgreSQL database
4. Create `.env` file with your database URL:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/diagnostic_tests"
   ```
5. Run migrations: `npx prisma migrate dev`
6. Start the development server: `npm run dev`

## Architecture

- **Frontend**: Next.js with React and Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: Zod

## API Endpoints

- `GET /api/tests` - List all tests
- `POST /api/tests` - Create new test
- `GET /api/tests/:id` - Get test by ID
- `PUT /api/tests/:id` - Update test
- `DELETE /api/tests/:id` - Delete test

## Features

- CRUD operations for diagnostic tests
- Form validation
- Responsive UI
- Real-time updates

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
