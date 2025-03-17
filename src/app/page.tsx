'use client';

import { useState, useEffect } from 'react';
import TestForm from '@/components/TestForm';
import TestList from '@/components/TestList';

export default function Home() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    const response = await fetch('/api/tests');
    const data = await response.json();
    setTests(data);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Diagnostic Tests Manager</h1>
      <TestForm onTestAdded={fetchTests} />
      <TestList tests={tests} onTestsChanged={fetchTests} />
    </main>
  );
}
