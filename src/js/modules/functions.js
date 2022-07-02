import Swiper, { Navigation, Pagination, Controller } from 'swiper';
import Inputmask from "inputmask/bundle.js";
import JustValidate from 'just-validate';
import AOS from 'aos';


export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger')
    // const closeBtn = document.querySelector('.header-menu__close')
    const header = document.querySelector('.header')
    const menu = document.querySelector('.header-menu')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')


    let toggleBurger = (e) => {
      e.preventDefault()

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active')
        header.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')

        if (window.innerWidth > 767 && window.innerWidth < 1201) {
          content.forEach((item) => {
            item.style.maxWidth = `1160px`
            item.style.padding = ` 0 36px`
          })
        } else if (window.innerWidth > 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `1160px`
            item.style.padding = ` 0 20px`
          })
        }

        // if (window.innerWidth > 767 && window.innerWidth < 1201) {
        //   content.forEach((item) => {
        //     item.style.maxWidth = `1160px`
        //     item.style.padding = ` 0 36px`
        //   })
        // } else {
        //   content.forEach((item) => {
        //     item.style.maxWidth = `1160px`
        //     item.style.padding = ` 0 20px`
        //   })
        // }

      } else {
        openBtn.classList.add('active')
        header.classList.add('active')
        menu.classList.add('active')
        body.classList.add('lock')

        if (window.innerWidth > 767 && window.innerWidth < 1201) {
          content.forEach((item) => {
            item.style.maxWidth = `${1160 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 36}px 0 36px`
          })
        } else if (window.innerWidth > 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `${1160 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
          })
        }

        // if (window.innerWidth > 767 && window.innerWidth < 1201) {
        //   content.forEach((item) => {
        //     item.style.maxWidth = `${1160 + scrollWidth}px`
        //     item.style.padding = ` 0 ${scrollWidth + 36}px 0 36px`
        //   })
        // } else {
        //   item.style.maxWidth = `${1160 + scrollWidth}px`
        //   item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
        // }
      }
    }

    openBtn.addEventListener('click', toggleBurger)
    // closeBtn.addEventListener('click', toggleBurger)
  }
}

export const sliderEmployees = () => {
  let sliderEmployeesMain = new Swiper('.slider-employee-main', {
    modules: [Controller],
    slidesPerView: 1,
    watchSlidesProgress: true,
    loop: true,
  });

  let sliderEmployeesInfo = new Swiper('.slider-employee-info', {
    modules: [Navigation, Pagination, Controller],
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slider-employee-info-next',
      prevEl: '.slider-employee-info-prev',
    },
    pagination: {
      el: '.employees-col__info-pagination',
    },
  });

  sliderEmployeesMain.controller.control = sliderEmployeesInfo
  sliderEmployeesInfo.controller.control = sliderEmployeesMain
}

export const sliderReviews = () => {
  let sliderEmployeesMain = new Swiper('.reviews-slider', {
    modules: [Navigation, Pagination],
    // slidesPerView: 'auto',
    spaceBetween: 24,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
      nextEl: '.reviews-top__navigation-next',
      prevEl: '.reviews-top__navigation-prev',
    },
    pagination: {
      el: '.reviews-slider__pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
      },
    }
  });
}

export const sliderCertificates = () => {
  let sliderEmployeesMain = new Swiper('.certificates-slider', {
    modules: [Navigation, Pagination],
    // slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 1,
    // autoHeight: true,
    navigation: {
      nextEl: '.certificates-top__navigation-next',
      prevEl: '.certificates-top__navigation-prev',
    },
    pagination: {
      el: '.certificates-slider__pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
      },
    }
  });
}

export const sliderServices = () => {
  let sliderEmployeesMain = new Swiper('.services-slider-slider', {
    modules: [Navigation, Pagination],
    // slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    // autoHeight: true,
    navigation: {
      nextEl: '.services-slider-top__navigation-next',
      prevEl: '.services-slider-top__navigation-prev',
    },
    pagination: {
      el: '.services-slider-slider__pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
    }
  });
}

export const wordSlice = () => {
  const paragraphs = document.querySelectorAll('.faq-body__content-item')

  paragraphs.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('preview-show-btn')) {
        item.classList.add('show')
      }
    })
  })
}

export const showMore = () => {
  const moreItems = document.querySelectorAll('.employee-descr__content-col')

  moreItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('shom-more-btn')) {
        item.classList.contains('show')
          ? item.classList.remove('show')
          : item.classList.add('show')
      }
    })
  })
}

export const modalEmployee = () => {
  if (document.querySelector('.modal-employee')) {

    const employeeList = [
      {
        id: 'employee01',
        img: '04.jpg',
        img2x: '04@2x.jpg',
        name: 'Киров Александр',
        pos: 'Адвокат коллегии адвокатов г. Москвы',
        text: '<p>Окончил юридический факультет Московского Государственного университета Министерства внутренних дел РФ в 2007 году.</p><p>После окончания университета поступил на государственную службу в структуру правоохранительных органов, получив неоспоримый опыт, спустя несколько лет завершил службу в правоохранительной системе и перешел в частную практику, защищая клиентов от уголовного преследования, а в дальнейшем присовокупил к практике и гражданское направление, в котором также практикует уже более восьми лет. <br/> В 2017 году сдал квалификационный экзамен и получил статус адвоката. </p><p> Имея обширную юридическую базу и практику, специализируется на защите интересов клиентов в государственных органах и судах общей юрисдикции.</p>'
      },
      {
        id: 'employee02',
        img: '01.jpg',
        img2x: '01@2x.jpg',
        name: 'Никишков Денис',
        pos: 'Решение вопросов в области земельного права',
        text: '<p>Окончил юридический факультет Московского Государственного университета МВД России.</p><p>Личный опыт в этой сфере начался с 2008 года, в статусе специалиста по недвижимости в одной из крупнейших компаний Москвы по направлению коммерческой недвижимости.</p><p>После нескольких лет опыта в крупной компании занялся частной практикой в сфере жилой и коммерческой недвижимости. Имеет высокий опыт и репутацию, специализируется на сопровождениях сделок, регулирования споров и администрирования с государственными и муниципальными органами.</p>'
      },
      {
        id: 'employee03',
        img: '03.jpg',
        img2x: '03@2x.jpg',
        name: 'Сафронова Мария',
        pos: 'Ипотечное кредитование',
        text: '<p>Имеет два высших образования в сфере финансов. После обучения, начиная с 2005 года начала трудовую и профессиональную деятельность в области финансов в банковском секторе. </p><p>Спустя год сосредоточилась на профильном направлении по ипотечному кредитованию, заняв должность кредитного аналитика в отделе по работе с крупнейшими партнерами банка – застройщиками и ведущими агентствами недвижимости. </p><p>В дальнейшем работала на различных руководящих должностях по ипотечному кредитования крупнейших банков страны: ВТБ, ДОМ.РФ, Открытие, Газпромбанк.</p>'
      },
      {
        id: 'employee04',
        img: '05.jpg',
        img2x: '05@2x.jpg',
        name: 'Фейзрахманов Ильдар ',
        pos: 'Руководитель компании',
        text: '<p>Окончил Московскую Финансово Промышленную академию по специальности менеджер организации.</p><p>Опыт работы в сфере коммерческой недвижимости, начиная с 2006 года, насчитывает  12 лет, 7 из которых в должности руководителя департамента по брокерингу (в подразделение входило 10 бизнес центров Москвы, 2  производственно-складских и имущественных комплекса ).</p><p>Более 3 лет проработал в структуре строительного комплекса – компании, профилирующийся в основном на строительстве объектов многоэтажной жилой застройки (многоквартирные дома с объектами коммерческой и социальной инфраструктуры), занимая должность коммерческого директора.</p> '
      },
      {
        id: 'employee05',
        img: '02.jpg',
        img2x: '02@2x.jpg',
        name: 'Карасева Наталья ',
        pos: 'Сопровождение сделок с недвижимостью',
        text: '<p>Профессиональная деятельность на рынке недвижимости Москвы и Московской области  с 2001 года.</p><p>Работала в компании «МИЦ-Столичный ипотечный центр недвижимости». Сфера деятельности купля-продажа квартир, купля-продажа домов, земельных участков, а также коммерческая недвижимость.</p><p>Работа со всеми ценовыми сегментами, от эконом, до элитного класса. Опыт сложных сделок с материнским капиталом, субсидиями, жилищными сертификатами, сделок с опекой.</p><p>Большой опыт и стаж работы в сфере недвижимости позволяют отстаивать интересы клиента в самых сложных ситуациях</p>'
      },
    ]

    // const openBtn = document.querySelectorAll('.employees-col__info-btn')
    const openBtn = document.querySelectorAll('.employee-info-open-btn')
    const closeBtn = document.querySelectorAll('.modal-employee__content-close')
    const modal = document.querySelector('.modal-employee')

    const modalImg = document.querySelector('.modal-employee__img')
    const modalTitle = document.querySelector('.modal-employee__item-name')
    const modalPos = document.querySelector('.modal-employee__item-pos')
    const modalText = document.querySelector('.modal-employee__item-info')

    const modalBg = document.querySelector('.modal-employee__bg')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')
    const mainImg = document.querySelector('.main__image')

    let toggleModal = (e) => {
      e.preventDefault()
      // let img = document.createElement('img');

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        // img.remove()
        modal.classList.remove('active')
        body.classList.remove('lock')

        if (window.innerWidth > 992 && window.innerWidth < 1201) {
          content.forEach((item) => {
            item.style.maxWidth = `1160px`
            item.style.padding = ` 0 36px`
          })
        } else if (window.innerWidth > 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `1160px`
            item.style.padding = ` 0 20px`
            mainImg.style.padding = ` 0 0 45%`
            mainImg.style.flex = ` 0 0 50%`
            mainImg.style.transform = `translate(-100%, 0)`
          })
        }
      } else {
        modal.classList.add('active')
        body.classList.add('lock')
        // e.target.dataset.employee

        // modalTitle.innerHTML = employeeList.forEach(item => {
        //   if (item.id === e.target.dataset.employee) {
        //     console.log(item.name);
        //     return item.name
        //   }
        // })

        employeeList.forEach(item => {
          if (item.id === e.target.dataset.employee) {
            // img.src = `./img/employee-card/${item.img}`
            // img.srcset = `./img/employee-card/${item.img} 1x, ./img/employee-card/${item.img2x} 2x`
            // modalImg.append(img);
            modalImg.src = `./img/employee-card/${item.img}`
            modalImg.srcset = `./img/employee-card/${item.img} 1x, ./img/employee-card/${item.img2x} 2x`
            modalTitle.innerHTML = item.name
            modalPos.innerHTML = item.pos
            modalText.innerHTML = item.text
          }
        })

        if (window.innerWidth > 992 && window.innerWidth < 1201) {
          content.forEach((item) => {
            item.style.maxWidth = `${1160 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 36}px 0 36px`
          })
        } else if (window.innerWidth > 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `${1160 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
            mainImg.style.padding = ` 0 0 calc(45% - ${scrollWidth / 2}px)`
            mainImg.style.flex = ` 0 0 calc(50% - ${scrollWidth / 2}px)`
            mainImg.style.transform = `translate(calc(-100% - ${scrollWidth}px), 0)`
          })
        }
      }
    }

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    closeBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    modalBg.addEventListener('click', toggleModal)
  }
}

export const modalForm = () => {
  if (document.querySelector('.modal-form')) {
    const openBtn = document.querySelectorAll('.modal-form-open-btn')
    const closeBtn = document.querySelectorAll('.modal-form__content-close')
    const modal = document.querySelector('.modal-form')
    const modalBg = document.querySelector('.modal-form__bg')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')
    const mainImg = document.querySelector('.main__image')

    let toggleModal = (e) => {
      e.preventDefault()

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active')
        body.classList.remove('lock')
        if (window.innerWidth > 992 && window.innerWidth < 1201) {
          content.forEach((item) => {
            item.style.maxWidth = `1160px`
            item.style.padding = ` 0 36px`
          })
        } else if (window.innerWidth > 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `1160px`
            item.style.padding = ` 0 20px`
            mainImg.style.padding = ` 0 0 45%`
            mainImg.style.flex = ` 0 0 50%`
            mainImg.style.transform = `translate(-100%, 0)`
          })
        }
      } else {
        modal.classList.add('active')
        body.classList.add('lock')
        if (window.innerWidth > 992 && window.innerWidth < 1201) {
          content.forEach((item) => {
            item.style.maxWidth = `${1160 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 36}px 0 36px`
          })
        } else if (window.innerWidth > 1200) {
          content.forEach((item) => {
            console.log(scrollWidth);
            item.style.maxWidth = `${1160 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
            mainImg.style.padding = ` 0 0 calc(45% - ${scrollWidth / 2}px)`
            mainImg.style.flex = ` 0 0 calc(50% - ${scrollWidth / 2}px)`
            mainImg.style.transform = `translate(calc(-100% - ${scrollWidth}px), 0)`
          })
        }
      }
    }

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    closeBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    modalBg.addEventListener('click', toggleModal)
  }
}

export const masks = () => {
  const callbackForm = document.querySelector('.callback-form')
  const telSelector = document.querySelectorAll('input[type="tel"]')
  const dateSelector = document.querySelectorAll('.date-mask')
  const timeSelector = document.querySelectorAll('.time-mask')

  const inputMaskTel = Inputmask({ "mask": '+7 (999) 999 - 99 - 99' })
  const inputMaskDate = Inputmask({ "mask": '99 - 99 - 2022' })
  const inputMaskTime = Inputmask({ "mask": '99:99' })

  inputMaskTel.mask(telSelector)
  inputMaskDate.mask(dateSelector)
  inputMaskTime.mask(timeSelector)
}

export const validateCallback = () => {
  if (document.querySelector('.callback-form')) {
    const validateCallback = new JustValidate('.callback-form');
    validateCallback.addField('.input-name', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя'
      }
    ]).addField('.input-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите номер'
      }
    ]).onSuccess((event) => {
      let formData = new FormData(event.target)

      let xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Mail send')
            document.querySelector('.callback-body__thank').classList.add('active')
            // setTimeout(() => {
            //   document.querySelector('.callback-body__thank').classList.remove('active')
            // }, 5000)
          }
        }
      }

      xhr.open('POST', 'mail.php', true)
      xhr.send(formData)

      event.target.reset()
    })
  }
}

export const validateModalForm = () => {
  if (document.querySelector('.modal-form-item')) {
    const validateCallback = new JustValidate('.modal-form-item');
    validateCallback.addField('.input-name', [
      {
        rule: 'required',
        value: true
      }
    ]).addField('.input-tel', [
      {
        rule: 'required',
        value: true
      }
    ]).addField('.input-date', [
      {
        rule: 'required',
        value: true
      }
    ]).onSuccess((event) => {
      let formData = new FormData(event.target)

      let xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Mail send')
            document.querySelector('.modal-form__thank').classList.add('active')
            // setTimeout(() => {
            //   document.querySelector('.modal-form__thank').classList.remove('active')
            //   document.querySelector('.modal-form').classList.remove('active')
            //   if (document.querySelector('body').classList.contains('lock')) {
            //     document.querySelector('body').classList.remove('lock')
            //   }
            // }, 5000)
          }
        }
      }

      xhr.open('POST', 'mail.php', true)
      xhr.send(formData)

      event.target.reset()
    })
  }
}

export const aosAnim = () => {
  AOS.init({
    once: true,
  });
}

export const playViedeo = () => {
  if (document.querySelector('.iframe-video-container')) {
    const videoContainer = document.querySelector('.iframe-video-container')
    // const videoPlayBtn = document.querySelector('.recomend__video-btn')
    const videoPlayBtn = document.querySelector('.play-video-btn')

    videoPlayBtn.addEventListener('click', (e) => {
      e.preventDefault()
      videoContainer.classList.add('show')
    })
  }
}

export const lazyIframeIndex = () => {
  if (document.querySelector('.iframe-video-container-index')) {
    let iframeVideo = document.createElement('iframe');

    iframeVideo.src = 'https://www.youtube.com/embed/xDpj2ioYjuY'
    iframeVideo.title = 'YouTube video player'
    iframeVideo.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    iframeVideo.allowFullscreen

    let fired = false
    window.addEventListener('scroll', () => {
      if (fired === false) {
        fired = true;

        setTimeout(() => {

          document.querySelector('.iframe-video-container-index').append(iframeVideo);

        }, 100)
      }
    });
  }
}

export const lazyIframeLand = () => {
  if (document.querySelector('.iframe-video-container-land')) {
    let iframeVideo = document.createElement('iframe');

    iframeVideo.src = 'https://www.youtube.com/embed/xDpj2ioYjuY'
    iframeVideo.title = 'YouTube video player'
    iframeVideo.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    iframeVideo.allowFullscreen

    let fired = false
    window.addEventListener('scroll', () => {
      if (fired === false) {
        fired = true;

        setTimeout(() => {

          document.querySelector('.iframe-video-container').append(iframeVideo);

        }, 100)
      }
    });
  }
}

export const lazyIframeEstate = () => {
  if (document.querySelector('.iframe-video-container-estate')) {
    let iframeVideo = document.createElement('iframe');

    iframeVideo.src = 'https://www.youtube.com/embed/xDpj2ioYjuY'
    iframeVideo.title = 'YouTube video player'
    iframeVideo.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    iframeVideo.allowFullscreen

    let fired = false
    window.addEventListener('scroll', () => {
      if (fired === false) {
        fired = true;

        setTimeout(() => {

          document.querySelector('.iframe-video-container').append(iframeVideo);

        }, 100)
      }
    });
  }
}

export const lazyIframeMort = () => {
  if (document.querySelector('.iframe-video-container-mort')) {
    let iframeVideo = document.createElement('iframe');

    iframeVideo.src = 'https://www.youtube.com/embed/xDpj2ioYjuY'
    iframeVideo.title = 'YouTube video player'
    iframeVideo.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    iframeVideo.allowFullscreen

    let fired = false
    window.addEventListener('scroll', () => {
      if (fired === false) {
        fired = true;

        setTimeout(() => {

          document.querySelector('.iframe-video-container').append(iframeVideo);

        }, 100)
      }
    });
  }
}

export const lazyMap = () => {
  if (document.querySelector('.map__item')) {
    let mapContainer = document.createElement('script');

    mapContainer.type = 'text/javascript'
    mapContainer.charset = 'utf-8'
    mapContainer.async
    mapContainer.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8b06dd332142d938149fe6e387fba3f362b9e64031ecaac5f47b0578f8305016&amp;lang=ru_RU&amp;scroll=true'

    let fired2 = false
    window.addEventListener('scroll', () => {
      if (fired2 === false) {
        fired2 = true;

        setTimeout(() => {

          document.querySelector('.map__item').append(mapContainer)

        }, 100)
      }
    });

    // window.setTimeout(() => {
    //   document.querySelector('.map__item').append(mapContainer)
    //   // mapContainer.innerHTML = '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8b06dd332142d938149fe6e387fba3f362b9e64031ecaac5f47b0578f8305016&amp;lang=ru_RU&amp;scroll=true"></script>'
    // }, 100)
  }
}