export const isEqualCreator = () => {
  const previousParameters = {};
  return (parameters) => {
    const entriesParameters = Object.entries(parameters);
    const isEqual = entriesParameters.every(([name, value]) => previousParameters[name] === value);
    entriesParameters.forEach(([name, value]) => {
      previousParameters[name] = value;
    });
    return !isEqual;
  };
};
