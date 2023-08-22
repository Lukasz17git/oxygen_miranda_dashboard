// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const fs = require('fs');

const packageJsonPath = './package.json';

const currentTimestamp = new Date().toUTCString();

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
   if (err) {
      console.error(err);
      return;
   }

   const packageJson = JSON.parse(data);
   packageJson.lastDeploymentTimestamp = currentTimestamp;

   fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
      if (err) {
         console.error(err);
         return;
      }
      console.log('Package.json updated with last updated timestamp.');
   });
});
