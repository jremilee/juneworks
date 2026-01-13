// This function searches the ../images folder for all images
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { 
    // This creates an object where the key is the filename
    // and the value is the processed image path (use .default when available)
    const resolved = r(item);
    images[item.replace('./', '')] = resolved && resolved.default ? resolved.default : resolved;
  });
  return images;
};

// Adjust the path to where your images folder is relative to this file
// Include common video extensions too so media in src/images can be imported
export const allImages = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp|mp4|webm|mkv)$/));