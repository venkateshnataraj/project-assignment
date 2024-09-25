import { useState } from 'react';
import { useDatePickerStore } from './store';

export default function DatePicker() {
  const { setStartDate, setEndDate } = useDatePickerStore();
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="start-date"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
            setStartDate(e.target.value);
          }}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label
          htmlFor="end-date"
          className="block text-sm font-medium text-gray-700"
        >
          End Date (optional)
        </label>
        <input
          type="date"
          id="end-date"
          value={end}
          onChange={(e) => {
            setEnd(e.target.value);
            setEndDate(e.target.value);
          }}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
    </div>
  );
}
