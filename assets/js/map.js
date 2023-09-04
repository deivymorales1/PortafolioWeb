document.addEventListener("DOMContentLoaded", (event) => {

  setTimeout(() => {
    document.querySelector('#load-iframe-map').innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.426085984657!2d-73.090314825002!3d7.076499092926311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f8634d79803%3A0x57832410c47edf54!2sMas%20x%20Menos!5e0!3m2!1sen!2sco!4v1693860695006!5m2!1sen!2sco" ></iframe>`
  }, 1500);
});

