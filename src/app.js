class MonotoneShape extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["shape-id", "text","width","height"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }
  

  render() {
    const shapeId = this.getAttribute("shape-id");
    const text = this.getAttribute("text");
    
    
    let svgContent = "";

    if (text) {
      svgContent = this.generateShapeFromText(text);
    } else if (shapeId && shapeId >= 1 && shapeId <= 24) {
      svgContent = this.getSVGByShapeId(shapeId);
    } else {
      let random = ~~(Math.random() * 24) + 1;
      svgContent = this.getSVGByShapeId(random);
    }

    this.shadowRoot.innerHTML = `
            <style>
                .svg-container {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div class="svg-container">${svgContent}</div>
        `;
  }

  getSVGByShapeId(shapeId) {
      const width=this.getAttribute("width")??24;
      const height=this.getAttribute("height")??24;
    const svgs = {
      1: `<svg  width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9.125" y="7.95834" width="11.875" height="11.0833" rx="1" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="2" y="4" width="12.3913" height="10.2917" rx="1" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      2: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="7" y="7" width="12" height="12" rx="6" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="3" y="3" width="4" height="4" rx="2" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      3: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="6" width="13" height="13" rx="2" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="3" y="4" width="5" height="5" rx="2" fill="#292929" fill-opacity="0.52"/>
<rect x="15" y="16" width="5" height="5" rx="2" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      4: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="6" rx="1" transform="matrix(-1 0 0 1 20 13)" fill="#2C2C2D" fill-opacity="0.82"/>
<rect width="6" height="16" rx="1" transform="matrix(-0.573576 -0.819152 -0.819152 0.573576 18.2743 9.86893)" fill="#292929" fill-opacity="0.52"/>
</svg>`,
      5: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.77975" y="10.1106" width="15.1433" height="6.09375" rx="1" transform="rotate(18 6.77975 10.1106)" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="16.3369" y="7.07063" width="5.85336" height="13.1728" rx="1" transform="rotate(108 16.3369 7.07063)" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      6: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8657 12.4796C11.2345 12.7821 11.7655 12.7821 12.1343 12.4796L17.5661 8.0231C18.2921 7.42743 17.8709 6.25 16.9318 6.25H6.06819C5.12908 6.25 4.70788 7.42744 5.4339 8.0231L10.8657 12.4796Z" fill="#292929" fill-opacity="0.52"/>
<path d="M12.1343 9.5204C11.7655 9.21786 11.2345 9.21786 10.8657 9.5204L5.4339 13.9769C4.70788 14.5726 5.12908 15.75 6.06819 15.75H16.9318C17.8709 15.75 18.2921 14.5726 17.5661 13.9769L12.1343 9.5204Z" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      7: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="5" width="11" height="11" rx="1" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="19" y="7" width="1" height="12" fill="#292929" fill-opacity="0.52"/>
<rect x="4" y="19" width="16" height="1" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      8: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="8" cy="12" rx="2" ry="10" fill="#292929" fill-opacity="0.52"/>
<ellipse cx="11.5" cy="12" rx="2.5" ry="10" fill="#2C2C2D" fill-opacity="0.82"/>
<ellipse cx="15" cy="12" rx="2" ry="10" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      9: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0719 12.7972C10.3429 12.9256 10.6571 12.9256 10.9281 12.7972L18.0921 9.40374C18.8547 9.04253 18.8547 7.95747 18.0921 7.59626L10.9281 4.20278C10.6571 4.07443 10.3429 4.07443 10.0719 4.20278L2.90789 7.59626C2.14534 7.95747 2.14534 9.04253 2.90789 9.40374L10.0719 12.7972Z" fill="#292929" fill-opacity="0.52"/>
<path d="M11.9281 9.20278C11.6571 9.07443 11.3429 9.07443 11.0719 9.20278L3.90789 12.5963C3.14534 12.9575 3.14534 14.0425 3.90789 14.4037L11.0719 17.7972C11.3429 17.9256 11.6571 17.9256 11.9281 17.7972L19.0921 14.4037C19.8547 14.0425 19.8547 12.9575 19.0921 12.5963L11.9281 9.20278Z" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      10: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6H2V15L21 6Z" fill="#292929" fill-opacity="0.52"/>
<path d="M21 19H2V10L21 19Z" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      11: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="5" width="3" height="15" fill="#2C2C2D" fill-opacity="0.82"/>
<path d="M14.1706 9.23134C14.567 8.64288 15.433 8.64288 15.8294 9.23133L20.0123 15.4413C20.4597 16.1056 19.9838 17 19.1829 17H10.8171C10.0162 17 9.54029 16.1056 9.9877 15.4413L14.1706 9.23134Z" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      12: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59992 5.83688C8.17263 4.67644 9.82737 4.67644 10.4001 5.83688C10.6275 6.29769 11.0671 6.61709 11.5757 6.69098C12.8563 6.87707 13.3676 8.45083 12.441 9.3541C12.073 9.71279 11.9051 10.2296 11.9919 10.7361C12.2107 12.0115 10.872 12.9841 9.72654 12.382C9.2717 12.1428 8.7283 12.1428 8.27346 12.382C7.12804 12.9841 5.78932 12.0115 6.00807 10.7361C6.09494 10.2296 5.92702 9.71279 5.55905 9.3541C4.63238 8.45083 5.14373 6.87707 6.42435 6.69098C6.93288 6.61709 7.37249 6.29769 7.59992 5.83688Z" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="7.38095" y="19.7445" width="8" height="13" rx="2" transform="rotate(-115 7.38095 19.7445)" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      13: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 7L14.1292 9.75V15.25L8.5 18L2.87083 15.25V9.75L8.5 7Z" fill="#292929" fill-opacity="0.52"/>
<path d="M14.5 11L20.1292 13.75V19.25L14.5 22L8.87083 19.25V13.75L14.5 11Z" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      14: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="16" y="5" width="5" height="5" rx="2.5" fill="#292929" fill-opacity="0.52"/>
<rect x="3" y="10" width="18" height="4" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="3" y="14" width="5" height="5" rx="2.5" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      15: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1133 4.53713L16.79 14.9588L6.59383 8.83235L16.1133 4.53713Z" fill="#292929" fill-opacity="0.52"/>
<path d="M6.88677 20.4537L16.4063 16.1585L6.21009 10.032L6.88677 20.4537Z" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      16: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.2725 6.36949C5.04412 6.02858 5.8739 5.92129 6.68832 6.05713C7.50275 6.19296 8.27669 6.56772 8.94159 7.14822C9.60649 7.72872 10.1418 8.49703 10.5002 9.3851C10.8585 10.2732 11.0288 11.2536 10.996 12.2395C10.9632 13.2254 10.7283 14.1864 10.312 15.0374C9.89576 15.8883 9.31105 16.6029 8.60968 17.1179C7.90831 17.6329 7.11193 17.9324 6.29106 17.9898C5.4702 18.0473 4.65021 17.8609 3.90371 17.4472L4.74126 15.2708C5.1895 15.5192 5.68188 15.6312 6.17477 15.5967C6.66767 15.5622 7.14587 15.3823 7.56702 15.0731C7.98816 14.7639 8.33926 14.3348 8.5892 13.8238C8.83914 13.3129 8.98021 12.7358 8.99992 12.1438C9.01963 11.5518 8.91737 10.9631 8.70219 10.4299C8.48701 9.8966 8.16556 9.43525 7.76632 9.08669C7.36707 8.73812 6.90235 8.51309 6.41331 8.43153C5.92428 8.34996 5.42603 8.41438 4.9627 8.61909L4.2725 6.36949Z" fill="#292929" fill-opacity="0.52"/>
<path d="M19.7275 6.36949C18.9559 6.02858 18.1261 5.92129 17.3117 6.05713C16.4973 6.19296 15.7233 6.56772 15.0584 7.14822C14.3935 7.72872 13.8582 8.49703 13.4998 9.3851C13.1415 10.2732 12.9712 11.2536 13.004 12.2395C13.0368 13.2254 13.2717 14.1864 13.688 15.0374C14.1042 15.8883 14.6889 16.6029 15.3903 17.1179C16.0917 17.6329 16.8881 17.9324 17.7089 17.9898C18.5298 18.0473 19.3498 17.8609 20.0963 17.4472L19.2661 15.29C18.8152 15.5398 18.32 15.6524 17.8242 15.6177C17.3284 15.583 16.8474 15.4021 16.4238 15.0911C16.0002 14.78 15.6471 14.3484 15.3957 13.8345C15.1443 13.3205 15.0024 12.7401 14.9825 12.1447C14.9627 11.5492 15.0656 10.957 15.282 10.4207C15.4984 9.8843 15.8218 9.42026 16.2234 9.06965C16.6249 8.71905 17.0924 8.4927 17.5843 8.41066C18.0762 8.32862 18.5773 8.39342 19.0434 8.59932L19.7275 6.36949Z" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      17: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18.706L20.7774 5.86214L17.7244 21.5682L3 18.706Z" fill="#292929" fill-opacity="0.52"/>
<rect x="5.00021" y="4" width="9" height="9" rx="4.5" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      18: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="5" width="14" height="14" rx="7" stroke="#2C2C2D" stroke-opacity="0.82" stroke-width="1.5" stroke-linecap="square"/>
<rect x="19.5" y="9.5" width="5" height="5" rx="2.5" transform="rotate(180 19.5 9.5)" stroke="#292929" stroke-opacity="0.52" stroke-linecap="square"/>
<rect x="4.5" y="14.5" width="5" height="5" rx="2.5" stroke="#292929" stroke-opacity="0.52" stroke-linecap="square"/>
</svg>
`,
      19: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="19" width="18" height="3" rx="1" fill="#2C2C2D" fill-opacity="0.82"/>
<path d="M11.0137 3.68882C11.6061 3.27506 12.3939 3.27506 12.9863 3.68882L15.8559 5.69285L18.6486 7.80268C19.2251 8.23828 19.4686 8.98744 19.2581 9.67876L18.2389 13.0272L17.0953 16.3351C16.8592 17.0181 16.222 17.4811 15.4995 17.4946L12 17.56L8.50054 17.4946C7.77803 17.4811 7.14076 17.0181 6.90465 16.3351L5.76107 13.0272L4.74186 9.67876C4.53144 8.98744 4.77486 8.23828 5.35144 7.80268L8.14413 5.69285L11.0137 3.68882Z" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      20: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3227 4.58231C11.1113 3.36819 12.8887 3.36818 13.6773 4.5823L17.7876 10.9106C18.6518 12.2411 17.6969 14 16.1103 14H7.88965C6.30308 14 5.34819 12.2411 6.2124 10.9106L10.3227 4.58231Z" fill="#2C2C2D" fill-opacity="0.82"/>
<path d="M18 15C18 16.5913 17.3679 18.1174 16.2426 19.2426C15.1174 20.3679 13.5913 21 12 21C10.4087 21 8.88258 20.3679 7.75736 19.2426C6.63214 18.1174 6 16.5913 6 15L12 15H18Z" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      21: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="10" width="10" height="3" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="23" y="14" width="10" height="3" transform="rotate(180 23 14)" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="8" y="10" width="3" height="10" fill="#292929" fill-opacity="0.52"/>
<rect x="16" y="14" width="3" height="10" transform="rotate(180 16 14)" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      22: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L18.9282 14.5H5.0718L12 4Z" fill="#292929" fill-opacity="0.52"/>
<path d="M12 10L18.9282 20.5H5.0718L12 10Z" fill="#2C2C2D" fill-opacity="0.82"/>
</svg>
`,
      23: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 13.5221 20.614 15.0193 19.878 16.3517C19.142 17.684 18.0802 18.808 16.7917 19.6183C15.5033 20.4287 14.0304 20.8991 12.5107 20.9855C10.9911 21.0719 9.47436 20.7714 8.10239 20.1123C6.73043 19.4531 5.54806 18.4567 4.66585 17.2163C3.78365 15.976 3.23044 14.5321 3.05797 13.0198C2.88549 11.5075 3.09938 9.9762 3.67963 8.56904C4.25989 7.16187 5.18755 5.92486 6.37585 4.97369L7.94175 6.92998C7.08429 7.61632 6.41492 8.50892 5.99622 9.5243C5.57752 10.5397 5.42318 11.6446 5.54764 12.7359C5.67209 13.8271 6.07128 14.869 6.70785 15.764C7.34443 16.659 8.1976 17.378 9.18758 17.8536C10.1776 18.3293 11.272 18.5461 12.3685 18.4837C13.4651 18.4214 14.5279 18.082 15.4576 17.4972C16.3873 16.9125 17.1535 16.1015 17.6846 15.1401C18.2156 14.1787 18.4942 13.0983 18.4942 12H21Z" fill="#2C2C2D" fill-opacity="0.82"/>
<rect x="11" y="4" width="7" height="7" rx="3.5" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
      24: `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L16 6L12 10L8 6L12 2Z" fill="#2C2C2D" fill-opacity="0.82"/>
<path d="M12 13L16 17L12 21L8 17L12 13Z" fill="#2C2C2D" fill-opacity="0.82"/>
<path d="M18 8L22 12L18 16L14 12L18 8Z" fill="#292929" fill-opacity="0.52"/>
<path d="M6 8L10 12L6 16L2 12L6 8Z" fill="#292929" fill-opacity="0.52"/>
</svg>
`,
    };
    return svgs[shapeId] || svgs[0];
  }

  generateShapeFromText(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash += text.charCodeAt(i);
    }
    return this.getSVGByShapeId((hash % 24) + 1);
  }
}

customElements.define("monotone-shape", MonotoneShape);
