const formNormalization = ({ e }) => {
  const schema = {};
  const { target } = e;
  Object.keys(target).map(content => {
    if (target[content].name) {
      schema[target[content].name] = target[content].value;
    }
    return schema;
  });
  return schema;
};

export { formNormalization };
