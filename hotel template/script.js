//         // Smooth scrolling for navigation links
// document.addEventListener('DOMContentLoaded', function() {
//     // Get all navigation links
//     const navLinks = document.querySelectorAll('.nav-menu a');
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Stop default jump behavior
            
//             // Get the target section ID from href
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);
            
//             if (targetSection) {
//                 // Smooth scroll to section
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start',
                    
//                 });
//             }
//         });
//     });
// });