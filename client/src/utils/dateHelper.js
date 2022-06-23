export const getDate = (date) => {
  const splited = date.toString().split(" ");
  return `${splited[1]} ${splited[2]}, ${splited[4]}`;
};
export const getTime = (date) => {
  return date.toString().split(" ")[4];
};
