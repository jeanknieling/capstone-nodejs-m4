export const checkDate = (date: Date) => {
  const dateString = date.toString();
  let exp = /\d{4}\-\d{2}\-\d{2}/;
  if (!exp.test(dateString)) {
    Error("Invalid date");
    return false;
  }
  return true;
};

export const fixedFloat = (value: number) => {
  return Number.parseFloat((value).toFixed(2))
}