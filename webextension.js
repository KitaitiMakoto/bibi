'use strict';

chrome.browserAction.onClicked.addListener(function(aTab) {
  chrome.tabs.create({'url': 'bib/i/index.html'});
});
