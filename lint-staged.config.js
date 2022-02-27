module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run check-types',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': () => [`npm run check-format`, `npm run check-lint`],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npx prettier --check ${filenames.join(' ')}`,
};
