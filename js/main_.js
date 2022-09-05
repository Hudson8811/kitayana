"use strict";

document.addEventListener("DOMContentLoaded", function () {

  ymaps.ready(function () {
    // new ymaps.Map("map", {
    //   center: [55.76, 37.64],
    //   zoom: 7
    // })
    new ymaps.Map("map-shops", o)
    new ymaps.Map("map-modal", o)
    new ymaps.Map("map-modal-mob", o)
    new ymaps.Map("map-modal-shop", o)
    new ymaps.Map("map-modal-stock", o)
    new ymaps.Map("filter-map-modal", o);
  })
  
  function e(e, t) {
    e.classList.contains("open") ? t.style.maxHeight = t.scrollHeight + "px" : t.style.maxHeight = null, e.addEventListener("click", function (s) {
      s.preventDefault(), e.classList.toggle("open"), e.classList.contains("open") ? t.style.maxHeight = t.scrollHeight + "px" : t.style.maxHeight = null;
    });
  }

  var t = document.querySelectorAll(".accordion"),
      s = document.querySelectorAll(".filters__box");
  t.forEach(function (t) {
    var s = t.querySelector(".accordion__content");
    e(t, s);
  }), s.forEach(function (t) {
    var s = t.closest(".filters__item").querySelector(".filters__content");
    e(t, s);
  });
  new Swiper(".swiper-spares", {
    direction: "horizontal",
    slidesPerView: "auto",
    breakpoints: {
      320: {
        spaceBetween: 16
      },
      576: {
        spaceBetween: 40
      }
    }
  }).on('slideChange', function(e){
    let links = document.querySelectorAll('.spares__names ul li');
    links.forEach(item => {
      item.classList.remove('active');
    })

    links[e.activeIndex].classList.add('active');
  });
  new Swiper(".car-service-slider", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 16
  });
  var o = {
    center: [55.76, 37.64],
    zoom: 7
  };
  window.addEventListener("scroll", function () {
    this.pageYOffset > 140 ? document.querySelector(".header").classList.add("fixed") : document.querySelector(".header").classList.remove("fixed");
  }), $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1e3,
    from: 0,
    to: 500,
    hide_min_max: !0,
    hide_from_to: !0,
    onChange: function onChange(e) {
      $(".jsPriceFrom").val(e.from), $(".jsPriceTo").val(e.to);
    }
  });


  document.querySelectorAll('.jsCloseStateForm').forEach(item => {
    item.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('.state-form').classList.remove('open');
      document.querySelector('.overlay').classList.remove('open');
      document.querySelector('body').classList.remove("overflow-hidden");
    })
  })
  document.querySelectorAll('.jsCounter').forEach(counter => {
    let counterText = counter.querySelector('span');
    let counterMinusBtn = counter.querySelector('.quantity-icon--minus');
    let counterPlusBtn = counter.querySelector('.quantity-icon--plus');

  

    counterMinusBtn.addEventListener('click', function(){
      let currentNumber = parseInt(counterText.textContent);
      if(currentNumber !== 1){
        counterText.textContent = currentNumber - 1;
      }else{
        counter.classList.remove('show');
      }
    })

    counterPlusBtn.addEventListener('click', function(){
      let currentNumber = parseInt(counterText.textContent);
      if(currentNumber !== 99){
        counterText.textContent = currentNumber + 1;
      }
    })

  })


  var n = document.querySelectorAll(".dropdown"),
      r = document.querySelector(".jsExpertButton"),
      l = document.querySelector(".jsExpertDropdown"),
      a = document.querySelector(".jsAuthButton"),
      i = document.querySelector(".jsButtonCars"),
      u = document.querySelector(".jsButtonFavourite"),
      v = document.querySelector(".jsBasketButton"),
      L = document.querySelector("body"),
      w = document.querySelector(".overlay");
    


      function OpenStateFormModal(formTitle, formText){
        let modal = document.querySelector('#stateForm');
        let modalTitle = document.querySelector('#stateForm .state-title');
        let modalText = document.querySelector('#stateForm .state-text');
        modalTitle.textContent = formTitle;
        modalText.textContent = formText;
    
        modal.classList.add('open');

        L.classList.add("overflow-hidden");
        w.classList.add('open');

      }



      document.querySelector('.state-form .dropdown__close').addEventListener('click', function(){
        L.classList.remove("overflow-hidden");
        w.classList.remove('open');
        document.querySelector('#stateForm').classList.remove('open');
      })


      // РћС‚РєСЂС‹С‚РёРµ РјРѕРґР°Р»РѕРє 
      document.querySelectorAll('[data-popup]').forEach(btn => {
        btn.addEventListener('click', function(e){
          e.preventDefault();
          document.querySelector('.modal.open')?.classList.remove('open');
          let popupId = btn.getAttribute('data-popup');
          document.querySelector(`#${popupId}`).classList.add('open');
          L.classList.add("overflow-hidden");
          w.classList.add('open');
        })
      })

      // РћС‚РєСЂС‹С‚РёРµ РІС‹РїР°РґР°СЋС‰РёС… РѕРєРѕРЅ
      document.querySelectorAll('[data-dropdown]').forEach(btn => {
        btn.addEventListener('click', function(e){
          e.preventDefault();
          document.querySelector('.dropdown.open')?.classList.remove('open');
          let popupId = btn.getAttribute('data-dropdown');
          document.querySelector(`#${popupId}`).classList.add('open');
          L.classList.add("overflow-hidden");
          w.classList.add('open');
        })
      })


      


      // Р—Р°РєСЂС‹С‚РёРµ РјРѕРґР°Р»РѕРє
      document.querySelectorAll(".jsButtonCloseModal").forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault(), L.classList.remove("overflow-hidden");
          var t = document.querySelectorAll(".modal");
          w.classList.remove("open"), t.forEach(function (e) {
            e.classList.remove("open");
          });
        });
      });


      // Р—Р°РєСЂС‹С‚РёРµ РјРѕРґР°Р»РѕРє
      document.querySelectorAll(".jsBtnCloseDropdown").forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault(), L.classList.remove("overflow-hidden");
          var t = document.querySelectorAll(".dropdown");
          w.classList.remove("open"), t.forEach(function (e) {
            e.classList.remove("open");
          });
        });
      });

      // РћС‚РєСЂС‹С‚РёРµ РјРµРЅСЋ

      if(window.screen.width >= 991){
        document.querySelectorAll('.main-menu__col').forEach(menuItem => {
          menuItem.onmouseover = function(e){
            if(e.target.classList.contains('main-menu__col')){
              document.querySelectorAll('.main-menu__col.active').forEach(actives => {
                actives.classList.remove('active');
              })
              e.target.classList.add('active');
            }
          }
        })
      }else{
        document.querySelector('.main-menu__col.active').remove('active');
      }

      if(window.screen.width >= 768){
        r.onmouseover = function(){
          l.classList.add('open');
        };
        
        l.onmouseover = function(){
          l.classList.add('open');
        };
      
        l.onmouseout = function(){
          l.classList.remove('open');
        };
      }



  function y() {
    n.forEach(function (e) {
      e.classList.remove("open");
    }), L.classList.remove("overflow-hidden"), a?.classList.remove("active"), r?.classList.remove("active"), i?.classList.remove("active"), u?.classList.remove("active"), v?.classList.remove("active");
  }

 

  document.querySelector(".jsCloseFilter").addEventListener("click", function (e) {
      L.classList.remove("overflow-hidden")
      document.querySelector(".jsFilters").classList.remove("open");
  });

  document.querySelector(".jsBtnFilter").addEventListener("click", function (e) {
      e.preventDefault()
      L.classList.add("overflow-hidden")
      document.querySelector(".jsFilters").classList.add("open");
  });



  var f = document.querySelector(".jsMainMenu");
  document.querySelectorAll(".jsMenuButton").forEach(function (e) {
    e.addEventListener("click", function (e) {
     L.classList.toggle('menu-opened'), e.preventDefault(), y(), f.classList.toggle("open"), f.classList.contains("open") ? (this.classList.remove("--svg__menu"), this.classList.add("--svg__menu_close"), L.classList.add("overflow-hidden")) : (this.classList.add("--svg__menu"), this.classList.remove("--svg__menu_close"), L.classList.remove("overflow-hidden"));
    });
  });
  var h = 0;


  document.querySelectorAll(".jsAddItemCart").forEach(function (e) {
    e.addEventListener("click", function (t) {
      t.preventDefault();
      e.nextElementSibling.classList.add("show");
    });
  })

  document.querySelectorAll(".jsToggleTypeButton").forEach(function (e) {
    e.addEventListener("click", function (e) {
      console.log("test1332"), e.preventDefault();
      var t = this.querySelector(".modal__type-icon"),
          s = this.querySelector("span"),
          o = this.closest(".modal__content").querySelector(".modal__type-wrapper--content"),
          c = this.closest(".modal__content").querySelector(".modal__type-wrapper--map");
      t.classList.contains("--svg__list") ? (t.classList.remove("--svg__list"), t.classList.add("--svg__pin"), s.textContent = "СПИСКОМ", o.classList.remove("active"), c.classList.add("active")) : (t.classList.remove("--svg__pin"), t.classList.add("--svg__list"), s.textContent = "НА КАРТЕ", c.classList.remove("active"), o.classList.add("active"));
    });
  });

   // auth tabs
   document.querySelectorAll('.dropdown--left [data-tab]').forEach(item => {
    item.addEventListener('click', function(e){
      e.preventDefault();
     
      let dataId = this.getAttribute('data-tab');
      let tabContent = document?.getElementById(dataId);
      document.querySelectorAll('.dropdown--left .tabs-content .tab').forEach(tab => {
        tab.classList.remove('open');
      })
      document.querySelectorAll('.dropdown--left [data-tab]').forEach(link => {
        link.classList.remove('active')
      })
      tabContent.classList.add('open');
      this.classList.add('active');
      console.log(tabContent);
    })
  });


  
  if(window.screen.width <= 768){
    document.querySelector('.header__search').addEventListener('focus', function(){
      document.querySelector('body').classList.add('search-open');
      document.querySelector('body').classList.add('overflow-hidden')
    })

    document.querySelector('.header__search-close').addEventListener('click', function(){
      document.querySelector('body').classList.remove('search-open');
      document.querySelector('body').classList.remove('overflow-hidden')
    })


    document.querySelector('.header__city').addEventListener('click', function(){
      document.querySelector('.dropdown__city').classList.add('open');
    })
    document.querySelector('.dropdown__city-close').addEventListener('click', function(){
      document.querySelector('.dropdown__city').classList.remove('open');
    })
    
  }else{
    document.querySelector('.header__search').addEventListener('focus', function(){
      document.querySelector('body').classList.add('search-open');
      document.querySelector('body').classList.add('overflow-hidden')
    })
  
    document.querySelector('.header__search').addEventListener('blur', function(){
      document.querySelector('body').classList.remove('search-open');
      document.querySelector('body').classList.remove('overflow-hidden')
    })
  }



  document.querySelectorAll('.form-validate').forEach(form => {
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let inputs = form.querySelectorAll('input');
      let failValidate = false;
      document.querySelectorAll('.input-error').forEach(error => error.remove());
      document.querySelectorAll('.invalid').forEach(input => input.classList.remove('invalid'));
      inputs.forEach(input => {

          if(input.hasAttribute('data-required') && input.value.length < 3 && !input.classList.contains('checkbox__input')){
            failValidate = true;
            input.insertAdjacentHTML('afterend', '<p class="input-error">Обязательное поле</p>');
            input.classList.add('invalid');
          }else if(input.classList.contains('checkbox__input') && !input.checked){
            failValidate = true;
            input.closest('.checkbox').classList.add('invalid');
          }
      })

      if(failValidate){
        return false;
      }else{
        document.querySelectorAll('.input-error').forEach(error => error.remove());
        document.querySelectorAll('.invalid').forEach(input => input.classList.remove('invalid'));
        OpenStateFormModal('Регистрация прошла успешно', 'Теперь вы можете добавить свой автомобиль и найти любые автозапчасти в 3 клика');
      }
    })
  })


  document.querySelectorAll('.form-validate button').forEach(button => {
    if(!button.classList.contains('dropdown__close') || !button.classList.contains('--svg__eye_close')){
      button.addEventListener('click', function(){
        button.closest('.form-validate')?.submit;
      })
    }
  })


  document.querySelectorAll('.filter-link').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      if(this.classList.contains('parts-list__box')){
        var filterLinks = this.closest('.parts-list__overhead').querySelectorAll('.filter-link');
      }else{
        var filterLinks = this.closest('.modal__overhead').querySelectorAll('.filter-link');
      }
      filterLinks.forEach(item => {
        if(item !== this){
          item.classList.remove('arrow-top');
          item.classList.remove('arrow-bottom');
        }
      });

      if(this.classList.contains('arrow-top')){
        this.classList.remove('arrow-top');
        this.classList.add('arrow-bottom');
      }else if(this.classList.contains('arrow-bottom')){
        this.classList.remove('arrow-bottom');
        this.classList.add('arrow-top');
      }else{
        this.classList.add('arrow-top');
      }
      
    })
  })
  


  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };



 


 

});


document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
      isEscape = (evt.keyCode === 27);
  }

  if (isEscape) {
      closeAllModal();
  }
};


function closeAllModal(){
  let modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.remove('open');
  })

  document.querySelector('body').classList.remove('overflow-hidden');
  document.querySelector('.overlay').classList.remove('open');

}
  
  