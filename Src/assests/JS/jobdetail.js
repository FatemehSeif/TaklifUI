function triggerFileInput() {
  
    document.getElementById('file-input').click();
}

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('File selected:', file.name);
       
    }
});

function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
 }
