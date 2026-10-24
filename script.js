const shareButton = document.querySelector("#share-button");
const shareStatus = document.querySelector("#share-status");

shareButton?.addEventListener("click", async () => {
  const profileUrl = window.location.href;
  shareStatus.textContent = "";

  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        text: "Kasa Imóveis",
        url: profileUrl,
      });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(profileUrl);
    shareStatus.textContent = "Link copiado.";
  } catch {
    shareStatus.textContent = "Copie o endereço desta página para compartilhar.";
  }
});
