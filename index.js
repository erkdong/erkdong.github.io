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

function loadPage(fileName, elementId) {
  fetch(fileName)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;

      const container = document.getElementById(elementId);
      // Extract and run any <script> tags from the loaded HTML
      const scripts = container.querySelectorAll("script");
      scripts.forEach((script) => {
        eval(script.innerHTML);
      });
    });
}

const projectCards = [
  {
    title: "Dewey",
    img: "../img/dewey.png",
    description:
      "Life is full of random misc info. Dewey tracks it all for you.",
    onClick: () => {
      document.getElementById("deweyProject").setAttribute("open", "true");
    },
  },
  {
    title: "Twitch store alerts",
    img: "../img/twitch.svg",
    description:
      "Real time livestream alerts when a purchase is made from the streamer's online store.",
    onClick: () => {
      document.getElementById("twitchProject").setAttribute("open", "true");
    },
  },
  {},
  {},
  {},
  {},
  {},
  {},
];
