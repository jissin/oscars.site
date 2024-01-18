export function useImagePreloader(imageUrls) {
  const preloadedImages = ref([]);

  const preloadImages = () => {
    preloadedImages.value = imageUrls.map((url) => {
      const image = new Image();
      image.src = url;
      return image;
    });
  };

  onMounted(preloadImages);

  return preloadedImages;
}
