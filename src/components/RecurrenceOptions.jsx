import { useDatePickerStore } from './store';

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence, recurrenceOptions, setRecurrenceOptions } =
    useDatePickerStore();

  const updateRecurrenceOptions = (key, value) => {
    setRecurrenceOptions({ [key]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="recurrence"
          className="block text-sm font-medium text-gray-700"
        >
          Recurrence
        </label>
        <select
          id="recurrence"
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {recurrence === 'weekly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Days of the week
          </label>
          <div className="flex space-x-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <button
                key={day}
                onClick={() => updateRecurrenceOptions('daysOfWeek', day)}
                className={`px-2 py-1 rounded-md ${
                  recurrenceOptions.daysOfWeek.includes(day)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {recurrence === 'monthly' && (
        <div>
          <label
            htmlFor="nth-day"
            className="block text-sm font-medium text-gray-700"
          >
            Nth day of the month
          </label>
          <input
            type="number"
            id="nth-day"
            min="1"
            max="31"
            value={recurrenceOptions.nthDayOfMonth || ''}
            onChange={(e) =>
              updateRecurrenceOptions('nthDayOfMonth', e.target.value)
            }
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
      )}
    </div>
  );
}
