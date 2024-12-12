(function() {
  const target = document.querySelector("nav .target");
  const links = document.querySelectorAll("nav .navigation-list .navigation-item a");
  const color = "#949494";
  const image = document.querySelector("nav .navigation-list img");

  function mouseenterFunc() {
      if (!this.parentNode.classList.contains("active")) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
      }

      const width = this.offsetWidth; 
      const height = this.offsetHeight;
      const left = this.offsetLeft; 
      const top = this.offsetTop; 

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.borderColor = color;
      target.style.transform = "none";
    }
  }
    
  function hideTarget() {
    target.style.borderColor = "transparent";
  }
  function hideTarget_img() {
    target.style.transform = "translateX(-60px)";
    target.style.borderColor = "transparent";
  }

  if (image) {
    image.addEventListener("mouseenter", hideTarget_img);
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }
    
  const nav = document.querySelector("nav .navigation-list");
  nav.addEventListener("mouseleave", hideTarget);

  function resizeFunc() {
    const active = document.querySelector("nav .navigation-list div.active");

    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;

      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
  }

  window.addEventListener("resize", resizeFunc);

})();