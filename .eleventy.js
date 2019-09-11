module.exports = function(eleventyConfig) {

  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('images');

  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
}