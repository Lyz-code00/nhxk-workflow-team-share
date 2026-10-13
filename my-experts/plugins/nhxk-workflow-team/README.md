# NHXK工作流交付团队（nhxk-workflow-team）

一个可分享的六人工作流交付团队：总调度率需求、架构、开发、测试、审核五个角色，按七阶段门控全流程推进 NHXK/PPP 低代码工作流交付。

## 类型

Team 型（多角色协作团队）

## 团队成员

| 成员                           | 名字        | 职责                                    |
| ---------------------------- | --------- | ------------------------------------- |
| nhxk-workflow-team-team-lead | 总调度 岑砚舟   | 主理人：编排七阶段 SOP、守 G1/G2 门控、路由缺陷闭环       |
| nhxk-workflow-analyst        | 需求分析师 苏澄  | 需求正向（原型五件套+需求文档，参照真实项目包）与反向核对         |
| nhxk-workflow-architect      | 架构师 梁砚    | NORMAL/CUSTOM 模式判定、开发方案与任务清单（用户审阅后定稿） |
| nhxk-workflow-developer      | 开发工程师 陈牧  | 按方案实施配置产物与代码、缺陷修复响应                   |
| nhxk-workflow-tester         | 测试工程师 林一苇 | E2E 测试、缺陷闭环复测、测试报告与验收报告               |
| nhxk-workflow-reviewer       | 审核员 顾之澜   | 全流程一致性审核                              |

## 全流程

Phase 0 任务定位 → 1 需求正向 → 2 架构 → ⛔G1 方案审阅门控 → 3 开发 → 4 需求反向核对 → 5 测试+缺陷内循环 → 6 审核 → ⛔G2 部署授权门控 → 收尾。单一环节问题可直调对应成员。

## 内置技能（6 个，自包含）

`skills/` 下：nhxk-workflow-requirements、nhxk-workflow-development、nhxk-workflow-design、nhxk-workflow-testing、nhxk-workflow-review、nhxk-workflow-orchestration（总调度编排知识库）；各 skill 随包携带 `references/workflow-standards/` 公共标准副本（10 份）。

## 使用示例

- 根据需求文档或业务描述启动一个工作流任务，按全流程推进并告诉我每个阶段的门控点。
- 这个任务只涉及某一环节（如测试/审核/需求核对），直接路由到对应角色处理，不跑全流程。
- 查看当前任务的阶段进度、门控状态、阻塞项与下一责任角色。

## 头像

头像已生成在 `avatars/` 目录下（团队头像 team.png + 六名成员头像）。如需替换：PNG/JPG，512×512，≤500KB。

## 安装

将专家包目录放到专家目录下：

```
~/.workbuddy/plugins/marketplaces/my-experts/plugins/nhxk-workflow-team/
```

然后运行注册命令使其可见：

```bash
python3 scripts/register_expert.py <expert-dir>
```

## 打包分享

```bash
zip -r nhxk-workflow-team.zip nhxk-workflow-team/
```
