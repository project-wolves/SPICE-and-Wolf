(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{418:function(t,e,r){t.exports=r.p+"assets/img/intro.23a9e2cb.png"},419:function(t,e,r){t.exports=r.p+"assets/img/interface.091287a9.png"},420:function(t,e,r){t.exports=r.p+"assets/img/pasted.b4c0a099.png"},421:function(t,e,r){t.exports=r.p+"assets/img/copylink.6b7353b7.png"},422:function(t,e,r){t.exports=r.p+"assets/img/result.2e31a36f.png"},463:function(t,e,r){"use strict";r.r(e);var a=r(43),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pastebin-服务-粘贴和分享文字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pastebin-服务-粘贴和分享文字"}},[t._v("#")]),t._v(" Pastebin 服务 - 粘贴和分享文字")]),t._v(" "),a("p",[t._v("Pastebin 服务是一种可以存储少量文本的服务，当汝把文字粘贴到 Pastebin 服务上时，汝会获得一个链接。然后汝就可以分享这个链接到需要的地方（例如 IM 上）。")]),t._v(" "),a("p",[t._v("那为啥要这么大费周章呢？")]),t._v(" "),a("ul",[a("li",[t._v("防止刷屏， IRC 尤其适用")]),t._v(" "),a("li",[t._v("有的 Pastebin 服务支持一些额外功能，例如更新、设置访问密码、设置过期时间和代码格式化等功能。也许能让看的人舒服些……")])]),t._v(" "),a("h2",{attrs:{id:"有哪些-pastebin-服务呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有哪些-pastebin-服务呢？"}},[t._v("#")]),t._v(" 有哪些 Pastebin 服务呢？")]),t._v(" "),a("ul",[a("li",[t._v("汝不会上网搜索嘛……")]),t._v(" "),a("li",[t._v("以及一些自由软件项目会提供官方的 Pastebin 服务，例如：\n"),a("ul",[a("li",[t._v("GNOME Pastebin: "),a("a",{attrs:{href:"https://paste.gnome.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://paste.gnome.org/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("SUSE Paste: "),a("a",{attrs:{href:"https://paste.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://paste.opensuse.org/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Pb: "),a("a",{attrs:{href:"https://ptpb.pw",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ptpb.pw"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("vim-cn: "),a("a",{attrs:{href:"https://cfp.vim-cn.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cfp.vim-cn.com/"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"那该怎么用？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那该怎么用？"}},[t._v("#")]),t._v(" 那该怎么用？")]),t._v(" "),a("blockquote",[a("p",[t._v("下面用 "),a("a",{attrs:{href:"https://fars.ee/~readme.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("#archlinux-cn"),a("OutboundLink")],1),t._v(" 的 "),a("a",{attrs:{href:"https://github.com/farseerfc",target:"_blank",rel:"noopener noreferrer"}},[t._v("farseerfc"),a("OutboundLink")],1),t._v(" 搭建的 ptpb （ "),a("a",{attrs:{href:"https://fars.ee",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://fars.ee"),a("OutboundLink")],1),t._v(" ）举例。")])]),t._v(" "),a("p",[t._v("打开 "),a("a",{attrs:{href:"https://fars.ee",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://fars.ee"),a("OutboundLink")],1),t._v(" ， 汝就能看到一些基本用法：")]),t._v(" "),a("p",[a("img",{attrs:{src:r(418),alt:"api help on fars.ee"}})]),t._v(" "),a("p",[t._v("核心命令是 "),a("code",[t._v('curl -F c=@- "https://fars.ee/"')]),t._v(" ，把它和汝需要运行的命令通过管道连接起来。")]),t._v(" "),a("ul",[a("li",[t._v("如果确定日志里没有什么敏感信息，又不想费劲存储到临时文件，可以用管道重定向直接让 curl 上传，例如：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ journalctl -u privoxy.service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -F "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("@- http://fars.ee/\ndate: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-03-01T09:06:18.267121+00:00\ndigest: 76f845c8b79fb65627d4ee2d15178f1f10dfd7e2\nlong: AHb4Rci3n7ZWJ9TuLRUXjx8Q39fi\nshort: 39cd\nsize: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("46554")]),t._v("\nstatus: created\nurl: http://fars.ee/39cd\nuuid: 11e3d286-77c3-44ab-ba2b-3bbaa11af5d4\n")])])]),a("p",[t._v("返回内容中 "),a("code",[t._v("url")]),t._v(" 那行，就是上传文本的链接啦。把这个链接发送给要分享的人或群组就行。")]),t._v(" "),a("ul",[a("li",[t._v("如果需要从临时文件上传日志，可以用类似这样的方式（"),a("code",[t._v("your.log")]),t._v("换成你要上传的文件名啦）：")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -F c=@- http://fars.ee/ < your.log\n")])])]),a("p",[t._v("和上面一样，返回内容中 "),a("code",[t._v("url")]),t._v(" 那行是上传文本的链接。")]),t._v(" "),a("h2",{attrs:{id:"或者汝想用网页上传？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#或者汝想用网页上传？"}},[t._v("#")]),t._v(" 或者汝想用网页上传？")]),t._v(" "),a("ul",[a("li",[t._v("打开 "),a("a",{attrs:{href:"https://fars.ee/f",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://fars.ee/f"),a("OutboundLink")],1),t._v(" , 汝会看到这样的画面：")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(419),alt:"upload form"}})]),t._v(" "),a("p",[t._v("把汝需要复制的文字贴到中间那个框里，然后按那个蓝色的 Paaste 按钮：")]),t._v(" "),a("p",[a("img",{attrs:{src:r(420),alt:"pasted"}})]),t._v(" "),a("p",[t._v("那个 created 实际上是一个链接啦，右键点击那个链接选择复制链接地址或类似的选项把它复制下来：")]),t._v(" "),a("p",[a("img",{attrs:{src:r(421),alt:"pasted"}})]),t._v(" "),a("p",[t._v("然后就可以打开它或者发到什么地方去了：")]),t._v(" "),a("p",[a("img",{attrs:{src:r(422),alt:"result"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);