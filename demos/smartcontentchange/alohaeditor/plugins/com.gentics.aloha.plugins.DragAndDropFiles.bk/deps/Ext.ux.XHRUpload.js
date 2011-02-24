Ext.ns("Ext.ux");Ext.ux.XHRUpload=function(a){Ext.apply(this,a,{method:"POST",fileNameHeader:"X-File-Name",filePostName:"fileName",contentTypeHeader:"text/plain; charset=x-user-defined-binary",extraPostData:{},extraHeaders:{},xhrExtraPostDataPrefix:"extraPostData_",sendMultiPartFormData:false});this.addEvents("loadstart","progress","abort","error","load","loadend");Ext.ux.XHRUpload.superclass.constructor.call(this)};
Ext.extend(Ext.ux.XHRUpload,Ext.util.Observable,{send:function(a){Ext.apply(this,a);this.xhr=new XMLHttpRequest;this.xhr.addEventListener("loadstart",this.relayXHREvent.createDelegate(this),false);this.xhr.addEventListener("progress",this.relayXHREvent.createDelegate(this),false);this.xhr.addEventListener("progressabort",this.relayXHREvent.createDelegate(this),false);this.xhr.addEventListener("error",this.relayXHREvent.createDelegate(this),false);this.xhr.addEventListener("load",this.relayXHREvent.createDelegate(this),
false);this.xhr.addEventListener("loadend",this.relayXHREvent.createDelegate(this),false);this.xhr.upload.addEventListener("loadstart",this.relayUploadEvent.createDelegate(this),false);this.xhr.upload.addEventListener("progress",this.relayUploadEvent.createDelegate(this),false);this.xhr.upload.addEventListener("progressabort",this.relayUploadEvent.createDelegate(this),false);this.xhr.upload.addEventListener("error",this.relayUploadEvent.createDelegate(this),false);this.xhr.upload.addEventListener("load",
this.relayUploadEvent.createDelegate(this),false);this.xhr.upload.addEventListener("loadend",this.relayUploadEvent.createDelegate(this),false);this.xhr.open(this.method,this.url,true);if(typeof FileReader!=="undefined"&&this.sendMultiPartFormData){this.reader=new FileReader;this.reader.addEventListener("load",this.sendFileUpload.createDelegate(this),false);this.reader.readAsBinaryString(this.file);return true}this.xhr.overrideMimeType(this.contentTypeHeader);this.xhr.setRequestHeader(this.fileNameHeader,
this.file.name);console.log(this.xhr);for(var b in this.extraHeaders)this.xhr.setRequestHeader(b,this.extraHeaders[b]);for(b in this.extraPostData)this.xhr.setRequestHeader(this.xhrExtraPostDataPrefix+b,this.extraPostData[b]);this.xhr.send(this.file);return true},sendFileUpload:function(){var a=(1E12+Math.floor(Math.random()*8999999999998)).toString(),b="";for(attr in this.extraPostData)b+="--"+a+'\r\nContent-Disposition: form-data; name="'+attr+'"\r\ncontent-type: text/plain;\r\n\r\n'+this.extraPostData[attr]+
"\r\n";b+="--"+a+'\r\nContent-Disposition: form-data; name="'+this.filePostName+'"; filename="'+this.file.name+'"\r\nContent-Type: '+this.file.type+"\r\nContent-Transfer-Encoding: base64\r\n\r\n"+window.btoa(this.reader.result)+"\r\n--"+a+"--\r\n\r\n";this.xhr.setRequestHeader("Content-Type","multipart/form-data; boundary="+a);this.xhr.send(b)},relayUploadEvent:function(a){this.fireEvent("upload"+a.type,a)},relayXHREvent:function(a){this.fireEvent(a.type,a)}});