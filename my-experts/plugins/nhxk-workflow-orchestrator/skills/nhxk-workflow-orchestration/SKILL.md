---
name: nhxk-workflow-orchestration
description: 总调度编排知识库。按任务文档与交接标准定位/创建任务目录与索引，读取共同约定确认授权边界；编排五个角色专家包（analyst/architect/developer/tester/reviewer）时的阶段推进依据。
---

# 总调度编排知识库

本 skill 仅供 nhxk-workflow-orchestrator（总调度）使用，存放**编排所需**的标准副本，不含任何角色专业知识（角色知识在各角色专家包内单一维护）。

## 按需阅读

| 场景 | 文档 |
|---|---|
| 任务定位、目录创建、编号、产物落盘、角色交接 | [任务文档与交接标准](references/workflow-standards/任务文档与交接标准.md) |
| 授权边界、默认模式、协作底线 | [共同约定](references/workflow-standards/共同约定.md) |
| 标准文档总览（判断某问题该路由给谁） | [文档目录](references/workflow-standards/文档目录.md) |

## 五角色专家包位置

`~/.workbuddy/plugins/marketplaces/my-experts/plugins/` 下：

- `nhxk-workflow-analyst`（需求 苏澄）、`nhxk-workflow-architect`（架构 梁砚）、`nhxk-workflow-developer`（开发 陈牧）、`nhxk-workflow-tester`（测试 林一苇）、`nhxk-workflow-reviewer`（审核 顾之澜）。

调度任一角色前：确认其 `agents/<角色>.md` 存在；spawn 子代理时在 prompt 首行注入"先完整阅读 <MD绝对路径> 并严格遵守其中全部规则"。角色包升级后本 skill 无需同步（零复制原则）。
