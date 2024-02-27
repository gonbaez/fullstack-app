export const justGivingDateToDate = (jd) => {
  return new Date(Number(jd.split("(")[1].split("+")[0])).toDateString();
};
