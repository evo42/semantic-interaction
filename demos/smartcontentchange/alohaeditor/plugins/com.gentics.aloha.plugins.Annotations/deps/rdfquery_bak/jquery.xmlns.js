/*
 MIT license (MIT-LICENSE.txt)
 @version 1.0
 @requires jquery.uri.js
*/
(function(h){var j=/\sxmlns(?::([^ =]+))?\s*=\s*(?:"([^"]*)"|'([^']*)')/g,k=RegExp("^[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u0131\u0134-\u013e\u0141-\u0148\u014a-\u017e\u0180-\u01c3\u01cd-\u01f0\u01f4-\u01f5\u01fa-\u0217\u0250-\u02a8\u02bb-\u02c1\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03ce\u03d0-\u03d6\u03da\u03dc\u03de\u03e0\u03e2-\u03f3\u0401-\u040c\u040e-\u044f\u0451-\u045c\u045e-\u0481\u0490-\u04c4\u04c7-\u04c8\u04cb-\u04cc\u04d0-\u04eb\u04ee-\u04f5\u04f8-\u04f9\u0531-\u0556\u0559\u0561-\u0586\u05d0-\u05ea\u05f0-\u05f2\u0621-\u063a\u0641-\u064a\u0671-\u06b7\u06ba-\u06be\u06c0-\u06ce\u06d0-\u06d3\u06d5\u06e5-\u06e6\u0905-\u0939\u093d\u0958-\u0961\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8b\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ae0\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b36-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb5\u0bb7-\u0bb9\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cde\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d60-\u0d61\u0e01-\u0e2e\u0e30\u0e32-\u0e33\u0e40-\u0e45\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eae\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0f40-\u0f47\u0f49-\u0f69\u10a0-\u10c5\u10d0-\u10f6\u1100\u1102-\u1103\u1105-\u1107\u1109\u110b-\u110c\u110e-\u1112\u113c\u113e\u1140\u114c\u114e\u1150\u1154-\u1155\u1159\u115f-\u1161\u1163\u1165\u1167\u1169\u116d-\u116e\u1172-\u1173\u1175\u119e\u11a8\u11ab\u11ae-\u11af\u11b7-\u11b8\u11ba\u11bc-\u11c2\u11eb\u11f0\u11f9\u1e00-\u1e9b\u1ea0-\u1ef9\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2126\u212a-\u212b\u212e\u2180-\u2182\u3041-\u3094\u30a1-\u30fa\u3105-\u312c\uac00-\ud7a3\u4e00-\u9fa5\u3007\u3021-\u3029_][-A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd\u10000-\uefffF.0-9\u00b7\u0300-\u036f\u203f-\u2040]*$");
h.fn.xmlns=function(a,b,e){var f=this.eq(0),d=f.data("xmlns"),i=f[0],c,g;g=a?"xmlns:"+a:"xmlns";var l=false;if(b===undefined)if(a===undefined){if(!d){d={};if(i.attributes&&i.attributes.getNamedItemNS)for(g=0;g<i.attributes.length;g+=1){b=i.attributes[g];if(/^xmlns(:(.+))?$/.test(b.nodeName)){a=/^xmlns(:(.+))?$/.exec(b.nodeName)[2]||"";c=b.nodeValue;if(a===""||c!==""&&c!=="http://www.w3.org/XML/1998/namespace"&&c!=="http://www.w3.org/2000/xmlns/"&&k.test(a)&&a!=="xml"&&a!=="xmlns"){d[a]=h.uri(b.nodeValue);
l=true}}}else{g=/<[^>]+>/.exec(i.outerHTML);for(b=j.exec(g);b!==null;){a=b[1]||"";c=b[2]||b[3];if(a===""||c!==""&&c!=="http://www.w3.org/XML/1998/namespace"&&c!=="http://www.w3.org/2000/xmlns/"&&k.test(a)&&a!=="xml"&&a!=="xmlns"){d[a]=h.uri(b[2]||b[3]);l=true}b=j.exec(g)}j.lastIndex=0}e=e||(i.parentNode.nodeType===1?f.parent().xmlns():{});d=l?h.extend({},e,d):e;f.data("xmlns",d)}return d}else if(typeof a==="object"){for(c in a)typeof a[c]==="string"&&k.test(c)&&this.xmlns(c,a[c]);this.find("*").andSelf().removeData("xmlns");
return this}else{d||(d=f.xmlns());return d[a]}else{this.find("*").andSelf().removeData("xmlns");return this.attr(g,b)}};h.fn.removeXmlns=function(a){var b;if(typeof a==="object")if(a.length===undefined)for(b in a)typeof a[b]==="string"&&this.removeXmlns(b);else for(b=0;b<a.length;b+=1)this.removeXmlns(a[b]);else{a=a?"xmlns:"+a:"xmlns";this.removeAttr(a)}this.find("*").andSelf().removeData("xmlns");return this};h.fn.qname=function(a){var b,e,f;if(a===undefined)a=this[0].outerHTML===undefined?this[0].nodeName.toLowerCase():
/<([^ >]+)/.exec(this[0].outerHTML)[1].toLowerCase();if(a==="?xml:namespace")throw"XMLinHTML: Unable to get the prefix to resolve the name of this element";b=/^(([^:]+):)?([^:]+)$/.exec(a);e=b[2]||"";f=this.xmlns(e);if(f===undefined&&e!=="")throw"MalformedQName: The prefix "+e+" is not declared";return{namespace:f,localPart:b[3],prefix:e,name:a}}})(jQuery);