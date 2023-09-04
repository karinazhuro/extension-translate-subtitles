# extension-translate-subtitles

1. сделать субтитры кликабельными
    отключить перемещение субтитров
2. при наведении на субтитры останавливать видео

{
"manifest_version": 3,
"name": "Extension Translate Subtitles",
"description": "This extension translate subtitles from videos",
"version": "1.0",
"action": {
"default_popup": "hello.html",
"default_icon": {
"16": "images/icon-16.png",
"32": "images/icon-32.png",
"48": "images/icon-32.png",
"128": "images/icon-128.png"
}
},
"content_scripts": [
{
"js": [
"scripts/content.js"
],
"matches": [
"https://developer.chrome.com/docs/extensions/*",
"https://developer.chrome.com/docs/webstore/*",
"https://rezka.ag/*"
]
}
],
"background": {
"service_worker": "background.js"
},
"permissions": ["activeTab", "scripting"]
}
