function scrollToSection(id) {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
}

function onPageLoad() {
  document.getElementById("home").style.visibility = "visible";

  // Expands/collapses the items in work experience section.
  const toggles = document.getElementsByClassName("toggle-work-experience");

  for (let toggle of toggles) {
    toggle.addEventListener("click", (e) => {
      const collapsibleItem = e.target.closest(".toggle-work-experience");
      const collapsibleContent = collapsibleItem.querySelector(
        ".collapsible-content"
      );
      collapsibleContent.classList.toggle("expanded");
    });
  }
}

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY !== 0) {
    document.getElementById("downArrow").style.visibility = "hidden";
  } else {
    document.getElementById("downArrow").style.visibility = "visible";
  }
});
