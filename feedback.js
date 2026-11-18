(() => {
  const feedbacks = [
    ["feedback-mirela.png", "Mirela", "Ele adorou e conseguiu acompanhar bem as atividades, principalmente as sílabas."],
    ["feedback-antonela.png", "Antonela", "Os três níveis ajudaram a organizar as atividades conforme a dificuldade de cada aluno."],
    ["feedback-jessica.png", "Jéssica", "Material bem organizado, fácil de imprimir e pronto para usar."],
    ["feedback-rafaela.png", "Rafaela", "Os níveis funcionaram tanto com os menores quanto com os alunos mais avançados."]
  ];

  function renderFeedbacks() {
    const placeholder = document.querySelector(".feedback-placeholder");
    if (!placeholder) return false;
    const gallery = document.createElement("div");
    gallery.className = "feedback-gallery";
    gallery.setAttribute("aria-label", "Feedbacks de famílias e educadoras");
    gallery.innerHTML = feedbacks.map(([file, name, text]) => `
      <figure class="feedback-card">
        <img src="/images/${file}" alt="Feedback de ${name} sobre as apostilas de grafismo fonético" loading="lazy" decoding="async">
        <figcaption><strong>${name}:</strong> ${text}</figcaption>
      </figure>
    `).join("");
    placeholder.replaceWith(gallery);
    return true;
  }

  const observer = new MutationObserver(renderFeedbacks);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  renderFeedbacks();
  window.addEventListener("load", renderFeedbacks, { once: true });
  window.setTimeout(() => observer.disconnect(), 10000);
})();
