export default function mudaEstadoDoMenuLateral() {
    const menuLateral = document.querySelector("[data-menu-lateral]");
    
    menuLateral.classList.toggle("lateral--ativo");
}
