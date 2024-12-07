const ulNavbar=document.getElementById('ulNavbar');
const check=document.getElementById('check');
const btnForm=document.getElementById('btnForm');
const menu = document.createElement('div');
document.getElementById('btnSearch').addEventListener('click',()=>{
  document.getElementById('search').style.display='block';
});
function Menu(){
  document.getElementById('btnMenu').addEventListener('click',()=>{
    if(!menu.parentNode){
      menu.id='menu';
      menu.innerHTML=`
        <div id="menuShowed"></div>
        <button id="cancel" class="cancel"></button>
      `;
      document.body.appendChild(menu);
    }Cancel();
    document.getElementById('menuShowed').appendChild(ulNavbar);
    showDialoge=document.querySelectorAll('#showDialoge');
  });
}Menu();
function Cancel(){
  const cancel=document.getElementById("cancel");
  if(cancel){
    cancel.addEventListener("click",()=>{
      if(menu)
        menu.parentNode.removeChild(menu);
    });
  }
}
if(check){
  check.addEventListener('change',()=>{
    if(check.checked){
      btnForm.type='submit';
      document.getElementById('label').style.color='#fff';
    }
    else
      btnForm.type='button';
  });
  btnForm.addEventListener('click',()=>{
    if(!check.checked)
      document.getElementById('label').style.color='#f00';
  });
}