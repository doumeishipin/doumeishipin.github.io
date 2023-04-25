var browser = {
  versions: (function () {
    var u = navigator.userAgent;
    var p = navigator.platform;
    return {
      ispc: p.indexOf("Mac") !== -1 || p === "X11" || p.indexOf("Win") === 0,
      trident: u.indexOf("Trident") > -1,
      mobile: !!u.match(/Mobile/i),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.Mac OS X/),
      android: u.indexOf("Android") > -1,
      iphone: u.indexOf("iPhone") > -1,
      ipad: u.indexOf("iPad") > -1,
      weixin: u.indexOf("MicroMessenger") > -1,
      qq: u.indexOf("MQQBrowser") > -1,
      uc: u.indexOf("UCBrowser") > -1,
      quark: u.indexOf("Quark") > -1,
    };
  })(),
};

function videosrc() {
  if (browser.versions.uc || browser.versions.qq) {
  } else {
    fetch("./static/video_bg_01.mp4")
      .then((response) => response.blob())
      .then((blob) => {
        const videoUrl = URL.createObjectURL(blob);
        document.getElementById("video_source").src = videoUrl;
        document.getElementById("video_bg").load();
      })
      .catch((error) => console.error(error));
  }
}

function downAPP() {
  if (browser.versions.ispc) {
    alert("请在手机浏览器上输入网址 doumei.vip");
  } else if (browser.versions.android) {
    window.location.href =
      "https://x05dpi3wf5ejfr231bp4q.doumei.site/down/com.doumei.me.5.0.4.apk";
  } else if (
    browser.versions.iphone ||
    browser.versions.ipad ||
    browser.versions.ios
  ) {
    document.getElementById("Showios").style.display = "block";
    setTimeout(function () {
      window.location.href = "https://doumei.vip/doumei.mobileconfig";
    }, 2000);
  } else {
    alert("不支持您当前系统！");
  }
}

function webH5() {
  if (browser.versions.ispc) {
    alert("请在手机浏览器上输入网址 doumei.vip");
  } else if (
    browser.versions.uc ||
    browser.versions.qq ||
    browser.versions.weixin ||
    browser.versions.quark ||
    browser.versions.trident
  ) {
    alert("网页不兼容您当前浏览器！\n\n请使用其他浏览器");
  } else if (browser.versions.mobile) {
    window.location.href = "https://h5.doumei.me";
  } else {
    alert("请使用其它浏览器！");
  }
}

document.getElementById("Showios").addEventListener("click", function () {
  this.style.display = "none";
});

videosrc();
