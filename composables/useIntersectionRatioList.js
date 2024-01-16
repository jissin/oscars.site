export default function () {
  let intersectionRatioList = reactive([]);
  onMounted(observeSections);

  function observeSections() {
    const elements = Array.from(document.querySelectorAll("main > *")).concat(
      Array.from(document.querySelectorAll("footer")),
    );
    elements.forEach((divElement, index) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            intersectionRatioList[index] = entry.intersectionRatio;
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        },
      );
      observer.observe(divElement);
    });

    onUnmounted(() => {
      elements.forEach((divElement) => {
        observer.disconnect();
      });
    });
  }

  return intersectionRatioList;
}
