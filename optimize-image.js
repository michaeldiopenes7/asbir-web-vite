import sharp from 'sharp';

const inputPath = 'src/assets/images/gradientbg.png';
const outputPath = 'src/assets/images/gradientbg.webp';

async function convert() {
    console.log(`Optimizing ${inputPath}...`);
    try {
        const info = await sharp(inputPath)
            .webp({ quality: 80, effort: 6 })
            .toFile(outputPath);

        console.log(`Success! Converted to ${outputPath}`);
        console.log(`New size: ${(info.size / 1024).toFixed(2)} KB`);
    } catch (error) {
        console.error("Error converting image:", error);
    }
}

convert();
