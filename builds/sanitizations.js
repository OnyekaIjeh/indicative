!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e.indicative=e.indicative||{},e.indicative.sanitizations={}))}(this,function(e){"use strict";function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,o){return o={exports:{}},e(o,o.exports),o.exports}function a(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&q.call(e)==d}(e))return H?H.call(e):"";var o=e+"";return"0"==o&&1/e==-f?"-0":o}function i(e){return null==e?"":a(e)}function r(e,o){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),a=1;a<arguments.length;a++){var i=arguments[a];if(void 0!==i&&null!==i)for(var r=Object.keys(Object(i)),n=0,u=r.length;n<u;n++){var l=r[n],s=Object.getOwnPropertyDescriptor(i,l);void 0!==s&&s.enumerable&&(t[l]=i[l])}}return t}var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=t(function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];for(var t in o)void 0===e[t]&&(e[t]=o[t]);return e},e.exports=o.default});o(u);var l=o(t(function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,o){o=(0,t.default)(o,a);var u=e.split("@"),l=u.pop(),s=[u.join("@"),l];if(s[1]=s[1].toLowerCase(),"gmail.com"===s[1]||"googlemail.com"===s[1]){if(o.gmail_remove_subaddress&&(s[0]=s[0].split("+")[0]),o.gmail_remove_dots&&(s[0]=s[0].replace(/\./g,"")),!s[0].length)return!1;(o.all_lowercase||o.gmail_lowercase)&&(s[0]=s[0].toLowerCase()),s[1]=o.gmail_convert_googlemaildotcom?"gmail.com":s[1]}else if(~i.indexOf(s[1])){if(o.icloud_remove_subaddress&&(s[0]=s[0].split("+")[0]),!s[0].length)return!1;(o.all_lowercase||o.icloud_lowercase)&&(s[0]=s[0].toLowerCase())}else if(~r.indexOf(s[1])){if(o.outlookdotcom_remove_subaddress&&(s[0]=s[0].split("+")[0]),!s[0].length)return!1;(o.all_lowercase||o.outlookdotcom_lowercase)&&(s[0]=s[0].toLowerCase())}else if(~n.indexOf(s[1])){if(o.yahoo_remove_subaddress){var c=s[0].split("-");s[0]=c.length>1?c.slice(0,-1).join("-"):c[0]}if(!s[0].length)return!1;(o.all_lowercase||o.yahoo_lowercase)&&(s[0]=s[0].toLowerCase())}else o.all_lowercase&&(s[0]=s[0].toLowerCase());return s.join("@")};var t=function(e){return e&&e.__esModule?e:{default:e}}(u),a={all_lowercase:!0,gmail_lowercase:!0,gmail_remove_dots:!0,gmail_remove_subaddress:!0,gmail_convert_googlemaildotcom:!0,outlookdotcom_lowercase:!0,outlookdotcom_remove_subaddress:!0,yahoo_lowercase:!0,yahoo_remove_subaddress:!0,icloud_lowercase:!0,icloud_remove_subaddress:!0},i=["icloud.com","me.com"],r=["hotmail.at","hotmail.be","hotmail.ca","hotmail.cl","hotmail.co.il","hotmail.co.nz","hotmail.co.th","hotmail.co.uk","hotmail.com","hotmail.com.ar","hotmail.com.au","hotmail.com.br","hotmail.com.gr","hotmail.com.mx","hotmail.com.pe","hotmail.com.tr","hotmail.com.vn","hotmail.cz","hotmail.de","hotmail.dk","hotmail.es","hotmail.fr","hotmail.hu","hotmail.id","hotmail.ie","hotmail.in","hotmail.it","hotmail.jp","hotmail.kr","hotmail.lv","hotmail.my","hotmail.ph","hotmail.pt","hotmail.sa","hotmail.sg","hotmail.sk","live.be","live.co.uk","live.com","live.com.ar","live.com.mx","live.de","live.es","live.eu","live.fr","live.it","live.nl","msn.com","outlook.at","outlook.be","outlook.cl","outlook.co.il","outlook.co.nz","outlook.co.th","outlook.com","outlook.com.ar","outlook.com.au","outlook.com.br","outlook.com.gr","outlook.com.pe","outlook.com.tr","outlook.com.vn","outlook.cz","outlook.de","outlook.dk","outlook.es","outlook.fr","outlook.hu","outlook.id","outlook.ie","outlook.in","outlook.it","outlook.jp","outlook.kr","outlook.lv","outlook.my","outlook.ph","outlook.pt","outlook.sa","outlook.sg","outlook.sk","passport.com"],n=["rocketmail.com","yahoo.ca","yahoo.co.uk","yahoo.com","yahoo.de","yahoo.fr","yahoo.in","yahoo.it","ymail.com"];e.exports=o.default})),s=t(function(e){!function(o){function t(e,o,t){return i(e=e||"",a(o=o||[],t=t||""))}function a(e,o){return e=function(e){let o=new Set;if("string"==typeof e){let t;for(;t=s.exec(e);)o.add(t[1])}else r.nonNative||"function"!=typeof e[r.iterator]?"function"==typeof e.forEach&&e.forEach(o.add,o):o=new Set(e);return o}(e),{allowable_tags:e,tag_replacement:o,state:n,tag_buffer:"",depth:0,in_quote_char:""}}function i(e,o){let t=o.allowable_tags,a=o.tag_replacement,i=o.state,r=o.tag_buffer,s=o.depth,f=o.in_quote_char,d="";for(let o=0,m=e.length;o<m;o++){let m=e[o];if(i===n)switch(m){case"<":i=u,r+=m;break;default:d+=m}else if(i===u)switch(m){case"<":if(f)break;s++;break;case">":if(f)break;if(s){s--;break}f="",i=n,r+=">",t.has(function(e){let o=c.exec(e);return o?o[1].toLowerCase():null}(r))?d+=r:d+=a,r="";break;case'"':case"'":f=m===f?"":f||m,r+=m;break;case"-":"<!-"===r&&(i=l),r+=m;break;case" ":case"\n":if("<"===r){i=n,d+="< ",r="";break}r+=m;break;default:r+=m}else if(i===l)switch(m){case">":"--"==r.slice(-2)&&(i=n),r="";break;default:r+=m}}return o.state=i,o.tag_buffer=r,o.depth=s,o.in_quote_char=f,d}if("function"!=typeof r){var r=function(e){return e};r.nonNative=!0}const n=r("plaintext"),u=r("html"),l=r("comment"),s=/<(\w*)>/g,c=/<\/?([^\s\/>]+)/;t.init_streaming_mode=function(e,o){let t=a(e=e||[],o=o||"");return function(e){return i(e||"",t)}},e.exports?e.exports=t:o.striptags=t}(n)}),c=t(function(e,o){!function(o,t){e.exports=t()}(0,function(){function e(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,o){return e===o?o:e===e.toUpperCase()?o.toUpperCase():e[0]===e[0].toUpperCase()?o.charAt(0).toUpperCase()+o.substr(1).toLowerCase():o.toLowerCase()}function t(e,t){return e.replace(t[0],function(a,i){var r=function(e,o){return e.replace(/\$(\d{1,2})/g,function(e,t){return o[t]||""})}(t[1],arguments);return o(""===a?e[i-1]:a,r)})}function a(e,o,a){if(!e.length||s.hasOwnProperty(e))return o;for(var i=a.length;i--;){var r=a[i];if(r[0].test(o))return t(o,r)}return o}function i(e,t,i){return function(r){var n=r.toLowerCase();return t.hasOwnProperty(n)?o(r,n):e.hasOwnProperty(n)?o(r,e[n]):a(n,r,i)}}function r(e,o,t,i){return function(i){var r=i.toLowerCase();return!!o.hasOwnProperty(r)||!e.hasOwnProperty(r)&&a(r,r,t)===r}}function n(e,o,t){var a=1===o?n.singular(e):n.plural(e);return(t?o+" ":"")+a}var u=[],l=[],s={},c={},f={};return n.plural=i(f,c,u),n.isPlural=r(f,c,u),n.singular=i(c,f,l),n.isSingular=r(c,f,l),n.addPluralRule=function(o,t){u.push([e(o),t])},n.addSingularRule=function(o,t){l.push([e(o),t])},n.addUncountableRule=function(e){"string"!=typeof e?(n.addPluralRule(e,"$0"),n.addSingularRule(e,"$0")):s[e.toLowerCase()]=!0},n.addIrregularRule=function(e,o){o=o.toLowerCase(),e=e.toLowerCase(),f[e]=o,c[o]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach(function(e){return n.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return n.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return n.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(n.addUncountableRule),n})}),f=1/0,d="[object Symbol]",m=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,h=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,p="a-z\\xdf-\\xf6\\xf8-\\xff",g="A-Z\\xc0-\\xd6\\xd8-\\xde",v="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",y="["+v+"]",b="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",$="\\d+",k="[\\u2700-\\u27bf]",w="["+p+"]",x="[^\\ud800-\\udfff"+v+$+"\\u2700-\\u27bf"+p+g+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",j="["+g+"]",E="(?:"+w+"|"+x+")",A="(?:"+j+"|"+x+")",z="(?:['’](?:d|ll|m|re|s|t|ve))?",U="(?:['’](?:D|LL|M|RE|S|T|VE))?",C="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",I="[\\ufe0e\\ufe0f]?"+C+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",_,O].join("|")+")[\\ufe0e\\ufe0f]?"+C+")*"),S="(?:"+[k,_,O].join("|")+")"+I,L=RegExp("['’]","g"),R=RegExp(b,"g"),Y=RegExp([j+"?"+w+"+"+z+"(?="+[y,j,"$"].join("|")+")",A+"+"+U+"(?="+[y,j+E,"$"].join("|")+")",j+"?"+E+"+"+z,j+"+"+U,$,S].join("|"),"g"),D=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Z="object"==typeof n&&n&&n.Object===Object&&n,P="object"==typeof self&&self&&self.Object===Object&&self,N=Z||P||Function("return this")(),T=function(e){return function(o){return null==e?void 0:e[o]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"}),q=Object.prototype.toString,G=N.Symbol,M=G?G.prototype:void 0,H=M?M.toString:void 0,F=function(e){return function(o){return function(e,o,t,a){var i=-1,r=e?e.length:0;for(a&&r&&(t=e[++i]);++i<r;)t=o(t,e[i],i,e);return t}(function(e,o,t){return e=i(e),void 0===(o=t?void 0:o)?function(e){return D.test(e)}(e)?function(e){return e.match(Y)||[]}(e):function(e){return e.match(m)||[]}(e):e.match(o)||[]}(function(e){return(e=i(e))&&e.replace(h,T).replace(R,"")}(o).replace(L,"")),e,"")}}(function(e,o,t){return e+(t?"-":"")+o.toLowerCase()}),K=r({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ő":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ű":"U","Ý":"Y","Þ":"TH","Ÿ":"Y","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ő":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ű":"u","ý":"y","þ":"th","ÿ":"y"},{"©":"(c)","œ":"oe","Œ":"OE","∑":"sum","®":"(r)","†":"+","“":'"',"”":'"',"‘":"'","’":"'","∂":"d","ƒ":"f","™":"tm","℠":"sm","…":"...","˚":"o","º":"o","ª":"a","•":"*","∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less",">":"greater","@":"at"},{"α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"h","ώ":"w","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"H","Ώ":"W","Ϊ":"I","Ϋ":"Y"},{"ş":"s","Ş":"S","ı":"i","İ":"I","ç":"c","Ç":"C","ü":"u","Ü":"U","ö":"o","Ö":"O","ğ":"g","Ğ":"G"},{"ă":"a","î":"i","ș":"s","ț":"t","â":"a","Ă":"A","Î":"I","Ș":"S","Ț":"T","Â":"A"},{"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya"},{"Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g"},{"č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z"},{"á":"a","ä":"a","č":"c","ď":"d","é":"e","í":"i","ľ":"l","ĺ":"l","ň":"n","ó":"o","ô":"o","ŕ":"r","š":"s","ť":"t","ú":"u","ý":"y","ž":"z","Á":"a","Ä":"A","Č":"C","Ď":"D","É":"E","Í":"I","Ľ":"L","Ĺ":"L","Ň":"N","Ó":"O","Ô":"O","Ŕ":"R","Š":"S","Ť":"T","Ú":"U","Ý":"Y","Ž":"Z"},{"ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ó":"O","Ś":"S","Ź":"Z","Ż":"Z"},{"ā":"a","č":"c","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","š":"s","ū":"u","ž":"z","Ā":"A","Č":"C","Ē":"E","Ģ":"G","Ī":"I","Ķ":"K","Ļ":"L","Ņ":"N","Š":"S","Ū":"U","Ž":"Z"},{"أ":"a","ب":"b","ت":"t","ث":"th","ج":"g","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"d","ط":"t","ظ":"th","ع":"aa","غ":"gh","ف":"f","ق":"k","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"o","ي":"y"},{"ą":"a","č":"c","ę":"e","ė":"e","į":"i","š":"s","ų":"u","ū":"u","ž":"z","Ą":"A","Č":"C","Ę":"E","Ė":"E","Į":"I","Š":"S","Ų":"U","Ū":"U","Ž":"Z"},{"ђ":"dj","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","đ":"dj","Ђ":"Dj","Ј":"j","Љ":"Lj","Њ":"Nj","Ћ":"C","Џ":"Dz","Đ":"Dj"},{"ç":"c","ə":"e","ğ":"g","ı":"i","ö":"o","ş":"s","ü":"u","Ç":"C","Ə":"E","Ğ":"G","İ":"I","Ö":"O","Ş":"S","Ü":"U"},{"ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"j","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"q","ღ":"g","ყ":"y","შ":"sh","ჩ":"ch","ც":"c","ძ":"dz","წ":"w","ჭ":"ch","ხ":"x","ჯ":"j","ჰ":"h"},{"Ạ":"A","Ả":"A","Ầ":"A","Ấ":"A","Ậ":"A","Ẩ":"A","Ẫ":"A","Ằ":"A","Ắ":"A","Ặ":"A","Ẳ":"A","Ẵ":"A","Ẹ":"E","Ẻ":"E","Ẽ":"E","Ề":"E","Ế":"E","Ệ":"E","Ể":"E","Ễ":"E","Ị":"I","Ỉ":"I","Ĩ":"I","Ọ":"O","Ỏ":"O","Ồ":"O","Ố":"O","Ộ":"O","Ổ":"O","Ỗ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ợ":"O","Ở":"O","Ỡ":"O","Ụ":"U","Ủ":"U","Ũ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ự":"U","Ử":"U","Ữ":"U","Ỳ":"Y","Ỵ":"Y","Ỷ":"Y","Ỹ":"Y","Đ":"D","ạ":"a","ả":"a","ầ":"a","ấ":"a","ậ":"a","ẩ":"a","ẫ":"a","ằ":"a","ắ":"a","ặ":"a","ẳ":"a","ẵ":"a","ẹ":"e","ẻ":"e","ẽ":"e","ề":"e","ế":"e","ệ":"e","ể":"e","ễ":"e","ị":"i","ỉ":"i","ĩ":"i","ọ":"o","ỏ":"o","ồ":"o","ố":"o","ộ":"o","ổ":"o","ỗ":"o","ơ":"o","ờ":"o","ớ":"o","ợ":"o","ở":"o","ỡ":"o","ụ":"u","ủ":"u","ũ":"u","ư":"u","ừ":"u","ứ":"u","ự":"u","ử":"u","ữ":"u","ỳ":"y","ỵ":"y","ỷ":"y","ỹ":"y","đ":"d"},{"€":"euro","₢":"cruzeiro","₣":"french franc","£":"pound","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","¢":"cent","¥":"yen","元":"yuan","円":"yen","﷼":"rial","₠":"ecu","¤":"currency","฿":"baht",$:"dollar","₹":"indian rupee"}),B=function(e){if(void 0===e)return"";var o="";for(let a=0;a<e.length;a++){var t=e[a];o+=void 0!==K[t]?K[t]:t}return o},J=function(e){return void 0===e?"":F(B(e.toString()))};e.normalizeEmail=function(e,o){if("string"==typeof e){var t=o&&o.length?o[0]:{};return l(e,t)}return e},e.stripTags=function(e,o){return"string"!=typeof e?e:s(e,o)},e.toBoolean=function(e){return!(!e||"false"===e||"0"===e)},e.toNull=function(e){return function(e){return"string"==typeof e?e.trim().length>0:null!==e&&void 0!==e}(e)?e:null},e.toInt=function(e,o){var t=Array.isArray(o)&&o[0]?o[0]:10;return parseInt(e,t)},e.toDate=function(e){if(e instanceof Date)return e;var o=new Date(e);return"Invalid Date"===o.toString()?null:o},e.plural=function(e){return"string"!=typeof e?e:c(e)},e.singular=function(e){return"string"!=typeof e?e:c.singular(e)},e.slug=function(e){return"string"!=typeof e?e:J(e)},Object.defineProperty(e,"__esModule",{value:!0})});
