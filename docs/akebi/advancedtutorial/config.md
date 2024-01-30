---
title: 配置文件
---

# 配置文件

<head>
  <meta charset="utf-8" />
  <meta name="description" content="Akebi 官方教程(原Akebi-GC/Acrepi)，最全面的 Akebi 中文参考文档。"/>
  <meta name="keywords" content="Akebi,Akebi-GC,Akebi教程"/>
  <meta name="author" content="Akebi,Akebi-GC,Acrepi"/>
</head>

:::danger
**`.svg`** 文件记录了旅行者的 `UID` 和 `卡密`，所以请不要将 **`.svg`** 随便发给别人！
:::

> 使用 Akebi 时，你的游戏路径会被记录在 **`.bin`** 中，你所勾选的功能和所做的调整将会被实时记录在 **`.svg`** 中。

```json title=".bin"
[GenshinImpact]
// 原神的运行路径
Path = D:\Program Files\Genshin Impact\Genshin Impact Game\YuanShen.exe
```

```json title=".svg"
{
    "current_profile": "default",
    "profiles": {
        "default": {
            "Auth": {
                // 记录你所输入的卡密，可以在此处直接更换购买的卡密。
                "licenseKey": "AKEBI-1Day-FULL-33IC4-AOA00-W38FQ-KSN4E-2HBRL-IL"
            },
            "General": {
                "CurrentModule": "Player",
		// Akebi Gui界面字体大小
                "FontSize": 24
            },
            "Settings": {
                "Language": {
		    // 语言设置
                    "Language": "chinese_simplified"
                }
            }
        }
    },
    "shared": {
        "InteractiveMap": {
            // 上一次使用 Akebi 旅行者的 UID
            "LastUserID": 221144272
        },
        "PatternScanner": {
            "m_CheckSumTimestamp": {
                "UnityPlayer.dll": 133318033221562079,
                "UserAssembly.dll": 133318033204411420
            }
        }
    }
}
```