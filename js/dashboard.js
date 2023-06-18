/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
  const toggleBtn = document.getElementById(headerToggle),
  nav = document.getElementById(navbarId)
  
  // Validate that variables exist
  if(headerToggle && navbarId){
      toggleBtn.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
          // change icon
          toggleBtn.classList.toggle('bx-x')
      })
  }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

// function triggerbtnClick()
// {
//   // document.getElementById('home').click();
//   document.querySelector('#lorem').
// }

// Get the sidebar options and corresponding content sections
const homeOption = document.getElementById('home');
const homeSection = document.getElementById('homeSection');
const ordersOption = document.getElementById('orders');
const ordersSection = document.getElementById('ordersSection');
const abandonedCartsLink = document.querySelector('.nav__dropdown-item[href="#abandoned-carts"]');
const abandonedCartsContent = document.getElementById('abandoned-carts-content');
const allOrders = document.querySelector('.nav__dropdown-item[href="#allorders"]');
const allOrdersContent = document.getElementById('allOrdersContent');

const deliveryOption = document.getElementById('delivery');
const deliverySection = document.getElementById('deliverySection');

const productsOption = document.getElementById('products');
const productsSection = document.getElementById('productsSection');

const analyticsOption = document.getElementById('analytics');
const analyticsSection = document.getElementById('analyticsSection');

// Get the header elements
const headerLogo = document.querySelector('.header__logo');
const headerSearch = document.querySelector('.header__search');
const headerToggle = document.querySelector('.header__toggle');

// Add click event listeners to the sidebar options
homeOption.addEventListener('click', function() {
  hideAllSections();
  homeSection.classList.remove('hidden');
  updateHeader('Home');
});

ordersOption.addEventListener('click', function() {
  hideAllSections();
  ordersSection.classList.remove('hidden');
  updateHeader('Orders');
});

deliveryOption.addEventListener('click', function() {
  hideAllSections();
  deliverySection.classList.remove('hidden');
  updateHeader('Delivery');
});

productsOption.addEventListener('click', function() {
  hideAllSections();
  productsSection.classList.remove('hidden');
  updateHeader('Products');
});

analyticsOption.addEventListener('click', function() {
  hideAllSections();
  analyticsSection.classList.remove('hidden');
  updateHeader('Analytics');
});

abandonedCartsLink.addEventListener('click', function() {
  hideAllSections();
  abandonedCartsContent.classList.remove('hidden');
  updateHeader('Abandoned Carts');
});

allOrders.addEventListener('click', function() {
  hideAllSections();
  ordersSection.classList.remove('hidden');
  updateHeader('All Orders');
});

// Function to update the header
function updateHeader(title) {
  headerLogo.textContent = title;
  // You can add more logic here to update other header elements if needed
}

// Function to hide all sections
function hideAllSections() {
  const sections = document.getElementsByTagName('section');
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add('hidden');
  }
}

// Get the signout button element
const signoutButton = document.querySelector('.nav__logout');

// Add a click event listener to the signout button
signoutButton.addEventListener('click', () => {
  // Redirect the user to the login page
  window.location.href = 'login.html'; // Replace 'login.html' with the actual login page URL
});

