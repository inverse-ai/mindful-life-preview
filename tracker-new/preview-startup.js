// Preview-only startup feedback; no analytics, identifiers or requests.
(function(){
  const panel=document.getElementById('preview-loading'),help=document.getElementById('load-help');
  let ready=false;
  const reveal=()=>{if(!ready)help.hidden=false;};
  window.addEventListener('flutter-first-frame',()=>{ready=true;panel.remove();},{once:true});
  window.addEventListener('error',reveal);
  window.addEventListener('unhandledrejection',reveal);
  document.getElementById('reload-preview').addEventListener('click',()=>location.reload());
  setTimeout(reveal,20000);
})();
