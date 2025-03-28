function changerContenu() {
    const maintenant = new Date();
    const heure = maintenant.getHours();
  
    if (heure >= 220000 || heure < 80000) {
        window.location.href = "index.html";
    } else {
        window.location.href = "hydra.html";

    }
  }

setInterval(changerContenu, 6);