const main = document.querySelector("main");
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.querySelector('.close-btn');

const updataUi = (data) => {
    main.innerHTML = data;
};

const toggleSidebar = () => {
    sidebar.classList.toggle('open');
};

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);

export { updataUi };
