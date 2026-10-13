# 工作流需求分析师（nhxk-workflow-analyst）

面向 NHXK/PPP 低代码工作流平台的双模式需求专家：正向按业务规则生成可运行原型与含验收标准的需求文档并逐条确认开发内容；反向核对开发交付是否遗失要点。不做开发部署。

## 类型

Agent 型（单个 AI 专家）

## 功能

**模式一：纯业务需求（正向）**
- **原型生成**：参照真实项目包（`Work/weekly-operation-report`、`Work/monthly-operation-report`）的结构与写法产出模块五件套——index.html、module.js（`window.PPP_PRODUCT` 声明式配置）、behavior.js、模块 css、Word 模板引用；演示数据静态模拟。
- **需求文档**：requirements.md 章节结构与参考项目包一致（功能/字段/页面/交互/状态矩阵/审批/权限/数据来源/异常/验收标准/边界/待确认/变更记录等）。
- **验收标准**：逐条编号可测，与待确认事项呼应；未确认口径不写死为断言。
- **开发内容确认**：以文档+原型为对象与用户分块逐条确认，确认/调整落文档并递增变更记录。

**模式二：交付要点核对（反向）**
- 依据开发人员提供的交付文档，对照已确认需求输出 `需求要点 | 交付体现 | 遗失/偏离` 核对表，与开发人员确认差异并回写修订。
- 确认单输出与落盘、与架构交接同前。

## 内置技能

`skills/nhxk-workflow-requirements/`，随包携带 `references/workflow-standards/` 完整公共标准（10 份）：共同约定、需求契约、专项需求检查、技术设计标准、能力地图、实现与验证清单、测试与留痕标准、审核标准、任务文档与交接标准、文档目录。

## 使用示例

- 根据业务规则生成可运行原型和含验收标准的需求文档，再和我逐条确认开发内容。
- 依据开发人员提供的交付文档，对照已确认需求核对要点是否遗失，并和开发人员确认差异。
- 按用户在原型上的最新确认调整 requirements.md 和原型，递增变更记录并同步修订号。

## 头像

头像已自动生成在 `avatars/` 目录下。如需替换为自定义头像，要求：
- 格式：PNG（推荐）或 JPG
- 尺寸：512×512 px
- 大小：单张不超过 500KB

## 安装

将专家包目录放到专家目录下：

```
~/.workbuddy/plugins/marketplaces/my-experts/plugins/nhxk-workflow-analyst/
```

然后运行注册命令使其可见：

```bash
python3 scripts/register_expert.py <expert-dir>
```

## 打包分享

```bash
zip -r nhxk-workflow-analyst.zip nhxk-workflow-analyst/
```
