const path = import("path");

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));
    const fileModuleCode = `module.exports = ${assetFilename};`;
    return { code: fileModuleCode };
  },
};
