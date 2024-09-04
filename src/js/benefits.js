document.addEventListener('DOMContentLoaded', function () {
  const numbers = document.querySelectorAll('.animated-number');
  let hasAnimated = false;

  function animateNumbers() {
    numbers.forEach(number => {
      const target = parseFloat(number.getAttribute('data-target'));
      const isInteger = Number.isInteger(target);
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = (duration / 1000) * frameRate;
      const increment = target / totalFrames;

      let count = 0;
      let frame = 0;

      const updateNumber = () => {
        count += increment;
        frame++;

        if (count >= target || frame >= totalFrames) {
          number.textContent = isInteger
            ? target.toLocaleString('uk-UA')
            : target.toFixed(1).replace('.', ',').toLocaleString('uk-UA');
        } else {
          number.textContent = isInteger
            ? Math.ceil(count).toLocaleString('uk-UA')
            : count.toFixed(1).replace('.', ',').toLocaleString('uk-UA');
          requestAnimationFrame(updateNumber);
        }
      };

      updateNumber();
    });
  }

  function resetNumbers() {
    numbers.forEach(number => {
      number.textContent = '0';
    });
  }

  function checkScroll() {
    const section = document.querySelector('.animated-number');
    const sectionPosition = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (
      scrollPosition >= sectionPosition &&
      window.scrollY <= sectionPosition + sectionHeight &&
      !hasAnimated
    ) {
      animateNumbers();
      hasAnimated = true;
    } else if (
      window.scrollY > sectionPosition + sectionHeight ||
      scrollPosition < sectionPosition
    ) {
      hasAnimated = false;
      resetNumbers();
    }
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);
});
