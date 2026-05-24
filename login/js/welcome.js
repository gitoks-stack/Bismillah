document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
        <li id="authArea">
            <a class="nav-link tm-nav-link" onclick="logout()">Logout</a>
        </li
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
