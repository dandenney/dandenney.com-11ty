module.exports = function(eleventyConfig) {
  // Rename and padd CSS
  eleventyConfig.addPassthroughCopy("src/styles");
};