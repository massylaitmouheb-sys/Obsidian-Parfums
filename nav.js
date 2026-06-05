function chargerNav(pageActive) {
    document.getElementById('nav').innerHTML = `
        <nav class="navigation-principale">
            <ul>
                <li><a href="accueil.html" ${pageActive === 'accueil' ? 'class="active"' : ''}>Accueil</a></li>
                <li><a href="produits.html" ${pageActive === 'produits' ? 'class="active"' : ''}>Produits</a></li>
                <li><a href="blog.html" ${pageActive === 'blog' ? 'class="active"' : ''}>Blog</a></li>
                <li><a href="inscription.html" ${pageActive === 'inscription' ? 'class="active"' : ''}>Inscription</a></li>
                <li><a href="connexion.html" ${pageActive === 'connexion' ? 'class="active"' : ''}>Connexion</a></li>
                <li><a href="panier.html" ${pageActive === 'panier' ? 'class="active"' : ''}>Panier</a></li>
            </ul>
        </nav>
    `;
}