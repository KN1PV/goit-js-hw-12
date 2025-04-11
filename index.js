import{a as L,S as b,i}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const w="49644584-3a2a1c6d1a84de76c23a0374c";async function p(e,t){return await L("https://pixabay.com/api/?",{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}const m=document.querySelector(".gallery"),h=document.querySelector(".loader");let n=null;function S(e){const t=e.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${t}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${e.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${e.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${e.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${e.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function g(e){const t=e.map(S).join("");m.insertAdjacentHTML("beforeend",t),n?n.refresh():n=new b(".gallery a",{captionsData:"alt",captionDelay:250})}function j(){m.innerHTML="",n&&(n.destroy(),n=null)}function y(){h.classList.remove("hidden")}function v(){h.classList.add("hidden")}function q(){const e=document.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({left:0,top:t*3,behavior:"smooth"})}}const P=document.querySelector(".form"),f=document.querySelector(".input"),a=document.querySelector(".js-load-more");let l=1,d="";P.addEventListener("submit",R);a.addEventListener("click",I);a.classList.replace("js-load-more","load-more-hidden");function R(e){if(e.preventDefault(),d=f.value.trim(),l=1,!d){i.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),f.focus();return}y(),j(),a.classList.replace("js-load-more","load-more-hidden"),p(d,l).then(t=>{const r=t.data;if(!r.hits||r.hits.length===0){i.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}g(r.hits);const c=Math.ceil(r.totalHits/15);l>=c?i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):a.classList.replace("load-more-hidden","js-load-more")}).catch(t=>{i.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",t)}).finally(()=>{v(),a.classList.replace("load-more-hidden","js-load-more"),f.value=""})}async function I(){l++,a.disabled=!0,a.classList.replace("js-load-more","load-more-hidden"),y();try{const t=(await p(d,l)).data;g(t.hits),q();const r=Math.ceil(t.totalHits/15);l>=r?i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):a.classList.replace("load-more-hidden","js-load-more")}catch(e){i.error({position:"topRight",title:"Error",message:e.message})}finally{v(),a.disabled=!1}}
//# sourceMappingURL=index.js.map
