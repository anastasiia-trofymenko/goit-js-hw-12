import{a as w,S,i}from"./assets/vendor-DvfmeZXB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const v="53655759-0bde0e69f13e467ced1016ab6",C="https://pixabay.com/api/";async function u(o,e){const r={key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await w.get(C,{params:r})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250,disableScroll:!0});function p(o){const e=o.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="item-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="main-content">
          <ul class="card-list">
            <li class="card-list-li">
              <h3>Likes</h3>
              <p>${r.likes}</p>
            </li>
            <li class="card-list-li">
              <h3>Views</h3>
              <p>${r.views}</p>
            </li>
            <li class="card-list-li">
              <h3>Comments</h3>
              <p>${r.comments}</p>
            </li>
            <li class="card-list-li">
              <h3>Downloads</h3>
              <p>${r.downloads}</p>
            </li>
          </ul>
        </div>
      </li>
      `).join("");h.insertAdjacentHTML("beforeend",e),q.refresh()}function k(){h.innerHTML=""}function f(){g.classList.remove("is-hidden")}function y(){g.classList.add("is-hidden")}function P(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}const R=document.querySelector(".input"),d=document.querySelector(".form"),$=document.querySelector(".load-more-btn"),B=document.querySelector(".gallery");let a=1,n="";d.addEventListener("submit",async o=>{if(o.preventDefault(),n=R.value.trim(),b(),a=1,n===""){i.show({title:"❌",message:"Please enter the appropriate search query!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}k(),f();try{const e=await u(n,a);if(e.hits.length===0){i.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",backgroundColor:"orange",position:"topRight"});return}p(e.hits),L(),d.reset(),e.totalHits>15&&P()}catch(e){i.show({title:"❌",message:e.message,messageColor:"black",backgroundColor:"red",position:"topRight"})}finally{y()}});$.addEventListener("click",M);async function M(){a++,f();try{const o=await u(n,a);p(o.hits),L();const e=Math.ceil(o.totalHits/15);a===e&&(b(),i.show({title:"❌",message:"We're sorry, but you've reached the end of search results.",messageColor:"black",backgroundColor:"light blue",position:"topRight"}))}catch(o){i.show({title:"❌",message:o.message,messageColor:"black",backgroundColor:"red",position:"topRight"})}finally{y()}}function L(){const{height:o}=B.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
