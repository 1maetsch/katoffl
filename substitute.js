function replaceSchland (node) {
  if (node.nodeName === "IMG" && node.classList.contains("Emoji")) {
    if (node.src.endsWith("/1f1e9-1f1ea.png")) {
      node.src = node.src.replace("/1f1e9-1f1ea.png", "/1f954.png");
    }
  } else if (node.nodeName === "SPAN" && node.classList.contains("Emoji")) {
    if (node.style.backgroundImage.endsWith("/1f1e9-1f1ea.png\")")) {
      node.style.backgroundImage = node.style.backgroundImage.replace("/1f1e9-1f1ea.png", "/1f954.png");
    }
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceSchland(node.childNodes[i]);
    }
  }
}

replaceSchland(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const newNode = mutation.addedNodes[i];
        replaceSchland(newNode);
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
