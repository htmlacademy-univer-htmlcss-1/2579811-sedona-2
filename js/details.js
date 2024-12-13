const details = document.querySelectorAll("details");

// добавить к каждому клику события клика
[...details].forEach((targetDetail) => {
  targetDetail.addEventListener("click", _ => {
    // закрывать всех кроме кликнутого
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});