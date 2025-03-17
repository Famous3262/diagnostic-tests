'use client';

import { useState } from 'react';

export default function TestForm({ onTestAdded }: { onTestAdded: () => void }) {
  const [formData, setFormData] = useState({
    patientName: '',
    testType: '',
    result: '',
    testDate: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/tests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({
      patientName: '',
      testType: '',
      result: '',
      testDate: '',
      notes: ''
    });
    onTestAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <input
        type="text"
        placeholder="Patient Name"
        value={formData.patientName}
        onChange={e => setFormData({...formData, patientName: e.target.value})}
        className="w-full p-2 border rounded"
      />
      {/* Add other form fields similarly */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Test
      </button>
    </form>
  );
}
