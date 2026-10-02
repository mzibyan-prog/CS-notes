function toggleNav(){
  if(window.innerWidth >= 900){
    document.body.classList.toggle('sidebar-collapsed');
  } else {
    document.body.classList.toggle('nav-open');
  }
}
function closeNav(){ document.body.classList.remove('nav-open'); }
function toggleSection(el){ el.closest('.section').classList.toggle('open'); }

document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.getElementById('overlay');
  if(overlay) overlay.addEventListener('click', closeNav);
  document.querySelectorAll('.unit-nav a:not(.soon)').forEach(a=>a.addEventListener('click', closeNav));
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({top:y, behavior:'smooth'});
        const sec = target.closest('.section');
        if(sec && !sec.classList.contains('open')) sec.classList.add('open');
      }
    });
  });
});
