const menuBar = document.querySelector('.fa');

let mobileMenuOpen = false;

function toggleMenu(visible) {
  if (document.documentElement.clientWidth < 757) {

    document.querySelector('.hamburger-content').classList.toggle('menu-mobile', visible);
    //x for mobile menu
    document.querySelector('.fa').classList.toggle('fa-times');
    document.querySelector('.fa').classList.toggle('fa-bars');
  }
}

function menuBarDisapear() {
  // if (document.documentElement.clientWidth > 752) {
  //   document.querySelector('.fa').classList.add('disapear');
  // }
  // if (document.documentElement.clientWidth < 753) {
  //   document.querySelector('.fa').classList.remove('disapear');
  // }
  if (document.documentElement.clientWidth > 752 && mobileMenuOpen == false) {
    document.querySelector('.hamburger-content').classList.remove('menu-mobile');

  }
  if (document.documentElement.clientWidth < 753 && mobileMenuOpen == false) {
    document.querySelector('.hamburger-content').classList.add('menu-mobile');

    if (menuBar.classList.contains('fa-times')) {
      document.querySelector('.fa').classList.remove('fa-times');
      document.querySelector('.fa').classList.add('fa-bars');
    }
  }
  if (document.documentElement.clientWidth > 752 && mobileMenuOpen == true) {
    document.querySelector('.hamburger-content').classList.remove('menu-mobile');
  }
  if (document.documentElement.clientWidth < 753 && mobileMenuOpen == true) {
    document.querySelector('.hamburger-content').classList.remove('menu-mobile');
  }
}

const allA = document.querySelectorAll('.ul a');
//listiner for toggleMenu
document.querySelector('.fa').addEventListener('click', function (e) {
  e.preventDefault();
  ////booliantoggle
  mobileMenuOpen = !mobileMenuOpen;
  toggleMenu();
});

for (const all of allA) {
  all.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenuOpen = false;
  });
}

function moveMenuElements() {
  const content = document.querySelector('.top-bar').querySelector('.content-disapear-mobile');

  let windowSize = document.documentElement.clientWidth;
  const newContent = document.querySelector('.hamburger-content').querySelector('.content-disapear-mobile ');

  if (windowSize < 752 && content) {

    document.querySelector('.hamburger-content').appendChild(content);
  }
  if (windowSize > 752 && newContent) {

    document.querySelector('.top-bar').appendChild(newContent);
  }
}

window.addEventListener('resize', function (e) {
  e.preventDefault();
  moveMenuElements();
  menuBarDisapear();

});

window.addEventListener('load', function (e) {
  e.preventDefault();
  toggleMenu();
  moveMenuElements();
  menuBarDisapear();
});

const pages = document.getElementById('pages').children;
const links = document.querySelectorAll('li');
const aLinks = document.querySelector('ul').querySelectorAll('a');
initPage();

function initPage() {
  const idFromHash = window.location.hash.replace('#/', '');

  let pageMathingHash = pages[0].id;

  for (let page of pages) {
    if (page.id == idFromHash) {
      pageMathingHash = page.id;
      break;
    }
  }
  activatePage(pageMathingHash);

  for (let link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const clickedElement = e.target;
      const id = clickedElement.getAttribute('href').replace('#', '');
      activatePage(id);

      ///change URL hash
      window.location.hash = '#/' + id;
    });
  }
}

function activatePage(pageId) {
  //add class active for page
  for (let page of pages) {
    if (page.id == pageId) {
      page.classList.add('activePage');
      page.classList.remove('in-active');
    } else if (page.id != pageId) {
      page.classList.remove('activePage');
      page.classList.add('in-active');
    }
  }
  //add class active for link
  for (let link of aLinks) {
    link.classList.toggle('activelink', link.getAttribute('href') == '#' + pageId);
  }
  toggleMenu();
}
//modal clouse//
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

//modal open//
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.content-disapear-mobile  div:nth-child(4)').addEventListener('click', function () {

  openModal('#myModal');
});

document.querySelector('.content-disapear-mobile  div:nth-child(3)').addEventListener('click', function () {

  openModal('#login');
});

document.querySelector('.user-info').addEventListener('click', function () {

  openModal('#chat');
});

const linkBnn = document.querySelectorAll('.btn-banner');
for (const linkBn of linkBnn) {
  linkBn.addEventListener('click', function () {

    openModal('#add-banner');
  });
}

const linkBtn = document.querySelectorAll('.btn-link');
for (const linkB of linkBtn) {
  linkB.addEventListener('click', function () {

    openModal('#add-links');
  });
}
////////////////////slider
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
slider.addEventListener('input', (e) => {

  sliderValue.textContent = e.target.value + ' ' + 'h';

  sliderValue.style.left = `${e.target.value}%`;

  if (e.target.value < 25) {
    sliderValue.style.transform = `translateX(-20%)`;
  }
  if (e.target.value > 26 && e.target.value < 76) {
    sliderValue.style.transform = `translateX(-55%)`;
  }

  if (e.target.value > 75) {
    sliderValue.style.transform = `translateX(-90%)`;
  }
});


const ctx = document.getElementById('myChart').getContext('2d');
/* eslint-disable */
//margin for chart legend
Chart.Legend.prototype.afterFit = function () {
  this.height = this.height + 80;
};
const chart = new Chart(ctx, {

  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      labels: {
        fontSize: 14,
        usePointStyle: true,
        padding: 60,
      }
    }
  }
});
