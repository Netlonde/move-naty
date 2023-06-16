export function convertDate(date: string) {
  const splitDate = date.split("T")[0].split("-");
  const day = splitDate[2];
  const month = splitDate[1];
  const year = splitDate[0];
  const formatedDate = `${day}/${month}/${year}`;
  return formatedDate;
}
