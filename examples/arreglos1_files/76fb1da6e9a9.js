/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */var saveAs=saveAs||navigator.msSaveBlob&&navigator.msSaveBlob.bind(navigator)||function(a){"use strict";var b=a.document,c=function(){return a.URL||a.webkitURL||a},d=a.URL||a.webkitURL||a,e=b.createElementNS("http://www.w3.org/1999/xhtml","a"),f="download"in e,g=function(c){var d=b.createEvent("MouseEvents");return d.initMouseEvent("click",!0,!1,a,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(d)},h=a.webkitRequestFileSystem,i=a.requestFileSystem||h||a.mozRequestFileSystem,j=function(b){(a.setImmediate||a.setTimeout)(function(){throw b},0)},k="application/octet-stream",l=0,m=[],n=function(){for(var a=m.length;a--;){var b=m[a];"string"==typeof b?d.revokeObjectURL(b):b.remove()}m.length=0},o=function(a,b,c){b=[].concat(b);for(var d=b.length;d--;){var e=a["on"+b[d]];if("function"==typeof e)try{e.call(a,c||a)}catch(f){j(f)}}},p=function(b,d){var q,r,x,j=this,n=b.type,p=!1,s=function(){var a=c().createObjectURL(b);return m.push(a),a},t=function(){o(j,"writestart progress write writeend".split(" "))},u=function(){(p||!q)&&(q=s(b)),r&&(r.location.href=q),j.readyState=j.DONE,t()},v=function(a){return function(){return j.readyState!==j.DONE?a.apply(this,arguments):void 0}},w={create:!0,exclusive:!1};return j.readyState=j.INIT,d||(d="download"),f&&(q=s(b),e.href=q,e.download=d,g(e))?(j.readyState=j.DONE,t(),void 0):(a.chrome&&n&&n!==k&&(x=b.slice||b.webkitSlice,b=x.call(b,0,b.size,k),p=!0),h&&"download"!==d&&(d+=".download"),r=n===k||h?a:a.open(),i?(l+=b.size,i(a.TEMPORARY,l,v(function(a){a.root.getDirectory("saved",w,v(function(a){var c=function(){a.getFile(d,w,v(function(a){a.createWriter(v(function(c){c.onwriteend=function(b){r.location.href=a.toURL(),m.push(a),j.readyState=j.DONE,o(j,"writeend",b)},c.onerror=function(){var a=c.error;a.code!==a.ABORT_ERR&&u()},"writestart progress write abort".split(" ").forEach(function(a){c["on"+a]=j["on"+a]}),c.write(b),j.abort=function(){c.abort(),j.readyState=j.DONE},j.readyState=j.WRITING}),u)}),u)};a.getFile(d,{create:!1},v(function(a){a.remove(),c()}),v(function(a){a.code===a.NOT_FOUND_ERR?c():u()}))}),u)}),u),void 0):(u(),void 0))},q=p.prototype,r=function(a,b){return new p(a,b)};return q.abort=function(){var a=this;a.readyState=a.DONE,o(a,"abort")},q.readyState=q.INIT=0,q.WRITING=1,q.DONE=2,q.error=q.onwritestart=q.onprogress=q.onwrite=q.onabort=q.onerror=q.onwriteend=null,a.addEventListener("unload",n,!1),r}(self);(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});(function(require,exports,module,platform){if(module)module.exports=minimatch
else exports.minimatch=minimatch
function require(id){switch(id){case"sigmund":return function sigmund(obj){return JSON.stringify(obj)}
case"path":return{basename:function(f){f=f.split(/[\/\\]/)
var e=f.pop()
if(!e)e=f.pop()
return e}}
case"lru-cache":return function LRUCache(){var cache={}
var cnt=0
this.set=function(k,v){cnt++
if(cnt>=100)cache={}
cache[k]=v}
this.get=function(k){return cache[k]}}}}
minimatch.Minimatch=Minimatch
var LRU=require("lru-cache"),cache=minimatch.cache=new LRU({max:100}),GLOBSTAR=minimatch.GLOBSTAR=Minimatch.GLOBSTAR={},sigmund=require("sigmund")
var path=require("path"),qmark="[^/]",star=qmark+"*?",twoStarDot="(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?",twoStarNoDot="(?:(?!(?:\\\/|^)\\.).)*?",reSpecials=charSet("().*{}+?[]^$\\!")
function charSet(s){return s.split("").reduce(function(set,c){set[c]=true
return set},{})}
var slashSplit=/\/+/
minimatch.filter=filter
function filter(pattern,options){options=options||{}
return function(p,i,list){return minimatch(p,pattern,options)}}
function ext(a,b){a=a||{}
b=b||{}
var t={}
Object.keys(b).forEach(function(k){t[k]=b[k]})
Object.keys(a).forEach(function(k){t[k]=a[k]})
return t}
minimatch.defaults=function(def){if(!def||!Object.keys(def).length)return minimatch
var orig=minimatch
var m=function minimatch(p,pattern,options){return orig.minimatch(p,pattern,ext(def,options))}
m.Minimatch=function Minimatch(pattern,options){return new orig.Minimatch(pattern,ext(def,options))}
return m}
Minimatch.defaults=function(def){if(!def||!Object.keys(def).length)return Minimatch
return minimatch.defaults(def).Minimatch}
function minimatch(p,pattern,options){if(typeof pattern!=="string"){throw new TypeError("glob pattern string required")}
if(!options)options={}
if(!options.nocomment&&pattern.charAt(0)==="#"){return false}
if(pattern.trim()==="")return p===""
return new Minimatch(pattern,options).match(p)}
function Minimatch(pattern,options){if(!(this instanceof Minimatch)){return new Minimatch(pattern,options,cache)}
if(typeof pattern!=="string"){throw new TypeError("glob pattern string required")}
if(!options)options={}
pattern=pattern.trim()
if(platform==="win32"){pattern=pattern.split("\\").join("/")}
var cacheKey=pattern+"\n"+sigmund(options)
var cached=minimatch.cache.get(cacheKey)
if(cached)return cached
minimatch.cache.set(cacheKey,this)
this.options=options
this.set=[]
this.pattern=pattern
this.regexp=null
this.negate=false
this.comment=false
this.empty=false
this.make()}
Minimatch.prototype.debug=function(){}
Minimatch.prototype.make=make
function make(){if(this._made)return
var pattern=this.pattern
var options=this.options
if(!options.nocomment&&pattern.charAt(0)==="#"){this.comment=true
return}
if(!pattern){this.empty=true
return}
this.parseNegate()
var set=this.globSet=this.braceExpand()
if(options.debug)this.debug=console.error
this.debug(this.pattern,set)
set=this.globParts=set.map(function(s){return s.split(slashSplit)})
this.debug(this.pattern,set)
set=set.map(function(s,si,set){return s.map(this.parse,this)},this)
this.debug(this.pattern,set)
set=set.filter(function(s){return-1===s.indexOf(false)})
this.debug(this.pattern,set)
this.set=set}
Minimatch.prototype.parseNegate=parseNegate
function parseNegate(){var pattern=this.pattern,negate=false,options=this.options,negateOffset=0
if(options.nonegate)return
for(var i=0,l=pattern.length;i<l&&pattern.charAt(i)==="!";i++){negate=!negate
negateOffset++}
if(negateOffset)this.pattern=pattern.substr(negateOffset)
this.negate=negate}
minimatch.braceExpand=function(pattern,options){return new Minimatch(pattern,options).braceExpand()}
Minimatch.prototype.braceExpand=braceExpand
function braceExpand(pattern,options){options=options||this.options
pattern=typeof pattern==="undefined"?this.pattern:pattern
if(typeof pattern==="undefined"){throw new Error("undefined pattern")}
if(options.nobrace||!pattern.match(/\{.*\}/)){return[pattern]}
var escaping=false
if(pattern.charAt(0)!=="{"){this.debug(pattern)
var prefix=null
for(var i=0,l=pattern.length;i<l;i++){var c=pattern.charAt(i)
this.debug(i,c)
if(c==="\\"){escaping=!escaping}else if(c==="{"&&!escaping){prefix=pattern.substr(0,i)
break}}
if(prefix===null){this.debug("no sets")
return[pattern]}
var tail=braceExpand.call(this,pattern.substr(i),options)
return tail.map(function(t){return prefix+t})}
var numset=pattern.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/)
if(numset){this.debug("numset",numset[1],numset[2])
var suf=braceExpand.call(this,pattern.substr(numset[0].length),options),start=+numset[1],end=+numset[2],inc=start>end?-1:1,set=[]
for(var i=start;i!=(end+inc);i+=inc){for(var ii=0,ll=suf.length;ii<ll;ii++){set.push(i+suf[ii])}}
return set}
var i=1,depth=1,set=[],member="",sawEnd=false,escaping=false
function addMember(){set.push(member)
member=""}
this.debug("Entering for")
FOR:for(i=1,l=pattern.length;i<l;i++){var c=pattern.charAt(i)
this.debug("",i,c)
if(escaping){escaping=false
member+="\\"+c}else{switch(c){case"\\":escaping=true
continue
case"{":depth++
member+="{"
continue
case"}":depth--
if(depth===0){addMember()
i++
break FOR}else{member+=c
continue}
case",":if(depth===1){addMember()}else{member+=c}
continue
default:member+=c
continue}}}
if(depth!==0){this.debug("didn't close",pattern)
return braceExpand.call(this,"\\"+pattern,options)}
this.debug("set",set)
this.debug("suffix",pattern.substr(i))
var suf=braceExpand.call(this,pattern.substr(i),options)
var addBraces=set.length===1
this.debug("set pre-expanded",set)
set=set.map(function(p){return braceExpand.call(this,p,options)},this)
this.debug("set expanded",set)
set=set.reduce(function(l,r){return l.concat(r)})
if(addBraces){set=set.map(function(s){return"{"+s+"}"})}
var ret=[]
for(var i=0,l=set.length;i<l;i++){for(var ii=0,ll=suf.length;ii<ll;ii++){ret.push(set[i]+suf[ii])}}
return ret}
Minimatch.prototype.parse=parse
var SUBPARSE={}
function parse(pattern,isSub){var options=this.options
if(!options.noglobstar&&pattern==="**")return GLOBSTAR
if(pattern==="")return""
var re="",hasMagic=!!options.nocase,escaping=false,patternListStack=[],plType,stateChar,inClass=false,reClassStart=-1,classStart=-1,patternStart=pattern.charAt(0)==="."?"":options.dot?"(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))":"(?!\\.)",self=this
function clearStateChar(){if(stateChar){switch(stateChar){case"*":re+=star
hasMagic=true
break
case"?":re+=qmark
hasMagic=true
break
default:re+="\\"+stateChar
break}
self.debug('clearStateChar %j %j',stateChar,re)
stateChar=false}}
for(var i=0,len=pattern.length,c;(i<len)&&(c=pattern.charAt(i));i++){this.debug("%s\t%s %s %j",pattern,i,re,c)
if(escaping&&reSpecials[c]){re+="\\"+c
escaping=false
continue}
SWITCH:switch(c){case"/":return false
case"\\":clearStateChar()
escaping=true
continue
case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",pattern,i,re,c)
if(inClass){this.debug('  in class')
if(c==="!"&&i===classStart+1)c="^"
re+=c
continue}
self.debug('call clearStateChar %j',stateChar)
clearStateChar()
stateChar=c
if(options.noext)clearStateChar()
continue
case"(":if(inClass){re+="("
continue}
if(!stateChar){re+="\\("
continue}
plType=stateChar
patternListStack.push({type:plType,start:i-1,reStart:re.length})
re+=stateChar==="!"?"(?:(?!":"(?:"
this.debug('plType %j %j',stateChar,re)
stateChar=false
continue
case")":if(inClass||!patternListStack.length){re+="\\)"
continue}
clearStateChar()
hasMagic=true
re+=")"
plType=patternListStack.pop().type
switch(plType){case"!":re+="[^/]*?)"
break
case"?":case"+":case"*":re+=plType
case"@":break}
continue
case"|":if(inClass||!patternListStack.length||escaping){re+="\\|"
escaping=false
continue}
clearStateChar()
re+="|"
continue
case"[":clearStateChar()
if(inClass){re+="\\"+c
continue}
inClass=true
classStart=i
reClassStart=re.length
re+=c
continue
case"]":if(i===classStart+1||!inClass){re+="\\"+c
escaping=false
continue}
hasMagic=true
inClass=false
re+=c
continue
default:clearStateChar()
if(escaping){escaping=false}else if(reSpecials[c]&&!(c==="^"&&inClass)){re+="\\"}
re+=c}}
if(inClass){var cs=pattern.substr(classStart+1),sp=this.parse(cs,SUBPARSE)
re=re.substr(0,reClassStart)+"\\["+sp[0]
hasMagic=hasMagic||sp[1]}
var pl
while(pl=patternListStack.pop()){var tail=re.slice(pl.reStart+3)
tail=tail.replace(/((?:\\{2})*)(\\?)\|/g,function(_,$1,$2){if(!$2){$2="\\"}
return $1+$1+$2+"|"})
this.debug("tail=%j\n   %s",tail,tail)
var t=pl.type==="*"?star:pl.type==="?"?qmark:"\\"+pl.type
hasMagic=true
re=re.slice(0,pl.reStart)
+t+"\\("
+tail}
clearStateChar()
if(escaping){re+="\\\\"}
var addPatternStart=false
switch(re.charAt(0)){case".":case"[":case"(":addPatternStart=true}
if(re!==""&&hasMagic)re="(?=.)"+re
if(addPatternStart)re=patternStart+re
if(isSub===SUBPARSE){return[re,hasMagic]}
if(!hasMagic){return globUnescape(pattern)}
var flags=options.nocase?"i":"",regExp=new RegExp("^"+re+"$",flags)
regExp._glob=pattern
regExp._src=re
return regExp}
minimatch.makeRe=function(pattern,options){return new Minimatch(pattern,options||{}).makeRe()}
Minimatch.prototype.makeRe=makeRe
function makeRe(){if(this.regexp||this.regexp===false)return this.regexp
var set=this.set
if(!set.length)return this.regexp=false
var options=this.options
var twoStar=options.noglobstar?star:options.dot?twoStarDot:twoStarNoDot,flags=options.nocase?"i":""
var re=set.map(function(pattern){return pattern.map(function(p){return(p===GLOBSTAR)?twoStar:(typeof p==="string")?regExpEscape(p):p._src}).join("\\\/")}).join("|")
re="^(?:"+re+")$"
if(this.negate)re="^(?!"+re+").*$"
try{return this.regexp=new RegExp(re,flags)}catch(ex){return this.regexp=false}}
minimatch.match=function(list,pattern,options){options=options||{}
var mm=new Minimatch(pattern,options)
list=list.filter(function(f){return mm.match(f)})
if(mm.options.nonull&&!list.length){list.push(pattern)}
return list}
Minimatch.prototype.match=match
function match(f,partial){this.debug("match",f,this.pattern)
if(this.comment)return false
if(this.empty)return f===""
if(f==="/"&&partial)return true
var options=this.options
if(platform==="win32"){f=f.split("\\").join("/")}
f=f.split(slashSplit)
this.debug(this.pattern,"split",f)
var set=this.set
this.debug(this.pattern,"set",set)
var filename;for(var i=f.length-1;i>=0;i--){filename=f[i]
if(filename)break}
for(var i=0,l=set.length;i<l;i++){var pattern=set[i],file=f
if(options.matchBase&&pattern.length===1){file=[filename]}
var hit=this.matchOne(file,pattern,partial)
if(hit){if(options.flipNegate)return true
return!this.negate}}
if(options.flipNegate)return false
return this.negate}
Minimatch.prototype.matchOne=function(file,pattern,partial){var options=this.options
this.debug("matchOne",{"this":this,file:file,pattern:pattern})
this.debug("matchOne",file.length,pattern.length)
for(var fi=0,pi=0,fl=file.length,pl=pattern.length;(fi<fl)&&(pi<pl);fi++,pi++){this.debug("matchOne loop")
var p=pattern[pi],f=file[fi]
this.debug(pattern,p,f)
if(p===false)return false
if(p===GLOBSTAR){this.debug('GLOBSTAR',[pattern,p,f])
var fr=fi,pr=pi+1
if(pr===pl){this.debug('** at the end')
for(;fi<fl;fi++){if(file[fi]==="."||file[fi]===".."||(!options.dot&&file[fi].charAt(0)==="."))return false}
return true}
WHILE:while(fr<fl){var swallowee=file[fr]
this.debug('\nglobstar while',file,fr,pattern,pr,swallowee)
if(this.matchOne(file.slice(fr),pattern.slice(pr),partial)){this.debug('globstar found match!',fr,fl,swallowee)
return true}else{if(swallowee==="."||swallowee===".."||(!options.dot&&swallowee.charAt(0)===".")){this.debug("dot detected!",file,fr,pattern,pr)
break WHILE}
this.debug('globstar swallow a segment, and continue')
fr++}}
if(partial){this.debug("\n>>> no match, partial?",file,fr,pattern,pr)
if(fr===fl)return true}
return false}
var hit
if(typeof p==="string"){if(options.nocase){hit=f.toLowerCase()===p.toLowerCase()}else{hit=f===p}
this.debug("string match",p,f,hit)}else{hit=f.match(p)
this.debug("pattern match",p,f,hit)}
if(!hit)return false}
if(fi===fl&&pi===pl){return true}else if(fi===fl){return partial}else if(pi===pl){var emptyFileEnd=(fi===fl-1)&&(file[fi]==="")
return emptyFileEnd}
throw new Error("wtf?")}
function globUnescape(s){return s.replace(/\\(.)/g,"$1")}
function regExpEscape(s){return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}})(typeof require==="function"?require:null,this,typeof module==="object"?module:null,typeof process==="object"?process.platform:"win32")
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.eio=e():"undefined"!=typeof global?global.eio=e():"undefined"!=typeof self&&(self.eio=e())}(function(){var define,module,exports;return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){module.exports=require('./lib/');},{"./lib/":3}],2:[function(require,module,exports){var Emitter=require('emitter');module.exports=Emitter;Emitter.prototype.addEventListener=Emitter.prototype.on;Emitter.prototype.removeEventListener=Emitter.prototype.off;Emitter.prototype.removeListener=Emitter.prototype.off;},{"emitter":15}],3:[function(require,module,exports){module.exports=require('./socket');module.exports.parser=require('engine.io-parser');},{"./socket":4,"engine.io-parser":16}],4:[function(require,module,exports){var util=require('./util');var transports=require('./transports');var Emitter=require('./emitter');var debug=require('debug')('engine.io-client:socket');var index=require('indexof');var parser=require('engine.io-parser');module.exports=Socket;var global=require('global');function noop(){}
function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&'object'==typeof uri){opts=uri;uri=null;}
if(uri){uri=util.parseUri(uri);opts.host=uri.host;opts.secure=uri.protocol=='https'||uri.protocol=='wss';opts.port=uri.port;if(uri.query)opts.query=uri.query;}
this.secure=null!=opts.secure?opts.secure:(global.location&&'https:'==location.protocol);if(opts.host){var pieces=opts.host.split(':');opts.hostname=pieces.shift();if(pieces.length)opts.port=pieces.pop();}
this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:'localhost');this.port=opts.port||(global.location&&location.port?location.port:(this.secure?443:80));this.query=opts.query||{};if('string'==typeof this.query)this.query=util.qsParse(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||'/engine.io').replace(/\/$/,'')+'/';this.forceJSONP=!!opts.forceJSONP;this.forceBase64=!!opts.forceBase64;this.timestampParam=opts.timestampParam||'t';this.timestampRequests=opts.timestampRequests;this.flashPath=opts.flashPath||'';this.transports=opts.transports||['polling','websocket','flashsocket'];this.readyState='';this.writeBuffer=[];this.callbackBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.open();this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;}
Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=require('./transport');Socket.Emitter=require('./emitter');Socket.transports=require('./transports');Socket.util=require('./util');Socket.parser=require('engine.io-parser');Socket.prototype.createTransport=function(name){debug('creating transport "%s"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,forceBase64:this.forceBase64,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,flashPath:this.flashPath,policyPort:this.policyPort,socket:this});return transport;};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i];}}
return o;}
Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf('websocket')!=-1){transport='websocket';}else{transport=this.transports[0];}
this.readyState='opening';var transport=this.createTransport(transport);transport.open();this.setTransport(transport);};Socket.prototype.setTransport=function(transport){debug('setting transport %s',transport.name);var self=this;if(this.transport){debug('clearing existing transport %s',this.transport.name);this.transport.removeAllListeners();}
this.transport=transport;transport.on('drain',function(){self.onDrain();}).on('packet',function(packet){self.onPacket(packet);}).on('error',function(e){self.onError(e);}).on('close',function(){self.onClose('transport close');});};Socket.prototype.probe=function(name){debug('probing transport "%s"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;transport.once('open',function(){if(this.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary;}
if(failed)return;debug('probe transport "%s" opened',name);transport.send([{type:'ping',data:'probe'}]);transport.once('packet',function(msg){if(failed)return;if('pong'==msg.type&&'probe'==msg.data){debug('probe transport "%s" pong',name);self.upgrading=true;self.emit('upgrading',transport);Socket.priorWebsocketSuccess='websocket'==transport.name;debug('pausing current transport "%s"',self.transport.name);self.transport.pause(function(){if(failed)return;if('closed'==self.readyState||'closing'==self.readyState){return;}
debug('changing transport and sending upgrade packet');transport.removeListener('error',onerror);self.setTransport(transport);transport.send([{type:'upgrade'}]);self.emit('upgrade',transport);transport=null;self.upgrading=false;self.flush();});}else{debug('probe transport "%s" failed',name);var err=new Error('probe error');err.transport=transport.name;self.emit('upgradeError',err);}});});transport.once('error',onerror);function onerror(err){if(failed)return;failed=true;var error=new Error('probe error: '+err);error.transport=transport.name;transport.close();transport=null;debug('probe transport "%s" failed because of error: %s',name,err);self.emit('upgradeError',error);}
transport.open();this.once('close',function(){if(transport){debug('socket closed prematurely - aborting probe');failed=true;transport.close();transport=null;}});this.once('upgrading',function(to){if(transport&&to.name!=transport.name){debug('"%s" works - aborting "%s"',to.name,transport.name);transport.close();transport=null;}});};Socket.prototype.onOpen=function(){debug('socket open');this.readyState='open';Socket.priorWebsocketSuccess='websocket'==this.transport.name;this.emit('open');this.onopen&&this.onopen.call(this);this.flush();if('open'==this.readyState&&this.upgrade&&this.transport.pause){debug('starting upgrade probes');for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i]);}}};Socket.prototype.onPacket=function(packet){if('opening'==this.readyState||'open'==this.readyState){debug('socket receive: type "%s", data "%s"',packet.type,packet.data);this.emit('packet',packet);this.emit('heartbeat');switch(packet.type){case'open':this.onHandshake(util.parseJSON(packet.data));break;case'pong':this.setPing();break;case'error':var err=new Error('server error');err.code=packet.data;this.emit('error',err);break;case'message':this.emit('data',packet.data);this.emit('message',packet.data);var event={data:packet.data};event.toString=function(){return packet.data;};this.onmessage&&this.onmessage.call(this,event);break;}}else{debug('packet received with socket readyState "%s"',this.readyState);}};Socket.prototype.onHandshake=function(data){this.emit('handshake',data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();this.setPing();this.removeListener('heartbeat',this.onHeartbeat);this.on('heartbeat',this.onHeartbeat);};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if('closed'==self.readyState)return;self.onClose('ping timeout');},timeout||(self.pingInterval+self.pingTimeout));};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug('writing ping packet - expecting pong within %sms',self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout);},self.pingInterval);};Socket.prototype.ping=function(){this.sendPacket('ping');};Socket.prototype.onDrain=function(){for(var i=0;i<this.prevBufferLen;i++){if(this.callbackBuffer[i]){this.callbackBuffer[i]();}}
this.writeBuffer.splice(0,this.prevBufferLen);this.callbackBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(this.writeBuffer.length==0){this.emit('drain');}else{this.flush();}};Socket.prototype.flush=function(){if('closed'!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug('flushing %d packets in socket',this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit('flush');}};Socket.prototype.write=Socket.prototype.send=function(msg,fn){this.sendPacket('message',msg,fn);return this;};Socket.prototype.sendPacket=function(type,data,fn){var packet={type:type,data:data};this.emit('packetCreate',packet);this.writeBuffer.push(packet);this.callbackBuffer.push(fn);this.flush();};Socket.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){this.onClose('forced close');debug('socket closing - telling transport to close');this.transport.close();}
return this;};Socket.prototype.onError=function(err){debug('socket error %j',err);Socket.priorWebsocketSuccess=false;this.emit('error',err);this.onerror&&this.onerror.call(this,err);this.onClose('transport error',err);};Socket.prototype.onClose=function(reason,desc){if('opening'==this.readyState||'open'==this.readyState){debug('socket close with reason: "%s"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);setTimeout(function(){self.writeBuffer=[];self.callbackBuffer=[];self.prevBufferLen=0;},0);this.transport.removeAllListeners();this.readyState='closed';this.id=null;this.emit('close',reason,desc);this.onclose&&this.onclose.call(this);}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i]);}
return filteredUpgrades;};},{"./emitter":2,"./transport":5,"./transports":7,"./util":12,"debug":14,"engine.io-parser":16,"global":21,"indexof":23}],5:[function(require,module,exports){var util=require('./util');var parser=require('engine.io-parser');var Emitter=require('./emitter');module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState='';this.agent=opts.agent||false;this.socket=opts.socket;}
Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type='TransportError';err.description=desc;this.emit('error',err);return this;};Transport.prototype.open=function(){if('closed'==this.readyState||''==this.readyState){this.readyState='opening';this.doOpen();}
return this;};Transport.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){this.doClose();this.onClose();}
return this;};Transport.prototype.send=function(packets){if('open'==this.readyState){this.write(packets);}else{throw new Error('Transport not open');}};Transport.prototype.onOpen=function(){this.readyState='open';this.writable=true;this.emit('open');};Transport.prototype.onData=function(data){this.onPacket(parser.decodePacket(data,this.socket.binaryType));};Transport.prototype.onPacket=function(packet){this.emit('packet',packet);};Transport.prototype.onClose=function(){this.readyState='closed';this.emit('close');};},{"./emitter":2,"./util":12,"engine.io-parser":16}],6:[function(require,module,exports){var WS=require('./websocket');var util=require('../util');var debug=require('debug')('engine.io-client:flashsocket');module.exports=FlashWS;var global=require('global');var xobject=global[['Active'].concat('Object').join('X')];function FlashWS(options){WS.call(this,options);this.flashPath=options.flashPath;this.policyPort=options.policyPort;}
util.inherits(FlashWS,WS);FlashWS.prototype.name='flashsocket';FlashWS.prototype.supportsBinary=false;FlashWS.prototype.doOpen=function(){if(!this.check()){return;}
function log(type){return function(){var str=Array.prototype.join.call(arguments,' ');debug('[websocketjs %s] %s',type,str);};}
global.WEB_SOCKET_LOGGER={log:log('debug'),error:log('error')};global.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR=true;global.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=true;if(!global.WEB_SOCKET_SWF_LOCATION){global.WEB_SOCKET_SWF_LOCATION=this.flashPath+'WebSocketMainInsecure.swf';}
var deps=[this.flashPath+'web_socket.js'];if(!global.swfobject){deps.unshift(this.flashPath+'swfobject.js');}
var self=this;load(deps,function(){self.ready(function(){WebSocket.__addTask(function(){self.ws=new WebSocket(self.uri());self.addEventListeners();});});});};FlashWS.prototype.doClose=function(){if(!this.ws)return;var self=this;WebSocket.__addTask(function(){WS.prototype.doClose.call(self);});};FlashWS.prototype.write=function(){var self=this,args=arguments;WebSocket.__addTask(function(){WS.prototype.write.apply(self,args);});};FlashWS.prototype.ready=function(fn){if(typeof WebSocket=='undefined'||!('__initialize'in WebSocket)||!global.swfobject){return;}
if(global.swfobject.getFlashPlayerVersion().major<10){return;}
function init(){if(!FlashWS.loaded){if(843!=self.policyPort){var policy='xmlsocket://'+self.hostname+':'+self.policyPort;WebSocket.loadFlashPolicyFile(policy);}
WebSocket.__initialize();FlashWS.loaded=true;}
fn.call(self);}
var self=this;if(document.body){return init();}
util.load(init);};FlashWS.prototype.check=function(){if('undefined'==typeof window){return false;}
if(typeof WebSocket!='undefined'&&!('__initialize'in WebSocket)){return false;}
if(xobject){var control=null;try{control=new xobject('ShockwaveFlash.ShockwaveFlash');}catch(e){}
if(control){return true;}}else{for(var i=0,l=navigator.plugins.length;i<l;i++){for(var j=0,m=navigator.plugins[i].length;j<m;j++){if(navigator.plugins[i][j].description=='Shockwave Flash'){return true;}}}}
return false;};var scripts={};function create(path,fn){if(scripts[path])return fn();var el=document.createElement('script');var loaded=false;debug('loading "%s"',path);el.onload=el.onreadystatechange=function(){if(loaded||scripts[path])return;var rs=el.readyState;if(!rs||'loaded'==rs||'complete'==rs){debug('loaded "%s"',path);el.onload=el.onreadystatechange=null;loaded=true;scripts[path]=true;fn();}};el.async=1;el.src=path;var head=document.getElementsByTagName('head')[0];head.insertBefore(el,head.firstChild);}
function load(arr,fn){function process(i){if(!arr[i])return fn();create(arr[i],function(){process(++i);});}
process(0);}},{"../util":12,"./websocket":11,"debug":14,"global":21}],7:[function(require,module,exports){var XMLHttpRequest=require('xmlhttprequest'),XHR=require('./polling-xhr'),JSONP=require('./polling-jsonp'),websocket=require('./websocket'),flashsocket=require('./flashsocket')
exports.polling=polling;exports.websocket=websocket;exports.flashsocket=flashsocket;var global=require('global');function polling(opts){var xhr,xd=false;if(global.location){var isSSL='https:'==location.protocol;var port=location.port;if(!port){port=isSSL?443:80;}
xd=opts.hostname!=location.hostname||port!=opts.port;}
opts.xdomain=xd;xhr=new XMLHttpRequest(opts);if(xhr&&!opts.forceJSONP){return new XHR(opts);}else{return new JSONP(opts);}};},{"./flashsocket":6,"./polling-jsonp":8,"./polling-xhr":9,"./websocket":11,"global":21,"xmlhttprequest":13}],8:[function(require,module,exports){var Polling=require('./polling');var util=require('../util');module.exports=JSONPPolling;var global=require('global');var rNewline=/\n/g;var callbacks;var index=0;function empty(){}
function JSONPPolling(opts){Polling.call(this,opts);if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio;}
this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg);});this.query.j=this.index;}
util.inherits(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}
if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;}
Polling.prototype.doClose.call(this);};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement('script');if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}
script.async=true;script.src=this.uri();script.onerror=function(e){self.onError('jsonp poll error',e);};var insertAt=document.getElementsByTagName('script')[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;if(util.ua.gecko){setTimeout(function(){var iframe=document.createElement('iframe');document.body.appendChild(iframe);document.body.removeChild(iframe);},100);}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement('form');var area=document.createElement('textarea');var id=this.iframeId='eio_iframe_'+this.index;var iframe;form.className='socketio';form.style.position='absolute';form.style.top='-1000px';form.style.left='-1000px';form.target=id;form.method='POST';form.setAttribute('accept-charset','utf-8');area.name='d';form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area;}
this.form.action=this.uri();function complete(){initIframe();fn();}
function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe);}catch(e){self.onError('jsonp polling iframe removal error',e);}}
try{var html='<iframe src="javascript:0" name="'+self.iframeId+'">';iframe=document.createElement(html);}catch(e){iframe=document.createElement('iframe');iframe.name=self.iframeId;iframe.src='javascript:0';}
iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe;}
initIframe();this.area.value=data.replace(rNewline,'\\n');try{this.form.submit();}catch(e){}
if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState=='complete'){complete();}};}else{this.iframe.onload=complete;}};},{"../util":12,"./polling":10,"global":21}],9:[function(require,module,exports){var XMLHttpRequest=require('xmlhttprequest');var Polling=require('./polling');var util=require('../util');var Emitter=require('../emitter');var debug=require('debug')('engine.io-client:polling-xhr');module.exports=XHR;module.exports.Request=Request;var global=require('global');var hasAttachEvent=global.document&&global.document.attachEvent;function empty(){}
function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL='https:'==location.protocol;var port=location.port;if(!port){port=isSSL?443:80;}
this.xd=opts.hostname!=global.location.hostname||port!=opts.port;}}
util.inherits(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;return new Request(opts);};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!=='string'&&data!==undefined;var req=this.request({method:'POST',data:data,isBinary:isBinary});var self=this;req.on('success',fn);req.on('error',function(err){self.onError('xhr post error',err);});this.sendXhr=req;};XHR.prototype.doPoll=function(){debug('xhr poll');var req=this.request();var self=this;req.on('data',function(data){self.onData(data);});req.on('error',function(err){self.onError('xhr poll error',err);});this.pollXhr=req;};function Request(opts){this.method=opts.method||'GET';this.uri=opts.uri;this.xd=!!opts.xd;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.create(opts.isBinary,opts.supportsBinary);}
Emitter(Request.prototype);Request.prototype.create=function(isBinary,supportsBinary){var xhr=this.xhr=new XMLHttpRequest({agent:this.agent,xdomain:this.xd});var self=this;try{debug('xhr open %s: %s',this.method,this.uri);xhr.open(this.method,this.uri,this.async);if(supportsBinary){xhr.responseType='arraybuffer';}
if('POST'==this.method){try{if(isBinary){xhr.setRequestHeader('Content-type','application/octet-stream');}else{xhr.setRequestHeader('Content-type','text/plain;charset=UTF-8');}}catch(e){}}
if('withCredentials'in xhr){xhr.withCredentials=true;}
xhr.onreadystatechange=function(){var data;try{if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){var contentType=xhr.getResponseHeader('Content-Type');if(contentType==='application/octet-stream'){data=xhr.response;}else{if(!supportsBinary){data=xhr.responseText;}else{data='ok';}}}else{setTimeout(function(){self.onError(xhr.status);},0);}}catch(e){self.onError(e);}
if(null!=data){self.onData(data);}};debug('xhr data %s',this.data);xhr.send(this.data);}catch(e){setTimeout(function(){self.onError(e);},0);return;}
if(hasAttachEvent){this.index=Request.requestsCount++;Request.requests[this.index]=this;}};Request.prototype.onSuccess=function(){this.emit('success');this.cleanup();};Request.prototype.onData=function(data){this.emit('data',data);this.onSuccess();};Request.prototype.onError=function(err){this.emit('error',err);this.cleanup();};Request.prototype.cleanup=function(){if('undefined'==typeof this.xhr){return;}
this.xhr.onreadystatechange=empty;try{this.xhr.abort();}catch(e){}
if(hasAttachEvent){delete Request.requests[this.index];}
this.xhr=null;};Request.prototype.abort=function(){this.cleanup();};if(hasAttachEvent){Request.requestsCount=0;Request.requests={};function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort();}}}
global.attachEvent('onunload',unloadHandler);}},{"../emitter":2,"../util":12,"./polling":10,"debug":14,"global":21,"xmlhttprequest":13}],10:[function(require,module,exports){var Transport=require('../transport');var util=require('../util');var parser=require('engine.io-parser');var debug=require('debug')('engine.io-client:polling');module.exports=Polling;var global=require('global');var hasXHR2=(function(){var XMLHttpRequest=require('xmlhttprequest');var xhr=new XMLHttpRequest({agent:this.agent,xdomain:false});return null!=xhr.responseType;})();function Polling(opts){var forceBase64=(opts&&opts.forceBase64);if(!hasXHR2||forceBase64){this.supportsBinary=false;}
Transport.call(this,opts);}
util.inherits(Polling,Transport);Polling.prototype.name='polling';Polling.prototype.doOpen=function(){this.poll();};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState='pausing';function pause(){debug('paused');self.readyState='paused';onPause();}
if(this.polling||!this.writable){var total=0;if(this.polling){debug('we are currently polling - waiting to pause');total++;this.once('pollComplete',function(){debug('pre-pause polling complete');--total||pause();});}
if(!this.writable){debug('we are currently writing - waiting to pause');total++;this.once('drain',function(){debug('pre-pause writing complete');--total||pause();});}}else{pause();}};Polling.prototype.poll=function(){debug('polling');this.polling=true;this.doPoll();this.emit('poll');};Polling.prototype.onData=function(data){var self=this;debug('polling got data %s',data);var callback=function(packet,index,total){if('opening'==self.readyState){self.onOpen();}
if('close'==packet.type){self.onClose();return false;}
self.onPacket(packet);};parser.decodePayload(data,this.socket.binaryType,callback);if('closed'!=this.readyState){this.polling=false;this.emit('pollComplete');if('open'==this.readyState){this.poll();}else{debug('ignoring poll - transport state "%s"',this.readyState);}}};Polling.prototype.doClose=function(){var self=this;function close(){debug('writing close packet');self.write([{type:'close'}]);}
if('open'==this.readyState){debug('transport open - closing');close();}else{debug('transport not open - deferring close');this.once('open',close);}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit('drain');};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn);});};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'https':'http';var port='';if('ActiveXObject'in global||util.ua.chromeframe||util.ua.android||util.ua.ios6||this.timestampRequests){if(false!==this.timestampRequests){query[this.timestampParam]=+new Date;}}
if(!this.supportsBinary&&!query.sid){query.b64=1;}
query=util.qs(query);if(this.port&&(('https'==schema&&this.port!=443)||('http'==schema&&this.port!=80))){port=':'+this.port;}
if(query.length){query='?'+query;}
return schema+'://'+this.hostname+port+this.path+query;};},{"../transport":5,"../util":12,"debug":14,"engine.io-parser":16,"global":21,"xmlhttprequest":13}],11:[function(require,module,exports){var Transport=require('../transport');var parser=require('engine.io-parser');var util=require('../util');var debug=require('debug')('engine.io-client:websocket');var WebSocket=require('ws');module.exports=WS;var global=require('global');function WS(opts){var forceBase64=(opts&&opts.forceBase64);if(forceBase64){this.supportsBinary=false;}
Transport.call(this,opts);}
util.inherits(WS,Transport);WS.prototype.name='websocket';WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return;}
var self=this;var uri=this.uri();var protocols=void(0);var opts={agent:this.agent};this.ws=new WebSocket(uri,protocols,opts);if(this.ws.binaryType!==undefined){this.supportsBinary=false;}
this.ws.binaryType='arraybuffer';this.addEventListeners();};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen();};this.ws.onclose=function(){self.onClose();};this.ws.onmessage=function(ev){self.onData(ev.data);};this.ws.onerror=function(e){self.onError('websocket error',e);};};if('undefined'!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data);},0);};}
WS.prototype.write=function(packets){var self=this;this.writable=false;for(var i=0,l=packets.length;i<l;i++){parser.encodePacket(packets[i],this.supportsBinary,function(data){self.ws.send(data);});}
function ondrain(){self.writable=true;self.emit('drain');}
setTimeout(ondrain,0);};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this);};WS.prototype.doClose=function(){if(typeof this.ws!=='undefined'){this.ws.close();}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'wss':'ws';var port='';if(this.port&&(('wss'==schema&&this.port!=443)||('ws'==schema&&this.port!=80))){port=':'+this.port;}
if(this.timestampRequests){query[this.timestampParam]=+new Date;}
if(!this.supportsBinary){query.b64=1;}
query=util.qs(query);if(query.length){query='?'+query;}
return schema+'://'+this.hostname+port+this.path+query;};WS.prototype.check=function(){return!!WebSocket&&!('__initialize'in WebSocket&&this.name===WS.prototype.name);};},{"../transport":5,"../util":12,"debug":14,"engine.io-parser":16,"global":21,"ws":24}],12:[function(require,module,exports){var global=require('global');var pageLoaded=false;exports.inherits=function inherits(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;};exports.keys=Object.keys||function(obj){var ret=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){ret.push(i);}}
return ret;};exports.on=function(element,event,fn,capture){if(element.attachEvent){element.attachEvent('on'+event,fn);}else if(element.addEventListener){element.addEventListener(event,fn,capture);}};exports.load=function(fn){if(global.document&&document.readyState==='complete'||pageLoaded){return fn();}
exports.on(global,'load',fn,false);};if('undefined'!=typeof window){exports.load(function(){pageLoaded=true;});}
var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;exports.parseJSON=function(data){if('string'!=typeof data||!data){return null;}
data=data.replace(rtrimLeft,'').replace(rtrimRight,'');if(global.JSON&&JSON.parse){return JSON.parse(data);}
if(rvalidchars.test(data.replace(rvalidescape,'@').replace(rvalidtokens,']').replace(rvalidbraces,''))){return(new Function('return '+data))();}};exports.ua={};exports.ua.webkit='undefined'!=typeof navigator&&/webkit/i.test(navigator.userAgent);exports.ua.gecko='undefined'!=typeof navigator&&/gecko/i.test(navigator.userAgent);exports.ua.android='undefined'!=typeof navigator&&/android/i.test(navigator.userAgent);exports.ua.ios='undefined'!=typeof navigator&&/^(iPad|iPhone|iPod)$/.test(navigator.platform);exports.ua.ios6=exports.ua.ios&&/OS 6_/.test(navigator.userAgent);exports.ua.chromeframe=Boolean(global.externalHost);var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'];exports.parseUri=function(str){var m=re.exec(str||''),uri={},i=14;while(i--){uri[parts[i]]=m[i]||'';}
return uri;};exports.qs=function(obj){var str='';for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+='&';str+=encodeURIComponent(i)+'='+encodeURIComponent(obj[i]);}}
return str;};exports.qsParse=function(qs){var qry={};var pairs=qs.split('&');for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split('=');qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]);}
return qry;};},{"global":21}],13:[function(require,module,exports){var hasCORS=require('has-cors');module.exports=function(opts){var xdomain=opts.xdomain;try{if('undefined'!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest();}}catch(e){}
if(!xdomain){try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}}}},{"has-cors":22}],14:[function(require,module,exports){module.exports=debug;function debug(name){if(!debug.enabled(name))return function(){};return function(fmt){fmt=coerce(fmt);var curr=new Date;var ms=curr-(debug[name]||curr);debug[name]=curr;fmt=name
+' '
+fmt
+' +'+debug.humanize(ms);window.console&&console.log&&Function.prototype.apply.call(console.log,console,arguments);}}
debug.names=[];debug.skips=[];debug.enable=function(name){try{localStorage.debug=name;}catch(e){}
var split=(name||'').split(/[\s,]+/),len=split.length;for(var i=0;i<len;i++){name=split[i].replace('*','.*?');if(name[0]==='-'){debug.skips.push(new RegExp('^'+name.substr(1)+'$'));}
else{debug.names.push(new RegExp('^'+name+'$'));}}};debug.disable=function(){debug.enable('');};debug.humanize=function(ms){var sec=1000,min=60*1000,hour=60*min;if(ms>=hour)return(ms/hour).toFixed(1)+'h';if(ms>=min)return(ms/min).toFixed(1)+'m';if(ms>=sec)return(ms/sec|0)+'s';return ms+'ms';};debug.enabled=function(name){for(var i=0,len=debug.skips.length;i<len;i++){if(debug.skips[i].test(name)){return false;}}
for(var i=0,len=debug.names.length;i<len;i++){if(debug.names[i].test(name)){return true;}}
return false;};function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}
try{if(window.localStorage)debug.enable(localStorage.debug);}catch(e){}},{}],15:[function(require,module,exports){var index=require('indexof');module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj);};function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key];}
return obj;}
Emitter.prototype.on=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this;};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments);}
fn._off=on;this.on(event,on);return this;};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this;}
var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this;}
var i=index(callbacks,fn._off||fn);if(~i)callbacks.splice(i,1);return this;};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args);}}
return this;};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[];};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length;};},{"indexof":23}],16:[function(require,module,exports){var global=typeof self!=="undefined"?self:typeof window!=="undefined"?window:{};var keys=require('./keys');var sliceBuffer=require('arraybuffer.slice');var base64encoder=require('base64-arraybuffer');var after=require('after');exports.protocol=2;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:'error',data:'parser error'};var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=(function(){try{var b=new Blob(['hi']);return b.size==2;}catch(e){return false;}})();var blobBuilderSupported=!!BlobBuilder&&!!BlobBuilder.prototype.append&&!!BlobBuilder.prototype.getBlob;exports.encodePacket=function(packet,supportsBinary,callback){if(typeof supportsBinary=='function'){callback=supportsBinary;supportsBinary=false;}
var data=(packet.data===undefined)?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback);}else if(blobSupported&&data instanceof Blob){return encodeBlob(packet,supportsBinary,callback);}
var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=String(packet.data);}
return callback(''+encoded);};function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}
var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i];}
return callback(resultBuffer.buffer);};function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}
var fr=new FileReader();fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,callback);};return fr.readAsArrayBuffer(packet.data);};function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}
var length=new Uint8Array(1);length[0]=packets[packet.type];var blob;if(blobSupported){blob=new Blob([length.buffer,packet.data]);}else{var bb=new BlobBuilder();bb.append(length);bb.append(packet.data);blob=bb.getBlob();}
return callback(blob);};exports.encodeBase64Packet=function(packet,callback){var message='b'+exports.packets[packet.type];if(blobSupported&&packet.data instanceof Blob){var fr=new FileReader();fr.onload=function(){var b64=fr.result.split(',')[1];callback(message+b64);};return fr.readAsDataURL(packet.data);}
var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data));}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i];}
b64data=String.fromCharCode.apply(null,basic);}
message+=global.btoa(b64data);return callback(message);};exports.decodePacket=function(data,binaryType){if(typeof data=='string'||data===undefined){if(data.charAt(0)=='b'){return exports.decodeBase64Packet(data.substr(1),binaryType);}
var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err;}
if(data.length>1){return{type:packetslist[type],data:data.substring(1)};}else{return{type:packetslist[type]};}}
var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(blobSupported&&binaryType==='blob'){rest=new Blob([rest]);}else if(blobBuilderSupported&&binaryType==='blob'){var bb=new BlobBuilder();bb.append(rest);rest=bb.getBlob();}
return{type:packetslist[type],data:rest};};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}};}
var data=base64encoder.decode(msg.substr(1));if(binaryType==='blob'&&blobSupported){data=new Blob([data]);}else if(binaryType==='blob'&&blobBuilderSupported){var bb=new BlobBuilder();bb.append(data);data=bb.getBlob();}
return{type:type,data:data};};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary=='function'){callback=supportsBinary;supportsBinary=null;}
if(supportsBinary){if(blobSupported||blobBuilderSupported){return exports.encodePayloadAsBlob(packets,callback);}
return exports.encodePayloadAsArrayBuffer(packets,callback);}
if(!packets.length){return callback('0:');}
function setLengthHeader(message){return message.length+':'+message;};function encodeOne(packet,doneCallback){exports.encodePacket(packet,supportsBinary,function(message){doneCallback(null,setLengthHeader(message));});};map(packets,encodeOne,function(err,results){return callback(results.join(''));});};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result);});};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next);};};exports.decodePayload=function(data,binaryType,callback){if(!(typeof data=='string')){return exports.decodePayloadAsBinary(data,binaryType,callback);}
if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}
var packet;if(data==''){return callback(err,0,1);}
var length='',n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(':'!=chr){length+=chr;}else{if(''==length||(length!=(n=Number(length)))){return callback(err,0,1);}
msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1);}
if(msg.length){packet=exports.decodePacket(msg,binaryType);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1);}
var ret=callback(packet,i+n,l);if(false===ret)return;}
i+=n;length='';}}
if(length!=''){return callback(err,0,1);}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0));}
function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,function(data){return doneCallback(null,data);});};map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p==='string'){len=p.length;}else{len=p.byteLength;}
return acc+(new String(len)).length+len+2;},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p==='string';var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i);}
ab=view.buffer;}
if(isString){resultArray[bufferIndex++]=0;}else{resultArray[bufferIndex++]=1;}
var lenStr=new String(ab.byteLength);for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i]);}
resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i];}});return callback(resultArray.buffer);});};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded==='string'){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i);}
encoded=view.buffer;binaryIdentifier[0]=0;}
var len=(encoded instanceof ArrayBuffer)?encoded.byteLength:encoded.size;var lenStr=new String(len);var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i]);}
lengthAry[lenStr.length]=255;if(blobSupported){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob);}else{var bb=new BlobBuilder();bb.append(binaryIdentifier);bb.append(lengthAry.buffer);bb.append(encoded);var blob=bb.getBlob();doneCallback(null,blob);}});};map(packets,encodeOne,function(err,results){if(blobSupported){return callback(new Blob(results));}
var bb=new BlobBuilder();results.forEach(function(encoding){bb.append(encoding);});return callback(bb.getBlob());});};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}
var bufferTail=data;var buffers=[];while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]==0;var msgLength='';for(var i=1;;i++){if(tailArray[i]==255)break;msgLength+=tailArray[i];}
bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg));}catch(e){var typed=new Uint8Array(msg);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i];}
msg=String.fromCharCode.apply(null,basic);}}
buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength);}
var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType),i,total);});};},{"./keys":17,"after":18,"arraybuffer.slice":19,"base64-arraybuffer":20}],17:[function(require,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i);}}
return arr;};},{}],18:[function(require,module,exports){module.exports=after
function after(count,callback,err_cb){var bail=false
err_cb=err_cb||noop
proxy.count=count
return(count===0)?callback():proxy
function proxy(err,result){if(proxy.count<=0){throw new Error('after called too many times')}
--proxy.count
if(err){bail=true
callback(err)
callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}
function noop(){}},{}],19:[function(require,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end);}
if(start<0){start+=bytes;}
if(end<0){end+=bytes;}
if(end>bytes){end=bytes;}
if(start>=bytes||start>=end||bytes==0){return new ArrayBuffer(0);}
var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i];}
return result.buffer;};},{}],20:[function(require,module,exports){(function(chars){"use strict";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.buffer.byteLength,base64="";for(i=0;i<len;i+=3){base64+=chars[bytes.buffer[i]>>2];base64+=chars[((bytes.buffer[i]&3)<<4)|(bytes.buffer[i+1]>>4)];base64+=chars[((bytes.buffer[i+1]&15)<<2)|(bytes.buffer[i+2]>>6)];base64+=chars[bytes.buffer[i+2]&63];}
if((len%3)===2){base64=base64.substring(0,base64.length-1)+"=";}else if(len%3===1){base64=base64.substring(0,base64.length-2)+"==";}
return base64;};exports.decode=function(base64){var bufferLength=base64.length*0.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]==="="){bufferLength--;if(base64[base64.length-2]==="="){bufferLength--;}}
var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=(encoded1<<2)|(encoded2>>4);bytes[p++]=((encoded2&15)<<4)|(encoded3>>2);bytes[p++]=((encoded3&3)<<6)|(encoded4&63);}
return arraybuffer;};})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");},{}],21:[function(require,module,exports){module.exports=(function(){return this;})();},{}],22:[function(require,module,exports){var global=require('global');try{module.exports='XMLHttpRequest'in global&&'withCredentials'in new global.XMLHttpRequest();}catch(err){module.exports=false;}},{"global":21}],23:[function(require,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i;}
return-1;};},{}],24:[function(require,module,exports){var global=(function(){return this;})();var WebSocket=global.WebSocket||global.MozWebSocket;module.exports=WebSocket?ws:null;function ws(uri,protocols,opts){var instance;if(protocols){instance=new WebSocket(uri,protocols);}else{instance=new WebSocket(uri);}
return instance;}
if(WebSocket)ws.prototype=WebSocket.prototype;},{}]},{},[1])
(1)});;