document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    card.style.transform =
      `perspective(800px)
       rotateX(${-(y - r.height/2)/30}deg)
       rotateY(${(x - r.width/2)/30}deg)
       translateY(-14px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
});
