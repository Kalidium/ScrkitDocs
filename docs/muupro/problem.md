---
title: 常见问题
---

<head>
  <meta charset="utf-8" />
  <meta name="description" content="MuuPro 官方教程，最全面的 MuuPro 中文参考文档。"/>
  <meta name="keywords" content="MuuPro,Genshin,原神辅助,原神外挂"/>
  <meta name="author" content="MuuPro,Genshin,原神辅助,原神外挂"/>
</head>

# 常见问题 🤔

***本章节主要处理 MuuPro 启动时遇到的问题***  

> 先确保杀毒软件已经全部关闭，确保防火墙处于关闭状态。  
> 先补全微软运行库 **「** [https://scrkit.com/uploads/Runtime](https://scrkit.com/uploads/Runtime.zip) **」**  
> 先补全 DirectX 库 **「** [https://scrkit.com/uploads/DirectX_Repair](https://scrkit.com/uploads/DirectX_Repair.zip) **」**  
> 先安装通用字体 **「** [https://scrkit.com/uploads/Fonts](https://scrkit.com/uploads/Fonts.zip) **」**  

> ProcessHack 工具  **「** [https://scrkit.com/uploads/ProcessHacker](https://scrkit.com/uploads/ProcessHacker.zip) **」**

<details><summary>Status 404 [lnvalid key]</summary>MuuPro 卡密不存在，请检查输入是否正确。</details>
<details><summary>Status 403 [Hardware mismatch]</summary>需要换绑，请联系管理员协助操作。</details>
<details><summary>Status 403 [All of your active licenses have been expired]</summary>MuuPro 卡密过期了，请检查输入是否为新购买的卡密。</details>
<details><summary>A critical error has been occured, the loader will shut down now. Status Code(Oxffffffff)<br/>Reason: None of the servers is available to connect. You can try to use a VPN.</summary>网络连接不稳定，建议开启热点/代理/加速器（择一选择即可） 代理节点选择欧服或者香港节点<br/>使用奇游加速器选择Apex→加速欧服→只勾选路由模式，然后刷新→智能连接<br/>
另外建议在执行该步操作之前先尝试<br/><b>I</b> 重启电脑<br/><b>II</b> 重新下载 PaimonPro 再次尝试注入</details>
<details><summary>Status 4294967295 [unable to install exploit driver]</summary>通常为 Intel 用户，AMD不应该出现这个问题。<br/>管理员运行 ProcessHack (下载地址在上面)<br/>点击 Processes 选项卡，搜索 iqvw64e，如有右键卸载它。<br/>点击 Services 选项卡，分别搜索 jhi_service 和 MEIx64，如有右键卸载它们。<br/><br/>示例：<br/><img src="https://scrkit.com/docs/paimonpro/processhacker_1.png" /><br/><img src="https://scrkit.com/docs/paimonpro/processhacker_2.png" /></details>
<details><summary>cheat on update</summary>由于星铁更新，MuuPro 处于更新阶段，通常在1~2天内。</details>
<details><summary>Status 502 [lnternal server error]</summary>MuuPro 卡密验证服务器出现问题，请等待群内通知。</details>