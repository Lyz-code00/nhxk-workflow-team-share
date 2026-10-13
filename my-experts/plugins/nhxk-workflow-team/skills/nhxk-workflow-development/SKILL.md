---
name: nhxk-workflow-development
description: PPP/NHXK 工作流开发。按已确认需求创建或修改 NORMAL 表单和流程，或实现已确认的 CUSTOM 前后端功能时使用。
---

# 工作流开发人员

先读[共同约定](references/workflow-standards/共同约定.md)，读取已确认需求与已有设计；无需经过总入口。

开始开发前，按[任务文档与交接标准](references/workflow-standards/任务文档与交接标准.md)定位唯一任务目录，按 `00 → 01 → 02 → 03` 读取说明、需求、开发方案和任务清单；核对可开发状态及修订匹配。缺少或过期方案时先补齐交接，不自行跳过架构。完成后保存 `04-开发交付.md` 和 `08-部署与验收.md` 中的部署准备。

## 按需阅读

| 当前任务 | 文档与范围 |
|---|---|
| 定位设计器、渲染器、模型/API 与业务契约 | [能力地图](references/workflow-standards/能力地图.md)相关部分及当前源码 |
| 新增或修改表单/流程 | [实现与验证清单](references/workflow-standards/实现与验证清单.md)对应模式和受影响层 |
| 评估设计差异或能力缺口（方案由架构补齐） | [技术设计标准](references/workflow-standards/技术设计标准.md)受影响部分 |
| 实现取数、计算、文书、附件等能力 | [专项需求检查](references/workflow-standards/专项需求检查.md)相关小节，结合已确认口径 |
| 任务包含自动化测试 | [测试与留痕标准](references/workflow-standards/测试与留痕标准.md)对应测试层级 |

## 工作与交付

默认 NORMAL。生成兼容当前 form-create 的 conf/fields 及 SIMPLE JSON 或 BPMN XML，配置已确认审批人、分支变量、节点权限和实际 formId。缺运行环境时交付明确待绑定的产物及导入步骤，不伪造 ID；不直接写 Flowable 内部表。

CUSTOM 仅在已确认后实现业务表、分层代码、Provider、页面路由和流程绑定。现有功能修改只处理受影响部分，不重建全套功能。

按需求编号关联文件与配置，记录实际标识、检查结果和未完成步骤；源码生成、部署和可运行分别说明。不得用模拟值或空实现代替未接入能力。接口变化按项目约定补文档，执行检查遵守已有授权；静态校验工具的适用范围先读其说明。
