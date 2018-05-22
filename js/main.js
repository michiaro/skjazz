var app = new Vue({
    el: "#app",
    data: {
      isMenuOpen: false,
      isMobile: false,
      isScrolled: false
    },
    mounted: function() {
      this.$nextTick(function() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
        this.handleResize();
      });
    },
    methods: {
      handleResize() {
        this.isMobile = window.innerWidth < 1200;
        this.isMenuOpen = window.innerWidth >= 1200;
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
      submit: function submit(data, url) {
        var self = this;
        this.post(data, url, function(result) {
          if (result) {
            for (var field in self.form.data) {
              field.data = "";
            }
            self.form.isAgree = false;
            self.form.isSent = true;
            setTimeout(function() {
              self.form.isSent = false;
            }, 3e3);
          }
        });
      },
      post: function post(data, url, success) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, !0);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            success(xhr.responseText);
          }
        };
      }
    },
  });
  
  (function() {
    if (
      "querySelector" in document &&
      "addEventListener" in window &&
      Array.prototype.forEach
    ) {
      var smoothScroll = function(anchor, duration) {
        var startLocation = window.pageYOffset;
        var endLocation = anchor.offsetTop;
        var distance = endLocation - startLocation;
        var increments = distance / (duration / 16);
        var stopAnimation;
  
        var animateScroll = function() {
          window.scrollBy(0, increments);
          stopAnimation();
        };
  
        if (increments >= 0) {
          stopAnimation = function() {
            var travelled = window.pageYOffset;
            if (
              travelled >= endLocation - increments ||
              window.innerHeight + travelled >= document.body.offsetHeight
            ) {
              clearInterval(runAnimation);
            }
          };
        } else {
          stopAnimation = function() {
            var travelled = window.pageYOffset;
            if (travelled <= (endLocation || 0)) {
              clearInterval(runAnimation);
            }
          };
        }
  
        var runAnimation = setInterval(animateScroll, 16);
      };
  
      var scrollToggle = document.querySelectorAll(".js-scroll");
  
      [].forEach.call(scrollToggle, function(toggle) {
        toggle.addEventListener(
          "click",
          function(e) {
            e.preventDefault();
  
            var dataID = toggle.getAttribute("href");
            var dataTarget = document.querySelector(dataID);
            var dataSpeed = toggle.getAttribute("data-speed");
  
            if (dataTarget) {
              smoothScroll(dataTarget, dataSpeed || 500);
            }
          },
          false
        );
      });
    }
  })();
  
  function addClassToElem(el, className) {
    if (el.classList) el.classList.add(className);
    else el.className += ' ' + className; 
  }
  
  function removeClassFromElem(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    }
    else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  