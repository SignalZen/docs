module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-signalzen',
    loadContent: async () => {
      return {
        remoteHeadTags: []
      };
    },
    injectHtmlTags({content}) {
      return {
        headTags: [],
        preBodyTags: [],
        postBodyTags: [`<script type="text/javascript">var _sz=_sz||{};_sz.appId="eb87830c",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();</script>`],
      };
    },
  };
};
