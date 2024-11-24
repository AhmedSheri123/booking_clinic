const navbar=document.getElementById('navbar');
const ulNavbar=`
<ul class="ulNavbar">
  <li id="showDialoge1">
    <a href="#">Home Acute Care & <br />Internal Medicine</a>
    <hr id="dialoge1hr">
    <ul class="dialoge" id="dialoge1">
      <div class="mainDiv">
        <div>
          <li>
            <a href="#">Home Acute Care & Internal Medicine</a>
          </li>
          <li>
            <a href="#">Internal Home Hospital for complex patients</a>
          </li>
        </div>
        <div>
          <li>
            <a href="#">Prevention of hospitalizations</a>
          </li>
          <li>
            <a href="#">Treatment of a wound that is difficult to heal</a>
          </li>
        </div>
      </div>
      <img src="${png2}" />
    </ul>
  </li>
  <hr />
  <li id="showDialoge2">
    <a href="#">Home Hospice <br />and Palliative Care</a>
    <hr id="dialoge2hr">
    <ul class="dialoge" id="dialoge2">
      <div class="mainDiv">
        <li>
          <a href="#">Home hospice <br />and palliative care</a>
        </li>
        <li>
          <a href="#">Home Hospice <br />for Dementia Patients</a>
        </li>
        <li><a href="#">Pediatric Palliative Care</a></li>
      </div>
      <img src="${png4}" />
    </ul>
  </li>
  <hr />
  <li id="showDialoge3">
    <a href="#">Intensive Home <br/>Rehabilitation</a>
    <hr id="dialoge3hr">
    <ul class="dialoge" id="dialoge3">
      <div class="mainDiv">
        <div>
          <li><a href="#">Intensive Home Rehabilitation</a></li>
          <li><a href="#">Neurological Rehabilitation following a stroke</a></li>
          <li><a href="#">Home Orthopedic Rehabilitation</a></li>
          <li><a href="#">Deconditioning</a></li>
        </div>
        <div>
          <li><a href="#">Physical Therapy at Home</a></li>
          <li><a href="#">Speech therapist for adults</a></li>
          <li><a href="#">Home Occupational Therapy</a></li>
        </div>
      </div>
      <img src="${png6}">
    </ul>
  </li>
  <hr />
  <li class="li">
    <a href="#">Physical Therapy <br />at Home</a>
  </li>
  <hr />
  <li class="li">
    <a href="#">Home Hospital for <br />CHF Patients</a>
  </li class="li">
  <hr />
  <li class="li">
    <a href="#">Psychiatric Hospital <br />at Home</a>
  </li>
  <hr />
  <li id="showDialoge4">
    <a href="#">Paid <br />Services</a>
    <hr id="dialoge4hr">
    <ul class="dialoge" id="dialoge4">
      <div class="mainDiv">
        <li><a href="#">A private physician at home</a></li>
        <li><a href="#">Hybrid Home Visit</a></li>
      </div>
      <img src="${png6}">
    </ul>
  </li>
  <hr class="a">
    <li class="a">
        <a href="#">About sabar health</a>
    </li>
    <hr class="a">
    <li id="langS" class="a">
      <a href="#">English</a>
      <ul id="langUnS">
        <li>
          <a href="#">עברית</a>
        </li>
      </ul>
    </li>
</ul>`;
navbar.innerHTML=ulNavbar;
const btnSearch=document.getElementById('btnSearch');
const search=document.getElementById('search');
const btnMenu=document.getElementById('btnMenu');
const btnForm=document.getElementById('btnForm');
const check=document.getElementById('check');
const menu = document.createElement('div');
btnSearch.addEventListener('click',()=>{
    search.style.display='block';
});
function Menu(){
    btnMenu.addEventListener('click',()=>{
        if(!menu.parentNode){
            menu.id='menu';
            menu.innerHTML=`
                <div id="menuShowed">
                </div>
                <button id="cancel" class="cancel"></button>
            `;
          document.body.appendChild(menu);
        }Cancel();
        document.getElementById('menuShowed').innerHTML=ulNavbar;
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