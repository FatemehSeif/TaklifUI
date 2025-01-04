
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});


const cardContainer = document.querySelector(".card-container");


const cardHTML = `
<div class="card">
    <div class="card-content">
        <span class="card-head"> 
            <div class="card-badge">فوری</div>
            <div class="job-img"><img src="c:\Users\SH.Rayan\Desktop\DashUI\Src\assests\Image\b910e82f-b7cb-4032-8dcc-1f9d1393742b.jpg" alt="jobimg"></div>
        </span>
        <div class="des">
            <h3 class="card-header">AI/ML Engineer (Generative AI & LLM)</h3>
            <p class="body-large">تهران، شهرک غرب (شهرک قدس)</p>
            <div class="coloredtxt">
                <p class="body-medium">40-60 میلیون تومان</p>
            </div>  
            <p class="body-small">امکان دورکاری</p>
        </div>
    </div>
    <div class="card-footer">
        <div class="line"></div>
        <div class="footer-content">
            <div class="date">
                <p class="body-small">سه روز پیش</p>
            </div>
            <div class="tertiary-btn" onclick="window.location.href='c:\Users\SH.Rayan\Desktop\DashUI\Src\jobdetail.html';">ارسال رزومه</div>
        </div>
    </div>
</div>`;

const horizontalRepeat = 3; 
const verticalRepeat =4 ;   

for (let i = 0; i < verticalRepeat; i++) {
    for (let j = 0; j < horizontalRepeat; j++) {
        cardContainer.innerHTML += cardHTML;
    }
}
