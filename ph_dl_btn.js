// ==UserScript==
// @name            PH Download Button
// @namespace       Patrick @ FreeNode or github.com/patrick-hudson
// @description     Adds basic download button that trigggers POST to local server listening for data
// @description     Requires listner to function - app.py
// @version         0.0.1
// @author          Patrick Hudson <phudson2@gmail.com>
// @include         *
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @match           https://pornhubpremium.com/playlist/*
// @grant           GM_openInTab
// @grant           GM_xmlhttpRequest
// ==/UserScript==]


(function() {
  'use strict';
  var $ = window.jQuery;
  $('div.thumbnail-info-wrapper span.title').prepend('<button id="dDown">Download</button>');
  $(document).on('click', '#dDown', function(){
      var linkParent=$(this).parent()
      var link = $(linkParent).find('a')
      link = $(link).attr('href')
      link = "https://www.pornhubpremium.com"+link
      console.log(link)
      GM_xmlhttpRequest({
          method: "POST",
          url: "http://localhost:5000/link",
          headers: { "Content-type" : "application/json" },
          data: "{\"url\": \""+link+"\"}"
      });
  });
})();
