// JPG file separate to imageDir, duplicatedDir
export const imageSeparater = (item, name, imageDir, duplicated) => {
  const checkDup = name.split("_");
  const [img, dupCheck] = checkDup;
  if (dupCheck[0] === "E") duplicated.push(item);
  else imageDir.push(item);
};
