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
    "Mini Theatre": "\u20b9 2,99,999.00",
    "True Dolby Atoms 9 Track Home Theatre": "\u20b9 89,999.00",
    "Dolby Atoms Dual Amplifiers": "\u20b9 37,999.00",
    "4 Inch Boxes & 12 Inch Sub": "\u20b9 12,999.00",
    "2.1 Home Theatre": "\u20b9 5,499.00",
    "5.1 Basic Manual Home Theatre": "\u20b9 14,999.00",
    "Dolby Atoms Optical Mode Complete 5.1 Package Home Theatre": "\u20b9 19,999.00",
    "Dolby ATOMS HDMI 5.1 Complete package": "\u20b9 24,999.00",
    "premium Dolby Atoms 5.1 Complete Package Home theatre": "\u20b9 31,999.00",
    "Premium JBL Complete Package Home Theatre": "\u20b9 34,999.00",
    "Premium HDMI Dolby Atoms 5.1 Complete Home Theatre": "\u20b9 38,999.00",
    "premimum DTS-X & Dolby Atoms 5.1 Complete Package Home Theatre": "\u20b9 41,999.00",
    "Dolby Dgital & DTS 5.1 Complete Package Home Theatre": "\u20b9 21,999.00",
    "Dolby Digtal & DTS 5.1 Complete Package Home Theatre": "\u20b9 20,999.00",
    "Dolby Atoms 7.2 Complete Home Theatre With Sparate Power Amplifer": "\u20b9 54,999.00",
    "Dolby Digital Plus or Dolby Atoms Convertable 7.1 or 5.2.1 Ch Home Theatre": "\u20b9 59,999.00",
    "True 7.1 Complete Pakcage Home Theatre": "\u20b9 45,999.00",
    "Dolby 7.1 Basic Home Theatre Package": "\u20b9 27,999.00",
    "True Dolby Atmos 5.2.2 Channel Home Theatre System package": "\u20b9 69,999.00",
    "True Dolby Atmos 5.2.1 Channel Home Theatre System package": "\u20b9 63,999.00",
    "True Dolby Atoms With JBL 15 Inch Subwoofer": "\u20b9 75,999.00",
    "Dolby Atoms 5.1 Home Theatre": "\u20b9 37,999.00",
    "Manual 5.1 Amplifier": "\u20b9 7,999.00",
    "Optical 5.1 Amplifier": "\u20b9 9,999.00",
    "Basic HDMI 5.1 Amplifier": "\u20b9 12,999.00",
    "Preimum HDMI 5.1 Amplifier Model 1": "\u20b9 14,999.00",
    "Astra 5.1 Amplifier model 1": "\u20b9 21,999.00",
    "Astra 5.1 Amplifier Model 2": "\u20b9 23,999.00",
    "Preimum HDMI 5.1 Amplifier Model 2": "\u20b9 15,999.00",
    "Preimum HDMI 5.1 Amplifier Model 3": "\u20b9 15,999.00",
    "Preimum HDMI 5.1 Amplifier Model 4": "\u20b9 18,99.00",
    "Preimum HDMI 5.1 Amplifier Model 5": "\u20b9 22,999.00",
    "Preimum HDMI 7.1 Amplifier M0del 1": "\u20b9 24,999.00",
    "Preimum HDMI 7.1 Amplifier MOdel 2": "\u20b9 24,999.00",
    "True Dolby Atoms Amplifier Model 1": "\u20b9 32,999.00",
    "True Dolby Atoms Amplifier Model 2": "\u20b9 36,999.00",
    "True Dolby Atoms Amplifier Model 3": "\u20b9 39,999.00",
    "True Dolby Atoms Amplifier Model 4": "\u20b9 37,999.00",
    "4 Inch Stallites Boxes": "\u20b9 3,999.00",
    "6 Inch & 4 Inch reference Boxes": "price on request",
    "4 Inch Stallites & 12 Inch JBL 1500 Watt Subwoofer Model 1": "\u20b9 11,999.00",
    "4 Inch Stallites & 12 Inch JBL 1500 Watt Subwoofer Model 2": "\u20b9 11,999.00",
    "6 Inch Stallites & 12 Inch JBL 1500 Watt Subwoofer": "\u20b9 18,999.00",
    "12 Inch JBL 1500 Watt Subwoofer": "\u20b9 8,499.00",
    "6 Inch Towers": "\u20b9 17,999.00",
    "luxury Movie Theatre": "\u20b9 7,99,999.00",
    "mini luxury movie Theatre": "\u20b9 6,99,999.00",
    "mini movie Theatre": "\u20b9 5,99,999.00",
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
    'audio-1': {
      category: "Mini Theatre",
      name: "Mini Theatre",
      image: "images/movietheatre1.webp",
      desc: "Experience the Ultimate Cinema at Home positions D.S.S Audios as a provider of a complete home-cinema experience rather than just an audio system.",
      features: ["Complete Acoustic", "Premium Sofa Recliners", "4K projector & UHD 3D Screen", "Complete 7.2 Audio Package"]
    },

    'audio-2': {
      category: "Home Theatre",
      name: "True Dolby Atoms 9 Track Home Theatre",
      image: "images/image2.webp",
      desc: "Experience immersive, cinema-quality sound with a True Dolby Atmos 9-Track Home Theatre designed for powerful surround effects and crystal-clear dialogue.",
      features: ["", "", "", ""]
    },

    'audio-3': {
      category: "Amplifier",
      name: "Dolby Atoms Dual Amplifiers",
      image: "images/image3.webp",
      desc: "Experience powerful Dolby Atmos surround sound with dual amplifiers delivering clear, detailed audio and deep, impactful bass.",
      features: ["", "", "", ""]
    },

    'audio-4': {
      category: "Boxes",
      name: "Dolby Atoms Speakers Package",
      image: "images/boxes8.webp",
      desc: "Dolby Atmos speaker packages elevate your home entertainment with multidimensional overhead sound, delivering immersive, cinema-quality audio that places you right inside the action.",
      features: ["", "", "", ""]
    },

    'audio-5': {
      category: "Home Theatre",
      name: "2.1 Home Theatre",
      image: "images/image5.webp",
      desc: "enjoy clear stereo sound with a dedicated subwoofer for deep, rich bass.A compact and stylish setup, ideal for bedrooms, living rooms, and smaller spaces.",
      features: ["Dolby 2.1 Amplifer", "Bluetooth, Usb, Aux", "3 Inch Boxs & 8 Inch Woofer", "Multiple Connectivity"]
    },

    'audio-6': {
      category: "Home Theatre",
      name: "5.1 Basic Manual Home Theatre",
      image: "images/image20.webp",
      desc: "Enjoy immersive 5.1 surround sound with clear vocals, detailed effects, and powerful bass for an engaging movie experience.",
      features: ["", "", "", ""]
    },

    'audio-7': {
      category: "Home Theatre",
      name: "Dolby Atoms Optical Mode Complete 5.1 Package Home Theatre",
      image: "images/image7.webp",
      desc: "Experience immersive Dolby Atmos Optical Mode sound with a complete 5.1 home theatre package,delivering rich, powerful audio and cinematic surround sound.",
      features: ["", "", "", ""]
    },

    'audio-8': {
      category: "Home Theatre",
      name: "Dolby Atoms HDMI 5.1 Complete package ",
      image: "images/image8.webp",
      desc: "Experience immersive Dolby Atmos sound with HDMI 5.1 connectivity, delivering powerful, detailed audio for movies, music, and gaming.",
      features: ["", "", "", ""]
    },

    'audio-9': {
      category: "Home Theatre Package",
      name: "premium Dolby Atoms 5.1 Complete Package Home theatre",
      image: "images/image9.webp",
      desc: "Experience immersive Dolby Atmos 5.1 surround sound with powerful bass, crystal-clear dialogue, and detailed cinematic effects.",
      features: ["", "", "", ""]
    },

    'audio-10': {
      category: "Home Theatre Package",
      name: "Premium JBL Complete Package Home Theatre",
      image: "images/image10.webp",
      desc: "Experience powerful JBL sound with crystal-clear audio, deep bass, and immersive surround effects for an exceptional cinematic experience.",
      features: ["", "", "", ""]
    },

    'audio-11': {
      category: "Premium Home Theatre",
      name: "Premium HDMI Dolby Atoms 5.1 Complete Home Theatre",
      image: "images/image11.webp",
      desc: "Enjoy immersive Dolby Atmos 5.1 surround sound with HDMI connectivity, powerful bass, and crystal- clear cinematic audio.",
      features: ["", "", "", ""]
    },

    'audio-12': {
      category: "Home Theatre Package",
      name: "premimum DTS-X & Dolby Atoms 5.1 Complete Package Home Theatre",
      image: "images/image12.webp",
      desc: "Experience immersive DTS-X and Dolby Atmos 5.1 surround sound with powerful bass and crystal-clear cinematic details.",
      features: ["", "", "", ""]
    },

    'audio-13': {
      category: "Home Theatre",
      name: "Dolby Digtal & DTS 5.1 Complete Package Home Theatre ",
      image: "images/image13.webp",
      desc: "Experience powerful 5.1 surround sound with Dolby Digital and DTS, delivering clear dialogue, immersive effects, and deep bass.",
      features: ["", "", "", ""]
    },

    'audio-14': {
      category: "Movie Theatre",
      name: "Dolby Digtal & DTS 5.1 Complete Package Home Theatre ",
      image: "images/image14.webp",
      desc: "Enjoy immersive 5.1 surround sound with Dolby Digital & DTS for crystal-clear dialogue and powerful cinematic effects. ",
      features: ["", "", "", ""]
    },

    'audio-15': {
      category: "Premium Home Theatre",
      name: "Dolby Atoms 7.2 Complete Home Theatre With Sparate Power Amplifer",
      image: "images/image15.webp",
      desc: "Experience immersive Dolby Atmos 7.2 surround sound with powerful bass, crystal-clear dialogue, and detailed cinematic effects.",
      features: ["", "", "", ""]
    },

    'audio-16': {
      category: "7.1 Home Theatre",
      name: "Dolby Digital Plus & Dolby Atoms Convertable 7.1 Home Theatre",
      image: "images/image16.webp",
      desc: "Experience immersive 7.1 surround sound with Dolby Digital Plus & Dolby Atmos for rich, detailed, and cinematic audio. ",
      features: ["", "", "", ""]
    },

    'audio-17': {
      category: "True 7.1 Home Theatre",
      name: "True 7.1 Complete Pakcage Home Theatre",
      image: "images/iamge17.webp",
      desc: "Experience powerful 7.1 surround sound with immersive audio, crystal-clear dialogue, and detailed cinematic effects.",
      features: ["", "", "", ""]
    },

    'audio-18': {
      category: "Dolby Atoms Home Theatre ",
      name: "Dolby 7.1 Basic Home Theatre Package",
      image: "images/image18.webp",
      desc: "Enjoy immersive 7.1 Dolby surround sound with clear dialogue, balanced audio, and powerful cinematic effects.",
      features: ["", "", "", ""]
    },

    'audio-19': {
      category: "5.2.2 Home Theatre",
      name: "True Dolby Atmos 5.2.2 Channel Home Theatre System package ",
      image: "images/image19.webp",
      desc: "Complete package designed to deliver a premium cinematic experience with sound coming from every direction.",
      features: ["", "", "", ""]
    },

    'audio-20': {
      category: "Home Thetare",
      name: "True Dolby Atoms With JBL 15 Inch Subwoofer",
      image: "images/image21.webp",
      desc: "Experience immersive True Dolby Atmos 5.2.1 Channel Home Theatre with powerful bass, crystal-clear audio, and realistic surround sound.",
      features: ["", "", "", ""]
    },

    'audio-21': {
      category: "Home Theatre",
      name: "True Dolby Atoms With JBL 15 Inch Subwoofer",
      image: "images/image22.webp",
      desc: "Experience True Dolby Atmos with a powerful JBL 15-inch Subwoofer for deep bass, crystal-clear sound, and immersive surround audio.",
      features: ["", "", "", ""]
    },

    'audio-22': {
      category: "Home theatre",
      name: "Dolby Atoms 5.1 Home Theatre",
      image: "images/image23.webp",
      desc: "Experience Dolby Atmos 5.1 Home Theatre with immersive surround sound, crystal-clear dialogue, and powerful bass.",
      features: ["", "", "", ""]
    },

    'audio-23': {
      category: "Amplifier",
      name: "Manual 5.1 Amplifier",
      image: "images/ampimage1.webp",
      desc: "Delivers immersive 5.1-channel audio output by driving five discrete speakers and a dedicated subwoofer for cinematic home theater experiences.",
      features: ["", "", "", ""]
    },

    'audio-24': {
      category: "Amplifier",
      name: "Optical 5.1 Amplifier",
      image: "images/ampimage2.webp",
      desc: "Features a dedicated optical (Toslink) digital input for crystal-clear, lossless signal transmission directly from TVs, gaming consoles, and media players.",
      features: ["", "", "", ""]
    },

    'audio-25': {
      category: "Amplifier",
      name: "Basic HDMI 5.1 Amplifier",
      image: "images/ampimage3.webp",
      desc: "Equipped with HDMI ports for high-definition digital audio and video pass-through, simplifying setup with modern TVs and media sources.",
      features: ["", "", "", ""]
    },

    'audio-26': {
      category: "Amplifier",
      name: "Preimum HDMI 5.1 Amplifier Model 1",
      image: "images/ampimage4.webp",
      desc: "Equipped with high-speed HDMI ports supporting 4K HDR pass-through, eARC, and seamless multi-device connectivity for modern home theaters.",
      features: ["", "", "", ""]
    },

    'audio-27': {
      category: "Amplifier",
      name: "Astra 5.1 Amplifier model 1",
      image: "images/ampimage5.webp",
      desc: "Combines high-fidelity circuit design with robust power output to deliver crisp, distortion-free 5.1-channel surround sound.",
      features: ["", "", "", ""]
    },

    'audio-28': {
      category: "Amplifier",
      name: "Astra 5.1 Amplifier model 2",
      image: "images/ampimage6.webp",
      desc: "Features upgraded internal components and refined audio tuning to deliver even more powerful, crystal-clear 5.1-channel surround sound.",
      features: ["", "", "", ""]
    },

    'audio-29': {
      category: "Amplifier",
      name: "Preimum HDMI 5.1 Amplifier Model 2",
      image: "images/ampimage7.webp",
      desc: "Features advanced HDMI ports with 4K/8K pass-through, enhanced audio return channel (eARC), and lightning-fast switching for modern gaming and home theater setups.",
      features: ["", "", "", ""]
    },

    'audio-30': {
      category: "Amplifier",
      name: "Preimum HDMI 5.1 Amplifier Model 3",
      image: "images/ampimage8.webp",
      desc: "Features state-of-the-art HDMI connectivity supporting ultra-high-definition 8K video pass-through, variable refresh rate (VRR), and eARC for ultimate home theater and gaming performance.",
      features: ["", "", "", ""]
    },

    'audio-31': {
      category: "Amplifier",
      name: "Preimum HDMI 5.1 Amplifier Model 4",
      image: "images/ampimage9.webp",
      desc: "Features ultra-advanced HDMI ports with lightning-fast switching, full 8K/4K passthrough, and advanced gaming optimizations like ALLM and VRR.",
      features: ["", "", "", ""]
    },

    'audio-32': {
      category: "Amplifier",
      name: "Preimum HDMI 5.1 Amplifier Model 5",
      image: "images/ampimage10.webp",
      desc: "Delivers reference-grade multi-channel power and precision acoustic tuning for an uncompromising, theater-quality audio experience.",
      features: ["", "", "", ""]
    },
    'audio-33': {
      category: "Amplifier",
      name: "Preimum HDMI 7.1 Amplifier MOdel 1",
      image: "images/ampimage11.webp",
      desc: "Equipped with high-speed HDMI ports supporting 4K/8K pass-through, eARC, and seamless multi-device connectivity for immersive surround sound.",
      features: ["", "", "", ""]
    },
    'audio-34': {
      category: "Amplifier",
      name: "Preimum HDMI 7.1 Amplifier MOdel 2",
      image: "images/ampimage12.webp",
      desc: "Features upgraded HDMI ports with advanced video pass-through, enhanced audio return channel (eARC), and lightning-fast switching for modern home theaters and gaming setups.",
      features: ["", "", "", ""]
    },
    'audio-35': {
      category: "Amplifier",
      name: "True Dolby Atoms Amplifier Model 1",
      image: "images/ampimage13.webp",
      desc: "Delivers robust, high-fidelity amplification across all discrete channels to bring dynamic movie soundtracks and music to life with exceptional clarity.",
      features: ["", "", "", ""]
    },
    'audio-36': {
      category: "Amplifier",
      name: "True Dolby Atoms Amplifier Model 2",
      image: "images/ampimage14.webp",
      desc: "",
      features: ["", "", "", ""]
    },
    'audio-37': {
      category: "Amplifier",
      name: "True Dolby Atoms Amplifier Model 3",
      image: "images/ampimage15.webp",
      desc: "Features advanced object-based audio decoding to deliver ultra-precise 3D spatial sound and breathtaking overhead effects for ultimate home theater immersion.",
      features: ["", "", "", ""]
    },
    'audio-38': {
      category: "Amplifier",
      name: "True Dolby Atoms Amplifier Model 4",
      image: "images/ampimage16.webp",
      desc: "Engineered for next-generation home theater setups, this 4-channel Dolby Atmos amplifier delivers precise, multi-dimensional overhead sound and crystal-clear acoustic localization.",
      features: ["", "", "", ""]
    },
    'audio-39': {
      category: "Amplifier",
      name: "4 Inch Stallites Boxes",
      image: "images/boxes1.webp",
      desc: "These compact 4-inch satellite speakers deliver crisp, balanced high and mid-range frequencies for an expansive surround sound experience.",
      features: ["", "", "", ""]
    },
    'audio-40': {
      category: "Amplifier",
      name: "6 Inch & 4 Inch reference Boxes",
      image: "images/boxes2.webp",
      desc: "These reference boxes pair 6-inch woofers with 4-inch drivers to deliver a balanced, full-range audio response with deep low-end punch and crystal-clear mids.",
      features: ["", "", "", ""]
    },
    'audio-41': {
      category: "Amplifier",
      name: "4 Inch Stallites & 12 Inch JBL 1500 Watt Subwoofer Model 1",
      image: "images/boxes3.webp",
      desc: "This high-performance audio setup combines crisp 4-inch satellite speakers for detailed mid and high clarity with a robust 1500-watt 12-inch JBL subwoofer for thunderous bass.",
      features: ["", "", "", ""]
    },
    'audio-42': {
      category: "boxes",
      name: "4 Inch Stallites & 12 Inch JBL 1500 Watt Subwoofer Model 2",
      image: "images/boxes4.webp",
      desc: "This alternative Model 2 configuration pairs precise 4-inch satellite speakers with a powerful 1500-watt 12-inch JBL subwoofer for a refocused acoustic profile.",
      features: ["", "", "", ""]
    },
    'audio-43': {
      category: "boxes",
      name: "6 Inch Stallites & 12 Inch JBL 1500 Watt Subwoofer",
      image: "images/boxes5.webp",
      desc: "This premium configuration pairs powerful 6-inch satellite speakers for expansive, detailed mid and high frequencies with a thunderous 1500-watt 12-inch JBL subwoofer for deep, authoritative bass.",
      features: ["", "", "", ""]
    },
    'audio-44': {
      category: "boxes",
      name: "12 Inch JBL 1500 Watt Subwoofer",
      image: "images/boxes6.webp",
      desc: "Engineered to deliver thunderous, room-shaking low frequencies, this high-output 1500-watt JBL subwoofer brings deep and authoritative bass impact to any audio system.",
      features: ["", "", "", ""]
    },
    'audio-45': {
      category: "boxes",
      name: "6 Inch Towers",
      image: "images/boxes7.webp",
      desc: "These towering floor-standing speakers feature built-in 6-inch drivers to deliver room-filling sound with rich, powerful mid-bass and exceptional acoustic clarity.",
      features: ["", "", "", ""]
    },
    'audio-46': {
      category: "movie Theatre",
      name: "luxury Movie Theatre",
      image: "images/movietheatre2.webp",
      desc: "Designed for the ultimate cinematic indulgence, this luxury movie theatre features plush reclining seating, state-of-the-art immersive surround sound, and crystal-clear laser projection.",
      features: ["", "", "", ""]
    },
    'audio-47': {
      category: "movie Theatre",
      name: "mini luxury movie Theatre",
      image: "images/movietheatre3.webp",
      desc: "Combining an intimate, space-saving footprint with upscale high-end finishes, this mini luxury theatre features plush seating and bespoke acoustic-visual styling.",
      features: ["", "", "", ""]
    },
    'audio-48': {
      category: "movie Theatre",
      name: "mini movie Theatre",
      image: "images/movie theatre 4.webp",
      desc: "Designed to bring the magic of cinema into a cozy, compact space, this mini home theatre combines immersive surround sound with optimized visual displays.",
      features: ["", "", "", ""]
    },
    // 'audio-49': {
    //   category: "movie Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-50': {
    //   category: "movie Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-51': {
    //   category: "movie Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-52': {
    //   category: "movie Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-53': {
    //   category: "movie Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-54': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-55': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-56': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-57': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-58': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-59': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-60': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
    // 'audio-61': {
    //   category: "Home Theatre",
    //   name: "",
    //   image: "images/",
    //   desc: "",
    //   features: ["", "", "", ""]
    // },
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
  // REVEAL WHY DSS AUDIOS CONTENT
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