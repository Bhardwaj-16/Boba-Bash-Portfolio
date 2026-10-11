/* =====================================================================
 * Matrix Rain Animation
 * 
 * Stolen from(inspo):
 * - Rezmason's Matrix Digital Rain: https://github.com/Rezmason/matrix
 * ===================================================================== */
(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-canvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Matrix characters: Latin, numbers, and katakana-style glyphs
  const chars = '0123456789ABCDEFabcdefｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ'.split('');
  const fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = [];

  function initDrops() {
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }
  }
  initDrops();
  window.addEventListener('resize', initDrops);

  function draw() {
    // Semi-transparent black background to leave trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      
      if (Math.random() > 0.9) {
        ctx.fillStyle = '#a8ffb2';
      } else {
        ctx.fillStyle = '#00ff41';
      }

      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 33);
})();
