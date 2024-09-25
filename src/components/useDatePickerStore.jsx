import create from 'zustand';

const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrence: 'daily', // Default
  recurrenceOptions: {
    interval: 1,
    daysOfWeek: [],
    nthDayOfMonth: null,
  },
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrence: (recurrence) => set({ recurrence }),
  setRecurrenceOptions: (options) =>
    set((state) => ({
      recurrenceOptions: { ...state.recurrenceOptions, ...options },
    })),
}));
