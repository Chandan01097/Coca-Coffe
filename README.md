Coffee Shop Website
Overview
This project is a responsive Coffee Shop website built using HTML, CSS, and JavaScript. It showcases a modern and user-friendly interface for a coffee shop, featuring sections for the menu, products, customer reviews, blogs, and contact information. The website includes interactive elements such as a search bar, shopping cart, and mobile-responsive navigation.
Features

Responsive Design: Optimized for desktops, tablets, and mobile devices using media queries.
Interactive Navigation: Includes a collapsible navbar for mobile users and smooth scrolling behavior.
Shopping Cart: Allows users to view and remove items from the cart with a toggleable sidebar.
Search Functionality: A toggleable search form for quick access.
Sections:
Home: Welcoming banner with a call-to-action.
About: Information about the coffee shop's unique offerings.
Menu: Displays coffee and food items with prices and "Add to Cart" buttons.
Products: Highlights featured products with ratings and icons for cart, wishlist, and preview.
Reviews: Customer testimonials with star ratings.
Contact: Contact form and embedded Google Maps for location.
Blogs: Blog posts with images and summaries.
Footer: Social media links, navigation, and credits.


External Libraries:
Font Awesome for icons.
Google Fonts (Roboto) for typography.



File Structure

index.html: Main HTML file containing the website structure.
style.css: CSS file with styles for layout, typography, and responsiveness.
js/script.js: JavaScript file for interactive features like toggling the navbar, search form, and cart, as well as removing cart items.
pictures/: Directory containing images for the logo, menu, products, blogs, and other sections.

Setup Instructions

Clone the Repository:git clone <>


Navigate to the Project Directory:cd coffee-shop-website


Open the Website:
Open index.html in a web browser to view the website locally.
Alternatively, use a local server (e.g., Live Server in VS Code) for a better development experience.



Dependencies

Font Awesome: Included via CDN for icons.
Google Fonts: Roboto font included via CDN for typography.
Images: Ensure the pictures/ directory contains all required images referenced in the HTML.

Usage

Navigate through the website using the top navbar or footer links.
Click the menu button (hamburger icon) on mobile devices to toggle the navbar.
Use the search icon to open the search form.
Click the cart icon to view or manage cart items.
Interact with the "Add to Cart" buttons in the menu or product sections (note: cart functionality is static and requires backend integration for persistence).
Submit the contact form (requires backend setup for functionality).

Customization

Styling: Modify style.css to change colors, fonts, or layouts. Key variables are defined in the :root selector (e.g., --main-color, --bg).
Content: Update text, images, or prices in index.html to match your coffee shop's branding.
JavaScript: Enhance script.js to add more interactivity, such as dynamic cart updates or form validation.
Backend Integration: Add a backend (e.g., Node.js, PHP) to handle cart persistence, form submissions, and dynamic content.

Future Improvements

Add backend support for cart and contact form functionality.
Implement user authentication for personalized experiences.
Enhance accessibility with ARIA attributes and keyboard navigation.
Add animations for smoother transitions and hover effects.
Integrate a CMS for dynamic blog and menu updates.

Credits

Author: Chandan Behera
Icons: Font Awesome
Fonts: Google Fonts (Roboto)
