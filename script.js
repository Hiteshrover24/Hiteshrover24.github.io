document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.transform =
      `rotateX(${-(y - r.height/2)/25}deg)
       rotateY(${(x - r.width/2)/25}deg)
       translateY(-12px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
  });
});
