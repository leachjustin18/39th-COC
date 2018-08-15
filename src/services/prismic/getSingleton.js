const getPrismicSingleton = prismicContent => {
  if (typeof prismicContent !== 'object') {
    throw new Error(`Must be an object, got: ${prismicContent}`);
  }

  return prismicContent.edges[0].node.data;
};

export default getPrismicSingleton;
