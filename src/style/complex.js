// QUAD1  |  QUAD2
// (-, -) |  (+, -)
// -------------
// QUAD4  | QUAD3
// (-, +) |  (+, +)
// const quad1 = '-1, -0.9, -0.9, -1';

// const quad2 = '0.9, -1, 1, -0.9';

// const quad3 = '1, 0.9, 0.9, 1';

// const quad4 = '-0.9, 1, -1, 0.9';

const staticCornerLengthPoints = (cornerLength, width, height) => {
  const cpX = cornerLength / width;
  const cpY = cornerLength / height;

  let points = `
    ${-1 + cpX}, -1, -1,  ${-1 + cpY},
    -1, ${1 - cpY}, ${-1 + cpX}, 1, 
    ${1 - cpX}, 1, 1, ${1 - cpY},
    1, ${-1 + cpY},
    ${1 - cpX}, -1
  `;

  return points;

};

const points = (node) => {
  const cornerLength = 12;
  const width = node.outerWidth() - parseFloat(node.css('border-width'));
  const height = node.outerHeight() - parseFloat(node.css('border-width'));

  return staticCornerLengthPoints(cornerLength, width, height);
};


module.exports = {
  points: points
};
