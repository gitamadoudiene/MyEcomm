const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(jsx|tsx)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (!content.trimStart().startsWith('"use client";') && !content.trimStart().startsWith("'use client';")) {
        console.log(`Missing "use client"; in: ${fullPath}`);
      }
    }
  });
}

scanDir(process.cwd());
