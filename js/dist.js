"use strict";

var app = new Vue({
  el: "#app",
  data: {
    isMenuOpen: false,
    isMobile: false,
    isScrolled: false
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      window.addEventListener("resize", this.handleResize);
      window.addEventListener("scroll", this.handleScroll);
      this.handleResize();

      var wrapper = document.getElementById("about");
      var layers = {
        1: {
          elem: document.getElementById("js-molecule-1"),
          depthX: 21,
          depthY: 21
        },
        2: {
          elem: document.getElementById("js-molecule-2"),
          depthX: 100,
          depthY: 100
        },
        3: {
          elem: document.getElementById("js-molecule-3"),
          depthX: 21,
          depthY: 21
        },
        4: {
          elem: document.getElementById("js-molecule-4"),
          depthX: 9,
          depthY: 9
        },
        5: {
          elem: document.getElementById("js-molecule-5"),
          depthX: 100,
          depthY: 100
        },
        6: {
          elem: document.getElementById("js-molecule-6"),
          depthX: 15,
          depthY: 15
        }
      };

      wrapper.addEventListener("mousemove", function (e) {
        var pageX = e.clientX,
            pageY = e.clientY;
        for (var key in layers) {
          var depthX = layers[key].depthX;
          var depthY = layers[key].depthY;
          layers[key].elem.style.transform = "translateX(" + pageX / depthX + "px) translateY(" + pageY / depthY + "px)";
        }
      });

      var collageWrapper = document.getElementById("js-collage-wrapper");
      var collageContainer = document.getElementById("js-collage-container");
      collageWrapper.addEventListener("mousemove", function (e) {
        var position = e.clientX / window.innerWidth * 10 - 5;
        collageContainer.style.transform = "translateX(" + position + "%)";
      });
    });
  },
  methods: {
    handleResize: function handleResize() {
      this.isMobile = window.innerWidth < 1200;
      this.isMenuOpen = window.innerWidth >= 1200;
    },
    handleScroll: function handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu: function toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu: function closeMenu() {
      this.isMenuOpen = false;
    },
    random: function random() {
      return Math.floor(Math.random() * 3) + 1;
    },

    submit: function submit(data, url) {
      var self = this;
      this.post(data, url, function (result) {
        if (result) {
          for (var field in self.form.data) {
            field.data = "";
          }
          self.form.isAgree = false;
          self.form.isSent = true;
          setTimeout(function () {
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
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          success(xhr.responseText);
        }
      };
    }
  }
});

(function () {
  if ("querySelector" in document && "addEventListener" in window && Array.prototype.forEach) {
    var smoothScroll = function smoothScroll(anchor, duration) {
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop;
      var distance = endLocation - startLocation;
      var increments = distance / (duration / 16);
      var stopAnimation;

      var animateScroll = function animateScroll() {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      if (increments >= 0) {
        stopAnimation = function stopAnimation() {
          var travelled = window.pageYOffset;
          if (travelled >= endLocation - increments || window.innerHeight + travelled >= document.body.offsetHeight) {
            clearInterval(runAnimation);
          }
        };
      } else {
        stopAnimation = function stopAnimation() {
          var travelled = window.pageYOffset;
          if (travelled <= (endLocation || 0)) {
            clearInterval(runAnimation);
          }
        };
      }

      var runAnimation = setInterval(animateScroll, 16);
    };

    var scrollToggle = document.querySelectorAll(".js-scroll");

    [].forEach.call(scrollToggle, function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();

        var dataID = toggle.getAttribute("href");
        var dataTarget = document.querySelector(dataID);
        var dataSpeed = toggle.getAttribute("data-speed");

        if (dataTarget) {
          smoothScroll(dataTarget, dataSpeed || 500);
        }
      }, false);
    });
  }
})();

function addClassToElem(el, className) {
  if (el.classList) el.classList.add(className);else el.className += " " + className;
}

function removeClassFromElem(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }
}