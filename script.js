const panel = document.getElementById("panel");

// Panel contents (with text + image)
const panels = {
  home: { img: "image/home.jpg", text: "" },
  about: { img: "about.jpg", text: "<h2>About Us</h2><p>Weida HVAC provides innovative cooling and heating solutions.</p>" },
  profile: { img: "profile.jpg", text: "<h2>Company Profile</h2><p>Founded with excellence in HVAC solutions worldwide.</p>" },
  team: { img: "team.jpg", text: "<h2>Our Team</h2><p>Meet the skilled professionals powering our company.</p>" },
  history: { img: "history.jpg", text: "<h2>History</h2><p>Decades of expertise in HVAC technology and services.</p>" },
  contact: { img: "contact.jpg", text: "<h2>Contact Us</h2><p>Reach us for inquiries, support, and partnerships.</p>" }
};

// Handle all clicks (main nav + dropdown)
document.querySelectorAll(".nav-links a, .dropdown-menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const panelKey = link.getAttribute("data-panel");
    if (!panelKey || !panels[panelKey]) return;
    const content = panels[panelKey];
    panel.innerHTML = `
      <div class="panel-content">
        <img src="${content.img}" alt="${panelKey}">
        ${content.text}
      </div>
    `;
  });
});
