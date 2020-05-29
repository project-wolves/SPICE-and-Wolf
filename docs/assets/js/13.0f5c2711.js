(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{417:function(t,v,e){t.exports=e.p+"assets/img/hypervisor.61828faf.png"},459:function(t,v,e){"use strict";e.r(v);var s=e(43),_=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"有关虚拟化的二三事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有关虚拟化的二三事"}},[t._v("#")]),t._v(" 有关虚拟化的二三事")]),t._v(" "),s("blockquote",[s("p",[t._v("在计算机技术中，虚拟化（技术）或虚拟技术（英语：Virtualization）是一种资源管理技术，是将计算机的各种实体资源（CPU、内存、磁盘空间、网络适配器等），予以抽象、转换后呈现出来并可供分区、组合为一个或多个电脑配置环境。由此，打破实体结构间的不可切割的障碍，使用户可以比原本的配置更好的方式来应用这些电脑硬件资源。这些资源的新虚拟部分是不受现有资源的架设方式，地域或物理配置所限制。一般所指的虚拟化资源包括计算能力和数据存储。")]),t._v(" "),s("p",[t._v("--- "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zh.wikipedia.org/wiki/虚拟化"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"啥是虚拟机，都有哪些实现手段（hypervisors）？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#啥是虚拟机，都有哪些实现手段（hypervisors）？"}},[t._v("#")]),t._v(" 啥是虚拟机，都有哪些实现手段（Hypervisors）？")]),t._v(" "),s("p",[t._v("简单的来说，"),s("strong",[t._v("虚拟机是对于操作系统的模拟")]),t._v("。"),s("br"),t._v("\n通过虚拟机技术，你可以在一台电脑上运行多个 OS，比如说最常见的例子是在 MacBook 上通过 Bootcamp 和/或 Parallels Desktop 运行 Windows")]),t._v(" "),s("p",[t._v("我们将通过虚拟机运行的操作系统称之为 "),s("code",[t._v("Guest OS")]),t._v(" (区分于后文提到的 Host OS)")]),t._v(" "),s("p",[t._v("而 "),s("code",[t._v("Hypervisors")]),t._v(" 则是用来创建、监控、运行虚拟机的软件/固件/硬件。通过架构，我们又可将 hypervisors 区分为两类：")]),t._v(" "),s("p",[s("img",{attrs:{src:e(417),alt:"Types of hypervisors"}})]),t._v(" "),s("ul",[s("li",[t._v("Type 1 hypervisors\n"),s("ul",[s("li",[t._v("直接运行在硬件上")]),t._v(" "),s("li",[t._v("例子有 Xen, Hyper-V, Xbox One, VMWare ESXi")])])]),t._v(" "),s("li",[t._v("Type 2 hypervisors\n"),s("ul",[s("li",[t._v("像一个常规软件一样运行在传统的操作系统上 (我们将这个系统称之为 Host OS)")]),t._v(" "),s("li",[t._v("例子有 VMWare Workstation, VirtualBox, Parallels Desktop")])])])]),t._v(" "),s("p",[t._v("显然，type 1 hypervisors 具有更高的性能，但在设置和面向终端的用户体验上不那么友好。以 ESXi 举例，ESXi 初次安装需要从另一台电脑远程配置安装 guest os。而 Hyper-V 仅在 pro 版本的 Windows 中作为额外功能提供。")]),t._v(" "),s("p",[t._v("不过对于 type 2 hypervisors 来说，通过支持硬件虚拟化的主板"),s("strong",[t._v("以及")]),t._v("CPU，也可以最大化 Guest OS 的性能；"),s("br"),t._v("\n具有一定动手能力的同学还可以折腾 "),s("code",[t._v("PCIe Passthrough")]),t._v(" 以使用独显在虚拟机中 "),s("s",[t._v("玩游戏")]),t._v(" 折腾机器学习或者使用CUDA加速计算")]),t._v(" "),s("h3",{attrs:{id:"新手友好的虚拟机实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新手友好的虚拟机实现方式"}},[t._v("#")]),t._v(" 新手友好的虚拟机实现方式")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("实现手段")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("优点")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("缺点")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("适用场景")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Hyper-V")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("微软官方出品，支持动态内存分配")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("与 Windows Professional 或 Windows Server 一同提供；坊间传闻对于 Linux 支持极差")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("对于想在 Windows 机器上虚拟 Windows 的人（不在本篇讨论范围）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("VMWare Workstation Pro")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("性能相对优于VBox，更加稳定，不容易crash")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("付费，很贵；免费版本功能被阉割的非常严重")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("具有支付意愿与支付能力，且非常注重虚拟机的稳定性和性能的人")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("VirtualBox")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("开源，免费；支持从其他平台迁移")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("性能略差（不过可以接受）")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("适用于看重开源、隐私、和安全性的用户们")])])])]),t._v(" "),s("h2",{attrs:{id:"为啥需要虚拟机？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为啥需要虚拟机？"}},[t._v("#")]),t._v(" 为啥需要虚拟机？")]),t._v(" "),s("p",[t._v("一定有人会问，“既然虚拟机又不稳定又损耗性能，那为什么要使用虚拟机呢”？"),s("br"),t._v("\n那么接下来我们通过讨论对于不同硬件资源的虚拟分述一波")]),t._v(" "),s("h3",{attrs:{id:"对于不同硬件资源的虚拟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对于不同硬件资源的虚拟"}},[t._v("#")]),t._v(" 对于不同硬件资源的虚拟")]),t._v(" "),s("ul",[s("li",[t._v("对于 CPU 的虚拟\n"),s("ul",[s("li",[t._v("虚拟不同架构的 CPU ，比如说在 x86-64 架构的硬件系统上虚拟 ARM 或者 MIPS 架构的设备")]),t._v(" "),s("li",[t._v("这在软件开发中具有非常大的用途")])])]),t._v(" "),s("li",[t._v("对于内存的虚拟\n"),s("ul",[s("li",[t._v("分配给虚拟机的内存是相对独立的；运行在虚拟机中的程序无法读写在其他虚拟机中或者 Host OS 的内存，保证安全")])])]),t._v(" "),s("li",[t._v("对于硬盘的模拟\n"),s("ul",[s("li",[t._v("方便进行操作系统的迁移")]),t._v(" "),s("li",[t._v("e.g. 搭建程序测试环境时只需要搭建一次就可以在不同测试人员之间无缝迁移")])])]),t._v(" "),s("li",[t._v("对于网卡的模拟\n"),s("ul",[s("li",[t._v("搭建透明代理")]),t._v(" "),s("li",[t._v("通过 Host-only 网络实现强制全局代理")]),t._v(" "),s("li",[t._v("模拟网络环境 "),s("s",[t._v("在缺少经费的时候用虚拟机做实验")])])])])]),t._v(" "),s("h3",{attrs:{id:"快照-snapshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照-snapshot"}},[t._v("#")]),t._v(" 快照 (snapshot)")]),t._v(" "),s("p",[t._v("除此之外，多数虚拟机还提供了 "),s("strong",[t._v("快照 (snapshot)")]),t._v(" 功能"),s("br"),t._v("\nsnapshot 可以让你保存/备份某一段时间虚拟机的状态并且随时返回这个状态")]),t._v(" "),s("p",[t._v("举个例子，你可以在安装一份干净的系统之后截取一份快照，并且在这个系统中测试病毒；测试完之后你可以随时返回快照时的状态，以保证系统干净")]),t._v(" "),s("p",[s("em",[t._v("此外快照还有很多用法，可以之后开一章详叙")])]),t._v(" "),s("h2",{attrs:{id:"我应该用虚拟机嘛？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我应该用虚拟机嘛？"}},[t._v("#")]),t._v(" 我应该用虚拟机嘛？")]),t._v(" "),s("p",[t._v("在看了以上关于虚拟机的优点之后，如果你觉得其中的某一条优点适用于你，你就可以使用虚拟机了")]),t._v(" "),s("p",[t._v("除此之外，如果你是对于"),s("strong",[t._v("隐私和安全")]),t._v("有一定要求的用户，使用虚拟机运行各类国产毒瘤软件则是必须的XD；此外，还可以使用虚拟机运行一些见不得人的东西 "),s("s",[t._v("比如单独的浏览器 Profile")])]),t._v(" "),s("p",[t._v("在软件开发和测试领域，虚拟机也有着非常重要的作用，比如说类似于 Vagrant 的工具")])])}),[],!1,null,null,null);v.default=_.exports}}]);