// main.js
import { menu } from './app.js';

document.addEventListener("DOMContentLoaded", () => {
    const sectionCenter = document.querySelector('.section-center');
    const btnContainer = document.querySelector('.btn-container');

    const displayMenuItems = (menuItems) => {
        let displayMenu = menuItems.map(item => {
            return `<div class="menu-items col-lg-6 col-sm-12">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
          ${item.desc}
        </div>
      </div>
    </div>`;
        }).join('');
        sectionCenter.innerHTML = displayMenu;
    };

    const filterMenu = (category) => {
        if (category === 'all') {
          displayMenuItems(menu);
        } else {
          const menuCategory = menu.filter(item => item.category === category);
          displayMenuItems(menuCategory);
        }
      };
    
      // Display all items initially
      displayMenuItems(menu);
    
      // Filter items by category
      btnContainer.addEventListener('click', (e) => {
        const category = e.target.dataset.id;
        if (category) {
          filterMenu(category);
        }
      });
});
