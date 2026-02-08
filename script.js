document.querySelectorAll('.service-card, .trust-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    card.style.transform =
      `perspective(900px)
       rotateX(${-(y - r.height/2)/35}deg)
       rotateY(${(x - r.width/2)/35}deg)
       translateY(-12px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
});
