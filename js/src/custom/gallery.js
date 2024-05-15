(() => {
  const gallery = document.querySelector(".splide");
  if (!gallery) return;
  const splide = new Splide(gallery, {
    type: "loop",
    perPage: 3,
    perMove: 1,
    pagination: false,
    gap: 16,
    breakpoints: {
      1024: {
        perPage: 2,
        gap: 16,
      },
      500: {
        perPage: 1,
        gap: 0,
      },
    },
  });

  splide.mount();
})();
