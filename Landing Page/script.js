const botoes = document.querySelectorAll(".process-bottom-nav button");
  const paginas = document.querySelectorAll(".process-bottom-content");

  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      const alvo = btn.dataset.target;

      paginas.forEach(p => p.style.display = "none");  
      document.getElementById(alvo).style.display = "flex";
    });
  });
