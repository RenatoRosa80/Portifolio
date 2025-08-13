<script>
    // Função para revelar elementos conforme aparecem na tela
    function revealOnScroll() {
        const elements = document.querySelectorAll(".reveal");
        const windowHeight = window.innerHeight;

        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const visiblePoint = 100;

            if (elementTop < windowHeight - visiblePoint) {
                el.classList.add("active");
            }
        });
    }

    // Rolagem suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Detectar seção ativa no scroll
    function setActiveMenu() {
        const sections = document.querySelectorAll("main section, .contact");
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && 
                section.offsetTop + section.offsetHeight > scrollPos) {
                
                const id = section.getAttribute("id");
                document.querySelectorAll(".menu a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("data-section") === id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Barra de progresso
    function updateProgressBar() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.getElementById("progress-bar").style.width = scrollPercent + "%";
    }

    window.addEventListener("scroll", () => {
        revealOnScroll();
        setActiveMenu();
        updateProgressBar();
    });

    window.addEventListener("load", () => {
        revealOnScroll();
        setActiveMenu();
        updateProgressBar();
    });
</script>
