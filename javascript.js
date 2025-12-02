document.getElementById("abrirMenu").onclick = () => {
    document.getElementById("menuCompleto").classList.add("ativo");
};

document.getElementById("fecharMenu").onclick = () => {
    document.getElementById("menuCompleto").classList.remove("ativo");
};