class t extends HTMLElement{constructor(){super();const t=JSON.parse(localStorage.getItem("History"));if(t&&t.tasklists.length>0){const t=document.createElement("a");t.classList.add("btn","btn-info","btn-lg"),t.href="./done.html",t.textContent="View Logs",this.appendChild(t)}}}customElements.define("logs-button",t);