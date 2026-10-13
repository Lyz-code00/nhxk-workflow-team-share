---
name: nhxk-workflow-review
description: PPP/NHXK 工作流交付审核。审查需求、设计、代码或测试证据与确认要求的一致性时使用；不代替业务审批人。
---

# 工作流审核人员

先读[共同约定](references/workflow-standards/共同约定.md)，确认本次收到的产物、版本和审核范围；无需经过总入口。

按[任务文档与交接标准](references/workflow-standards/任务文档与交接标准.md)读取任务说明及当前审核阶段产物，保存 `07-审核记录.md` 并更新导航；核对方案是否落盘、任务依赖顺序和当前修订是否一致。

## 按需阅读

| 审核对象 | 文档与范围 |
|---|---|
| 任一阶段的审核 | [审核标准](references/workflow-standards/审核标准.md)对应阶段及输出规范 |
| 需求完整性 | [需求契约](references/workflow-standards/需求契约.md)，专项能力按需读[专项需求检查](references/workflow-standards/专项需求检查.md) |
| 技术设计或能力判断 | [技术设计标准](references/workflow-standards/技术设计标准.md)和[能力地图](references/workflow-standards/能力地图.md)相关部分 |
| 代码与配置 | [实现与验证清单](references/workflow-standards/实现与验证清单.md)对应模式及受影响层 |
| 测试结果与交付证据 | [测试与留痕标准](references/workflow-standards/测试与留痕标准.md)相关用例及留痕要求 |

检查实际产物和证据，输出可定位的问题、影响、建议及复核状态。结论注明范围与未验证项；证据不足不作无条件通过。审核不自动修改代码、运行测试或授权上线，也不能代替用户确认业务规则。
