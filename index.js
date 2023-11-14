import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';

await imagemin(['images/*.{jpg,png}'], {
	destination: 'uploads/optimized-JPG-PNG',
	plugins: [
		imageminMozjpeg({
			quality: 10,
			progressive: true
		}),
	]
});

await imagemin(['images/*.{jpg,png}'], {
	destination: 'uploads/converted-to-WEBP-and-optimized',
	plugins: [
		imageminWebp({quality: 50})
	]
});