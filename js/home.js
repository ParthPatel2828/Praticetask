  window.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.nav-link');
    const tabContent = document.querySelector('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const targetId = this.getAttribute('data-bs-target');
        const targetPane = document.querySelector(targetId);

        tabContent.querySelectorAll('.tab-pane').forEach(tabPane => {
          tabPane.classList.remove('show', 'active');
        });

        targetPane.classList.add('show', 'active');
      });
    });

    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 30) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });

