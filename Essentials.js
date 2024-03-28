function toggleMenu() {
    var menu = document.getElementById('user-pfp-menu');
    var button = document.getElementById('user-menu-button');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
    } else {
        menu.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
    }
    console.log("HA");
}