const inputCheck = document.querySelector('#modo-claro');
const elemento = document.querySelector('body');

if (localStorage.getItem('night-mode') === 'true') {
    inputCheck.checked = true; 
    elemento.setAttribute("data-bs-theme", "dark");
}

// Adiciona o evento de clique
inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute("data-bs-theme", modo);
    localStorage.setItem('night-mode', inputCheck.checked); 
});
