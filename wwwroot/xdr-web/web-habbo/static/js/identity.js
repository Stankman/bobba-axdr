var FacebookIntegration={apiKey:"",applicationId:"",applicationName:"",popupWindowParams:"toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=540,height=450",badgeImagePath:"",viralPresentImagePath:"",viralPartnerCode:"",fbAppRequestUserFilter:"app_non_users",currentToken:null,initUI:function(){},openPopupWindow:function(a){var b=window.open(a.href,null,FacebookIntegration.popupWindowParams);
if(window.focus){b.focus()}},linkAccountOk:function(){window.location.replace("/facebook/authenticate")},makeStreamPublish:function(d,b,e,a){var c={method:"stream.publish",attachment:d,user_message_prompt:L10N.get(b),action_links:[{text:L10N.get(e),href:a}]};return c},publishFacebookStory:function(a,b,c){if(typeof HabbletLoader!="undefined"&&HabbletLoader.needsFlashKbWorkaround()){$("client-ui").addClassName("x-workaround-feed")
}FB.ui(b,function(d){$("client-ui").removeClassName("x-workaround-feed");if(FacebookIntegration.currentToken){var e=c||{};if(d&&(d.request_ids||d.post_id)){new Ajax.Request("/"+a,{method:"post",parameters:Object.extend({token:FacebookIntegration.currentToken,published:"true"},e)})}else{new Ajax.Request("/"+a,{method:"post",parameters:Object.extend({token:FacebookIntegration.currentToken,canceled:"true"},e)});
FacebookIntegration.currentToken=null}}})},publishAchievementStory:function(b,d){var c="http://apps.facebook.com/"+FacebookIntegration.applicationName+"/";var a="vtoken";new Ajax.Request("/"+a,{method:"post",parameters:{type:b,dialogCreated:"true"},onSuccess:function(h,f){if(f&&f.token){FacebookIntegration.currentToken=f.token;
var e=c+"?"+a+"="+f.token+"&badgeCode="+b;if(f.tests){e=e+"&abclass="+f.tests.join(",")}var i={name:L10N.get("facebook.story.name"),description:d,href:e,caption:L10N.get("facebook.story.achievement.caption","{*actor*}"),media:[{type:"image",src:FacebookIntegration.badgeImagePath+"/"+b+".gif",href:e}]};
var g=FacebookIntegration.makeStreamPublish(i,"facebook.story.achievement.prompt","facebook.story.actionlink.text",e);FacebookIntegration.publishFacebookStory(a,g,{type:b})}}})},publishAchievementScoreBonus:function(b,f,e,c){var d="http://apps.facebook.com/"+FacebookIntegration.applicationName+"/";var a="vtoken";
new Ajax.Request("/"+a,{method:"post",parameters:{type:b,dialogCreated:"true"},onSuccess:function(j,h){if(h&&h.token){FacebookIntegration.currentToken=h.token;var g=d+"?"+a+"="+h.token+"&shareBonusId="+c+"&badgeCode="+b;if(h.tests){g=g+"&abclass="+h.tests.join(",")}var k={name:f,href:g,caption:e+" "+L10N.get("facebook.story.achievement.caption","{*actor*}"),media:[{type:"image",src:FacebookIntegration.badgeImagePath+"/"+b+".gif",href:g}]};
var i=FacebookIntegration.makeStreamPublish(k,"facebook.story.achievement.prompt","facebook.story.actionlink.text",g);FacebookIntegration.publishFacebookStory(a,i,{type:b})}}})},publishXmasViral:function(a,e,d,b,c){FacebookIntegration.showViralApplicationRequestDialog(a,e,d,b)},showViralApplicationRequestDialog:function(a,g,f,c){var e="http://apps.facebook.com/"+FacebookIntegration.applicationName+"/";
var b="vgiftrequest";var d="viral_val11";new Ajax.Request("/"+b,{method:"post",parameters:{type:d,dialogCreated:"true",token:c},onSuccess:function(k,i){if(i&&i.token){FacebookIntegration.currentToken=i.token;var h=e+"?presentId="+c+"&partner="+FacebookIntegration.viralPartnerCode;if(i.tests){h=h+"&abclass="+i.tests.join(",")
}var j={method:"apprequests",title:L10N.get("title.fb_app_request"),message:L10N.get("facebook.request.content.text"),filters:[FacebookIntegration.fbAppRequestUserFilter],data:"presentId="+c+"&partner="+FacebookIntegration.viralPartnerCode};var l={type:d};FacebookIntegration.publishFacebookStory(b,j,l)
}}})},getAccessToken:function(b,a){Cookie.erase(b);FB.init({appId:FacebookIntegration.applicationId,status:true,cookie:true,xfbml:true});FB.getLoginStatus(function(d){if(d.authResponse){var c=d.authResponse;FlashExternalInterface.clientElement.sendAccessTokenToServer(c.accessToken,c.expiresIn,c.userID)
}else{FB.login(function(f){if(f.scope){if(f.authResponse){var e=f.authResponse;FlashExternalInterface.clientElement.sendAccessTokenToServer(e.accessToken,e.expiresIn,e.userID)}else{FlashExternalInterface.clientElement.sendAccessTokenToServer(null,null,null)}}else{FlashExternalInterface.clientElement.sendAccessTokenToServer(null,null,null)
}},{scope:a})}})}};var RpxIntegration={apiKey:"",popupWindowParams:"toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=540,height=450",openPopupWindow:function(a){var b=window.open(a.href,null,RpxIntegration.popupWindowParams);b.focus()},linkAccountOk:function(){var a="";
if(RpxIntegration.next){a="?next="+escape(RpxIntegration.next)}window.location.replace("/rpx/authenticate"+a)}};var Identity={startActivationNag:function(){if(!HabbletLoader.needsFlashKbWorkaround()){var a=$$(".client-habblet-container");$$(".client-habblet-container").each(function(c){var b=c.select("#inner-message-container");
if(b){Identity.infoHabblet=c;Identity.centerActivation()}});Identity.activationTimer=window.setInterval(function(){Identity.centerActivation()},16000)}},sendActivationRequest:function(){FlashExternalInterface.legacyTrack("habblet","accountActivation","sendEmail");if($("email")){var a=$("email").value;
new Ajax.Updater("inner-message-container",habboReqPath+"/habblet/update_email_and_send_activation",{parameters:{email:a},evalScripts:true,method:"post"})}},closeActivation:function(){FlashExternalInterface.legacyTrack("habblet","accountActivation","close");if(Identity.activationTimer){Identity.activationTimer=clearTimeout(Identity.activationTimer);
Identity.activationTimer=null}var a=$$(".client-habblet-container.contains-accountActivation")[0];if(a){HabbletLoader.hide(a)}},centerActivation:function(){if(Identity.infoHabblet){Identity.infoHabblet.setStyle({left:"-350px"});Identity.infoHabblet.setStyle({top:"50px"});Identity.infoHabblet.setStyle({position:"relative"})
}}};__accountActivation__defined__=true;