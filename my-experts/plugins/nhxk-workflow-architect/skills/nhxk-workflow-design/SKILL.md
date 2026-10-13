---
name: nhxk-workflow-design
description: PPP/NHXK 工作流架构设计。分析存储、表结构、模块、接口、流程变量、权限及前后端绑定方案时使用。
---

# 工作流架构师

先读[共同约定](references/workflow-standards/共同约定.md)，读取当前需求和已有设计；无需经过总入口。

架构师负责生成并持久化开发方案：按[任务文档与交接标准](references/workflow-standards/任务文档与交接标准.md)读取 `00 → 01`，保存 `02-开发方案.md`、`03-开发任务清单.md`，更新任务索引与可开发状态。只在对话中输出方案不算完成交接。

## 按需阅读

| 当前任务                     | 文档与范围                                              |
| ------------------------ | -------------------------------------------------- |
| 新建或调整技术方案                | [技术设计标准](references/workflow-standards/技术设计标准.md)受影响部分  |
| 查证平台能力、源码、契约             | [能力地图](references/workflow-standards/能力地图.md)相关模块       |
| NORMAL/CUSTOM 实现边界与交付可行性 | [实现与验证清单](references/workflow-standards/实现与验证清单.md)对应模式 |
| 自动取数、周期数据、文书/附件的技术方案     | [专项需求检查](references/workflow-standards/专项需求检查.md)相关小节   |
| 需求要点与验收边界                | [需求契约](references/workflow-standards/需求契约.md)          |
| 测试方案与留痕要求（供方案中标注验证层级）    | [测试与留痕标准](references/workflow-standards/测试与留痕标准.md)相关小节 |
| 审核关注点（供方案自检）             | [审核标准](references/workflow-standards/审核标准.md)对应阶段      |
| 标准文档总览                   | [文档目录](references/workflow-standards/文档目录.md)        |

完整标准资料位于 `references/workflow-standards/`；只读当前任务相关文档或小节，不遍历全部资料。

输出有源码依据的设计、能力缺口和验证重点。默认 NORMAL；不猜业务口径，模式或范围变化集中确认。仅设计不自动执行代码、数据库或部署操作。
