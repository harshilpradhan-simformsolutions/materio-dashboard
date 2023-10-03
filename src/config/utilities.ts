const units = [
  1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96,
];

const radius = [4, 5, 6];

const fontWeight = [400, 500];

const fontSize = [14, 16, 18, 20, 24];

export const classes = units
  .map((unit) => {
    return `
    .m-${unit} {
      margin: ${unit}px;
    }
    .mt-${unit} {
      margin-top: ${unit}px;
    }
    .mr-${unit} {
      margin-right: ${unit}px;
    }
    .mb-${unit} {
      margin-bottom: ${unit}px;
    }
    .ml-${unit} {
      margin-left: ${unit}px;
    }
    .mx-${unit} {
      margin-left: ${unit}px;
      margin-right: ${unit}px;
    }
    .my-${unit} {
      margin-top: ${unit}px;
      margin-bottom: ${unit}px;
    }
    .p-${unit} {
      padding: ${unit}px;
    }
    .pt-${unit} {
      padding-top: ${unit}px;
    }
    .pr-${unit} {
      padding-right: ${unit}px;
    }
    .pb-${unit} {
      padding-bottom: ${unit}px;
    }
    .pl-${unit} {
      padding-left: ${unit}px;
    }
    .px-${unit} {
      padding-left: ${unit}px;
      padding-right: ${unit}px;
    }
    .py-${unit} {
      padding-top: ${unit}px;
      padding-bottom: ${unit}px;
    }
  `;
  })
  .join('\n');

export const radiusClasses = radius
  .map((unit) => {
    return `
    .br-${unit} {
      border-radius: ${unit}px;
    }
  `;
  })
  .join('\n');

export const fontWeightClasses = fontWeight
  .map((unit) => {
    return `
    .fw-${unit} {
      font-weight: ${unit};
    }
  `;
  })
  .join('\n');

export const fontSizeClasses = fontSize
  .map((unit) => {
    return `
    .fs-${unit} {
      font-size: ${unit}px;
    }
  `;
  })
  .join('\n');
