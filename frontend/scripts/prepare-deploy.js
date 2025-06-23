#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing Moon Site for deployment...\n');

// Check if we're in the frontend directory
const currentDir = process.cwd();
const packageJsonPath = path.join(currentDir, 'package.json');

if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ package.json not found. Make sure you\'re in the frontend directory.');
  process.exit(1);
}

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

console.log('✅ Project:', packageJson.name);
console.log('✅ Version:', packageJson.version);

// Check required files
const requiredFiles = [
  'next.config.ts',
  'vercel.json',
  'lib/api.ts',
  'tailwind.config.js'
];

console.log('\n📁 Checking required files...');
let missingFiles = [];

requiredFiles.forEach(file => {
  const filePath = path.join(currentDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - Missing`);
    missingFiles.push(file);
  }
});

// Check environment setup
console.log('\n🔧 Environment configuration...');

// Check if API_BASE_URL is referenced
const apiFile = path.join(currentDir, 'lib/api.ts');
if (fs.existsSync(apiFile)) {
  const apiContent = fs.readFileSync(apiFile, 'utf8');
  if (apiContent.includes('process.env.API_BASE_URL')) {
    console.log('✅ API fallback system configured');
  } else {
    console.log('⚠️  API fallback system not found');
  }
} else {
  console.log('❌ lib/api.ts not found');
}

// Deployment checklist
console.log('\n📋 Pre-deployment checklist:');
console.log('  1. ✅ Update personal information in components/SocialLinks.tsx');
console.log('  2. ✅ Customize demo data in lib/api.ts');
console.log('  3. ✅ Update site metadata in app/layout.tsx');
console.log('  4. ✅ Add your own images in public/images/');
console.log('  5. ✅ Review and update blog posts in content/blog/');

console.log('\n🎯 Deployment instructions:');
console.log('  1. Push your code to GitHub');
console.log('  2. Go to vercel.com and import your repository');
console.log('  3. Set Root Directory to "frontend"');
console.log('  4. Deploy!');

console.log('\n💡 Tips:');
console.log('  • The site will work with demo data out of the box');
console.log('  • Add API_BASE_URL environment variable to use real backend');
console.log('  • All demo data can be customized in lib/api.ts');

if (missingFiles.length === 0) {
  console.log('\n🎉 Ready for deployment!');
} else {
  console.log('\n⚠️  Some files are missing. Please create them before deploying.');
}

console.log('\n📖 For detailed instructions, see DEPLOYMENT.md'); 