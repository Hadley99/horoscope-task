import { isWithinInterval } from "date-fns";

export const isDateWithinRange = (horoscopeData) => {
  const currentDate = new Date(horoscopeData.current_date);
  const year = currentDate.getFullYear();
  const dateRange = horoscopeData.date_range.split("-");
  let firstDate = new Date(dateRange[0] + year);
  const secondDate = new Date(dateRange[1] + " " + year);
  const firstMonth = firstDate.getMonth();
  const secondMonth = secondDate.getMonth();

  if (firstMonth > secondMonth) {
    firstDate = new Date(dateRange[0] + (year - 1));
    return isWithinInterval(currentDate, {
      start: firstDate,
      end: secondDate,
    });
  } else {
    return isWithinInterval(currentDate, {
      start: firstDate,
      end: secondDate,
    });
  }
};
