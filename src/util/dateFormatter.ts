//"2011-01-25T18:44:36Z"

export const dateFormat = function (date: string) {
  const [, month, day, year] = new Date(date).toDateString().split(" ");
  return `Joined ${day} ${month} ${year}`;
};
