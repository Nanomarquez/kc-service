import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// Convert favicon SVG to PNG (32x32, 64x64, 128x128, 256x256)
async function convertFavicon() {
  const svgBuffer = readFileSync(join(publicDir, 'favicon-kc-service.svg'));
  
  const sizes = [32, 64, 128, 256];
  
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, `favicon-${size}x${size}.png`));
    console.log(`✅ Created favicon-${size}x${size}.png`);
  }
  
  // Create a standard favicon.ico equivalent (32x32 PNG)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon.png'));
  console.log('✅ Created favicon.png');
}

// Convert OG image SVG to PNG (1200x630 for social media)
async function convertOGImage() {
  const svgBuffer = readFileSync(join(publicDir, 'og-image.svg'));
  
  await sharp(svgBuffer)
    .resize(1200, 630)
    .png()
    .toFile(join(publicDir, 'og-image.png'));
  console.log('✅ Created og-image.png');
}

// Run conversions
async function main() {
  try {
    console.log('🔄 Converting SVG files to PNG...\n');
    await convertFavicon();
    await convertOGImage();
    console.log('\n✨ All conversions completed successfully!');
  } catch (error) {
    console.error('❌ Error converting files:', error);
    process.exit(1);
  }
}

main();

