const modal = new bootstrap.Modal(document.getElementById("exampleModal"), {
  backdrop: true,
  keyboard: true,
  focus: true
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //open modal
  modal.toggle();

  const iframeContainer = document.getElementById("iframe-container");
  const formData = new FormData(form).entries();

  const { fullName, email, url } = Object.fromEntries(formData);

  console.log(fullName, email, url);
  //check if an iframe exits. if it does, remove it and replace it with the new one
  const iframe = document.getElementById("iframe");
  if (iframe) {
    iframeContainer.removeChild(iframe);
  }

  const newIframe = document.createElement("iframe");
  newIframe.src = `https://acsbace.com/apps/ace/?leadColor=#ebd834&resultsLogo=https://www.pngitem.com/pimgs/m/294-2941069_20-bee-logos-that-are-just-dripping-in.png&poweredText=Powered by AccessiBee&poweredLink=/#audit/${url}`;
  newIframe.id = "iframe";
  newIframe.style.width = "80vw";
  newIframe.style.height = "800px";
  iframeContainer.appendChild(newIframe);
});
