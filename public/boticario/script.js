document.addEventListener("DOMContentLoaded", () => {
    const perfumes = document.querySelectorAll(".perfume-card");
    const itemsPerPage = 5; // Exibir 5 itens por página
    let currentPage = 1;

    function showPage(page) {
        perfumes.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? "block" : "none";
        });
        updatePagination();
    }

    function createPagination() {
        const totalPages = Math.ceil(perfumes.length / itemsPerPage);
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = ""; // Limpa o contêiner

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.onclick = () => {
                currentPage = i;
                showPage(currentPage);
            };
            button.className = "pagination-button";
            paginationContainer.appendChild(button);
        }
    }

    function updatePagination() {
        const buttons = document.querySelectorAll("#pagination button");
        buttons.forEach((btn, index) => {
            btn.classList.toggle("active", index + 1 === currentPage);
        });
    }

    // Inicializar
    createPagination();
    showPage(currentPage);
});