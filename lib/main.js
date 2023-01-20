
class Myheader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <nav>
                <input id="nav-toggle" type="checkbox">
                <div class="img-logo"></div>
                <div class="logo"><strong>MR.</strong> MACHINEGUN</div>
                <ul class="links">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/static/blog.html">Blog</a></li>
                </ul>
                <label for="nav-toggle" class="icon-burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </label>
            </nav>
        </header>
        `
        
    }
}

customElements.define('my-header', Myheader)



class Mypost extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="articles">
            <div class="article-heading">
                <h5>recent post:</h5>
            </div>
    
            <div class="cards-container">
                <div class="card-container-one">
                    <div class="img-holder">
                        <a href="/post/Cicli di mercato.html">read</a>
                    </div>
                    <div class="card-text">
                        <h4>ciclo di mercato</h4>
                        <p>Nel ciclo dei 90 minutii, si iniza a contare 90 minuti dalle 00:00 di NY, ogni 90 minuti ci sarà un movimento forte del prezzo, il nostro obbiettivo è  quello di andare ad escludere tutti i fake movement.</p>
                    </div>
                </div>
            
                <div class="card-container-two">
                    <div class="img-holder">
                        <a href="/post/Liquidità.html">read</a>
                    </div>
                    <div class="card-text">
                        <h4>Liquidità</h4>
                        <p>La liquidità si divide in due categorie, interna ed esterna. La liquidità esterna è quella che si trova fuori dallo swing, invece la liquidità interna si trova al interno dello swing. LA liquidità a suo volta è suddivisa in altre 3 sotto categorie:</p>
                    </div>
                </div>
                <div class="card-container-three">
                    <div class="img-holder">
                        <a href="/post/Strategia Sessione Asiatica.html">read</a>
                    </div>
                    <div class="card-text">
                        <h4>Strategia Sessione Asiatica</h4>
                        <p>Nel ciclo dei 90 minutii, si iniza a contare 90 minuti dalle 00:00 di NY, ogni 90 minuti ci sarà un movimento forte del prezzo, il nostro obbiettivo è  quello di andare ad escludere tutti i fake movement.</p>
                    </div>
                </div>
            </div>
        </div>
        `
        
    }
}



customElements.define('my-post', Mypost)

class Myfooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <div class="footer-content">
            <ul class="social">
                <li><a href="https://twitter.com/" target="_blank" ><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>&copy;  2023 All Rights Reserved | Made with <i class="fa fa-heart"></i> by MR. MACHINEGUN</p>
        </div>
        </footer>
        `
        
    }
}

customElements.define('my-footer', Myfooter)