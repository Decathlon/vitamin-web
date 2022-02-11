export const addClasses = (node, classes) =>
  classes.forEach((c) => node.classList.add(c));

export const removeClasses = (node, classes) =>
  classes.forEach((c) => node.classList.remove(c));
