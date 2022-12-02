{
    // Collapse Menu with Local Storage

    const collapsedClass = "sidebar--collapsed";
    const collapsekey = "sidebar--collapsed";

    const sidebar = document.querySelector(".sidebar");
    const collapse = document.querySelector(".collapse__content");

    if (localStorage.getItem(collapsekey) === "true") {
        sidebar.classList.add(collapsedClass);
    }

    collapse.addEventListener("click", () => {
        sidebar.classList.toggle(collapsedClass);
        localStorage.setItem(collapsekey, sidebar.classList.contains(collapsedClass));
    });

    // Dark Mode with Local Storage

    const modeClass = "dark-theme";
    const modekey = "dark-theme";

    const page = document.querySelector(".page-container");
    const mode = document.querySelector(".mode__content");

    if (localStorage.getItem(modekey) === "true") {
        page.classList.add(modeClass);
    }

    mode.addEventListener("click", () => {
        page.classList.toggle(modeClass);
        localStorage.setItem(modekey, page.classList.contains(modeClass));
    });

    // Mobile NavBar Function To Close Menu On Clicking Link

    function californiaSubnav() {
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      var openedCOSubnav = document.getElementById('co_Subnav');
      var openedFLSubnav = document.getElementById('fl_Subnav');
      var openedIDSubnav = document.getElementById('id_Subnav');
      var openedMNSubnav = document.getElementById('mn_Subnav');
      var openedNVSubnav = document.getElementById('nv_Subnav');
      var openedORSubnav = document.getElementById('or_Subnav');
      var openedWASubnav = document.getElementById('wa_Subnav');
      var openedWISubnav = document.getElementById('wi_Subnav');

      if (mediaQuery.matches) {
      if (openedWISubnav.style.display === 'block') {
          openedWISubnav.style.display = 'none';
    } else if (openedWASubnav.style.display === 'block') {
      openedWASubnav.style.display = 'none';
    } else if (openedORSubnav.style.display === 'block') {
      openedORSubnav.style.display = 'none';
    } else if (openedNVSubnav.style.display === 'block') {
      openedNVSubnav.style.display = 'none';
    } else if (openedMNSubnav.style.display === 'block') {
      openedMNSubnav.style.display = 'none';
    } else if (openedIDSubnav.style.display === 'block') {
      openedIDSubnav.style.display = 'none';
    } else if (openedFLSubnav.style.display === 'block') {
      openedFLSubnav.style.display = 'none';
    } else if (openedCOSubnav.style.display === 'block') {
      openedCOSubnav.style.display = 'none';
    }

        var mobileSubnav = document.getElementById('ca_Subnav');
        if (mobileSubnav.style.display === 'none') {
            mobileSubnav.style.display = 'block';
        } else {
            mobileSubnav.style.display = 'none';
        }
      }}

    function coloradoSubnav() {
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      var openedCASubnav = document.getElementById('ca_Subnav');
      var openedFLSubnav = document.getElementById('fl_Subnav');
      var openedIDSubnav = document.getElementById('id_Subnav');
      var openedMNSubnav = document.getElementById('mn_Subnav');
      var openedNVSubnav = document.getElementById('nv_Subnav');
      var openedORSubnav = document.getElementById('or_Subnav');
      var openedWASubnav = document.getElementById('wa_Subnav');
      var openedWISubnav = document.getElementById('wi_Subnav');

      if (mediaQuery.matches) {
      if (openedWISubnav.style.display === 'block') {
          openedWISubnav.style.display = 'none';
    } else if (openedWASubnav.style.display === 'block') {
      openedWASubnav.style.display = 'none';
    } else if (openedORSubnav.style.display === 'block') {
      openedORSubnav.style.display = 'none';
    } else if (openedNVSubnav.style.display === 'block') {
      openedNVSubnav.style.display = 'none';
    } else if (openedMNSubnav.style.display === 'block') {
      openedMNSubnav.style.display = 'none';
    } else if (openedIDSubnav.style.display === 'block') {
      openedIDSubnav.style.display = 'none';
    } else if (openedFLSubnav.style.display === 'block') {
      openedFLSubnav.style.display = 'none';
    } else if (openedCASubnav.style.display === 'block') {
      openedCASubnav.style.display = 'none';
    }

        var mobileSubnav = document.getElementById('co_Subnav');
        if (mobileSubnav.style.display === 'none') {
            mobileSubnav.style.display = 'block';
        } else {
            mobileSubnav.style.display = 'none';
        }
      }}

      function floridaSubnav() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedIDSubnav = document.getElementById('id_Subnav');
        var openedMNSubnav = document.getElementById('mn_Subnav');
        var openedNVSubnav = document.getElementById('nv_Subnav');
        var openedORSubnav = document.getElementById('or_Subnav');
        var openedWASubnav = document.getElementById('wa_Subnav');
        var openedWISubnav = document.getElementById('wi_Subnav');

        if (mediaQuery.matches) {
        if (openedWISubnav.style.display === 'block') {
            openedWISubnav.style.display = 'none';
      } else if (openedWASubnav.style.display === 'block') {
        openedWASubnav.style.display = 'none';
      } else if (openedORSubnav.style.display === 'block') {
        openedORSubnav.style.display = 'none';
      } else if (openedNVSubnav.style.display === 'block') {
        openedNVSubnav.style.display = 'none';
      } else if (openedMNSubnav.style.display === 'block') {
        openedMNSubnav.style.display = 'none';
      } else if (openedIDSubnav.style.display === 'block') {
        openedIDSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      }

        var mobileSubnav = document.getElementById('fl_Subnav');
        if (mobileSubnav.style.display === 'none') {
            mobileSubnav.style.display = 'block';
        } else {
            mobileSubnav.style.display = 'none';
        }
      }}

      function idahoSubnav() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedFLSubnav = document.getElementById('fl_Subnav');
        var openedMNSubnav = document.getElementById('mn_Subnav');
        var openedNVSubnav = document.getElementById('nv_Subnav');
        var openedORSubnav = document.getElementById('or_Subnav');
        var openedWASubnav = document.getElementById('wa_Subnav');
        var openedWISubnav = document.getElementById('wi_Subnav');

        if (mediaQuery.matches) {
        if (openedWISubnav.style.display === 'block') {
            openedWISubnav.style.display = 'none';
      } else if (openedWASubnav.style.display === 'block') {
        openedWASubnav.style.display = 'none';
      } else if (openedORSubnav.style.display === 'block') {
        openedORSubnav.style.display = 'none';
      } else if (openedNVSubnav.style.display === 'block') {
        openedNVSubnav.style.display = 'none';
      } else if (openedMNSubnav.style.display === 'block') {
        openedMNSubnav.style.display = 'none';
      } else if (openedFLSubnav.style.display === 'block') {
        openedFLSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      }

        var mobileSubnav = document.getElementById('id_Subnav');
        if (mobileSubnav.style.display === 'none') {
          mobileSubnav.style.display = 'block';
        } else {
          mobileSubnav.style.display = 'none';
        }
      }}

      function minnesotaSubnav() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedFLSubnav = document.getElementById('fl_Subnav');
        var openedIDSubnav = document.getElementById('id_Subnav');
        var openedNVSubnav = document.getElementById('nv_Subnav');
        var openedORSubnav = document.getElementById('or_Subnav');
        var openedWASubnav = document.getElementById('wa_Subnav');
        var openedWISubnav = document.getElementById('wi_Subnav');

        if (mediaQuery.matches) {
        if (openedWISubnav.style.display === 'block') {
            openedWISubnav.style.display = 'none';
      } else if (openedWASubnav.style.display === 'block') {
        openedWASubnav.style.display = 'none';
      } else if (openedORSubnav.style.display === 'block') {
        openedORSubnav.style.display = 'none';
      } else if (openedNVSubnav.style.display === 'block') {
        openedNVSubnav.style.display = 'none';
      } else if (openedIDSubnav.style.display === 'block') {
        openedIDSubnav.style.display = 'none';
      } else if (openedFLSubnav.style.display === 'block') {
        openedFLSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      }

        var mobileSubnav = document.getElementById('mn_Subnav');
        if (mobileSubnav.style.display === 'none') {
          mobileSubnav.style.display = 'block';
        } else {
          mobileSubnav.style.display = 'none';
        }
      }}

      function nevadaSubnav() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedFLSubnav = document.getElementById('fl_Subnav');
        var openedIDSubnav = document.getElementById('id_Subnav');
        var openedMNSubnav = document.getElementById('mn_Subnav');
        var openedORSubnav = document.getElementById('or_Subnav');
        var openedWASubnav = document.getElementById('wa_Subnav');
        var openedWISubnav = document.getElementById('wi_Subnav');

        if (mediaQuery.matches) {
        if (openedWISubnav.style.display === 'block') {
            openedWISubnav.style.display = 'none';
      } else if (openedWASubnav.style.display === 'block') {
        openedWASubnav.style.display = 'none';
      } else if (openedORSubnav.style.display === 'block') {
        openedORSubnav.style.display = 'none';
      } else if (openedMNSubnav.style.display === 'block') {
        openedMNSubnav.style.display = 'none';
      } else if (openedIDSubnav.style.display === 'block') {
        openedIDSubnav.style.display = 'none';
      } else if (openedFLSubnav.style.display === 'block') {
        openedFLSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      }

        var mobileSubnav = document.getElementById('nv_Subnav');
        if (mobileSubnav.style.display === 'none') {
          mobileSubnav.style.display = 'block';
        } else {
          mobileSubnav.style.display = 'none';
        }
      }}

      function oregonSubnav() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedFLSubnav = document.getElementById('fl_Subnav');
        var openedIDSubnav = document.getElementById('id_Subnav');
        var openedMNSubnav = document.getElementById('mn_Subnav');
        var openedNVSubnav = document.getElementById('nv_Subnav');
        var openedWASubnav = document.getElementById('wa_Subnav');
        var openedWISubnav = document.getElementById('wi_Subnav');

        if (mediaQuery.matches) {
        if (openedWISubnav.style.display === 'block') {
            openedWISubnav.style.display = 'none';
      } else if (openedWASubnav.style.display === 'block') {
        openedWASubnav.style.display = 'none';
      } else if (openedNVSubnav.style.display === 'block') {
        openedNVSubnav.style.display = 'none';
      } else if (openedMNSubnav.style.display === 'block') {
        openedMNSubnav.style.display = 'none';
      } else if (openedIDSubnav.style.display === 'block') {
        openedIDSubnav.style.display = 'none';
      } else if (openedFLSubnav.style.display === 'block') {
        openedFLSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      }

        var mobileSubnav = document.getElementById('or_Subnav');
        if (mobileSubnav.style.display === 'none') {
          mobileSubnav.style.display = 'block';
        } else {
          mobileSubnav.style.display = 'none';
        }
      }}

      function washingtonSubnav() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedFLSubnav = document.getElementById('fl_Subnav');
        var openedIDSubnav = document.getElementById('id_Subnav');
        var openedMNSubnav = document.getElementById('mn_Subnav');
        var openedNVSubnav = document.getElementById('nv_Subnav');
        var openedORSubnav = document.getElementById('or_Subnav');
        var openedWISubnav = document.getElementById('wi_Subnav');

        if (mediaQuery.matches) {
        if (openedWISubnav.style.display === 'block') {
            openedWISubnav.style.display = 'none';
      } else if (openedORSubnav.style.display === 'block') {
        openedORSubnav.style.display = 'none';
      } else if (openedNVSubnav.style.display === 'block') {
        openedNVSubnav.style.display = 'none';
      } else if (openedMNSubnav.style.display === 'block') {
        openedMNSubnav.style.display = 'none';
      } else if (openedIDSubnav.style.display === 'block') {
        openedIDSubnav.style.display = 'none';
      } else if (openedFLSubnav.style.display === 'block') {
        openedFLSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      }
      
        var mobileSubnav = document.getElementById('wa_Subnav');
        if (mobileSubnav.style.display === 'none') {
          mobileSubnav.style.display = 'block';
        } else {
          mobileSubnav.style.display = 'none';
        }
      }}

      function wisconsinSubnav() {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedFLSubnav = document.getElementById('fl_Subnav');
        var openedIDSubnav = document.getElementById('id_Subnav');
        var openedMNSubnav = document.getElementById('mn_Subnav');
        var openedNVSubnav = document.getElementById('nv_Subnav');
        var openedORSubnav = document.getElementById('or_Subnav');
        var openedWASubnav = document.getElementById('wa_Subnav');

        if (mediaQuery.matches) {
        if (openedWASubnav.style.display === 'block') {
            openedWASubnav.style.display = 'none';
      } else if (openedORSubnav.style.display === 'block') {
        openedORSubnav.style.display = 'none';
      } else if (openedNVSubnav.style.display === 'block') {
        openedNVSubnav.style.display = 'none';
      } else if (openedMNSubnav.style.display === 'block') {
        openedMNSubnav.style.display = 'none';
      } else if (openedIDSubnav.style.display === 'block') {
        openedIDSubnav.style.display = 'none';
      } else if (openedFLSubnav.style.display === 'block') {
        openedFLSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      }
            
        var mobileSubnav = document.getElementById('wi_Subnav');
        if (mobileSubnav.style.display === 'none') {
          mobileSubnav.style.display = 'block';
        } else {
          mobileSubnav.style.display = 'none';
        }
      }}

      function closeAllSubnav() {
        var openedCASubnav = document.getElementById('ca_Subnav');
        var openedCOSubnav = document.getElementById('co_Subnav');
        var openedFLSubnav = document.getElementById('fl_Subnav');
        var openedIDSubnav = document.getElementById('id_Subnav');
        var openedMNSubnav = document.getElementById('mn_Subnav');
        var openedNVSubnav = document.getElementById('nv_Subnav');
        var openedORSubnav = document.getElementById('or_Subnav');
        var openedWASubnav = document.getElementById('wa_Subnav');
        var openedWISubnav = document.getElementById('wi_Subnav');
        if (openedWASubnav.style.display === 'block') {
            openedWASubnav.style.display = 'none';
      } else if (openedORSubnav.style.display === 'block') {
        openedORSubnav.style.display = 'none';
      } else if (openedNVSubnav.style.display === 'block') {
        openedNVSubnav.style.display = 'none';
      } else if (openedMNSubnav.style.display === 'block') {
        openedMNSubnav.style.display = 'none';
      } else if (openedIDSubnav.style.display === 'block') {
        openedIDSubnav.style.display = 'none';
      } else if (openedFLSubnav.style.display === 'block') {
        openedFLSubnav.style.display = 'none';
      } else if (openedCOSubnav.style.display === 'block') {
        openedCOSubnav.style.display = 'none';
      } else if (openedCASubnav.style.display === 'block') {
        openedCASubnav.style.display = 'none';
      } else if (openedWISubnav.style.display === 'block') {
        openedWISubnav.style.display = 'none';
      }
    
      }
}


main-doc