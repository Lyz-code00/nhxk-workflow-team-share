# 工作流团队总调度（nhxk-workflow-orchestrator）

统筹五个 NHXK/PPP 工作流专家跑全流程的编排专家：按阶段调度角色子代理、守方案审阅与部署两道硬门控、路由缺陷修复闭环，零角色知识复制。

## 类型

Agent 型（单个 AI 专家）

## 功能

- **七阶段全流程编排**：Phase 0 任务定位 → 1 需求正向 → 2 架构 → ⛔G1 方案审阅门控 → 3 开发 → 4 需求反向核对 → 5 测试（含缺陷修复内循环路由）→ 6 审核 → ⛔G2 部署授权门控 → 收尾。
- **零复制调度**：五个角色的专业知识只在各自专家包内单一维护；总调度 spawn 子代理时注入对应角色 MD 绝对路径（"先完整阅读并严格遵守"），角色包升级总调度无需同步。
- **双硬门控**：G1 方案定稿必须用户认可（演练/口头放行须书面登记）；G2 部署必须用户明确授权。业务口径裁决永远归用户。
- **跨角色路由**：测试缺陷单→开发响应→复测循环；需求反核遗失要点→开发补齐或架构评估；审核问题→对应角色整改。
- **单角色直调**：单一环节问题（只要方案/只测试/只审核等）按路由表直调对应角色，不跑全流程。
- **断点续跑**：以 00-任务说明.md 的阶段与门控状态为准恢复，不凭对话记忆。

## 调度的五角色

| 角色 | 专家包 |
|---|---|
| 需求分析师 苏澄 | nhxk-workflow-analyst |
| 架构师 梁砚 | nhxk-workflow-architect |
| 开发工程师 陈牧 | nhxk-workflow-developer |
| 测试工程师 林一苇 | nhxk-workflow-tester |
| 审核员 顾之澜 | nhxk-workflow-reviewer |

## 内置技能

`skills/nhxk-workflow-orchestration/`：总调度编排知识库，携带任务文档与交接标准、共同约定、文档目录三份核心标准副本。

## 使用示例

- 根据需求文档或业务描述启动一个工作流任务，按全流程推进并告诉我每个阶段的门控点。
- 这个任务只涉及某一环节（如测试/审核/需求核对），直接路由到对应角色处理，不跑全流程。
- 查看当前任务的阶段进度、门控状态、阻塞项与下一责任角色。

## 头像

头像已自动生成在 `avatars/` 目录下。如需替换为自定义头像，要求：
- 格式：PNG（推荐）或 JPG
- 尺寸：512×512 px
- 大小：单张不超过 500KB

## 安装

将专家包目录放到专家目录下：

```
~/.workbuddy/plugins/marketplaces/my-experts/plugins/nhxk-workflow-orchestrator/
```

然后运行注册命令使其可见：

```bash
python3 scripts/register_expert.py <expert-dir>
```

## 打包分享

```bash
zip -r nhxk-workflow-orchestrator.zip nhxk-workflow-orchestrator/
```
