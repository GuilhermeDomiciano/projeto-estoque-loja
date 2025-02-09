export async function handleFileProductChange(e: React.ChangeEvent<HTMLInputElement>) {
  if (e.target.files && e.target.files.length > 0) {
    const selectedFile = e.target.files[0];
    enviarProduto(selectedFile);
  } else {
    console.log("Nenhum arquivo selecionado.");
  }
}


export async function enviarProduto (selectedFile: File) {

  if (!selectedFile) {
    console.log("Selecione um arquivo para enviar.");
    return;
  }

  // Cria o FormData e adiciona o arquivo com o nome "profile"
  const formData = new FormData();
  formData.append("profile", selectedFile);

    try {
      const res = await fetch("https://api-img-psi.vercel.app/api/imagens", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data.message || "Upload realizado com sucesso!");
      return data.data;
    
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);

  }
};



export async function handleFileProfileChange(e: React.ChangeEvent<HTMLInputElement>) {
  if (e.target.files && e.target.files.length > 0) {
    const selectedFile = e.target.files[0];
    enviarProfile(selectedFile);
  } else {
    console.log("Nenhum arquivo selecionado.");
  }
}


export async function enviarProfile(selectedFile: File) {

  if (!selectedFile) {
    console.log("Selecione um arquivo para enviar.");
    return;
  }

  // Cria o FormData e adiciona o arquivo com o nome "profile"
  const formData = new FormData();
  formData.append("profile", selectedFile);

  try {
    const res = await fetch("https://api-img-psi.vercel.app/api/imagens_profile", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data.message, "Upload realizado com sucesso!");
    return data.secure_url;

  } catch (error) {
    console.error("Erro ao enviar arquivo:", error);

  }
};
