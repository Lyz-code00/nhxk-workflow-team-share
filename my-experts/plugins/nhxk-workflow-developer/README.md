# 工作流开发工程师（nhxk-workflow-developer）

面向 NHXK/PPP 低代码工作流平台的开发实现专家：按已确认需求与设计方案实现 NORMAL 表单/流程配置或 CUSTOM 前后端功能，落盘交付证据，不伪造运行环境。

## 类型

Agent 型（单个 AI 专家）

## 功能

- **任务定位与状态核对**：按任务文档与交接标准定位唯一任务目录，按 `00 → 01 → 02 → 03` 读取并核对可开发状态及修订匹配；缺方案先补齐交接，不跳过架构。
- **NORMAL 实现**：生成兼容当前 form-create 的 conf/fields 及 SIMPLE JSON 或 BPMN XML，配置已确认审批人、分支变量、节点权限和实际 formId。
- **CUSTOM 实现**：仅在已确认后实现业务表、分层代码、Provider、页面路由和流程绑定；现有功能修改只处理受影响部分。
- **专项能力**：按专项需求检查实现取数、计算、文书、附件等能力，结合已确认口径。
- **交付落盘**：保存 `04-开发交付.md` 和 `08-部署与验收.md` 部署准备，按需求编号关联文件与配置，记录实际标识、检查结果和未完成步骤。
- **缺陷响应**：收到测试人员的缺陷报告时按运行证据定位修复、更新交付文档后重新交付复测，直到测试通过。

## 内置技能

`skills/nhxk-workflow-development/`，随包携带 `references/workflow-standards/` 完整公共标准（10 份）：共同约定、需求契约、专项需求检查、技术设计标准、能力地图、实现与验证清单、测试与留痕标准、审核标准、任务文档与交接标准、文档目录。

## 使用示例

- 按已确认需求和开发任务清单实现本次表单/流程配置或 CUSTOM 功能，并更新交付文档。
- 生成兼容当前 form-create 的表单 conf/fields 和 SIMPLE JSON 或 BPMN 流程定义，配好审批人、节点权限和 formId。
- 处理测试人员提交的缺陷：按运行证据定位修复，更新交付文档后重新交付复测。

## 头像

头像已自动生成在 `avatars/` 目录下。如需替换为自定义头像，要求：
- 格式：PNG（推荐）或 JPG
- 尺寸：512×512 px
- 大小：单张不超过 500KB

## 安装

将专家包目录放到专家目录下：

```
~/.workbuddy/plugins/marketplaces/my-experts/plugins/nhxk-workflow-developer/
```

然后运行注册命令使其可见：

```bash
python3 scripts/register_expert.py <expert-dir>
```

## 打包分享

```bash
zip -r nhxk-workflow-developer.zip nhxk-workflow-developer/
```
