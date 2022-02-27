module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run check-types',

  // Lint TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': () => [`npm run check-format`, `npm run check-lint`],

  // Check MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npx prettier --check ${filenames.join(' ')}`,

  // Lint scss
  '**/*.(scss)': () => [`npm run check-lint-styles`],
};
