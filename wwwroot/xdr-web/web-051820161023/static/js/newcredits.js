var CreditsList=Class.create({initialize:function(){$$(".open[rel]").each(function(d){d.observe("click",function(j){var h=d.up(".method");var g=h.parentNode.select("."+d.getAttribute("rel"));if(!!g&&g.length>0){if(g.first().visible()){var i=g.first();var f=i.up(".paymentmethods-client");f.scrollTop=Math.max(i.cumulativeOffset()[1]-f.cumulativeOffset()[1],0)
}else{g.invoke("remove");h.insert({after:g.first()});var i=h.parentNode.select("."+d.getAttribute("rel")).first();Effect.Fade(h,{duration:0.5,afterFinish:function(){var k=/.*(idx[0-9]+).*/;var e=h.className.replace(k,"$1");var l=i.className.replace(k,"$1");i.removeClassName(l).addClassName(e).show();
h.removeClassName(e).addClassName(l).hide()}})}}})});var b=function(){$$(".method-group.phone .method, .method-group.phone-single .method, .method-group.utilities .method,").each(function(d){d.select("h2").invoke("insert",{after:'<div class="top"><div></div></div>'});d.insert('<div class="bottom"><div></div></div>')
})};b();var c=function(f){var d=f.select(".method:visible");if(d.length>2){d=d.slice(0,2)}if(d.length<2){return}var g=[d[0].getHeight(),d[1].getHeight()];var i,h;var e="spacer";if(g[0]!=g[1]){if(g[0]>g[1]){h=g[0]-g[1];if(d[1].select(".smallprint").length>0){i=d[1].select(".smallprint:first")[0];e+="-smallprint"
}else{i=d[1].select(".summary:first")[0];e+="-summary"}}else{if(g[1]>g[0]){h=g[1]-g[0];if(d[0].select(".smallprint").length>0){i=d[0].select(".smallprint:first")[0];e+="-smallprint"}else{i=d[0].select(".summary:first")[0];e+="-summary"}}}i.insert({after:'<div class="'+e+'" style="height: '+h+'px"></div>'})
}};var a=function(e){var d=function(i){var f=i.element();if(!f.getAttribute("target")){i.stop();if(f.hasClassName("country")){new Ajax.Updater($$(".paymentmethods-client-list").first(),habboReqPath+"/habblet/paymentmethods_cbs2",{method:"post",parameters:{viewName:"client",slug:f.getAttribute("rel")},evalScripts:true,onComplete:function(j){e.scrollTop=0;
b()}})}else{if(f.hasClassName("target-utilities")){var h=$$(".utilities").first();if(!!h){var g=h.up(".paymentmethods-client");g.scrollTop=Math.max(h.cumulativeOffset()[1]-g.cumulativeOffset()[1],0)}}HabbletLoader.openLink(f)}}};e.observe("click",Event.delegate({a:d,"a.new-button *":d}))};if($$(".paymentmethods-client").length==0){$$(".method-group.phone, .method-group.phone-single").each(c)
}else{$$(".paymentmethods-client").each(a)}}});var NewRedeemHabblet=Class.create({form:null,busy:false,initialize:function(a){this.form=$(a)||$("voucher-form");if(!!this.form){this.form.observe("submit",this._redeemVoucher.bind(this));this.form.observe("click",this._clicked.bind(this))}},_clicked:function(b){if(this.busy){return
}var a=b.findElement(".redeem-submit");if(!!a){this._redeemVoucher(b,a)}},_redeemVoucher:function(c,b){if(this.busy){return}c.stop();this.busy=true;b.addClassName("disabled-button");var a=this;setTimeout(function(){new Ajax.Updater(a.form,habboReqPath+"/habblet/ajax/new_redeemvoucher",{method:"post",parameters:{voucherCode:a.form.down("input[type=text]").value},onComplete:function(d){a.form.select(".rounded").each(function(f){Rounder.addCorners(f,8,8)
});var e=d.getHeader("X-Habbo-Balance");if((!!e||e===0)){$$(".redeem-balance-amount").each(function(f){f.innerHTML=e})}a.busy=false}.bind(a)})},5000)}});__credits__defined__=true;