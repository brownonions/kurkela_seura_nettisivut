!function(){"use strict";var e={n:function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(t,{a:t}),t},d:function(o,t){for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{CurrencyContext:function(){return y},CurrencyFactory:function(){return s},default:function(){return f},getCurrencyData:function(){return u},getFilteredCurrencyInstance:function(){return p}});var t=window.wp.element,r=window.wp.htmlEntities,n=window.wp.i18n,a=window.wc.number,i=window.wp.deprecated,c=e.n(i);const s=function(e){let o;function i(e){if(e.priceFormat)return function(e){const o=document.createElement("DIV");return o.innerHTML=e,o.textContent||o.innerText||""}(e.priceFormat.toString());switch(e.symbolPosition){case"left":return"%1$s%2$s";case"right":return"%2$s%1$s";case"left_space":return"%1$s %2$s";case"right_space":return"%2$s %1$s"}return"%1$s%2$s"}function s(e){const t={code:"USD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2,...e};let r=t.precision;null===r?(console.warn("Currency precision is null"),r=NaN):"string"==typeof r&&(r=parseInt(r,10)),o={code:t.code.toString(),symbol:t.symbol.toString(),symbolPosition:t.symbolPosition.toString(),decimalSeparator:t.decimalSeparator.toString(),priceFormat:i(t),thousandSeparator:t.thousandSeparator.toString(),precision:r}}function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=(0,a.numberFormat)(o,e);if(""===r)return r;const{priceFormat:i,symbol:c,code:s}=o;return(0,n.sprintf)(i,t?s:c,r)}return s(e),{getCurrencyConfig:()=>({...o}),getDataForCountry:function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=o[e];if(!n)return{};const a=t[n.currency_code];return a?{code:n.currency_code,symbol:(0,r.decodeEntities)(a),symbolPosition:n.currency_pos,thousandSeparator:n.thousand_sep,decimalSeparator:n.decimal_sep,precision:n.num_decimals}:{}},setCurrency:s,formatAmount:u,formatCurrency:function(e){return c()("Currency().formatCurrency",{version:"5.0.0",alternative:"Currency().formatAmount",plugin:"WooCommerce",hint:"`formatAmount` accepts the same arguments as formatCurrency"}),u(e)},getPriceFormat:i,formatDecimal(e){if("number"!=typeof e&&(e=parseFloat(e)),Number.isNaN(e))return 0;const{precision:t}=o;return Math.round(e*Math.pow(10,t))/Math.pow(10,t)},formatDecimalString(e){if("number"!=typeof e&&(e=parseFloat(e)),Number.isNaN(e))return"";const{precision:t}=o;return e.toFixed(t)},render:e=>("number"!=typeof e&&(e=parseFloat(e)),e<0?(0,t.createElement)("span",{className:"is-negative"},u(e)):u(e))}};function u(){return c()("getCurrencyData",{version:"3.1.0",alternative:"CurrencyFactory.getDataForCountry",plugin:"WooCommerce Admin",hint:"Pass in the country, locale data, and symbol info to use getDataForCountry"}),{US:{code:"USD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},EU:{code:"EUR",symbol:"€",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},IN:{code:"INR",symbol:"₹",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},GB:{code:"GBP",symbol:"£",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},BR:{code:"BRL",symbol:"R$",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},VN:{code:"VND",symbol:"₫",symbolPosition:"right",thousandSeparator:".",decimalSeparator:",",precision:1},ID:{code:"IDR",symbol:"Rp",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:0},BD:{code:"BDT",symbol:"৳",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:0},PK:{code:"PKR",symbol:"₨",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},RU:{code:"RUB",symbol:"₽",symbolPosition:"right",thousandSeparator:" ",decimalSeparator:",",precision:2},TR:{code:"TRY",symbol:"₺",symbolPosition:"left",thousandSeparator:".",decimalSeparator:",",precision:2},MX:{code:"MXN",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2},CA:{code:"CAD",symbol:"$",symbolPosition:"left",thousandSeparator:",",decimalSeparator:".",precision:2}}}var l=window.wp.hooks;const m=(0,window.wc.wcSettings.getSetting)("currency"),d=s(m),p=e=>{const o=d.getCurrencyConfig(),t=(0,l.applyFilters)("woocommerce_admin_report_currency",o,e);return s(t)},y=(0,t.createContext)(d);var f=s;(window.wc=window.wc||{}).currency=o}();