const monthMap = {
  "01": "JAN",
  "02": "FEB",
  "03": "MAR",
  "04": "APR",
  "05": "MAY",
  "06": "JUNE",
  "07": "JUL",
  "08": "AUG",
  "09": "SEP",
  "10": "OCT",
  "11": "NOV",
  "12": "DEC"
};
export const dateDecomp = date => {
  const year = date.split("-")[0];
  const month = monthMap[date.split("-")[1]];
  const day = date.split("-")[2];
  return { year, month, day };
};

export const timeDecomp = time => {
  const date = new Date(time);
  return date.toLocaleString().split(", ")[1];
  //   let hour = date.getHours();
  //   let min = date.getMinutes();
  //   return { hour, min };
};
