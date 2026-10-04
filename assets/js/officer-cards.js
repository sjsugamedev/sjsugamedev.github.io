(() => {
  const cards = Array.from(document.querySelectorAll('.officer-card'));
  const desktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animationDuration = 160;
  const closeTimers = new WeakMap();

  if (cards.length === 0) {
    return;
  }

  const cancelClosing = (card) => {
    const timer = closeTimers.get(card);

    if (timer) {
      window.clearTimeout(timer);
      closeTimers.delete(card);
    }

    card.classList.remove('is-closing');
  };

  const openCard = (card) => {
    cancelClosing(card);

    if (card.open) {
      card.classList.remove('is-closing');
      return;
    }

    card.classList.add('is-opening');
    card.open = true;
    window.requestAnimationFrame(() => {
      if (card.open) {
        card.classList.remove('is-opening');
      }
    });
  };

  const closeCard = (card) => {
    cancelClosing(card);

    if (!card.open) {
      card.classList.remove('is-opening');
      return;
    }

    card.classList.remove('is-opening');

    if (reducedMotion.matches) {
      card.open = false;
      return;
    }

    card.classList.add('is-closing');
    const timer = window.setTimeout(() => {
      card.open = false;
      card.classList.remove('is-closing');
      closeTimers.delete(card);
    }, animationDuration);
    closeTimers.set(card, timer);
  };

  const closeOtherCards = (currentCard) => {
    cards.forEach((card) => {
      if (card !== currentCard) {
        closeCard(card);
      }
    });
  };

  cards.forEach((card) => {
    card.querySelector('.officer-summary').addEventListener('click', (event) => {
      event.preventDefault();

      if (desktopPointer.matches) {
        closeOtherCards(card);
        openCard(card);
        return;
      }

      if (card.open && !card.classList.contains('is-closing')) {
        closeCard(card);
        return;
      }

      closeOtherCards(card);
      openCard(card);
    });

    card.addEventListener('toggle', () => {
      if (card.open) {
        closeOtherCards(card);
      }
    });

    card.addEventListener('mouseenter', () => {
      if (!desktopPointer.matches) {
        return;
      }

      closeOtherCards(card);
      openCard(card);
    });

    card.addEventListener('mouseleave', () => {
      if (!desktopPointer.matches || card.matches(':focus-within')) {
        return;
      }

      closeCard(card);
    });

    card.addEventListener('focusin', () => {
      if (!desktopPointer.matches) {
        return;
      }

      closeOtherCards(card);
      openCard(card);
    });

    card.addEventListener('focusout', () => {
      if (!desktopPointer.matches) {
        return;
      }

      requestAnimationFrame(() => {
        if (!card.matches(':hover') && !card.matches(':focus-within')) {
          closeCard(card);
        }
      });
    });
  });
})();
