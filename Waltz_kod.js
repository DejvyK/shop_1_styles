if (window.location.pathname === '/' || window.location.pathname === '') {



    function makeSwiper(num_title) {
        // Vaše existující produkty
    const products = document.querySelectorAll('#products-'+num_title +' .product');
    const parentElement = document.querySelector('#products-'+num_title);
    
    // Vytvoření swiper elementu a přidání do parent elementu
    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper-container');
    
    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');
            const actbut = document.createElement('div');
    actbut.classList.add('act-but');
    swiperContainer.appendChild(actbut);
    swiperContainer.appendChild(swiperWrapper);
    parentElement.insertBefore(swiperContainer, parentElement.firstChild);
            
    // Vytvoření action button
    
    // Vytvoření navigačních šipek
    const nextEl = document.createElement('div');
    nextEl.classList.add('swiper-button-next');
    nextEl.setAttribute("title", "dalsi_produkt");
    const prevEl = document.createElement('div');
    prevEl.classList.add('swiper-button-prev');
    prevEl.setAttribute("title", "predesly_produkt");
    
    actbut.appendChild(prevEl);
    actbut.appendChild(nextEl);
    
    
    products.forEach((product) => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        
        // Přesun produktů do nového swiperSlide elementu
        swiperSlide.appendChild(product);
        
        // Přidání swiperSlide do swiperWrapper
        swiperWrapper.appendChild(swiperSlide);
    });
    
    
    
    
    // Inicializace Swiper
    new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
    
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2.25,
              spaceBetween: 10
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 4.2,
              spaceBetween: 15
            }
          },
    
       
    });
    //konec new swiperu
    }
    //konec funkce
    
    
    let parentDiv_tab_content = document.querySelector("#content");
    let childDivson = parentDiv_tab_content.querySelectorAll(":scope > div");
    
    let ids = [];
    let cisla_hmpg_category_prod = [];
    
    childDivson.forEach(function(div) {
        if (div.id) {
            ids.push(div.id);
        }
    });
    
    ids.forEach(function(id) {
        let match = id.match(/products-(\d+)/);
        if (match) {
            cisla_hmpg_category_prod.push(match[1]);
        }
    });
    
    
    let prod = [];
    for (let x = 0; x< cisla_hmpg_category_prod.length;x++) {
        prod[x] = document.getElementById("products-" + cisla_hmpg_category_prod[x]);
        if (prod[x] != null) {
            makeSwiper(cisla_hmpg_category_prod[x]);
        }
    }
    
    
    /*
    let prod5 = document.getElementById("products-" + numbers[0]);
    let prod6 = document.getElementById("products-"+ numbers[1]);
    let prod7 = document.getElementById("products-"+ numbers[2]);
    let prod8 = document.getElementById("products-"+ numbers[3]);
    
    if (prod5 != null) {
        makeSwiper("5");
    }
    if (prod6 != null) {
        makeSwiper("8");
    }
    if (prod7 != null) {
        makeSwiper("11");
    }
    if (prod8 != null) {
        makeSwiper("12");
    }
    */
    
    const parent_node_image = document.getElementsByClassName("p");
    let first_children = [];
    let p_in = [];
    
    for (let i = 0; i < parent_node_image.length; i++) {
        let first_child = parent_node_image[i].firstElementChild;
        //let p_in_loop = parent_node_image[i].children[1]; 
        first_children.push(first_child);
        //p_in.push(p_in_loop);
    };
    //nyní jsme u první a tagu, který už obsahuje flag default a flag extra je to uloženo v poli first_children
    //let default_bool = [];
    //let extra_bool = [];
    //let flag_discount = [];
    
    
    
    
    first_children.forEach(function(second_child) {
        if(second_child.lastElementChild.classList.contains("flags-extra")) {
            //tady víme že máme řešit extra
            let extras = second_child.lastElementChild;
            let p_in = second_child.nextElementSibling;
            let p_prices = p_in.querySelector(".p-bottom div .prices");
            //flags_extra.push(extras.firstElementChild);
            if(second_child.children[1].classList.contains("flags-default")){
                let flag_disc = extras.firstElementChild;
                let price_standard = flag_disc.firstElementChild;
                p_prices.appendChild(price_standard);
                second_child.children[1].appendChild(flag_disc);
                //vymazání je možná navíc, ale může se hodit.
                //flag_disc.remove();
    
                //tady insertujeme flag discount do default a ještě přidáme price_stsandard do prices v p_bottom
                
            }
            else {
                //default_bool.push(false);
                //tady musime vytvořit default a insertovat extra
                let flag_disc = extras.firstElementChild;
                let price_standard = flag_disc.firstElementChild;
                let novy_flag_def = document.createElement("div");
                novy_flag_def.classList.add("flags");
                novy_flag_def.classList.add("flags-default");
                //nejdriv presuneme ceny a potom až přesuneme discount do default.
                p_prices.appendChild(price_standard);
                second_child.appendChild(novy_flag_def);
                second_child.lastElementChild.appendChild(flag_disc);
                
            }
        }
        else {
            //extra_bool.push(false);
            
            //tady nic neřešíme
        }
    });
    
    document.querySelectorAll(".flag-discount").forEach(element => {
        element.childNodes.forEach(childNode => {
            if (childNode.nodeType === Node.TEXT_NODE && !element.closest(".price-save")) {
                childNode.nodeValue = childNode.nodeValue.replace(/od|až/g, "");
            }
        });
    });
    
    
    
    
    
    
    }