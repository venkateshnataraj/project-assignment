import { useDatePickerStore } from './store';

export default function CalendarPreview() {
  const { startDate, recurrence, recurrenceOptions } = useDatePickerStore();

  // Logic to calculate recurring dates can go here (pseudo-code)
  const recurringDates = getRecurringDates(
    startDate,
    recurrence,
    recurrenceOptions
  );

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Recurring Dates Preview</h3>
      <ul className="space-y-1">
        {recurringDates.map((date, index) => (
          <li key={index} className="text-gray-600">
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}

function getRecurringDates(startDate, recurrence, recurrenceOptions) {
  // Logic to calculate recurring dates (based on recurrence, days of week, nth day, etc.)
  return ['2024-09-25', '2024-09-26', '2024-09-27']; // Replace with actual calculation
}
