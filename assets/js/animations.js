document.addEventListener('click', function(e){
  const btn = e.target.closest('.project-btn');
  if(!btn) return;
  // Pulse animation
  btn.classList.remove('pulse');
  // Force reflow to restart animation
  void btn.offsetWidth;
  btn.classList.add('pulse');

  // Ripple animation
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.className = 'ripple';
  const x = e.clientX - rect.left - size/2;
  const y = e.clientY - rect.top - size/2;
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});
