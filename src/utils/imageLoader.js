// This function searches the ../images folder for all images
const importAll = (r) => {
  let images = {};
  r.keys().map((item) => { 
    // This creates an object where the key is the filename 
    // and the value is the processed image path
    images[item.replace('./', '')] = r(item); 
  });
  return images;
};

// Adjust the path to where your images folder is relative to this file
export const allImages = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));