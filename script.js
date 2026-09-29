document.addEventListener('DOMContentLoaded', () => {

  // Mobile navigation
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('active'));

    nav.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => nav.classList.remove('active'))
    );
  }


  // More dropdown on touch/mobile
  document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {

    toggle.addEventListener('click', e => {

      e.preventDefault();

      const parent = toggle.closest('.nav-dropdown');

      const open = parent.classList.toggle('open');

      toggle.setAttribute('aria-expanded', String(open));

    });

  });


  // Product prices used in enquiry messages and WhatsApp.
  const productPrices = {

    'Mini theatre': '₹ 2,99,999.00',

    '2.1 Home Theatre': '₹ 5,499.00',

    '5.1 HDMI Dolby Atoms': '₹ 27,999.00',

    '5.1 Basic Manual Home Theatre': '₹ 7,999.00',

    '5.1 premium Amplifer': '₹ 13,999.00',

    '7.1 Home Theatre': '₹ 27,999.00',

    '5.1 Basic Remote Model HDMI Home Theatre': '₹ 19,999.00',

    'Dolby Digital Plus HDMI Amplifer': '₹ 11,999.00',

    '5.1 complete package Home Theatre': '₹ 33,999.00',

    '5.1 Dolby Atoms & Dolby Digital Plus Home Theatre': '₹ 34,999.00',

    'True Dolby Atoms 9 Track Complete Package Home Theatre': '₹ 74,000.00',

    'Dolby Atoms 5.1 Complete Package': '₹ 27,999.00',

    '5.1 Home Theatre': '₹ 16,999.00',

    'mini movie theater': '₹ 6,99,999.00',

    '5.1 premium home Theatre': '₹ 27,999.00',

    'luxury movie theater': '₹ 7,99,999.00'

  };


  const getProductPrice = (name) => {
    if (!name) return 'Price on request';
    // Case-insensitive lookup and trim to match prices accurately
    const foundKey = Object.keys(productPrices).find(
      key => key.toLowerCase() === name.trim().toLowerCase()
    );
    return foundKey ? productPrices[foundKey] : 'Price on request';
  };


  // =========================================================
  // WHATSAPP FUNCTION
  // =========================================================

  const DSS_WHATSAPP_NUMBER = '917799345699';


  function openWhatsApp(productName = 'General Enquiry') {

    const price = getProductPrice(productName);

    const message = `D S S AUDIOS,\n` 
    + `I am interested in your ${productName} (Price: ${price}).\n`
    + `Thank you.`;

    const waUrl =
      `https://wa.me/${DSS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');

  }


  // Product data for the details modal
  const productsData = {

    'off-grid': {
      category: 'Mini theatre',
      name: 'Mini theatre',
      image: 'images/mini1.png',
      desc: 'Experience the Ultimate Cinema at Home positions D.S.S Audios as a provider of a complete home-cinema experience rather than just an audio system.',
      features: [
        'Complete Acoustic',
        'Premium Sofa Recliners',
        '4K projector & UHD 3D Screen',
        'Complete 7.2 Audio Package'
      ]
    },


    'on-grid': {
      category: 'Home theatre',
      name: '2.1 Home theatre',
      image: 'images/2.1.png',
      desc: 'enjoy clear stereo sound with a dedicated subwoofer for deep, rich bass.A compact and stylish setup, ideal for bedrooms, living rooms, and smaller spaces.',
      features: [
        'Dolby 2.1 Amplifer',
        'Bluetooth, Usb, Aux',
        '3 Inch Boxs & 8 Inch Woofer',
        'Multiple Connectivity'
      ]
    },


    'residential': {
      category: 'home theatre',
      name: '5.1 HDMI Dolby Atoms',
      image: 'images/5.1dolbyatoms.jpeg',
      desc: 'Experience immersive, cinematic sound with our 5.1 Dolby Atmos Home Theatre, delivering rich audio,powerful bass, and detailed surround sound.Perfect for movies, music, gaming, and entertainment, bringing a theatre-like audio experience right intoyour home.',
      features: [
        'HDMI, Optical, Coixel & Bluetooth',
        'Usb 3.0 & Aux',
        '6 Inch Satellites & JBL 12 Inch 1500 Watt SubWoofer',
        'Limited 1 year Warrenty'
      ]
    },


    'industrial': {
      category: 'Home Theatre',
      name: '5.1 Basic Manual Home Theatre',
      image: 'images/5.1basic.jpeg',
      desc: 'Enjoy powerful, high-quality surround sound with the 5.1 Basic Home Theatre, featuring 3-inch satellitespeakers and an 8-inch subwoofer.',
      features: [
        '3-Inch Satellite & 8-Inch Subwoofer',
        'Optical, Coixel & Bluetooth',
        'Usb 2.0 & Aux',
        'Budget-Friendly Complete Package'
      ]
    },


    'power-plants': {
      category: 'Home Theatre',
      name: '5.1 premium Amplifer',
      image: 'images/5.1premiummodelamplifier.jpeg',
      desc: 'Experience cinematic sound with Dolby Atmos and DTS:X 5.1, delivering immersive surround sound and powerful audio for movies, music, and gaming.',
      features: [
        'Dolby Atmos & DTS:X 5.1',
        'HDMI ARC, Optical, Coaxial',
        'DTS-HD Master Audio',
        'Enhanced digital sound processing'
      ]
    },


    'ev-charging': {
      category: 'Home Theatre',
      name: '7.1 Home Theatre',
      image: 'images/7.1.png',
      desc: 'Experience powerful 7.1-channel surround sound with Dolby Atmos, delivering crystal-clear audio, deep bass, and an immersive theatre experience at home.',
      features: [
        'HDMI, Optical, Coixel & Bluetooth',
        'Usb 2.0 & Aux',
        '4 Inch Satellites & JBL 12 Inch 1500 Watt SubWoofer',
        'Limited 1 year Warrenty'
      ]
    },


    'fencing': {
      category: 'Home Theatre',
      name: '5.1 Basic Remote Model HDMI Home Theatre',
      image: 'images/5.1 basic remote.png',
      desc: 'Enjoy immersive 5.1-channel surround sound with clear dialogue, powerful bass, and a cinematic audio experience at home.',
      features: [
        'HDMI, Optical, Coixel & Bluetooth',
        'Usb 2.0 & Aux',
        '6 Inch rare & 4 Inch Front & 4 Inch Center',
        'JBL 12 Inch 1500 Watt SubWoofer'
      ]
    },


    'solar-wind': {
      category: 'Home Theatre',
      name: 'Dolby Digital Plus HDMI Amplifer',
      image: 'images/hdmiamplifer.jpeg',
      desc: 'Experience powerful and immersive Dolby Digital Plus surround sound with clear dialogue, rich details, and deep bass for a cinematic audio experience.',
      features: [
        'Basic HDMI Optical',
        'Coaxel & Bluetooth',
        'Usb & Aux',
        'Limited 1 year Warrenty'
      ]
    },


    'water-heaters': {
      category: 'Home Theatre',
      name: '5.1 complete package',
      image: 'images/5.1completepackage.jpeg',
      desc: 'Enjoy a complete 5.1-channel surround sound system with powerful bass, clear dialogue, and immersive audio for movies and music.',
      features: [
        'HDMI, Arc, Optical, Coaxel, bluetooth',
        'Usb 3.0, Aux Inputs',
        '6 Inch JBL Boxes & Kicker 2800 Watt Subwoofer',
        '1 Year Warrenty'
      ]
    },


    'street-lighting': {
      category: 'Home Theatre',
      name: '5.1 Dolby Atoms & Dolby Digital Plus Home Theatre',
      image: 'images/5.1da&dd+completepackage.jpeg',
      desc: 'Experience immersive 5.1-channel surround sound with Dolby Atmos and Dolby Digital Plus, delivering crystal-clear dialogue, rich details, and deep bass.',
      features: [
        'HDMI, Arc, Optical, Coaxel, bluetooth',
        'Usb 3.0, Aux Inputs',
        'Primimum Model 4 Inch JBL Boxes & 1500 Watt 12 Inch JBL Subwoofer',
        '1 Year Warrenty'
      ]
    },


    'cold-storage': {
      category: 'Home Theatre',
      name: 'True Dolby Atoms 9 Track Complete Package Home Theatre',
      image: 'images/9trackDA.jpeg',
      desc: 'Experience true Dolby Atmos 9-track surround sound with immersive audio, powerful bass, and crystal-clear details for a realistic cinematic experience.',
      features: [
        'HDMI Inputs 3, HDMI EArc 1, Optical, Coaxel, Bluetooth, Usb, Aux',
        'Dual Amplifer Support 6 Inch Dolby Atoms Satllites',
        'Selling Satllites 12 Inch JBL Dual SubWooffer',
        'Dolby Audio, 4k UHD Video Support'
      ]
    },


    'solar-ac': {
      category: 'Home Theatre',
      name: 'Dolby Atoms 5.1 Complete Package',
      image: 'images/DA5.1CompletePackage.jpeg',
      desc: 'Enjoy immersive 5.1-channel Dolby Atmos surround sound with powerful bass, crystal-clear dialogue, and detailed audio effects.',
      features: [
        'HDMI, Arc, Optical, Coaxel, bluetooth',
        'Usb 3.0, Aux Inputs',
        '6 Inch Satellites & JBL 12 Inch 1500 Watt SubWoofer',
        'Limited 1 year Warrenty'
      ]
    },


    'solar-cctv': {
      category: 'Home Theatre',
      name: '5.1 Home Theatre',
      image: 'images/5.1 basic.png',
      desc: 'Enjoy an immersive surround-sound experience with our 5.1 Basic Home Theatre, featuring five speakers and a powerful subwoofer for clear vocals, detailed audio, and deep bass.',
      features: [
        'Optical, Coixel & Bluetooth',
        'Usb 2.0 & Aux',
        '4 Inch Satellites & 12 Inch JBL 1500 Watt SubWoofer',
        'Limited 1 year Warrrty'
      ]
    },


    'fixed-cctv': {
      category: 'movie theater',
      name: 'mini movie theater',
      image: 'images/luxury movie theater.jpg',
      desc: 'Experience a premium cinematic atmosphere with immersive surround sound, powerful bass, and a luxurious theatre-room setup.',
      features: [
        '4K Ultra HD home cinema projector',
        '7.2.4 Dolby Atmos surround sound system',
        'Premium comfortable recliner seating',
        'High-quality movie viewing experience'
      ]
    },


    'ptz-cctv': {
      category: 'Premium home Theatre',
      name: '5.1 premium Home Theatre',
      image: 'images/5.1 premium.jpeg',
      desc: 'Enjoy immersive cinematic sound with the 5.1 Premium Home Theatre, featuring 6-inch satellite speakers and a powerful JBL 12-inch 1500W subwoofer.',
      features: [
        'HDMI ARC, Optical, Coaxal, Bluetooth',
        'Usb 3.0 & Aux',
        '6 Inch Satellites & JBL 12 Inch 1500 Watt SubWoofer',
        'Limited 1 year Warrenty'
      ]
    },

    'solar-light-cctv': {
      category: 'movie theater',
      name: 'luxury movie theater',
      image: 'images/mini movie theatre.jpg',
      desc: 'A premium luxury movie theatre designed for an immersive cinematic experience, featuring plush recliner seating, a large projection screen, and elegant acoustic interiors.',
      features: [
        '4K Ultra HD Laser Projector & Screen',
        '7.2.4 Full Dolby Atmos Home Theatre',
        'Luxury motorized recliner seating',
        'immersive 3D surround sound.'
      ]
    }

  };


  // =========================================================
  // PRODUCT MODAL SETUP
  // =========================================================

  const modalOverlay = document.createElement('div');

  modalOverlay.className = 'modal-overlay';

  modalOverlay.innerHTML = `
    <div class="product-modal">

      <div class="modal-header">
        <h3>Product Details</h3>

        <button
          class="modal-close"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      <div class="modal-body">

        <div class="modal-img-container">
          <img
            id="modalImg"
            src=""
            alt="Product Image"
          >
        </div>

        <div class="modal-details">

          <h4 id="modalCategory">
            Category
          </h4>

          <h2 id="modalTitle">
            Product Name
          </h2>

          <p id="modalDesc">
            Description
          </p>

          <div class="modal-features">

            <h5>
              Key Features & Benefits
            </h5>

            <ul id="modalFeaturesList"></ul>

          </div>

          <div class="modal-actions">

            <button
              id="modalEnquireBtn"
              class="btn btn-primary"
            >
              <i class="fas fa-envelope"></i>
              Enquire Now
            </button>

            <a
              id="modalWhatsAppBtn"
              href="#"
              target="_blank"
              rel="noopener"
              class="btn btn-gold"
              style="background-color:#25D366;color:#fff"
            >
              <i class="fab fa-whatsapp"></i>
              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modalOverlay);


  // Close modal
  const closeModal = () =>
    modalOverlay.classList.remove('active');


  modalOverlay
    .querySelector('.modal-close')
    .addEventListener('click', closeModal);


  modalOverlay.addEventListener('click', e => {

    if (e.target === modalOverlay) {
      closeModal();
    }

  });


  document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {
      closeModal();
    }

  });


  // =========================================================
  // CONTACT PAGE FUNCTION
  // =========================================================

  function goToContact(productName = 'General Enquiry') {

    window.location.href =
      `contact.html?product=${encodeURIComponent(productName)}`;

  }


  // =========================================================
  // OPEN PRODUCT MODAL
  // =========================================================

  function openProductModal(id) {

    const product = productsData[id];

    if (!product) return;


    document.getElementById('modalImg').src =
      product.image;


    document.getElementById('modalCategory').textContent =
      product.category;


    document.getElementById('modalTitle').textContent =
      product.name;


    document.getElementById('modalDesc').textContent =
      product.desc;


    const list =
      document.getElementById('modalFeaturesList');

    list.innerHTML = '';


    product.features.forEach(f => {

      const li = document.createElement('li');

      li.innerHTML =
        `<i class="fas fa-check-circle"></i> ${f}`;

      list.appendChild(li);

    });


    // =======================================================
    // WHATSAPP BUTTON FOR CURRENT PRODUCT
    // =======================================================

    const productPrice = getProductPrice(product.name);
    const whatsappMessage =
      `D S S AUDIOS,\n` +
      `I am interested in your ${product.name} (Price: ${productPrice}).\n` +
      `Thank you.`;

    const whatsappUrl =
      `https://wa.me/${DSS_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


    document.getElementById('modalWhatsAppBtn').href =
      whatsappUrl;


    // =======================================================
    // ENQUIRE NOW BUTTON
    // OPENS WHATSAPP DIRECTLY WITH PRODUCT & PRICE
    // =======================================================

    document.getElementById('modalEnquireBtn').onclick = () => {

      openWhatsApp(product.name);

    };


    modalOverlay.classList.add('active');

  }


  // =========================================================
  // MORE / VIEW PRODUCT BUTTON
  // =========================================================

  document
    .querySelectorAll('.more-btn')
    .forEach(btn => {

      btn.addEventListener('click', e => {

        e.preventDefault();

        openProductModal(
          btn.dataset.product
        );

      });

    });


  // =========================================================
  // PRODUCT CARD ENQUIRE BUTTON
  // OPENS WHATSAPP DIRECTLY
  // =========================================================

  document
    .querySelectorAll('.enquire-card-btn')
    .forEach(btn => {

      btn.addEventListener('click', e => {

        e.preventDefault();


        const card =
          btn.closest('.product-card');


        let productName =
          card?.querySelector('.product-name')?.textContent.trim() ||
          btn.dataset.productName;

        // Fallback: if card ID/key is used, map it to the actual product name
        if (!productName && btn.dataset.product && productsData[btn.dataset.product]) {
          productName = productsData[btn.dataset.product].name;
        }

        openWhatsApp(productName || 'General Enquiry');

      });

    });


  // =========================================================
  // REVEAL WHY JBS UNIVERSE CONTENT
  // =========================================================

  const whyMore =
    document.getElementById('whyViewMore');


  const whyExtras =
    document.querySelectorAll('.why-extra-card');


  if (whyMore && whyExtras.length) {

    whyMore.addEventListener('click', () => {

      const expanded =
        whyMore.classList.toggle('expanded');


      whyExtras.forEach(card =>
        card.classList.toggle(
          'is-visible',
          expanded
        )
      );


      whyMore.innerHTML =
        expanded
          ? 'View Less <i class="fas fa-chevron-up"></i>'
          : 'View More <i class="fas fa-chevron-down"></i>';

    });

  }


  // =========================================================
  // SELECT PRODUCT FROM URL PARAMETERS
  // ON CONTACT PAGE
  // =========================================================

  const productSelect =
    document.getElementById('selectProduct');


  const params =
    new URLSearchParams(
      window.location.search
    );


  const requestedProduct =
    params.get('product');


  if (productSelect && requestedProduct) {

    const option =
      [...productSelect.options].find(o =>

        o.value.toLowerCase() ===
          requestedProduct.toLowerCase() ||

        o.textContent.toLowerCase() ===
          requestedProduct.toLowerCase()

      );


    if (option) {
      productSelect.value =
        option.value;
    }

  }


  // =========================================================
  // CONTACT FORM HANDLING
  // =========================================================

  const contactForm =
    document.getElementById('contactForm');


  const formMsg =
    document.getElementById('formSuccessMsg');


  if (contactForm) {

    // Hidden price field is added to the email payload.
    let priceField =
      document.getElementById('productPriceField');


    if (!priceField) {

      priceField =
        document.createElement('input');


      priceField.type =
        'hidden';


      priceField.id =
        'productPriceField';


      priceField.name =
        'price';


      contactForm.appendChild(
        priceField
      );

    }


    contactForm.addEventListener(
      'submit',
      e => {

        e.preventDefault();


        const name =
          document
            .getElementById('clientName')
            ?.value.trim();


        const phone =
          document
            .getElementById('clientPhone')
            ?.value.trim();


        const email =
          document
            .getElementById('clientEmail')
            ?.value.trim();


        const product =
          document
            .getElementById('selectProduct')
            ?.value;


        const replyToField =
          document.getElementById(
            'replyToField'
          );


        if (replyToField) {
          replyToField.value =
            email || '';
        }


        const message =
          document
            .getElementById('clientMessage')
            ?.value.trim();


        const price =
          getProductPrice(product);


        if (formMsg) {

          formMsg.style.display =
            'none';

          formMsg.className =
            'form-success-msg';

        }


        // Required fields validation
        if (
          !name ||
          !phone ||
          !email ||
          !product ||
          !message
        ) {

          if (formMsg) {

            formMsg.style.display =
              'block';

            formMsg.style.color =
              '#e74c3c';

            formMsg.textContent =
              '⚠️ Please fill in all required fields and select a product before submitting.';

          }

          return;

        }


        priceField.value =
          price;


        // ===================================================
        // WHATSAPP MESSAGE FROM CONTACT FORM
        // ===================================================

        const waMessage =
          `D S S AUDIOS Enquiry\n` +
          `Name: ${name}\n` +
          `Phone: ${phone}\n` +
          `Email: ${email}\n` +
          `Product: ${product}\n` +
          `Price: ${price}\n` +
          `Message: ${message}`;


        const waUrl =
          `https://wa.me/${DSS_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;


        const submitBtn =
          contactForm.querySelector(
            'button[type="submit"]'
          );


        if (submitBtn) {

          submitBtn.disabled =
            true;

          submitBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';

        }


        const emailFrame =
          document.getElementById(
            'emailSubmitFrame'
          );


        const oldTarget =
          contactForm.target;


        const oldAction =
          contactForm.action;


        const oldMethod =
          contactForm.method;


        contactForm.target =
          'emailSubmitFrame';


        contactForm.action =
          'https://formsubmit.co/dssaudios@gmail.com';


        contactForm.method =
          'POST';


        // Open WhatsApp immediately
        window.open(
          waUrl,
          '_blank',
          'noopener'
        );


        try {

          contactForm.submit();


          if (formMsg) {

            formMsg.style.display =
              'block';

            formMsg.style.color =
              '#27ae60';

            formMsg.innerHTML =
              `✅ Enquiry submitted with price <strong>${price}</strong>. WhatsApp opened with the same details.`;

          }


          contactForm.reset();


          priceField.value =
            '';

        } catch (err) {

          if (formMsg) {

            formMsg.style.display =
              'block';

            formMsg.style.color =
              '#e67e22';

            formMsg.textContent =
              '⚠️ Could not submit the email request. Please try again or contact us on WhatsApp.';

          }

        } finally {

          contactForm.target =
            oldTarget || '';


          contactForm.action =
            oldAction || '';


          contactForm.method =
            oldMethod || '';


          if (submitBtn) {

            submitBtn.disabled =
              false;

            submitBtn.innerHTML =
              'Send Enquiry <i class="fas fa-paper-plane"></i>';

          }

        }

      }
    );

  }


  // =========================================================
  // TESTIMONIAL SCROLL BUTTON
  // =========================================================

  const testimonialScroller =
    document.getElementById(
      'testimonialScroller'
    );


  const scrollTestimonials =
    document.getElementById(
      'scrollTestimonials'
    );


  if (
    testimonialScroller &&
    scrollTestimonials
  ) {

    scrollTestimonials.addEventListener(
      'click',
      () => {

        const card =
          testimonialScroller.querySelector(
            '.testimonial-card'
          );


        const gap =
          parseFloat(
            getComputedStyle(
              testimonialScroller
            ).gap || '0'
          );


        const step =
          card
            ? card.getBoundingClientRect().width + gap
            : testimonialScroller.clientWidth * 0.85;


        requestAnimationFrame(() => {

          testimonialScroller.scrollBy({
            left: step,
            behavior: 'smooth'
          });

        });

      }
    );

  }

});