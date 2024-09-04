document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.advantages-list-item');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector('.advantages-img');
          const text = entry.target.querySelector('.advantages-text');

          entry.target.classList.add('in-view');
          img.classList.add('in-view');
          text.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  listItems.forEach(item => {
    observer.observe(item);
  });
});
