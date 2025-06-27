const form = document.getElementById('optimizeForm');
const results = document.getElementById('results');
const kwList = document.getElementById('keywords');
const rewritesDiv = document.getElementById('rewrites');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const resume = document.getElementById('resumeText').value.trim();
    const jd = document.getElementById('jobDesc').value.trim();
    if (!resume || !jd) return alert('Both fields are required.');

    form.querySelector('button').disabled = true;

    const resp = await fetch('/.netlify/functions/optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, jd })
    });
    const { keywords, rewrites } = await resp.json();

    // show keywords
    kwList.innerHTML = keywords.map(k => `<li>${k}</li>`).join('');
    // show rewrites
    rewritesDiv.innerHTML = rewrites.map(r => `
    <div class="pair">
      <div class="orig">• ${r.original}</div>
      <div class="new">⇒ ${r.rewritten}</div>
    </div>
  `).join('');

    results.classList.remove('hidden');
    form.querySelector('button').disabled = false;
});
