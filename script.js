const toggleBtn = document.querySelector('.faq-toggle')
const faqs = document.querySelectorAll('.faq')
console.log(faqs)

faqs.forEach((faq) => {
    faq.addEventListener('click', ()=>faq.classList.toggle('active'))
})
