const template = (message = '', user = 'Simo @nurmisimo') => `
<li>
  <article class="toot">
    <h3>
      <span class="sr-only">Tööt by </span>${user}
    </h3>
    <p class="toot__message">${message}</p>
    <footer class="toot__footer">
      <button class="button--like" type="button">
        <span aria-hidden="true">❤️</span>
        <span class="sr-only">Like</span>
      </button>
      <p class="toot__likes"><span>0</span><span class="sr-only">likes</span></p>
    </footer>
  </article>
</li>`;

const formHandler = () => {
  const form = document.querySelector('#form');
  const feed = document.querySelector('#feed');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const toot = data.get('toot');

    if (toot.length > 0) {
      feed.insertAdjacentHTML('afterbegin', template(toot));
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  formHandler();
  window.feather.replace();
});
