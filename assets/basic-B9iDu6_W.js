import"./modulepreload-polyfill-B5Qt9EMX.js";const m={DISCOUNT:{ITEM_DISCOUNT_MIN_QUANTITY:10,BULK_DISCOUNT_THRESHOLD:30,BULK_DISCOUNT_RATE:.25,TUESDAY_DISCOUNT_RATE:.1,SUGGEST_DISCOUNT_RATE:.05,FLASH_SALE_DISCOUNT_RATE:.2},POINTS:{BASE_POINT_RATE:1e3,TUESDAY_MULTIPLIER:2,KEYBOARD_MOUSE_BONUS:50,FULL_SET_BONUS:100,BULK_PURCHASE_BONUSES:{TIER_1:{threshold:10,bonus:20},TIER_2:{threshold:20,bonus:50},TIER_3:{threshold:30,bonus:100}}},TIMERS:{FLASH_SALE_INTERVAL:3e4,SUGGEST_SALE_INTERVAL:6e4,MAX_DELAY:2e4,RANDOM_DELAY:1e4}},M=(e,t=document)=>t.querySelector(e),x=(e,t)=>{e&&(e.textContent=t)},_=(e,t)=>{e&&(e.innerHTML=t)},b=(e,t,n)=>{e&&(e.style[t]=n)},h=e=>{const t=document.createElement("template");t.innerHTML=e.trim();for(let n=0;n<t.content.childNodes.length;n++){const s=t.content.childNodes[n];if(s.nodeType===Node.ELEMENT_NODE)return s}return t.content.firstChild},K=({products:e=[],selectedProductId:t="",onSelectionChange:n})=>{const s=r=>{const{DISCOUNT:i}=m;if(r.q===0)return`${r.name} - ${r.val}원 (품절)`;if(r.onSale&&r.suggestSale){const p=(i.FLASH_SALE_DISCOUNT_RATE+i.SUGGEST_DISCOUNT_RATE)*100;return`⚡💝${r.name} - ${r.originalVal}원 → ${r.val}원 (${p}% SUPER SALE!)`}if(r.onSale){const p=i.FLASH_SALE_DISCOUNT_RATE*100;return`⚡${r.name} - ${r.originalVal}원 → ${r.val}원 (${p}% SALE!)`}if(r.suggestSale){const p=i.SUGGEST_DISCOUNT_RATE*100;return`💝${r.name} - ${r.originalVal}원 → ${r.val}원 (${p}% 추천할인!)`}return`${r.name} - ${r.val}원`},o=r=>r.q===0?'class="text-gray-400"':r.onSale&&r.suggestSale?'class="text-purple-600 font-bold"':r.onSale?'class="text-red-500 font-bold"':r.suggestSale?'class="text-blue-500 font-bold"':"",a=r=>{const i=s(r),p=o(r),S=r.q===0?"disabled":"";return`
      <option value="${r.id}" ${p} ${S}>
        ${i}
      </option>
    `},l=r=>r.map(a).join(""),d=`
    <select 
      id="product-select" 
      class="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
    >
      ${l(e)}
    </select>
  `,c=h(d);return t&&(c.value=t),c.addEventListener("change",r=>{n&&n(r.target.value)}),c.updateProducts=(r,i)=>{const p=l(r);_(c,p),i&&(c.value=i)},c},f={KEYBOARD:"p1",MOUSE:"p2",MONITOR_ARM:"p3",LAPTOP_POUCH:"p4",SPEAKER:"p5"},U=[{id:f.KEYBOARD,name:"버그 없애는 키보드",val:1e4,originalVal:1e4,q:50,onSale:!1,suggestSale:!1},{id:f.MOUSE,name:"생산성 폭발 마우스",val:2e4,originalVal:2e4,q:30,onSale:!1,suggestSale:!1},{id:f.MONITOR_ARM,name:"거북목 탈출 모니터암",val:3e4,originalVal:3e4,q:20,onSale:!1,suggestSale:!1},{id:f.LAPTOP_POUCH,name:"에러 방지 노트북 파우치",val:15e3,originalVal:15e3,q:0,onSale:!1,suggestSale:!1},{id:f.SPEAKER,name:"코딩할 때 듣는 Lo-Fi 스피커",val:25e3,originalVal:25e3,q:10,onSale:!1,suggestSale:!1}];let u={products:U,amount:0,itemCount:0,lastSelectedProduct:null};const G=[],O=()=>({...u}),N=e=>{u={...u,...e},Q()},Q=()=>{G.forEach(e=>e(u))},j=({itemCount:e=0})=>{const t=`
    <div class="mb-8">
      <h1 class="text-xs font-medium tracking-extra-wide uppercase mb-2">🛒 Hanghae Online Store</h1>
      <div class="text-5xl tracking-tight leading-none">Shopping Cart</div>
      <p id="item-count" class="text-sm text-gray-500 font-normal mt-3">🛍️ ${e} items in cart</p>
    </div>
  `;return h(t)},z=()=>{const e=`
    <button class="help-toggle fixed top-4 right-4 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors z-50">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </button>
  `,t=`
    <div class="help-overlay fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300">
      <div class="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50 transform translate-x-full transition-transform duration-300">
        <button class="help-close absolute top-4 right-4 text-gray-500 hover:text-black">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 class="text-xl font-bold mb-4">📖 이용 안내</h2>
        <div class="mb-6">
          <h3 class="text-base font-bold mb-3">💰 할인 정책</h3>
          <div class="space-y-3">
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">개별 상품</p>
              <p class="text-gray-700 text-xs pl-2">
                • 키보드 10개↑: 10%<br>
                • 마우스 10개↑: 15%<br>
                • 모니터암 10개↑: 20%<br>
                • 스피커 10개↑: 25%
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">전체 수량</p>
              <p class="text-gray-700 text-xs pl-2">• 30개 이상: 25%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">특별 할인</p>
              <p class="text-gray-700 text-xs pl-2">
                • 화요일: +10%<br>
                • ⚡번개세일: 20%<br>
                • 💝추천할인: 5%
              </p>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-base font-bold mb-3">🎁 포인트 적립</h3>
          <div class="space-y-3">
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">기본</p>
              <p class="text-gray-700 text-xs pl-2">• 구매액의 0.1%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">추가</p>
              <p class="text-gray-700 text-xs pl-2">
                • 화요일: 2배<br>
                • 키보드+마우스: +50p<br>
                • 풀세트: +100p<br>
                • 10개↑: +20p / 20개↑: +50p / 30개↑: +100p
              </p>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 mt-4">
          <p class="text-xs font-bold mb-1">💡 TIP</p>
          <p class="text-2xs text-gray-600 leading-relaxed">
            • 화요일 대량구매 = MAX 혜택<br>
            • ⚡+💝 중복 가능<br>
            • 상품4 = 품절
          </p>
        </div>
      </div>
    </div>
  `,n=h(e),s=h(t),o=s.querySelector(".fixed.right-0");let a=!1;return{toggleButton:n,overlay:s,handleToggle:()=>{a=!a,a?(s.classList.remove("hidden"),o.classList.remove("translate-x-full")):(s.classList.add("hidden"),o.classList.add("translate-x-full"))},handleClose:()=>{a=!1,s.classList.add("hidden"),o.classList.add("translate-x-full")}}},g={PRODUCT_SELECT:"product-select",ADD_TO_CART:"add-to-cart",STOCK_STATUS:"stock-status",CART_ITEMS:"cart-items",SUMMARY_DETAILS:"summary-details",LOYALTY_POINTS:"loyalty-points"},X=()=>{const e=K({products:u.products,selectedProductId:u.lastSelectedProduct,onSelectionChange:l=>{N({...u,lastSelectedProduct:l})}}),t=j({itemCount:u.itemCount}),n=z(),s=`
    <!-- Main Grid Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 flex-1 overflow-hidden">
      <!-- Left Column -->
      <div class="bg-white border border-gray-200 p-8 overflow-y-auto">
        <div class="mb-6 pb-6 border-b border-gray-200">
          <!-- ProductSelector will be inserted here -->
          <button id="${g.ADD_TO_CART}" class="w-full py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-all">
            Add to Cart
          </button>
          <div id="${g.STOCK_STATUS}" class="text-xs text-red-500 mt-3 whitespace-pre-line"></div>
        </div>
        <div id="${g.CART_ITEMS}" class="space-y-3"></div>
      </div>

      <!-- Right Column -->
      <div class="bg-black text-white p-8 flex flex-col">
        <h2 class="text-xs font-medium mb-5 tracking-extra-wide uppercase">Order Summary</h2>
        <div class="flex-1 flex flex-col">
          <div id="summary-details" class="space-y-3"></div>
          <div class="mt-auto">
            <div id="discount-info" class="mb-4"></div>
            <div id="cart-total" class="pt-5 border-t border-white/10">
              <div class="flex justify-between items-baseline">
                <span class="text-sm uppercase tracking-wider">Total</span>
                <div id="total-amount" class="text-2xl tracking-tight">₩0</div>
              </div>
              <div id="loyalty-points" class="text-xs text-blue-400 mt-2 text-right">적립 포인트: 0p</div>
            </div>
            <div id="tuesday-special" class="mt-4 p-3 bg-white/10 rounded-lg hidden">
              <div class="flex items-center gap-2">
                <span class="text-2xs">🎉</span>
                <span class="text-xs uppercase tracking-wide">Tuesday Special 10% Applied</span>
              </div>
            </div>
          </div>
        </div>
        <button class="w-full py-4 bg-white text-black text-sm font-normal uppercase tracking-super-wide cursor-pointer mt-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30">
          Proceed to Checkout
        </button>
        <p class="mt-4 text-2xs text-white/60 text-center leading-relaxed">
          Free shipping on all orders.<br>
          <span id="points-notice">Earn loyalty points with purchase.</span>
        </p>
      </div>
    </div>
  `,o=h(s),a=o.querySelector(".border-b");return a.insertBefore(e,a.firstChild),{appElement:o,helpModal:n,productSelector:e,header:t}},W=({id:e,name:t,val:n,originalVal:s,quantity:o,onSale:a=!1,suggestSale:l=!1})=>`
    <article 
      id="${e}" 
      class="grid grid-cols-[80px_1fr_auto] gap-5 py-5 border-b border-gray-100 first:pt-0 last:border-b-0 last:pb-0"
    >
      <div class="w-20 h-20 bg-gradient-black relative overflow-hidden">
        <div class="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-white/10 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>
      <div>
        <h3 class="text-base font-normal mb-1 tracking-tight">${a&&l?"⚡💝":a?"⚡":l?"💝":""}${t}</h3>
        <p class="text-xs text-gray-500 mb-0.5 tracking-wide">PRODUCT</p>
        <p class="text-xs text-black mb-3">${a||l?`<span class="line-through text-gray-400">₩${s.toLocaleString()}</span> <span class="${a&&l?"text-purple-600":a?"text-red-500":"text-blue-500"}">₩${n.toLocaleString()}</span>`:`₩${n.toLocaleString()}`}</p>
        <div class="flex items-center gap-4">
          <button 
            class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white" 
            data-product-id="${e}" 
            data-change="-1"
          >−</button>
          <span class="quantity-number text-sm font-normal min-w-[20px] text-center tabular-nums">${o}</span>
          <button 
            class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white" 
            data-product-id="${e}" 
            data-change="1"
          >+</button>
        </div>
      </div>
      <div class="text-right">
        <div class="text-lg mb-2 tracking-tight tabular-nums">${a||l?`<span class="line-through text-gray-400">₩${(s*o).toLocaleString()}</span> <span class="${a&&l?"text-purple-600":a?"text-red-500":"text-blue-500"}">₩${(n*o).toLocaleString()}</span>`:`₩${(n*o).toLocaleString()}`}</div>
        <a 
          class="remove-item text-2xs text-gray-500 uppercase tracking-wider cursor-pointer transition-colors border-b border-transparent hover:text-black hover:border-black" 
          data-product-id="${e}"
        >Remove</a>
      </div>
    </article>
  `,J=e=>{const t=W(e);return h(t)},T=(e,t)=>t.find(n=>n.id===e),Z=e=>e.reduce((t,n)=>t+n.q,0),tt=(e,t=5)=>{let n="";return e.forEach(s=>{s.q<t&&(s.q>0?n+=`${s.name}: 재고 부족 (${s.q}개 남음)
`:n+=`${s.name}: 품절
`)}),n},$={isInsufficientStock:(e,t,n)=>t>e+n,isOutOfStock:e=>e<=0,canIncreaseQuantity:(e,t)=>e<=0||t>=e,hasAvailableStock:e=>{const t=T(e,u.products);return t&&t.q>0}},I={getCurrentQuantity:e=>parseInt(e.textContent,10),updateQuantityDisplay:(e,t)=>{x(e,t)},calculateNewQuantity:(e,t)=>e+t,updateItemQuantity:(e,t)=>{const n=e.querySelector(".quantity-number");if(n){const s=parseInt(n.textContent||"0"),o=Math.max(0,s+t);n.textContent=o,o===0&&e.remove()}}},E={decreaseStock:(e,t=1)=>{e.q-=t},increaseStock:(e,t)=>{e.q+=t},updateStock:(e,t)=>{const n=T(e,u.products);n&&(n.q=Math.max(0,n.q+t))}},k=()=>document.getElementById(g.CART_ITEMS),et=()=>document.getElementById(g.ADD_TO_CART),nt=()=>document.getElementById(g.PRODUCT_SELECT),st=e=>{const t=k();t&&t.appendChild(e)},ot=e=>{e.remove()},B=()=>{alert("재고가 부족합니다.")};let A=null,C=null;const at=()=>{const t=nt()?.value;if(!t)return;const n=T(t,u.products);if(!n)return;if(!$.hasAvailableStock(n.id,n.val)){B();return}const s=document.getElementById(n.id);if(s)I.updateItemQuantity(s,1);else{const o=J({id:n.id,name:n.name,val:n.val,quantity:1,originalVal:n.val,onSale:n.onSale||!1,suggestSale:n.suggestSale||!1});st(o)}E.updateStock(n.id,-1),A&&A(),C&&C()},rt=(e,t)=>{const n=e.target;if(n.classList.contains("quantity-change")){const s=parseInt(n.dataset.change),o=n.dataset.productId,a=document.getElementById(o);if(a){const l=T(o,u.products);if(l){if(s>0)if($.hasAvailableStock(o,l.val))I.updateItemQuantity(a,s),E.updateStock(o,-s);else{B();return}else I.updateItemQuantity(a,s),E.updateStock(o,-s);t.onCalculate&&t.onCalculate(),t.onUpdateOptions&&t.onUpdateOptions()}}}if(n.classList.contains("remove-item")){const s=n.dataset.productId,o=document.getElementById(s);if(o){const a=o.querySelector(".quantity-number"),l=parseInt(a?.textContent||"0");E.updateStock(s,l),ot(o),t.onCalculate&&t.onCalculate(),t.onUpdateOptions&&t.onUpdateOptions()}}},lt={registerEvents(e,t){A=e,C=t;const n=et();n&&n.addEventListener("click",at);const s=k();s&&s.addEventListener("click",o=>{rt(o,{onCalculate:e,onUpdateOptions:t})})}},it=({amount:e,discountRate:t})=>{const n=document.getElementById("total-amount");n&&x(n,`총액: ₩${Math.round(e).toLocaleString()}`);const s=document.getElementById("discount-info");if(s){const o=t>0?`${(t*100).toFixed(1)}%`:"";x(s,o)}},ct=(e,t,n,s)=>t<n.DISCOUNT.ITEM_DISCOUNT_MIN_QUANTITY?0:{[s.KEYBOARD]:.1,[s.MOUSE]:.15,[s.MONITOR_ARM]:.2,[s.LAPTOP_POUCH]:.05,[s.SPEAKER]:.25}[e]||0,w=(e,t)=>t.find(n=>n.id===e)||null,P=e=>{const t=e.querySelector(".quantity-number");return parseInt(t?.textContent||"0",10)},q=(e,t)=>e.val*t,dt=(e,t)=>e.reduce((n,s)=>{const o=w(s.id,t);if(!o)return n;const a=P(s),l=q(o,a);return{subtotal:n.subtotal+l,totalItemCount:n.totalItemCount+a}},{subtotal:0,totalItemCount:0}),ut=(e,t,n,s)=>e.reduce((o,a)=>{const l=w(a.id,t);if(!l)return o;const d=P(a),c=ct(a.id,d,n,s),r=q(l,d),i=r*(1-c);return{totalAmount:o.totalAmount+i,itemDiscounts:[...o.itemDiscounts,{productId:a.id,originalAmount:r,discountedAmount:i,discountRate:c}]}},{totalAmount:0,itemDiscounts:[]}),pt=e=>{const t=new Date().getDay()===2,{TUESDAY_DISCOUNT_RATE:n}=m.DISCOUNT;return{finalAmount:t&&e>0?e*(1-n):e,isTuesday:t}},mt=(e,t)=>e>0?(e-t)/e:0,gt=(e,t,n,s)=>{const o=Array.from(e),{subtotal:a,totalItemCount:l}=dt(o,t),d=l>=n.DISCOUNT.BULK_DISCOUNT_THRESHOLD,{BULK_DISCOUNT_RATE:c}=n.DISCOUNT,r=d?a*(1-c):a,i=d?{totalAmount:r,itemDiscounts:[]}:ut(o,t,n,s),{finalAmount:p,isTuesday:S}=pt(i.totalAmount),y=mt(a,p);return{subtotal:a,totalAmount:p,totalItemCount:l,itemDiscounts:i.itemDiscounts,discountRate:y,isTuesday:S}},St=(e,t,n)=>{e.forEach(s=>{if(!t.find(c=>c.id===s.id))return;const a=s.querySelector(".quantity-number"),l=parseInt(a?.textContent||"0");s.querySelectorAll(".text-lg, .text-xs").forEach(c=>{if(c.classList.contains("text-lg")){const r=l>=n.DISCOUNT.ITEM_DISCOUNT_MIN_QUANTITY?"bold":"normal";b(c,"fontWeight",r)}})})},H=()=>{const e=document.getElementById("cart-items");return e?Array.from(e.children).map(t=>{const n=t.id,s=u.products.find(l=>l.id===n),o=t.querySelector(".quantity-number"),a=parseInt(o?.textContent||"0");return{product:s,quantity:a,element:t}}).filter(t=>t.product):[]},Y=()=>{const e=H();if(e.length===0)return{totalAmount:0,discountRate:0,totalItemCount:0,isTuesday:new Date().getDay()===2,appliedDiscounts:[]};const t=e.map(n=>n.element);return gt(t,u.products,m,f)},ft=e=>{const{discountRate:t,appliedDiscounts:n}=e;if(t<=0)return"";const s=`${(t*100).toFixed(1)}% 할인 적용`,o=n?.length>0?` (${n.join(", ")})`:"";return s+o},ht=e=>`🛍️ ${e} items in cart`,Tt=e=>{const t=document.getElementById("discount-info");t&&(t.textContent=ft(e))},yt=e=>{const t=document.getElementById("tuesday-special");t&&(e.isTuesday&&e.totalAmount>0?t.classList.remove("hidden"):t.classList.add("hidden"))},Et=e=>{const t=document.getElementById("item-count");t&&(t.textContent=ht(e.totalItemCount))},xt=e=>{Tt(e),yt(e),Et(e);const t=document.getElementById("cart-items")?.children;if(t&&t.length>0){const{products:n}=O();St(Array.from(t),n,m)}},bt=e=>{const t=Y();return it({amount:t.totalAmount,discountRate:t.discountRate,point:e.points||0}),{cartData:H().map(s=>({product:s.product,quantity:s.quantity})),totalAmount:t.totalAmount,discountRate:t.discountRate}},vt=(e,t,n)=>{const s=T(e,n);return!s||s.onSale?!1:(s.originalVal||(s.originalVal=s.val),s.val=Math.round(s.originalVal*(1-t)),s.onSale=!0,!0)},It=(e,t,n)=>{const s=T(e,n);return!s||s.suggestSale?!1:(s.originalVal||(s.originalVal=s.val),s.val=Math.round(s.originalVal*(1-t)),s.suggestSale=!0,!0)},At=e=>e.map(t=>{let n=`${t.name} - ${t.val}원`;return t.q===0?n+=" (품절)":t.q<5&&(n+=` (재고부족: ${t.q}개)`),{value:t.id,text:n,disabled:t.q===0}}),v=()=>{const e=document.getElementById("product-select");if(!e)return;const t=e.value,n=O().products;e.innerHTML="",At(n).forEach(o=>{const a=document.createElement("option");a.value=o.value,a.textContent=o.text,a.disabled=o.disabled,e.appendChild(a)}),t&&(e.value=t),Z(n)<50?e.style.borderColor="orange":e.style.borderColor=""},Ct=()=>{const e=O().products;return tt(e,5)},_t=()=>{const e=document.getElementById("stock-status");e&&(e.textContent=Ct())},V=e=>Math.random()*e,Ot=e=>{const t=Math.floor(Math.random()*e.length);return e[t]},Dt=(e,t)=>e.find(n=>n.id!==t&&n.q>0&&!n.suggestSale),Lt=(e,t)=>{const n=t*100;alert(`⚡번개세일! ${e.name}이(가) ${n}% 할인 중입니다!`)},Rt=(e,t)=>{const n=t*100;alert(`💝 ${e.name}은(는) 어떠세요? 지금 구매하시면 ${n}% 추가 할인!`)},F=()=>{window.dispatchEvent(new CustomEvent("cart-updated"))},Mt=()=>{const e=V(m.TIMERS.RANDOM_DELAY);setTimeout(()=>{setInterval(()=>{const t=u.products,n=Ot(t);vt(n.id,m.DISCOUNT.FLASH_SALE_DISCOUNT_RATE,t)&&(Lt(n,m.DISCOUNT.FLASH_SALE_DISCOUNT_RATE),v(),F())},m.TIMERS.FLASH_SALE_INTERVAL)},e)},Ut=()=>{const e=V(m.TIMERS.MAX_DELAY);setTimeout(()=>{setInterval(()=>{const t=M("#cart-items");if(!t||t.children.length===0)return;const{lastSelectedProduct:n,products:s}=u;if(!n)return;const o=Dt(s,n);o&&It(o.id,m.DISCOUNT.SUGGEST_DISCOUNT_RATE,s)&&(Rt(o,m.DISCOUNT.SUGGEST_DISCOUNT_RATE),v(),F())},m.TIMERS.SUGGEST_SALE_INTERVAL)},e)},Nt=(e=[])=>e.length?e.map(t=>`
        <div class="flex justify-between text-sm">
          <span class="text-gray-200">${t.name} × ${t.quantity}</span>
          <span class="text-white">₩${(t.price*t.quantity).toLocaleString()}</span>
        </div>
      `).join(""):`
      <div class="text-center text-sm text-gray-400 py-8">
        Empty Cart
      </div>
    `,$t=()=>{const t=document.getElementById(g.CART_ITEMS).querySelectorAll("article[id]");return Array.from(t).map(n=>{const s=n.id,o=n.querySelector("h3"),a=n.querySelector(".quantity-number"),l=n.querySelector(".text-lg"),c=(o?.textContent||"").replace(/^[⚡💝]+/u,"").trim(),r=parseInt(a?.textContent||"0");let i=0;if(l){const S=l.textContent.match(/₩([\d,]+)/);S&&(i=parseInt(S[1].replace(/,/g,"")))}return{id:s,name:c,quantity:r,price:Math.round(i/r)||0}})},kt=()=>{const e=$t(),t=Nt(e),n=document.getElementById(g.SUMMARY_DETAILS);_(n,t)},Bt=e=>{kt(e,u.products)},wt=e=>{const{BASE_POINT_RATE:t}=m.POINTS;return Math.floor(e/t)},Pt=(e=new Date)=>e.getDay()===2,qt=(e,t)=>{const n=[];for(const s of e){const o=t.find(a=>a.id===s.id);o&&n.push(o.id)}return n},Ht=(e,t,n,s,o,a)=>{const l=Array.from(n);if(l.length===0)return Kt(),{points:0,details:[]};const d=wt(e),c=d>0?[`기본: ${d}p`]:[],r=Pt(),i=r&&d>0?d*2:d,p=r&&d>0?["화요일 2배"]:[],S=Yt(l,s,o,a),y=Vt(t,o),D=i+S.points+y.points,L=[...c,...p,...S.details,...y.details];return Ft(D,L),{points:D,details:L}},Yt=(e,t,n,s)=>{const o=qt(e,t),a=[],l=o.includes(s.KEYBOARD),d=o.includes(s.MOUSE),c=o.includes(s.MONITOR_ARM),r=l&&d?n.POINTS.KEYBOARD_MOUSE_BONUS:0;r>0&&a.push(`키보드+마우스 세트 +${r}p`);const i=l&&d&&c?n.POINTS.FULL_SET_BONUS:0;return i>0&&a.push(`풀세트 구매 +${i}p`),{points:r+i,details:a}},Vt=(e,t)=>{const{TIER_1:n,TIER_2:s,TIER_3:o}=t.POINTS.BULK_PURCHASE_BONUSES;return e>=o.threshold?{points:o.bonus,details:[`대량구매(${o.threshold}개+) +${o.bonus}p`]}:e>=s.threshold?{points:s.bonus,details:[`대량구매(${s.threshold}개+) +${s.bonus}p`]}:e>=n.threshold?{points:n.bonus,details:[`대량구매(${n.threshold}개+) +${n.bonus}p`]}:{points:0,details:[]}},Ft=(e,t)=>{const n=document.getElementById(g.LOYALTY_POINTS);n&&(e>0?(_(n,`
        <div>적립 포인트: <span class="font-bold">${e}p</span></div>
        <div class="text-2xs opacity-70 mt-1">${t.join(", ")}</div>
    `),b(n,"display","block")):(x(n,"적립 포인트: 0p"),b(n,"display","block")))},Kt=()=>{const e=document.getElementById(g.LOYALTY_POINTS);e&&b(e,"display","none")},Gt=e=>{const t=M("#cart-items");if(!t)return{points:0,details:[]};const n=t.children,{totalAmount:s,totalItemCount:o}=e;return Ht(s,o,n,u.products,m,f)},R=e=>{const t=Y();xt(t);const n=Gt(t);Bt(t),bt(n),_t(),e&&e({...t,points:n.points,pointsDetails:n.details})},Qt=()=>{N({products:U,amount:0,itemCount:0,lastSelectedProduct:null});const{appElement:e,helpModal:t,header:n}=X(),s=document.getElementById("app");s.innerHTML="",s.appendChild(n),s.appendChild(e),s.appendChild(t.toggleButton),s.appendChild(t.overlay),t.toggleButton.addEventListener("click",t.handleToggle),t.overlay.querySelector(".help-close").addEventListener("click",t.handleClose),t.overlay.addEventListener("click",o=>{o.target===t.overlay&&t.handleClose()}),v(),R(),Mt(),Ut(),lt.registerEvents(R,v)};Qt();
