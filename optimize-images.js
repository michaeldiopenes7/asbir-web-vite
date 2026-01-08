import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = '/Users/michaeljohndiopenes/asbir-web-vite/src/assets/images';

async function optimize() {
    // Background gradients (can be aggressive)
    const gradients = [
        'gradientbg.webp',
        'heroaccent.webp'
    ];

    for (const file of gradients) {
        const filePath = path.join(assetsDir, file);
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            const metadata = await sharp(filePath).metadata();
            console.log(`Original size of ${file}: ${(stats.size / 1024).toFixed(2)} KB (${metadata.width}x${metadata.height})`);

            const buffer = await sharp(filePath)
                .resize(1200)
                .blur(5)
                .webp({ quality: 30, effort: 6 })
                .toBuffer();

            fs.writeFileSync(filePath, buffer);
            const newStats = fs.statSync(filePath);
            console.log(`Optimized size of ${file}: ${(newStats.size / 1024).toFixed(2)} KB`);
        }
    }

    const images = [
        'placeholderprj.png'
    ];

    for (const file of images) {
        const filePath = path.join(assetsDir, file);
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            console.log(`Original size of ${file}: ${(stats.size / 1024).toFixed(2)} KB`);

            const newFile = file.replace('.png', '.webp');
            const newFilePath = path.join(assetsDir, newFile);

            await sharp(filePath)
                .webp({ quality: 80, effort: 6 })
                .toFile(newFilePath);

            const newStats = fs.statSync(newFilePath);
            console.log(`Converted ${file} to ${newFile}: ${(newStats.size / 1024).toFixed(2)} KB`);
        }
    }
}

optimize().catch(console.error);
