exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
      type MdxFrontmatter {
        date: Date @dateformat
      }
    `);
};
