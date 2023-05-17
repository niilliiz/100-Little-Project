/********************NAV SIDE**************************** */
const navBar = document.getElementsByClassName('navBar')[0];
const ul = document.getElementsByTagName('ul')[0];
const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];
const menu = document.getElementsByClassName('menu')[0];

let showMenu = true;
let items = [navBar, header, ul, footer];

const navItem = [
  [
    { title: 'Dashboard', icon: ['fa', 'fa-home'], href: '/' },
    { title: 'Report', icon: ['fa', 'fa-bar-chart'], href: '/' },
  ],
  [
    { title: 'Analytics', icon: ['fa', 'fa-pie-chart'], href: '/' },
    { title: 'Customers', icon: ['fa', 'fa-group'], href: '/' },
    { title: 'Order', icon: ['fa', 'fa-shopping-cart'], href: '/' },
    { title: 'Products', icon: ['fa', 'fa-cubes'], href: '/' },
    { title: 'Invoice', icon: ['fa', 'fa-inbox'], href: '/' },
  ],
  [
    { title: 'Outlet', icon: ['fa', 'fa-shopping-bag'], href: '/' },
    { title: 'Employee', icon: ['fa', 'fa-users'], href: '/' },
    { title: 'Shipment', icon: ['fa', 'fa-truck'], href: '/' },
    { title: 'Marketing', icon: ['fa', 'fa-line-chart'], href: '/' },
  ],
  [{ title: 'App Idea', icon: ['fa', 'fa-line-chart'], href: '/app-idea' }],
];

navItem.map((category) => {
  category.map((item) => {
    if (item.title) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const anchorSpan = document.createElement('a');
      const anchorTitle = document.createElement('a');
      item.icon.map((classItem) => span.classList.add(classItem));
      anchorTitle.textContent = item.title;
      anchorTitle.classList.add('navList');
      anchorSpan.href = item.href;
      anchorTitle.href = item.href;
      anchorSpan.appendChild(span);
      li.appendChild(anchorSpan);
      li.appendChild(anchorTitle);
      ul.appendChild(li);
    }
  });
  const div = document.createElement('div');
  div.classList.add('separator');
  ul.appendChild(div);
});

menu.addEventListener('click', () => {
  showMenu = !showMenu;
  if (!showMenu) {
    items.forEach((item) => {
      console.dir(item);
      item.classList.add('hide');
    });
  }
  if (showMenu) {
    items.forEach((item) => {
      console.dir(item);
      item.classList.remove('hide');
    });
  }
});
