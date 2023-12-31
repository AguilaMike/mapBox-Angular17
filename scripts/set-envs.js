const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDevelopment = './src/environments/environment.development.ts';

const envFileContent = `
export const environment = {
  production: true,
  mapbox_key: "${ process.env['MAPBOX_KEY'] }",
};
`;
const envFileContentDevelompent = `
export const environment = {
  production: false,
  mapbox_key: "${ process.env['MAPBOX_KEY'] }",
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDevelopment, envFileContentDevelompent);
