document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1440;

  if (isDesktop) {
    const items = document.querySelectorAll(
      '.play-item-desktop-1, .play-item-desktop-2, .play-item-desktop-3, .play-item-desktop-4, .play-item-desktop-5, .play-item-desktop-6, .play-item-desktop-7, .play-item-desktop-8'
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (
              entry.target.classList.contains('play-item-desktop-1') ||
              entry.target.classList.contains('play-item-desktop-2') ||
              entry.target.classList.contains('play-item-desktop-3') ||
              entry.target.classList.contains('play-item-desktop-7') ||
              entry.target.classList.contains('play-item-desktop-8')
            ) {
              entry.target.classList.add('animate-left');
            } else if (
              entry.target.classList.contains('play-item-desktop-4') ||
              entry.target.classList.contains('play-item-desktop-5') ||
              entry.target.classList.contains('play-item-desktop-6')
            ) {
              entry.target.classList.add('animate-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach(item => {
      observer.observe(item);
    });
  }
});
