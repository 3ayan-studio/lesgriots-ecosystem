<template>
    <footer class="footer">
        <div class="footer-container">
            <a href="/" class="footer-logo">Les Griots x Studio</a>
            <div class="footer-qualiopi">
                <img src="/images/qualiopi.png" alt="Logo Qualiopi" />
            </div>
        </div>

        <div class="footer-bottom">
            © 2025 Les Griots x Studio — Tous droits réservés
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #fff;
    color: #333;
    border-top: 1px solid #ddd;
    padding: 2rem 1rem;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 14px;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.footer-logo {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
}

.footer-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
}

.footer-nav a {
    text-decoration: none;
    color: #555;
    transition: color 0.3s ease;
}

.footer-nav a:hover {
    color: #000;
    text-decoration: underline;
}

.footer-qualiopi img {
    height: 100px;
    object-fit: contain;
}

.footer-bottom {
    text-align: center;
    font-size: 12px;
    color: #888;
    margin-top: 1rem;
}

@media (min-width: 768px) {
    .footer-container {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .footer-logo {
        margin-bottom: 0;
    }

    .footer-nav {
        margin-bottom: 0;
    }
}
</style>