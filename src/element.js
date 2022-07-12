const getText = (element, value) => {
  let temp = element.textContent;
  if (value === undefined) {
    return temp;
  }
  temp = value;
  return temp;
};

export default getText;
