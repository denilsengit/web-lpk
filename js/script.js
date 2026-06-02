(function () {
  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });
  // Smooth scroll semua anchor
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#" && targetId !== "") {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
  // FAQ Accordion manual
  const faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.closest(".faq-question") || item) {
        item.classList.toggle("active");
        const icon = item.querySelector(".faq-question i");
        if (icon) {
          if (item.classList.contains("active")) {
            icon.classList.remove("bi-chevron-down");
            icon.classList.add("bi-chevron-up");
          } else {
            icon.classList.remove("bi-chevron-up");
            icon.classList.add("bi-chevron-down");
          }
        }
      }
    });
  });
  // Form submission alert (simulasi)
  const btnSubmit = document.getElementById("submitDaftar");
  if (btnSubmit) {
    btnSubmit.addEventListener("click", function () {
      const name = document.getElementById("fullname")?.value.trim() || "";
      const wa = document.getElementById("wa")?.value.trim() || "";
      if (name === "" || wa === "") {
        alert("⚠️ Silakan isi Nama lengkap dan nomor WA terlebih dahulu!");
        return;
      }
      alert("✅ Terima kasih " + name + "! Tim konselor kami akan segera menghubungi Anda via WA. Sukses meraih mimpi global bersama Samudra Nusantara! 🌏");
      document.getElementById("registerForm")?.reset();
    });
  }
})();
