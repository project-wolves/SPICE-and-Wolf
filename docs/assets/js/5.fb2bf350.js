(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{408:function(t,s,a){t.exports=a.p+"assets/img/archlinux.org.2db62b58.png"},409:function(t,s,a){t.exports=a.p+"assets/img/archlinux.org.1.79128e03.png"},410:function(t,s,a){t.exports=a.p+"assets/img/archlinux.org.2.1fbf419e.png"},411:function(t,s,a){t.exports=a.p+"assets/img/3.acedc560.png"},412:function(t,s,a){t.exports=a.p+"assets/img/4.39ba1758.png"},413:function(t,s,a){t.exports=a.p+"assets/img/5.995f061d.png"},414:function(t,s,a){t.exports=a.p+"assets/img/6.50e1d579.png"},415:function(t,s,a){t.exports=a.p+"assets/img/7.f5153503.png"},447:function(t,s,a){"use strict";a.r(s);var r=a(43),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"下载和制作-arch-linux-的安装介质"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载和制作-arch-linux-的安装介质"}},[t._v("#")]),t._v(" 下载和制作 Arch Linux 的安装介质")]),t._v(" "),r("h2",{attrs:{id:"何谓安装映像？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#何谓安装映像？"}},[t._v("#")]),t._v(" 何谓安装映像？")]),t._v(" "),r("blockquote",[r("p",[t._v("安装映像是一种磁盘映像，大部分安装映像是 ISO 映像（当然也有像 AOSC 那样放出 tarball （伪安装映像）的异类）。")])]),t._v(" "),r("h2",{attrs:{id:"下载-arch-linux-的安装映像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载-arch-linux-的安装映像"}},[t._v("#")]),t._v(" 下载 Arch Linux 的安装映像")]),t._v(" "),r("p",[t._v("首先用汝喜欢的浏览器打开 "),r("a",{attrs:{href:"https://www.archlinux.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.archlinux.org"),r("OutboundLink")],1),t._v(" 啦，大概像这个样子。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(408),alt:""}})]),t._v(" "),r("p",[t._v("当然是戳右上角的 Download 按钮啦 ~")]),t._v(" "),r("p",[r("img",{attrs:{src:a(409),alt:""}})]),t._v(" "),r("p",[t._v("如果汝会使用 Bitorrent 下载的话，可以从 "),r("code",[t._v("BitTorrent Download (recommended)")]),t._v(" 一节中下载到种子或磁力链接。")]),t._v(" "),r("p",[t._v("或者往下翻，有 HTTP(S) 镜像可用：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(410),alt:""}})]),t._v(" "),r("p",[t._v("找一个距离接近的网站进去看看吧，大概会看到这样的东西：")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("../\narch/                                              01-Dec-2018 10:16                   -\narchlinux-2018.12.01-x86_64.iso                    01-Dec-2018 10:17           616562688\narchlinux-2018.12.01-x86_64.iso.sig                01-Dec-2018 10:18                 310\narchlinux-2018.12.01-x86_64.iso.torrent            01-Dec-2018 10:18               38812\narchlinux-bootstrap-2018.12.01-x86_64.tar.gz       01-Dec-2018 10:18           147904918\narchlinux-bootstrap-2018.12.01-x86_64.tar.gz.sig   01-Dec-2018 10:18                 310\nmd5sums.txt                                        01-Dec-2018 10:18                 145\nsha1sums.txt                                       01-Dec-2018 10:18                 161\n")])])]),r("p",[t._v("汝需要下载的是 ISO 和它的散列值文件，例如这里的 "),r("code",[t._v("archlinux-2018.12.01-x86_64.iso")]),t._v(" 和 "),r("code",[t._v("sha1sums.txt")]),t._v(" 。如果汝了解 openPGP 的使用的话，可以把签名文件也下载下来。（ "),r("code",[t._v("archlinux-2018.12.01-x86_64.iso.sig")]),t._v(" ）")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("不过要是知道 openPGP 怎么用的话这个就不是问题了吧 …… 😂\n")])])]),r("h2",{attrs:{id:"在-windows-中检查-iso-的散列值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-中检查-iso-的散列值"}},[t._v("#")]),t._v(" 在 Windows 中检查 ISO 的散列值")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("这一步是为了检查下载到的 ISO 的完整性，于是如果汝是用 Bitorrent 下载的，\n汝的 Bitorrent 客户端会自动帮忙检查下载完的文件的完整性，不用多此一举了 😂\n")])])]),r("p",[t._v("从"),r("a",{attrs:{href:"http://implbits.com/products/hashtab/HashTab_v6.0.0.34_Setup.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个地方"),r("OutboundLink")],1),t._v("下载 HashTab 并安装。 右键下载下来的镜像，选择“属性”，你会看到一个叫做“File Hashes”的标签，打开就能看到校验码了。然后与打开的校验码文件比对即可（这个文件要从 HTTPS 主站或镜像站拿下来）")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("尽管 md5 和 sha1 已经被认为是不安全的散列算法了，但是如果仅仅是验证文件的完整性的话是可以的。验证文件的真实性（？）就要靠 openPGP 了。\n")])])]),r("h2",{attrs:{id:"（可选）在-windows-中验证文件的-openpgp-签名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#（可选）在-windows-中验证文件的-openpgp-签名"}},[t._v("#")]),t._v(" （可选）在 Windows 中验证文件的 openPGP 签名")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("#TODO\n")])])]),r("h2",{attrs:{id:"使用-rufus-制作安装-usb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-rufus-制作安装-usb"}},[t._v("#")]),t._v(" 使用 Rufus 制作安装 USB")]),t._v(" "),r("p",[t._v("但前提是汝的电脑能从 U 盘启动 😂 （不过最近几年生产的电脑都应该可以了吧……")]),t._v(" "),r("p",[t._v("Windows 下咱比较推荐一个叫 rufus 的软件，"),r("a",{attrs:{href:"https://rufus.akeo.ie/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站在这"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("下载完以后双击运行，需要管理员权限，记得看有没有数字签名。（有数字签名时用户账户控制的对话框是蓝色的）")]),t._v(" "),r("p",[t._v("Rufus 自带多国语言（当然也包括中文啦），如果汝系统语言不是中文的话，点击那个地球图标就可以修改语言了啦~")]),t._v(" "),r("p",[r("img",{attrs:{src:a(411),alt:"Rufus: 选择语言"}})]),t._v(" "),r("p",[t._v("然后戳有点像光盘的按钮选择刚下载好的 ISO 镜像")]),t._v(" "),r("p",[r("img",{attrs:{src:a(412),alt:"Rufus: 选择映像"}})]),t._v(" "),r("p",[t._v("然后选择一种启动类型，UEFI 就选最后一个，不是的话就选第一个。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(413),alt:"Rufus: 选择启动方式"}})]),t._v(" "),r("p",[t._v("写入方式选推荐的就好 （´＿｀）")]),t._v(" "),r("p",[r("img",{attrs:{src:a(414),alt:"Rufus: 选择写入方式"}})]),t._v(" "),r("p",[t._v("确认（要知道汝按下确认以后就没有回头路了，所以记得提前备份 U 盘上的资料 😂）")]),t._v(" "),r("p",[r("img",{attrs:{src:a(415),alt:""}})]),t._v(" "),r("p",[t._v('然后坐等完成，完成以后汝的 U 盘卷标应该是 "ARCH_201610" 这样的 （后面四位年份和两位月份），不要改成别的，万一不对记得照 ISO 改回来 😂😂')])])}),[],!1,null,null,null);s.default=e.exports}}]);