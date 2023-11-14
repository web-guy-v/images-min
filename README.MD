1. Add your images which you want to compress to the "images" folder

3. Install plugins
npm i imagemin
npm i imagemin-mozjpeg
npm i imagemin-webp

4. Create index.js file

5. Put this code to index.js file
	<!-- import imagemin from 'imagemin';
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
	}); -->
5. Run index.js file with next command: npm run start


See detailed information about work the library [Imagemin](https://www.npmjs.com/package/imagemin)



