"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const mapsIds = ["map-modal", "map-modal-mob", "map-modal-stock", "filter-map-modal", "map-modal2", "map-modal3", "map-modal4", "map-modal5", "address-map", "map-modal-ordering"];

    ymaps.ready(function () {
        mapsIds.forEach(function(mapItem){
           if(!document.getElementById(mapItem)){
            return false;
           }
            let map = new ymaps.Map(mapItem, {
                center: [55.76, 37.64],
                zoom: 7
            });

            map.controls.remove("geolocationControl");
            map.controls.remove("searchControl");
            map.controls.remove("trafficControl");
            map.controls.remove("typeSelector");
            map.controls.remove("fullscreenControl");
            map.controls.remove("rulerControl");
            map.behaviors.disable(["scrollZoom"]);
            map.behaviors.disable(["drag"]);

            const placemarks = [
                {
                    active: false,
                    id: "1",
                    point: [55, 38]
                },

                {
                    active: false,
                    id: "2",
                    point: [55, 39]
                },

                {
                    active: false,
                    id: "3",
                    point: [55, 40]
                },

                {
                    active: false,
                    id: "4",
                    point: [55, 41]
                },
                {
                    active: false,
                    id: "5",
                    point: [55, 42]
                },
            ];

            placemarks.forEach(function(point){
                let tempPlacemark = new ymaps.Placemark(
                    point.point,
                    {},
                    {
                        iconImageHref: point.active ? "img/pin-red.svg" : "img/pin-block.svg",
                        iconImageSize: [41, 41],
                        iconLayout: "default#imageWithContent",
                        iconShape: {
                            coordinates: [
                                [-10, -10],
                                [41, 41]
                            ],
                            type: "Rectangle"
                        }
                    }
                );

                tempPlacemark.events.add("click", function (e) {
                    
                    let certainModal = document.getElementById("tech-service-popup-map");
                    let serviceModal = document.getElementById("jsService");
                    let shopPage = document.querySelector(".shops-page");
                    let shopPageModal = document.getElementById("tech-service-selected");
                    if (mapItem == "map-modal" && !certainModal) {
                        document.querySelector(`#jsInStockShopModal`)?.classList.add("open");
                        document.querySelector("body")?.classList.add("overflow-hidden");
                        document.querySelector("html")?.classList.add("overflow-hidden");
                        document.getElementById('jsOrderingSingle')?.classList.add('open');
                        document.querySelector(".overlay")?.classList.add("open");
                        console.log('click')
                    } else if(mapItem == "map-modal" && certainModal){
                        document.querySelector(`#tech-service-selected`).classList.add("open");
                    }else if(mapItem == "map-modal3" && shopPageModal){
                            document.querySelector(`#tech-service-selected`).classList.add("open");
                    }else if(mapItem == "map-modal2" && serviceModal){
                        if (e.get("target").options.get("iconImageHref") == "img/pin-red.svg") {
                            e.get("target").options.set("iconImageHref", "img/pin-block.svg");
                            document.getElementById(mapItem).classList.remove("selected");
                            document.querySelector("#jsService .shop-item:nth-child(1) .in-stock__content").classList.remove("b-b-none");
                            document.querySelector("#jsService .shop-item:nth-child(2)").classList.remove("selected");
                        } else {
                            e.get("target").options.set("iconImageHref", "img/pin-red.svg");
                            document.getElementById(mapItem).classList.add("selected");
                            console.log("testMark");
                            document.querySelector("#jsService .shop-item:nth-child(1) .in-stock__content").classList.add("b-b-none");
                            document.querySelector("#jsService .shop-item:nth-child(2)").classList.add("selected");
                        }
                    }else if(mapItem == "map-modal2" && shopPage){
                        if (e.get("target").options.get("iconImageHref") == "img/pin-red.svg") {
                            e.get("target").options.set("iconImageHref", "img/pin-block.svg");
                            document.getElementById(mapItem).classList.remove("selected");
                            document.querySelector(".shops-page .shop-item:nth-child(1) .in-stock__content").classList.remove("b-b-none");
                            document.querySelector(".shops-page .shop-item:nth-child(2)").classList.remove("selected");
                        } else {
                            e.get("target").options.set("iconImageHref", "img/pin-red.svg");
                            document.getElementById(mapItem).classList.add("selected");
                            console.log("testMark");
                            document.querySelector(".shops-page .shop-item:nth-child(1) .in-stock__content").classList.add("b-b-none");
                            document.querySelector(".shops-page .shop-item:nth-child(2)").classList.add("selected");
                        }
                    }else {
                        if (e.get("target").options.get("iconImageHref") == "img/pin-red.svg") {
                            e.get("target").options.set("iconImageHref", "img/pin-block.svg");
                            document.getElementById(mapItem).classList.remove("selected");
                        } else {
                            e.get("target").options.set("iconImageHref", "img/pin-red.svg");
                            document.getElementById(mapItem).classList.add("selected");
                        }
                    }


                 

                });


              

                map.geoObjects.add(tempPlacemark);

               
            });

            if(mapItem == "address-map"){
                document.querySelectorAll("[data-placemark]").forEach(item => {
                    item.addEventListener("mouseover", function(){
                        let hoveredObject =  map.geoObjects.get(item.getAttribute("data-placemark"));
                        map.geoObjects.get(item.getAttribute("data-placemark")).options.set("iconImageHref", "img/pin-red.svg");
                    })
                })

                document.querySelectorAll("[data-placemark]").forEach(item => {
                    item.addEventListener("mouseout", function(){
                        map.geoObjects.each(function(obj){
                            obj.options.set("iconImageHref", "img/pin-block.svg");
                        })
                    })
                })
            }
        });

    });

    function accordionToggle(toggleItem, content) {
        if (content) {
            if (toggleItem.classList.contains("open")) {
                $(content).animate(
                    {
                        maxHeight: "100%",
                        opacity: 1
                    },
                    200
                );
            } else {
                $(content).animate(
                    {
                        maxHeight: "0px",
                        opacity: 0
                    },
                    200
                );
            }
            toggleItem.addEventListener("click", function (event) {
                event.preventDefault(), toggleItem.classList.toggle("open");
                if (toggleItem.classList.contains("open")) {
                    $(content).animate(
                        {
                            maxHeight: "100%",
                            opacity: 1
                        },
                        200
                    );
                } else {
                    $(content).animate(
                        {
                            maxHeight: "0px",
                            opacity: 0
                        },
                        200
                    );
                }
            });
        }
    }

    const accordions = document.querySelectorAll(".accordion"),
        filtersBox = document.querySelectorAll(".filters__box");
    accordions.forEach(function (item) {
        const accordionContent = item.querySelector(".accordion__content");
        accordionToggle(item, accordionContent);
    }),
    filtersBox.forEach(function (item) {
        const accordionContent = item.closest(".filters__item").querySelector(".filters__content");
        accordionToggle(item, accordionContent);
    }),
    document.querySelectorAll(".filters__item--accordion .filters__header").forEach((item) => {
        const filterAccordions = item.closest(".filters__item--accordion");
        const filterAccordionsContent = filterAccordions.querySelector(".filters__content");
        accordionToggle(item, filterAccordionsContent);
    });


    const sparesSlider = new Swiper(".swiper-spares", {
        direction: "horizontal",
        slidesPerView: "auto",
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                spaceBetween: 16,
            },
            576: {
                spaceBetween: 40,
            },
        },
    }).on("slideChange", function (e) {
        let links = document.querySelectorAll(".spares__names ul li");
        links.forEach((item) => {
            item.classList.remove("active");
        });
        links[e.activeIndex].classList.add("active");
    });
    const sparesNames = document.querySelectorAll(".spares__names li");
    sparesNames.forEach((item) => {
        let link = item.querySelector("a");
        link?.addEventListener("click", function (e) {
            e.preventDefault();
            let index = [...item.parentElement.children].indexOf(item);
            sparesSlider.slideTo(index);
        });
    });
    new Swiper(".car-service-slider", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16,
    });

    const o = {
        center: [55.76, 37.64],
        zoom: 7,
    };
    window.addEventListener("scroll", function () {
        this.pageYOffset > 200 ? document.querySelector(".header").classList.add("fixed") : document.querySelector(".header").classList.remove("fixed");
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1e3,
        from: 0,
        to: 500,
        hide_min_max: !0,
        hide_from_to: !0,
        onChange: function onChange(e) {
            $(".jsPriceFrom").val(e.from), $(".jsPriceTo").val(e.to);
        },
    });

    const rangeSlider = $(".js-range-slider").data("ionRangeSlider");
    document.querySelector(".jsPriceFrom")?.addEventListener("input", function (e) {
        e.target.value = this.value.replace(/[^\d]/g, "");
        rangeSlider.update({
            from: e.target.value,
        });
    });

    document.querySelector(".jsPriceTo")?.addEventListener("input", function (e) {
        e.target.value = this.value.replace(/[^\d]/g, "");
        rangeSlider.update({
            to: e.target.value,
        });
    });

    document.querySelectorAll(".jsCloseStateForm").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            item.closest(".state-form").classList.remove("open");
            document.querySelector(".overlay").classList.remove("open");
            document.querySelector("body").classList.remove("overflow-hidden");
            document.querySelector("html").classList.remove("overflow-hidden");
        });
    });

    document.querySelectorAll(".jsCounter").forEach((counter) => {
        let counterText = counter.querySelector("span");
        let counterMinusBtn = counter.querySelector(".quantity-icon--minus");
        let counterPlusBtn = counter.querySelector(".quantity-icon--plus");

        counterMinusBtn.addEventListener("click", function () {
            let currentNumber = parseInt(counterText.textContent);
            if (currentNumber !== 1) {
                counterText.textContent = currentNumber - 1;
            } else {
                counter.classList.remove("show");
            }
        });

        counterPlusBtn.addEventListener("click", function () {
            let currentNumber = parseInt(counterText.textContent);
            if (currentNumber !== 99) {
                counterText.textContent = currentNumber + 1;
            }
        });
    });

    new Swiper(".product__card-gallery-slider", {
        slidesPerView: 4,
        spaceBetween: 16,
        wrapperClass: "product__card-slider-wrapper",
        slideClass: "product__card-slide",
        direction: "vertical",
        navigation: {
            nextEl: ".product__card-gallery-prev",
            prevEl: ".product__card-gallery-next",
        },

        pagination: {
            el: ".product__card-gallery-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                direction: "horizontal",
                allowTouchMove: true,
                spaceBetween: 0,
                slidesPerGroup: 1,
            },
            769: {
                slidesPerView: 4,
                direction: "vertical",
                allowTouchMove: false,
                spaceBetween: 16,
            },
        },
    });

    document.querySelectorAll(".product__card-slide").forEach(img => {
        img.addEventListener("click", function(e){
            let imgUrl = img.querySelector("img").getAttribute("src");
            document.querySelector('.product__card-gallery-main img').setAttribute("src", imgUrl);
        })
    })


    const salesSliders = document.querySelectorAll(".sale__slider.sale__slider--mob");
    if (window.screen.width < 991) {
        salesSliders.forEach((item, index) => {
            new Swiper(item, {
                slidesPerView: "3",
                wrapperClass: "sale__slider-wrapper",
                slideClass: "sale__grid-item",
                allowTouchMove: true,
                slidesPerGroup: "3",
                navigation: {
                    nextEl: `.product__slider-nav-wrapper .product__slider-next-1`,
                    prevEl: `.product__slider-nav-wrapper .product__slider-prev-1`,
                },
                pagination: {
                    el: `.sale__slider .product__slider-pagination-1`,
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: "1.18",
                        slidesPerGroup: 1,
                        spaceBetween: 13,
                        allowTouchMove: true,
                    },
                    769: {
                        slidesPerView: "1",
                        slidesPerGroup: 1,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: "3",
                        slidesPerGroup: 3,
                        allowTouchMove: true,
                        spaceBetween: 0,
                    },
                },
            });
        });
    } else {
        salesSliders.forEach((item, index) => {
            new Swiper(item, {
                slidesPerView: "3",
                wrapperClass: "sale__slider-wrapper",
                slideClass: "sale__grid-item",
                allowTouchMove: false,
                slidesPerGroup: 3,
                navigation: {
                    nextEl: `.product__slider-nav-wrapper .product__slider-next-1`,
                    prevEl: `.product__slider-nav-wrapper .product__slider-prev-1`,
                },
                pagination: {
                    el: `.product__slider-nav-wrapper .product__slider-pagination-1`,
                    renderBullet: function (index, className) {
                        return "<span class='product__slider-bullet " + className + "'>" + (index + 1) + "</span>";
                    },
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: "1.18",
                        spaceBetween: 13,
                        slidesPerGroup: 1,
                    },
                    769: {
                        slidesPerView: "1",
                        slidesPerGroup: 1,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: "3",
                        slidesPerGroup: 3,
                        spaceBetween: 0,
                    },
                },
            });
        });
    }

    const salesSlidersDesk = document.querySelectorAll(".sale__slider.sale__slider--desktop");
    salesSlidersDesk.forEach((item, index) => {
        new Swiper(item, {
            slidesPerView: "1",
            wrapperClass: "sale__slider-wrapper",
            slideClass: "sale__slide-item",
            allowTouchMove: false,
            slidesPerGroup: 1,
            navigation: {
                nextEl: `.product__slider-nav-wrapper .product__slider-next-2`,
                prevEl: `.product__slider-nav-wrapper .product__slider-prev-2`,
            },
        });
    });


    const blogSlidersDesk = document.querySelectorAll(".sale__slider.sale__slider--blog:not(.tab-slider)");
    blogSlidersDesk.forEach((item, index) => {
        new Swiper(item, {
            slidesPerView: "3",
            wrapperClass: "sale__slider-wrapper",
            slideClass: "sale__grid-item",
            allowTouchMove: false,
            slidesPerGroup: 3,
            navigation: {
                nextEl: `.product__slider-nav-wrapper .product__slider-next-4`,
                prevEl: `.product__slider-nav-wrapper .product__slider-prev-4`,
            },
            pagination: {
                el: `.product__slider-nav-wrapper .product__slider-pagination-4`,
                renderBullet: function (index, className) {
                    return "<span class='product__slider-bullet " + className + "'>" + (index + 1) + "</span>";
                },
                clickable: true,
            },

        });
    });


    const blogSlidersDeskMob = document.querySelectorAll(".sale__slider.sale__slider--blog.sale__slider--blog--mob:not(.tab-slider)");
    blogSlidersDeskMob.forEach((item, index) => {
        new Swiper(item, {
            slidesPerView: "1",
            wrapperClass: "sale__slider-wrapper",
            slideClass: "sale__grid-item",
            allowTouchMove: true,
            slidesPerGroup: 1,
            navigation: {
                nextEl: `.product__slider-nav-wrapper .product__slider-next-5`,
                prevEl: `.product__slider-nav-wrapper .product__slider-prev-5`,
            },
            pagination: {
                el: `.product__slider-nav-wrapper .product__slider-pagination-5`,
                renderBullet: function (index, className) {
                    return "<span class='product__slider-bullet " + className + "'>" + (index + 1) + "</span>";
                },
                clickable: true,
            },
        });
    });


    const blogSlidersDeskTabs = document.querySelectorAll(".sale__slider.sale__slider--blog.tab-slider:not(.tab-slider--mobile)");
    blogSlidersDeskTabs.forEach((item, index) => {
        let tab = index;
        $(item).closest('.sales__slider-container').find('.product__slider-navs').append('<div class="product__slider-nav product__slider-nav--'+tab+'">\n' +
            '<button class="product__slider-prev product__slider-prev-tab"></button>\n' +
            '<div class="product__slider-pagination product__slider-pagination-tab"></div>\n' +
            '<button class="product__slider-next product__slider-next-tab"></button>\n' +
            '</div>');

        new Swiper(item, {
            slidesPerView: "3",
            wrapperClass: "sale__slider-wrapper",
            slideClass: "sale__grid-item",
            allowTouchMove: false,
            slidesPerGroup: 3,
            navigation: {
                nextEl: `.product__slider-nav--`+tab+` .product__slider-next-tab`,
                prevEl: `.product__slider-nav--`+tab+` .product__slider-prev-tab`,
            },
            pagination: {
                el: `.product__slider-nav--`+tab+` .product__slider-pagination-tab`,
                renderBullet: function (index, className) {
                    return "<span class='product__slider-bullet " + className + "'>" + (index + 1) + "</span>";
                },
                clickable: true,
            },
        });
        if (tab != 0){
            $(item).hide();
            $('.product__slider-nav--'+tab).hide();
        }
    });


    const blogSlidersDeskMobTabs = document.querySelectorAll(".sale__slider.sale__slider--blog.sale__slider--blog--mob.tab-slider");
    blogSlidersDeskMobTabs.forEach((item, index) => {
        let tab = index;
        new Swiper(item, {
            slidesPerView: "1",
            wrapperClass: "sale__slider-wrapper",
            slideClass: "sale__grid-item",
            allowTouchMove: true,
            slidesPerGroup: 1,
            navigation: false,
            pagination: false,
        });
        if (tab != 0){
            $(item).hide();
        }
    });




    const productSliders = document.querySelectorAll(".product__slider");
    if (window.screen.width < 991) {
        productSliders.forEach((item, index) => {
            console.log(index);
            new Swiper(item, {
                slidesPerView: "4",
                spaceBetween: 40,
                wrapperClass: "product__slider-wrapper",
                slideClass: "products__grid-item",
                allowTouchMove: true,
                slidesPerGroup: "4",
                navigation: {
                    nextEl: `.product__slider-nav-wrapper .product__slider-next-${index}`,
                    prevEl: `.product__slider-nav-wrapper .product__slider-prev-${index}`,
                },
                pagination: {
                    el: `.product__slider .product__slider-pagination-${index}`,
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: "1",
                        slidesPerGroup: 1,
                        spaceBetween: 16,
                        allowTouchMove: true,
                    },
                    769: {
                        slidesPerView: "2",
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: "4",
                        slidesPerGroup: 4,
                        spaceBetween: 40,
                        allowTouchMove: false,
                    },
                },
            });
        });

        const shopMenuSlider = document.querySelectorAll(".shops-inner__list");
       
            shopMenuSlider.forEach((item, index) => {
                new Swiper(item, {
                    slidesPerView: "auto",
                    slidesPerGroup: 4,
                    allowTouchMove: true,
                    slideClass: "shops-inner__ordering-filter-item",
                    wrapperClass: "shops-inner__ordering-filter",
                    breakpoints: {
                    0: {
                        spaceBetween: 31,
                    },
                    992: {
                        spaceBetween: 0,
                    },
                },
                });
            });
        
       
    } else {
        productSliders.forEach((item, index) => {
            console.log(index);
            new Swiper(item, {
                slidesPerView: "4",
                spaceBetween: 40,
                wrapperClass: "product__slider-wrapper",
                slideClass: "products__grid-item",
                allowTouchMove: false,
                slidesPerGroup: 4,
                navigation: {
                    nextEl: `.product__slider-nav-wrapper .product__slider-next-${index}`,
                    prevEl: `.product__slider-nav-wrapper .product__slider-prev-${index}`,
                },
                pagination: {
                    el: `.product__slider-nav-wrapper .product__slider-pagination-${index}`,
                    renderBullet: function (index, className) {
                        return "<span class='product__slider-bullet " + className + "'>" + (index + 1) + "</span>";
                    },
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: "1",
                        slidesPerGroup: 1,
                    },
                    769: {
                        slidesPerView: "2",
                        slidesPerGroup: 2,
                    },
                    992: {
                        slidesPerView: "4",
                        slidesPerGroup: 4,
                    },
                },
            });
        });
    }

   

    const dropdowns = document.querySelectorAll(".dropdown"),
        body = document.querySelector("body"),
        overlay = document.querySelector(".overlay");

  
    function OpenStateFormModal(formTitle, formText, success) {
        let modal = document.querySelector("#stateForm");
        if (success) {
            modal.classList.add("success");
        } else {
            modal.classList.remove("success");
        }
        let modalTitle = document.querySelector("#stateForm .state-title");
        let modalText = document.querySelector("#stateForm .state-text");
        modalTitle.textContent = formTitle;
        modalText.textContent = formText;

        modal.classList.add("open");

        body.classList.add("overflow-hidden");
        document.querySelector("html").classList.add("overflow-hidden");
        overlay.classList.add("open");
    }

    document.querySelector(".state-form .dropdown__close")?.addEventListener("click", function () {
        body.classList.remove("overflow-hidden");
        document.querySelector("html").classList.remove("overflow-hidden");
        overlay.classList.remove("open");
        document.querySelector("#stateForm").classList.remove("open");
    });

    // Открытие модалок
    document.querySelectorAll("[data-popup]").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
           
            document.getElementById("removeConfim")?.classList.contains("open") ? document.getElementById("removeConfim").classList.remove("open") : 0;

            let popupId = btn.getAttribute("data-popup");
            document.querySelector(`#${popupId}`).classList.add("open");
            body.classList.add("overflow-hidden");
            document.querySelector("html").classList.add("overflow-hidden");
            overlay.classList.add("open");

        });
    });

   

    // Открытие выпадающих окон
    document.querySelectorAll("[data-dropdown]").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(".dropdown.open")?.classList.remove("open");
            let popupId = btn.getAttribute("data-dropdown");
            document.querySelector(`#${popupId}`).classList.add("open");
            body.classList.add("overflow-hidden");
            document.querySelector("html").classList.add("overflow-hidden");
            overlay.classList.add("open");
        });
    });

    // Закрытие модалок
    document.querySelectorAll(".jsButtonCloseModal").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault(), body.classList.remove("overflow-hidden");
            document.querySelector("html").classList.remove("overflow-hidden");
            let currentModal = document.querySelectorAll(".modal");
            overlay.classList.remove("open"),
            currentModal.forEach(function (item) {
                item.classList.remove("open");
            });
        });
    });
    document.querySelectorAll(".jsButtonBackModal").forEach(function (item) {
        item.addEventListener("click", function (e) {
            let currentModal = this.closest('.modal');
            currentModal.classList.remove('open');
        });
    });

    document.querySelectorAll(".jsButtonBackModal").forEach(function (item) {
        item.addEventListener("click", function (e) {
            let currentModal = e.target.closest(".modal");
            currentModal.classList.remove("open");
        });
    });

    // Закрытие модалок
    document.querySelectorAll(".jsBtnCloseDropdown").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault(), body.classList.remove("overflow-hidden");
            document.querySelector("html").classList.remove("overflow-hidden");
            let currentDropdown = document.querySelectorAll(".dropdown");
            overlay.classList.remove("open"),
                currentDropdown.forEach(function (item) {
                    item.classList.remove("open");
                });
        });
    });

    // Открытие меню
    let delay;
    if (window.screen.width >= 991) {
        document.querySelectorAll(".main-menu__col").forEach((menuItem) => {
            menuItem.onmouseover = function (e) {
                delay = setTimeout(function () {
                    if (e.target.classList.contains("main-menu__col")) {
                        document.querySelectorAll(".main-menu__col.active").forEach((actives) => {
                            actives.classList.remove("active");
                        });
                        e.target.classList.add("active");
                    }
                }, 100);
            };
            menuItem.onmouseout = function (e) {
                clearTimeout(delay);
            };
        });
    } else {
        document.querySelector(".main-menu__col.active").remove("active");
    }

    

    document.querySelector(".jsCloseFilter")?.addEventListener("click", function (e) {
        body.classList.remove("overflow-hidden");
        document.querySelector("html").classList.remove("overflow-hidden");
        document.querySelector(".jsFilters").classList.remove("open");
    });

    document.querySelector(".jsBtnFilter")?.addEventListener("click", function (e) {
        e.preventDefault();
        body.classList.add("overflow-hidden");
        document.querySelector("html").classList.add("overflow-hidden");
        document.querySelector(".jsFilters").classList.add("open");
    });

    const mainMenu = document.querySelector(".jsMainMenu");
    document.querySelectorAll(".jsMenuButton").forEach(function (item) {
        item.addEventListener("click", function (e) {
            body.classList.toggle("menu-opened"),
                e.preventDefault(),

                dropdowns.forEach(function (e) {
                    e.classList.remove("open");
                }),
                body.classList.remove("overflow-hidden"),
                document.querySelector("html").classList.remove("overflow-hidden");
                mainMenu.classList.remove("visible");
                mainMenu.classList.toggle("open"),
                mainMenu.classList.contains("open") ? (this.classList.remove("--svg__menu"), this.classList.add("--svg__menu_close")) : (this.classList.add("--svg__menu"), this.classList.remove("--svg__menu_close"));
        });
    });

    document.querySelectorAll(".jsAddItemCart").forEach(function (item) {
        item.addEventListener("click", function (t) {
            t.preventDefault();
            e.nextElementSibling.classList.add("show");
        });
    });


  

    if (window.screen.width <= 768) {
        document.querySelector(".header__search").addEventListener("focus", function () {
            document.querySelector("body").classList.add("search-open");
            document.querySelector("body").classList.add("overflow-hidden");
            document.querySelector("html").classList.add("overflow-hidden");
        });

        document.querySelector(".header__search-close").addEventListener("click", function () {
            document.querySelector("body").classList.remove("search-open");
            document.querySelector("body").classList.remove("overflow-hidden");
            document.querySelector("html").classList.remove("overflow-hidden");
        });

        document.querySelector(".header__city").addEventListener("click", function () {
            document.querySelector(".header__top").classList.add("visible");
            document.querySelector(".dropdown__city").classList.add("open");
        });

        document.querySelector(".dropdown__city-close").addEventListener("click", function () {
            document.querySelector(".dropdown__city").classList.remove("open");
            document.querySelector(".dropdown__city").blur();
            document.querySelector(".header__top").classList.remove("visible");
        });
    } else {
        document.querySelector(".header__search").addEventListener("focus", function () {
            document.querySelector("body").classList.add("search-open");
            document.querySelector("html").classList.add("overflow-hidden");
            document.querySelector("body").classList.add("overflow-hidden");
        });

        document.querySelector(".header__search").addEventListener("blur", function () {
            document.querySelector("body").classList.remove("search-open");
            document.querySelector("html").classList.remove("overflow-hidden");
            document.querySelector("body").classList.remove("overflow-hidden");
        });
    }

    const galleryThumbs = new Swiper(".gallery-thumbs", {
        slidesPerView: 9,
        spaceBetween: 16,
        direction: "vertical",
        wrapperClass: "gallery-thumbs__wrapper",
        slideClass: "gallery-thumbs__slide",
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        freeMode: true,
        allowTouchMove: false,
        navigation: {
            nextEl: ".gallery-thumbs-next",
            prevEl: ".gallery-thumbs-prev",
        },

        breakpoints: {
            0: {
                direction: "horizontal",
                slidesPerView: 7,
                allowTouchMove: true,
                spaceBetween: 8,
            },
            991: {
                direction: "vertical",
                slidesPerView: 9,
                allowTouchMove: false,
                spaceBetween: 16,
            },
        },
    });

    const gallery = new Swiper(".gallery-slider", {
        wrapperClass: "gallery-slider__wrapper",
        slideClass: "gallery-slider__slide",
        slidesPerView: 1,

        navigation: {
            nextEl: ".gallery-slide-next",
            prevEl: ".gallery-slide-prev",
        },

        thumbs: {
            swiper: galleryThumbs,
        },
    });


    document.querySelectorAll("[data-gallery]").forEach(item => {
        item.addEventListener("click", function(){
            let slideId = item.getAttribute("data-gallery");
            gallery.slideTo(slideId);
        })
    })


    const carSelectMain = document.querySelectorAll(".entry-car-selected__slider--desk");
    carSelectMain.forEach((item, index) => {
        new Swiper(item, {
            slidesPerView: "1",
            wrapperClass: "entry-car-selected__slider-wrapper",
            slideClass: "entry-car-selected__image",
            allowTouchMove: true,
            slidesPerGroup: 1,
            navigation: {
                nextEl: `.entry-car-selected__slider-nav .product__slider-next`,
                prevEl: `.entry-car-selected__slider-nav .product__slider-prev`,
            },
        });
    });

    const carSelectMainMob = document.querySelectorAll(".entry-car-selected__slider--mob");
    carSelectMainMob.forEach((item, index) => {
        new Swiper(item, {
            slidesPerView: "1.1",
            wrapperClass: "entry-car-selected__slider-wrapper",
            slideClass: "entry-car-selected__slide",
            allowTouchMove: true,
            slidesPerGroup: 1,
            pagination: {
                el: `.entry-car-selected__slider-pagination`,
                renderBullet: function (index, className) {
                    return "<span class='product__slider-bullet " + className + "'></span>";
                },
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: "1.15",
                    allowTouchMove: true,
                },
                650: {
                    slidesPerView: "2",
                },
            },
        });
    });

    document.querySelectorAll(".form-validate").forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let inputs = form.querySelectorAll("input");
            let failValidate = false;
            document.querySelectorAll(".input-error").forEach((error) => error.remove());
            document.querySelectorAll(".invalid").forEach((input) => input.classList.remove("invalid"));
            inputs.forEach((input) => {
                if (input.hasAttribute("data-required") && input.value.length < 3 && !input.classList.contains("checkbox__input")) {
                    failValidate = true;
                    // console.log(input.closest(".input-group"))
                    if(window.screen.width <= 768){
                        input.insertAdjacentHTML("afterend", "<p class='input-error'>Обязательное поле</p>");
                    }else if(input.closest(".input-group")){
                        input.closest(".input-group").insertAdjacentHTML("beforeend", "<p class='input-error'>Обязательное поле</p>");
                    }else{
                         input.insertAdjacentHTML("afterend", "<p class='input-error'>Обязательное поле</p>");
                    }
                    input.classList.add("invalid");
                } else if (input.classList.contains("checkbox__input") && !input.checked) {
                    failValidate = true;
                    input.closest(".checkbox").classList.add("invalid");
                }

            });

            if (failValidate) {
                if (form.classList.contains("expertForm")) {
                    form.classList.add("error");
                } else if (form.classList.contains("sto-service-form")){
                    OpenStateFormModal("Произошла ошибка при отправке, попробуйте позже", "", true);
                    document.querySelector(".overlay").classList.add("sto-overlay");
                } else {
                    closeAllModal();
                    OpenStateFormModal("Произошла ошибка при отправке, попробуйте позже", "", true);
                }
                return false;
            } else {
                if (form.classList.contains("expertForm")) {
                    document.querySelectorAll(".input-error").forEach((error) => error.remove());
                    document.querySelectorAll(".invalid").forEach((input) => input.classList.remove("invalid"));
                    form.classList.add("success");
                } else {
                    document.querySelectorAll(".input-error").forEach((error) => error.remove());
                    document.querySelectorAll(".invalid").forEach((input) => input.classList.remove("invalid"));
                    closeAllModal();
                    OpenStateFormModal("Регистрация прошла успешно", "Теперь вы можете добавить свой автомобиль и найти любые автозапчасти в 3 клика");
                }
            }
        });
    });

    document.querySelectorAll(".form-validate button").forEach((button) => {
        if (!button.classList.contains("dropdown__close") || !button.classList.contains("--svg__eye_close")) {
            button.addEventListener("click", function () {
                button.closest(".form-validate")?.submit;
            });
        }
    });

    document.querySelectorAll(".jsToggleTypeButton").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const modalIcon = this.querySelector(".modal__type-icon"),
                modalIconNext = this.querySelector(".modal__type-icon").nextSibling,
                modalTypeWrap = this.closest(".modal__content").querySelector(".modal__type-wrapper--content"),
                modalMapWrap = this.closest(".modal__content").querySelector(".modal__type-wrapper--map");
            modalIcon.classList.contains("--svg__pin")
                ? (modalIcon.classList.remove("--svg__pin"), modalIcon.classList.add("--svg__list"), (modalIconNext.textContent = "Списком"), modalTypeWrap.classList.remove("active"), modalMapWrap.classList.add("active"))
                : (modalIcon.classList.remove("--svg__list"), modalIcon.classList.add("--svg__pin"), (modalIconNext.textContent = "На карте"), modalMapWrap.classList.remove("active"), modalTypeWrap.classList.add("active"));
        });
    });





    document.querySelectorAll(".filter-link").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let filterLinks;
            let closestClass;
            if(this.classList.contains("parts-list__box")){
                closestClass = ".parts-list__overhead";
            }else if(this.classList.contains("filters-mob__item")){
                closestClass = ".filters-mob__items"
            }else if (this.classList.contains('order-list__item')){
                closestClass = ".list-overhead";
            }else{
                closestClass = ".modal__overhead";
            }
            filterLinks = this.closest(closestClass).querySelectorAll(".filter-link");
            filterLinks.forEach((item) => {
                if (item !== this) {
                    item.classList.remove("arrow-top");
                    item.classList.remove("arrow-bottom");
                }
            });

            if (this.classList.contains("arrow-top")) {
                this.classList.remove("arrow-top");
                this.classList.add("arrow-bottom");
            } else if (this.classList.contains("arrow-bottom")) {
                this.classList.remove("arrow-bottom");
                this.classList.add("arrow-top");
            } else {
                this.classList.add("arrow-top");
            }
            
        });
    });

    document.querySelectorAll(".anchor-link").forEach(function(item){
        item.addEventListener("click", function(e){
            e.preventDefault();
            const id = item.getAttribute("href");
            document.querySelector(id).scrollIntoView();
        })
    })


function closeAllModal() {
    let modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.classList.remove("open");
    });
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector("html").classList.remove("overflow-hidden");
    document.querySelector(".overlay").classList.remove("open");
    document.querySelector(".jsAuthDropdown").classList.remove("open");
    document.querySelector(".jsRegisterDropdown").classList.remove("open");
    document.querySelector(".jsExpertDropdown").classList.remove("open");
    document.querySelector(".header__search").blur();
    document.querySelector("body").classList.remove("menu-opened");
    document.querySelector(".jsMainMenu").classList.remove("open");
    document.querySelector(".dropdown__city").classList.remove("open");
    document.querySelectorAll(".jsMenuButton").forEach((menu) => {
        menu.classList.add("--svg__menu");
        menu.classList.remove("--svg__menu_close");
    });
    document.querySelectorAll(".attention__content").forEach((item) => {
        item.classList.remove("active");
    })
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
        isEscape = evt.keyCode === 27;
    }

    if (isEscape) {
        closeAllModal();
    }
};

document.querySelector(".overlay").addEventListener("click", function (e) {
    closeAllModal();
});

document.querySelector(".js-state-form-back")?.addEventListener("click", function () {
    closeAllModal();
});

    [].forEach.call(document.querySelectorAll('[type="tel"]'), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i);
            }
            let reg = matrix
                .substring(0, this.value.length)
                .replace(/_+/g, function (a) {
                    return "\\d{1," + a.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });

    if (window.screen.width <= 768) {
        document.querySelectorAll(".product-types__item").forEach((item) => {
            item.addEventListener("click", function (e) {
                if (e.target.tagName !== "A") {
                    item.classList.toggle("opened");
                    let linksHeight = item.querySelector(".product-links").offsetHeight;
                    item.classList.contains("opened") ? (item.style.marginBottom = `${linksHeight}px`) : (item.style.marginBottom = `0px`);
                }
            });
            if(item.querySelector(".mobile-only a")){
                item.querySelector(".mobile-only a").addEventListener("click", function (e) {
                    e.preventDefault();
                    item.classList.remove("opened");
                    item.style.marginBottom = "0px";
                });
            }
        });

        document.querySelectorAll(".share").forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                this.classList.toggle("opened");
            });
        });
    }


    const ratingStar = document.querySelectorAll(".rating .stars .star");
    ratingStar.forEach(star => {
        star.addEventListener("click", function(e){
            e.preventDefault();
            let index = [...star.parentElement.children].indexOf(star);
            let parentRating = star.closest('.rating').querySelectorAll(".star");
            parentRating.forEach(item => {
                item.classList.remove("star--fill");
            })

            for(let i = 0; i<=index; i++){
                parentRating[i].classList.add("star--fill");
            }
        })
    })


    const numbersInput = document.querySelectorAll(".buttons-anim__input");
    numbersInput.forEach(item => {
        item.oninput = function(){
            this.value = this.value.substring(0, 2);
          }
    })


    document.querySelector("#jsCartBtn").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".cart__popup").classList.add("opened");
    })
    document.querySelector(".cart__popup .close").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".cart__popup").classList.remove("opened");
    })
    document.querySelector(".header-notice svg").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".header-notice").classList.add("d-none");
    })

    document.querySelectorAll(".map-type").forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            if(item.closest(".modal__inner")){
                item.closest(".modal__inner").classList.toggle("map-visible");
            }
            if(item.closest(".shops-list-wrapper")){
                item.closest(".shops-list-wrapper").classList.toggle("map-visible");
            }
        })
    })

    document.querySelector(".promo-link")?.addEventListener("click", function(e){
        e.preventDefault();
        this.remove();
        document.querySelector(".cart__aside-promo").classList.remove('input-hidden');
        document.querySelector(".cart__aside-discounts").classList.remove('cart__aside-discounts--hidden');
    })

    let serviceLink = document.querySelector(".tech-service__title-link");
    if(serviceLink){
        window.addEventListener('resize', function(event) {
            if (window.screen.width <= 991) {
              serviceLink.removeAttribute("data-popup");
              serviceLink.setAttribute("data-popup", "tech-service-popup-list");
            }else{
                serviceLink.removeAttribute("data-popup");
                serviceLink.setAttribute("data-popup", "jsService");
            }
        }, true);

        if (window.screen.width <= 991) {
          serviceLink.removeAttribute("data-popup");
          serviceLink.setAttribute("data-popup", "tech-service-popup-list");
        }else{
            serviceLink.removeAttribute("data-popup");
            serviceLink.setAttribute("data-popup", "jsService");
        }
    }


    let carSelectButton = document.querySelector(".car-select-button");
    if(carSelectButton){
        carSelectButton.addEventListener("click", function(e){
            e.preventDefault();
            let carSelectMainNone = document.querySelector(".entry-car-select-none");
            let carSelectMainData = document.querySelector(".entry-car-selected");
            carSelectMainNone.classList.add("hide");
            carSelectMainData.classList.add("open");
        });
    }

    document.querySelectorAll(".custom-select").forEach(item => {
        NiceSelect.bind(item);
    })
   

    if (window.screen.width <= 991) {

        document.querySelectorAll("[data-attention-id]").forEach(item => {
            let attentionId = item.getAttribute('data-attention-id');
            let attentionContent = document.getElementById(attentionId);
            document.querySelector('body').appendChild(attentionContent);
            item.addEventListener("click", function(e){
                attentionContent.classList.add("active");
                document.querySelector("body").classList.add("overflow-hidden");
                document.querySelector(".overlay").classList.add("open")
            })
        })

        document.querySelectorAll('.attention__content .button').forEach(btn => {
            btn.addEventListener('click', function(e){
                e.preventDefault();
                document.querySelector("body").classList.remove("overflow-hidden");
                document.querySelector(".overlay").classList.remove("open");
                btn.closest('.attention__content').classList.remove("active");
            })
        })
    }



    document.querySelectorAll(".payment-delivery__content-left .shops-inner__ordering-filter li").forEach(item => {
        item.addEventListener("click", function(e){
            if(item.classList.contains("payment-radio")){
                document.querySelector(".payment-delivery__list--payment").classList.add("payment-delivery__list-opened");
                document.querySelector(".payment-delivery__list--delivery").classList.remove("payment-delivery__list-opened");
                document.querySelector(".sale-banner").classList.add("visible");
            }
            if(item.classList.contains("delivery-radio")){
                document.querySelector(".payment-delivery__list--delivery").classList.add("payment-delivery__list-opened");
                document.querySelector(".payment-delivery__list--payment").classList.remove("payment-delivery__list-opened");
                document.querySelector(".sale-banner").classList.remove("visible");
            }
        })
    })





    // profile mobile blocks
    if(window.screen.width < 991){
        const blockTriggers = document.querySelectorAll(".profile__block-title");
        blockTriggers.forEach((item) => {
            item.addEventListener("click", function(){
                const blockParent = this.parentElement;
                blockParent.classList.toggle("opened");
            })
        })
    }




    if(window.screen.width <= 600){
        const carListSlider = new Swiper(".car-list__wrapper", {
            wrapperClass: "car-list",
            slideClass: "car-item",
            slidesPerView: 1,
            
            pagination: {
                el: ".car-list__wrapper .slider-pagination",
                type: "bullets",
              },
    
          
        });
    }

     // main page search car
     let carSearch = document.querySelector(".cars__search .cars__search-form-input:nth-child(1) input");
     let carSearchModel = document.querySelector(".cars__search .cars__search-form-input:nth-child(2)");
     carSearch?.addEventListener("keyup", function(e){
         let val = e.target.value.trim();
         if (val.length) {
             carSearchModel.classList.add("visible");
         }else{
             carSearchModel.classList.remove("visible");
         }
         
     });
     

    document.querySelectorAll(".profile__tab-trigger").forEach(item => {

        item.addEventListener("click", function(e){
            e.preventDefault();
            const tabID = item.getAttribute("data-tab");
            document.querySelectorAll(".profile__tab-content").forEach(tabContent => tabContent.classList.remove("active"));
            document.querySelectorAll(".profile__tab-trigger").forEach(tabContent => tabContent.classList.remove("active"));
            document.getElementById(tabID)?.classList.add("active");
            item.classList.add("active");
        })
    })

    document.querySelectorAll("[data-tab-name]").forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            const tabID = item.getAttribute("data-tab-name");
            const tabIndex = item.getAttribute("data-tabs-index");
            document.querySelectorAll(`[data-tabs-index="${tabIndex}"]`).forEach(a => a.classList.remove("active"));
            document.getElementById(tabID)?.classList.add("active");
            item.classList.add("active");
        })
    })

    document.querySelectorAll(".show-password").forEach(button => {
        button.addEventListener("click", function(e){
            e.preventDefault();
            const triggeredInput = button.closest(".input-group").querySelector(".input");
            console.log(triggeredInput.type);
            // if(triggeredInput.type === "password"){

            // }

            triggeredInput.type === "password" ? triggeredInput.type = "text" : triggeredInput.type = "password";
        })
    })

        document.querySelector("#code-link")?.addEventListener("click", function(e){
            e.preventDefault();
            if(window.screen.width > 768){
                document.querySelector(".code-popup").classList.add("active");
            }else{
                this.remove();
                document.querySelector(".input-row.code").classList.add("active");
            }
           
        })

        document.querySelectorAll(".input-popup .close").forEach(item => {
            item.addEventListener("click", function(e){
                e.preventDefault();
                item.closest(".input-popup").classList.remove("active");
            })
        })
    


    document.querySelectorAll(".sto-service-form .sto-service-form__toggle-button").forEach(item => {
        item.addEventListener("click", function(e){
            if(item.previousElementSibling.classList.contains("shrink")){
                item.previousElementSibling.classList.remove("shrink");
                item.previousElementSibling.classList.add("expand");
                item.querySelector(".sto-service-form__toggle-button__text").innerText = "Короткая форма";
                return
            }else{
                item.previousElementSibling.classList.remove("expand");
                item.previousElementSibling.classList.add("shrink");
                item.querySelector(".sto-service-form__toggle-button__text").innerText = "Подробная форма";
                return
            }
            
        })
    })


    document.querySelectorAll("#part-search-trigger").forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault;
            console.log("click");
            document.querySelectorAll(".seach-popup-main").forEach(modal => {
                modal.classList.add("open");
            })
        })
    })

    document.querySelectorAll(".seach-popup-main .dropdown__close-icon").forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault;
            document.querySelectorAll(".seach-popup-main").forEach(modal => {
                modal.classList.remove("open");
            })
        })
    })

    document.querySelectorAll(".returns__accordion-hint .hint-title").forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            const parentElem = item.closest(".returns__accordion-hint");
            parentElem.classList.toggle("opened");
        })
    })


    document.querySelectorAll("#part-search-trigger").forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault;
            let triggerButton = this;
            document.querySelectorAll(".seach-popup-main").forEach(modal => {
                modal.classList.add("open");
                document.addEventListener("click", function(event) {
                  var searchPopup = document.querySelector(".seach-popup-main.open");
                  if (!modal.contains(event.target) && !triggerButton.contains(event.target)){
                    modal.classList.remove("open");
                  } 
                });
            })
        })
        
    })

    const stoMenuSlider = document.querySelectorAll(".sto-slider .shops-inner__list");
    stoMenuSlider.forEach((item, index) => {
       new Swiper(item, {
           slidesPerView: "auto",
           allowTouchMove: false,
           loop: true,
           slideToClickedSlide: true,
           slideClass: "shops-inner__ordering-filter-item",
           wrapperClass: "shops-inner__ordering-filter",
           navigation: {
                    nextEl: `.shops-inner__next-el`,
                },
           breakpoints: {
           0: {
               spaceBetween: 31,
           },
           992: {
               spaceBetween: 0,
           },
       },
       });
   });


 
   let clickCounter = 0;
    document.querySelectorAll(".sto-service-form .input-wrapper .input").forEach(item => {
        item.addEventListener("click", function(e){
            clickCounter++;
            console.log(clickCounter);
            let input = this;
            let inputContainer = item.parentElement;
            let dropdown = inputContainer.querySelector('.sto-service-form__dropdown');
            let inputWrapper = inputContainer.parentElement;
            let arrow = inputContainer.querySelector('.sto-service-form__arrow');

            if(input.classList.contains("focus") && clickCounter == 2 && dropdown != null){
                input.classList.remove("focus");
                dropdown.classList.remove("show");
                clickCounter = 0;
                return
            }
             document.querySelectorAll(".sto-service-form .input-wrapper .sto-service-form__dropdown").forEach(elem => {
                if(elem){
                    elem.classList.remove("show");
                    clickCounter = 1;
                }
             });

             document.querySelectorAll(".sto-service-form .input-wrapper input").forEach(elem => {
                if(elem){
                    elem.classList.remove("focus");
                }
             });

            if(dropdown){
                dropdown.classList.add("show");
            }
            input.classList.add('focus');

            if(dropdown && dropdown.classList.contains("show")){
                document.addEventListener('click', function(event) {
                    if (!inputContainer.contains(event.target)){
                        dropdown.classList.remove("show");
                        dropdown.previousElementSibling.classList.remove("focus");
                    } 
                });
            }

            if(input && input.classList.contains("focus")){
                document.addEventListener('click', function(event) {
                    if (!inputContainer.contains(event.target)){
                        input.classList.remove("focus");
                    } 
                });
            }

            if(dropdown){
                dropdown.querySelectorAll('.sto-service-form__dropdown-item').forEach(dropItem => {
                    dropItem.addEventListener('click', function(e) {
                        e.preventDefault;
                        let dropItemText = this.innerText;
                        input.value = dropItemText;
                        dropdown.classList.remove("show");
                     })
                })
            }

        })

    })

    document.querySelectorAll(".sto-service-form .sto-service-form__arrow").forEach(item => {
        item.addEventListener("click", function(e){
            clickCounter++;
            console.log(clickCounter);
            let arrow = this;
            let inputContainer = item.parentElement;
            let dropdown = inputContainer.querySelector('.sto-service-form__dropdown');
            let inputWrapper = inputContainer.parentElement;
            let input = inputContainer.querySelector('.input');

            if(input.classList.contains("focus") && clickCounter == 2 && dropdown != null){
                input.classList.remove("focus");
                dropdown.classList.remove("show");
                clickCounter = 0;
                return
            }
             document.querySelectorAll(".sto-service-form .input-wrapper .sto-service-form__dropdown").forEach(elem => {
                if(elem){
                    elem.classList.remove("show");
                    clickCounter = 1;
                }
             });

             document.querySelectorAll(".sto-service-form .input-wrapper input").forEach(elem => {
                if(elem){
                    elem.classList.remove("focus");
                }
             });

            if(dropdown){
                dropdown.classList.add("show");
            }
            input.classList.add('focus');

            if(dropdown && dropdown.classList.contains("show")){
                document.addEventListener('click', function(event) {
                    if (!inputContainer.contains(event.target)){
                        dropdown.classList.remove("show");
                        dropdown.previousElementSibling.classList.remove("focus");
                    } 
                });
            }

            if(input && input.classList.contains("focus")){
                document.addEventListener('click', function(event) {
                    if (!inputContainer.contains(event.target)){
                        input.classList.remove("focus");
                    } 
                });
            }

            if(dropdown){
                dropdown.querySelectorAll('.sto-service-form__dropdown-item').forEach(dropItem => {
                    dropItem.addEventListener('click', function(e) {
                        e.preventDefault;
                        let dropItemText = this.innerText;
                        input.value = dropItemText;
                        dropdown.classList.remove("show");
                     })
                })
            }

        })
    })



    if ($('.cars.show-main').length > 0){
        var ScrollToBlockTimer;
        $(window).on('scroll', function(){
            let scrollTop = $(window).scrollTop();
            let windowH = $(window).height();
            let blockTop = $('.cars.show-main').offset().top;
            clearTimeout(ScrollToBlockTimer);
            if ($(window).width() > 991){
                if (blockTop > scrollTop){
                    if ( (scrollTop + windowH/2) > blockTop){
                        ScrollToBlockTimer = setTimeout(function() {
                            $('html,body').animate({ scrollTop: blockTop }, 600);
                        }, 1000);
                    } else {
                        clearTimeout(ScrollToBlockTimer);
                    }
                }

                let prevBlock = $('.cars.show-main').prev();
                if (prevBlock.length > 0){
                    prevBlock.css('transition','transform 0.1s linear');
                    if (blockTop > scrollTop){
                        if ( (scrollTop + windowH/1.5) > blockTop){
                            let yPos = (blockTop - (scrollTop + windowH/1.5)) / windowH;
                            prevBlock.css('transform','translateY('+ yPos*30 +'%)');
                        } else {
                            prevBlock.css('transform','translateY('+ 0 +'%)');
                        }
                    }
                }
            }

        });
    }

  
    $('.cars__list-item-hover').on('transitionend webkitTransitionEnd oTransitionEnd',function (){
        $('.cars__list-item').removeClass('hidden');
        if ($('.cars__list-item:hover').length === 0) {
            $('.cars__list-item').removeClass('active');
        } else {
            if ($(this).parent().is(':hover')){
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
                $('.cars__list-item:hover').addClass('active');
            }
        }
    });

    $('.cars__list-item').hover(function (){
        if ($(this).find('.cars__list-item-hover').length > 0){
            if ($('.cars__list-item.active').length === 0){
                $(this).addClass('active');
            }
        }
    },function (){
        if ($(this).find('.cars__list-item-hover').length > 0){
            if ($(this).find('.cars__list-item-hover').css("opacity") == 1){
                $(this).addClass('hidden');
            }
        }
    });




    document.querySelectorAll(".article-expand-list").forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault;
            let triggerButton = this;
            let triggerButtonText = this.querySelector('span');
            if( triggerButton.classList.contains("hide")){
                triggerButtonText.textContent = "Развернуть";
                triggerButton.classList.remove("hide");
                triggerButton.classList.add("view");
                document.querySelectorAll(".tech-service__row").forEach(list => {
                    list.classList.remove("open");
                })
                return
            }
            if( triggerButton.classList.contains("view")){
                triggerButton.classList.remove("view");
                triggerButton.classList.add("hide");
                triggerButtonText.textContent = "Cвернуть";
                document.querySelectorAll(".tech-service__row").forEach(list => {
                    list.classList.add("open");
                })
                return
            }
        })
        
    })


    jQuery(function($){
        $(document).mouseup( function(e){
            var menu = $( ".jsMainMenu");
            if ( !menu.is(e.target) && menu.has(e.target).length === 0 && !$(".jsMenuButton").is(e.target)) {
                body.classList.remove("overflow-hidden"),
                    body.classList.remove("menu-opened"),
                    document.querySelector("html").classList.remove("overflow-hidden");
                mainMenu.classList.remove("visible");
                mainMenu.classList.remove("open");
                $(".jsMenuButton").removeClass("--svg__menu_close");
            }
        });
    });


});
