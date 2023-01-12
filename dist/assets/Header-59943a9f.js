import{j as i,a as e,r as d,C as B,u as I,b as N,L as j}from"./index-a7ad1c39.js";import{G as O,a as R,R as L,F as v}from"./index.esm-c319c867.js";function u(t){this.message=t}u.prototype=new Error,u.prototype.name="InvalidCharacterError";var y=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(t){var r=String(t).replace(/=+$/,"");if(r.length%4==1)throw new u("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,s,a=0,l=0,c="";s=r.charAt(l++);~s&&(o=a%4?64*o+s:s,a++%4)?c+=String.fromCharCode(255&o>>(-2*a&6)):0)s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return c};function Z(t){var r=t.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(o){return decodeURIComponent(y(o).replace(/(.)/g,function(s,a){var l=a.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l}))}(r)}catch{return y(r)}}function m(t){this.message=t}function U(t,r){if(typeof t!="string")throw new m("Invalid token specified");var o=(r=r||{}).header===!0?0:1;try{return JSON.parse(Z(t.split(".")[o]))}catch(s){throw new m("Invalid token specified: "+s.message)}}m.prototype=new Error,m.prototype.name="InvalidTokenError";const T="/assets/tube-453aeb90.png",z="data:image/png;base64,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";function f(t){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"}}]})(t)}const D=()=>i("div",{className:"load-bar",children:[e("div",{className:"bar"}),e("div",{className:"bar"}),e("div",{className:"bar"})]}),F=()=>{var h,g;const[t,r]=d.useState(""),[o,s]=d.useState({}),{loading:a,mobileMenu:l,setMobileMenu:c}=d.useContext(B),b=I(),M=n=>{const x=U(n.credential);console.log(x),s(x),document.getElementById("userAuth").style.display="none"};d.useEffect(()=>{google.accounts.id.initialize({client_id:"1004331827822-ov20cd676et9a7jofoor9mc1kbns9ef9.apps.googleusercontent.com",callback:M}),google.accounts.id.renderButton(document.getElementById("userAuth"),{theme:"outline",size:"small"})},[]);const w=()=>{s({}),document.getElementById("userAuth").style.display="block"},p=n=>{((n==null?void 0:n.key)==="Enter"||n==="searchButton")&&(t==null?void 0:t.length)>0&&b(`/searchResult/${t}`)},k=()=>{c(!l)},{pathname:A}=N();return(g=(h=A==null?void 0:A.split("/"))==null?void 0:h.filter(Boolean))==null||g[0],i("div",{className:"sticky top-0 z-10 flex flex-row items-center justify-between py-2 h-20 px-4 md:px-5 bg-white dark:bg-black",children:[a&&e(D,{}),i("div",{className:"flex h-5 items-center",children:[e("div",{className:"flex md:mr-6 cursor-pointer items-center justify-center h-10 w-8 rounded-full hover:bg-[#303030]/[0.6]",onClick:k,children:e(R,{className:"text-red-700 text-2xl"})}),i(j,{to:"/",className:"flex h-5 items-center",children:[e("img",{className:"hidden h-[33px] dark:md:block w-[130px]",src:T,alt:"Youtube"}),e("img",{className:"h-[20px] md:hidden",src:z,alt:"Youtube"})]})]}),i("div",{className:"group flex items-center",children:[i("div",{className:"flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#773b3b] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0",children:[e("div",{className:"w-10 items-center justify-center hidden group-focus-within:md:flex",children:e(f,{className:"text-white text-xl"})}),e("input",{type:"text",className:"bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]",onChange:n=>r(n.target.value),onKeyUp:p,placeholder:"Search",value:t})]}),e("button",{className:"w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#773b3b] rounded-r-3xl bg-white/[0.1]",onClick:()=>p("searchButton"),children:e(f,{className:"text-white text-xl"})})]}),i("div",{className:"flex items-center",children:[i("div",{className:"hidden md:flex",children:[e("div",{className:"flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]",children:e(L,{className:"text-white text-xl cursor-pointer"})}),e("div",{className:"flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]",children:e(v,{className:"text-white text-xl cursor-pointer"})})]}),e("div",{id:"userAuth",className:"flex cursor-pointer overflow-hidden md:ml-4 items-center w-[27px] rounded-[41%]"}),Object.keys(o).length!==0&&e("div",{className:"flex h-8 cursor-pointer overflow-hidden md:ml-4 items-center rounded-full",onClick:w,children:e("img",{src:o==null?void 0:o.picture,className:"object-cover w-8"})})]})]})};export{F as default};
