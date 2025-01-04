
function submitForm() {
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const about = document.getElementById('about').value;
    const education = document.getElementById('education').value;
    const earns = document.getElementById('earns').value; 
    const skills = document.getElementById('skills').value;

    document.querySelector('.std-name h1').textContent = name;
    document.querySelector('.std-name h4').textContent = job;
    document.querySelector('.contact li:nth-child(1)').textContent = `📞 ${phone}`;
    document.querySelector('.contact li:nth-child(2)').textContent = `📧 ${email}`;
    document.querySelector('.contact li:nth-child(3)').textContent = `🏠 ${address}`;
    document.querySelector('.about-me p').textContent = about; 
    document.querySelector('edu-detail li:nth-child(1)').textContent = education;
    document.querySelector('.reference li:nth-child(1)').textContent = earns;
    document.querySelector('skills').textContent = skills;
    document.getElementById('userForm').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
function triggerFileInput() {
  
    document.getElementById('file-input').click();
}

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('File selected:', file.name);
       
    }
});