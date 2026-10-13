window.PPP_PRODUCT = {
  "id": "monthly",
  "name": "运营月报管理",
  "group": "运营管理",
  "sourceRef": "2.3.3",
  "kind": "form",
  "summary": "按月填报运营月报，记录工作完成情况、经营收费、问题应对与工作计划。",
  "recordVersion": "monthly-report-v2",
  "fields": [
    {
      "title": "应收账款信息",
      "items": [
        { "label": "本月已收款项", "type": "auto", "unit": "万元", "value": "320.00", "required": false, "readonly": false },
        { "label": "本年度累计已收款项", "type": "auto", "unit": "万元", "value": "2480.00", "required": false, "readonly": false },
        { "label": "本年度合同额", "type": "auto", "unit": "万元", "value": "3600.00", "required": false, "readonly": false },
        { "label": "占本年度合同额", "type": "auto", "unit": "%", "required": false, "readonly": false },
        { "label": "运营期应收金额", "type": "auto", "unit": "万元", "value": "12600.00", "required": false, "readonly": false },
        { "label": "运营期已收金额", "type": "auto", "unit": "万元", "value": "11800.00", "required": false, "readonly": false },
        { "label": "运营期未收金额", "type": "auto", "unit": "万元", "required": false, "readonly": false }
      ]
    },
    {
      "title": "月报信息",
      "items": [
        {
          "label": "项目名称",
          "type": "text",
          "required": true,
          "readonly": false
        },
        {
          "label": "月份",
          "type": "text",
          "required": true,
          "readonly": false
        },
        {
          "label": "运营月报",
          "type": "richtext",
          "required": true,
          "readonly": false
        },
        {
          "label": "附件",
          "type": "attachment",
          "required": false,
          "readonly": false
        }
      ]
    }
  ],
  "filters": [
    {
      "label": "月份",
      "field": "month",
      "source": "data.月份",
      "placeholder": "XX年YY月，如2026年09月"
    },
    {
      "label": "项目名称",
      "field": "projectName",
      "source": "projectName",
      "placeholder": "请输入项目名称"
    },
    {
      "label": "所属公司",
      "field": "company",
      "source": "company",
      "options": [
        "示例城投公司"
      ]
    },
    {
      "label": "申请人",
      "field": "applicant",
      "source": "owner",
      "placeholder": "请输入申请人"
    },
    {
      "label": "流程状态",
      "field": "status",
      "source": "status",
      "options": [
        "进行中",
        "已终止",
        "已完成",
        "已取消"
      ]
    }
  ],
  "listView": {
    "showRecordId": false,
    "showUpdatedAt": false,
    "toolbarAction": "refresh",
    "columns": [
      {
        "label": "项目名称",
        "source": "projectName"
      },
      {
        "label": "月份",
        "source": "data.月份"
      },
      {
        "label": "申请人",
        "source": "owner"
      },
      {
        "label": "提交时间",
        "source": "submittedAt"
      },
      {
        "label": "流程节点",
        "source": "flowNode",
        "format": "flowNode"
      }
    ]
  },
  "flow": [
    "填报",
    "权属企业审核",
    "城投公司审核",
    "归档"
  ],
  "states": [
    "进行中",
    "已终止",
    "已完成",
    "已取消"
  ],
  "attachments": [],
  "demoRecords": [
    {
      "id": "MONTHLY-2026-001",
      "status": "进行中",
      "owner": "林经办",
      "updatedAt": "2026-09-21 10:00",
      "projectName": "综合管廊PPP项目",
      "company": "示例城投公司",
      "submittedAt": "",
      "flowNode": "申请人",
      "data": {
        "月份": "2026年09月",
        "运营月报": "<h1><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>公司<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年度运营月报</h1>\n<p><br></p>\n<h2>一、2025年<u>&nbsp;&nbsp;</u>月份工作完成情况</h2>\n<h3>（一）重点工作完成情况。</h3>\n<h3>（二）项目经营指标及收费情况。</h3>\n<p>1、经营指标完成情况。本月营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元；计划指标为<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>%；本月营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计完成营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>万元的<u>&nbsp;&nbsp;&nbsp;</u>%。</p>\n<p>2、应收账款情况。本月已收<u>&nbsp;&nbsp;&nbsp;</u>万元，本年度累计收到<u>&nbsp;&nbsp;&nbsp;</u>万元，占本年度合同额<u>&nbsp;&nbsp;&nbsp;</u>%。自运营期起应收<u>&nbsp;&nbsp;&nbsp;</u>万元、已收<u>&nbsp;&nbsp;&nbsp;</u>万元、未收<u>&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>3、服务费审批情况。</p>\n<h3>（三）项目运营情况。</h3>\n<h3>（四）QHSE工作情况。</h3>\n<h3>（五）党建党风廉政建设工作情况。</h3>\n<h3>（六）其他工作情况。</h3>\n<h2>二、存在的主要问题及应对措施</h2>\n<h2>三、2025年<u>&nbsp;&nbsp;</u>月份工作计划</h2>\n<p>1.当月计划运营回款<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;2.…</p>\n<p><br></p>",
        "附件": "运营月报支撑材料.pdf"
      }
    },
    {
      "id": "MONTHLY-2026-002",
      "status": "进行中",
      "owner": "陈审核",
      "updatedAt": "2026-09-22 10:00",
      "projectName": "生态治理PPP项目",
      "company": "示例城投公司",
      "submittedAt": "2026-09-22 09:30",
      "flowNode": "权属企业审核",
      "data": {
        "月份": "2026年08月",
        "运营月报": "<h1><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>公司<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年度运营月报</h1>\n<p><br></p>\n<h2>一、2025年<u>&nbsp;&nbsp;</u>月份工作完成情况</h2>\n<h3>（一）重点工作完成情况。</h3>\n<h3>（二）项目经营指标及收费情况。</h3>\n<p>1、经营指标完成情况。本月营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元；计划指标为<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>%；本月营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计完成营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>万元的<u>&nbsp;&nbsp;&nbsp;</u>%。</p>\n<p>2、应收账款情况。本月已收<u>&nbsp;&nbsp;&nbsp;</u>万元，本年度累计收到<u>&nbsp;&nbsp;&nbsp;</u>万元，占本年度合同额<u>&nbsp;&nbsp;&nbsp;</u>%。自运营期起应收<u>&nbsp;&nbsp;&nbsp;</u>万元、已收<u>&nbsp;&nbsp;&nbsp;</u>万元、未收<u>&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>3、服务费审批情况。</p>\n<h3>（三）项目运营情况。</h3>\n<h3>（四）QHSE工作情况。</h3>\n<h3>（五）党建党风廉政建设工作情况。</h3>\n<h3>（六）其他工作情况。</h3>\n<h2>二、存在的主要问题及应对措施</h2>\n<h2>三、2025年<u>&nbsp;&nbsp;</u>月份工作计划</h2>\n<p>1.当月计划运营回款<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;2.…</p>\n<p><br></p>",
        "附件": "运营月报支撑材料.pdf"
      }
    },
    {
      "id": "MONTHLY-2026-003",
      "status": "已完成",
      "owner": "林经办",
      "updatedAt": "2026-09-23 10:00",
      "projectName": "城市道路提升PPP项目",
      "company": "示例城投公司",
      "submittedAt": "2026-09-20 14:20",
      "flowNode": "—",
      "data": {
        "月份": "2026年07月",
        "运营月报": "<h1><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>公司<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年度运营月报</h1>\n<p><br></p>\n<h2>一、2025年<u>&nbsp;&nbsp;</u>月份工作完成情况</h2>\n<h3>（一）重点工作完成情况。</h3>\n<h3>（二）项目经营指标及收费情况。</h3>\n<p>1、经营指标完成情况。本月营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元；计划指标为<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>%；本月营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计完成营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>万元的<u>&nbsp;&nbsp;&nbsp;</u>%。</p>\n<p>2、应收账款情况。本月已收<u>&nbsp;&nbsp;&nbsp;</u>万元，本年度累计收到<u>&nbsp;&nbsp;&nbsp;</u>万元，占本年度合同额<u>&nbsp;&nbsp;&nbsp;</u>%。自运营期起应收<u>&nbsp;&nbsp;&nbsp;</u>万元、已收<u>&nbsp;&nbsp;&nbsp;</u>万元、未收<u>&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>3、服务费审批情况。</p>\n<h3>（三）项目运营情况。</h3>\n<h3>（四）QHSE工作情况。</h3>\n<h3>（五）党建党风廉政建设工作情况。</h3>\n<h3>（六）其他工作情况。</h3>\n<h2>二、存在的主要问题及应对措施</h2>\n<h2>三、2025年<u>&nbsp;&nbsp;</u>月份工作计划</h2>\n<p>1.当月计划运营回款<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;2.…</p>\n<p><br></p>",
        "附件": "运营月报支撑材料.pdf"
      }
    },
    {
      "id": "MONTHLY-2026-004",
      "status": "已终止",
      "owner": "陈审核",
      "updatedAt": "2026-09-24 11:10",
      "projectName": "滨水环境治理PPP项目",
      "company": "示例城投公司",
      "submittedAt": "2026-09-23 15:40",
      "flowNode": "城投公司审核",
      "data": {
        "月份": "2026年06月",
        "运营月报": "<h1><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>公司<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年度运营月报</h1>\n<p><br></p>\n<h2>一、2025年<u>&nbsp;&nbsp;</u>月份工作完成情况</h2>\n<h3>（一）重点工作完成情况。</h3>\n<h3>（二）项目经营指标及收费情况。</h3>\n<p>1、经营指标完成情况。本月营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元；计划指标为<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>%；本月营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计完成营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>万元的<u>&nbsp;&nbsp;&nbsp;</u>%。</p>\n<p>2、应收账款情况。本月已收<u>&nbsp;&nbsp;&nbsp;</u>万元，本年度累计收到<u>&nbsp;&nbsp;&nbsp;</u>万元，占本年度合同额<u>&nbsp;&nbsp;&nbsp;</u>%。自运营期起应收<u>&nbsp;&nbsp;&nbsp;</u>万元、已收<u>&nbsp;&nbsp;&nbsp;</u>万元、未收<u>&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>3、服务费审批情况。</p>\n<h3>（三）项目运营情况。</h3>\n<h3>（四）QHSE工作情况。</h3>\n<h3>（五）党建党风廉政建设工作情况。</h3>\n<h3>（六）其他工作情况。</h3>\n<h2>二、存在的主要问题及应对措施</h2>\n<h2>三、2025年<u>&nbsp;&nbsp;</u>月份工作计划</h2>\n<p>1.当月计划运营回款<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;2.…</p>\n<p><br></p>",
        "附件": "运营月报支撑材料.pdf"
      }
    },
    {
      "id": "MONTHLY-2026-005",
      "status": "已取消",
      "owner": "林经办",
      "updatedAt": "2026-09-25 09:20",
      "projectName": "公共停车场PPP项目",
      "company": "示例城投公司",
      "submittedAt": "2026-09-24 10:15",
      "flowNode": "权属企业审核",
      "data": {
        "月份": "2026年05月",
        "运营月报": "<h1><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>公司<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年度运营月报</h1>\n<p><br></p>\n<h2>一、2025年<u>&nbsp;&nbsp;</u>月份工作完成情况</h2>\n<h3>（一）重点工作完成情况。</h3>\n<h3>（二）项目经营指标及收费情况。</h3>\n<p>1、经营指标完成情况。本月营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元；计划指标为<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>%；本月营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计完成营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>万元的<u>&nbsp;&nbsp;&nbsp;</u>%。</p>\n<p>2、应收账款情况。本月已收<u>&nbsp;&nbsp;&nbsp;</u>万元，本年度累计收到<u>&nbsp;&nbsp;&nbsp;</u>万元，占本年度合同额<u>&nbsp;&nbsp;&nbsp;</u>%。自运营期起应收<u>&nbsp;&nbsp;&nbsp;</u>万元、已收<u>&nbsp;&nbsp;&nbsp;</u>万元、未收<u>&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>3、服务费审批情况。</p>\n<h3>（三）项目运营情况。</h3>\n<h3>（四）QHSE工作情况。</h3>\n<h3>（五）党建党风廉政建设工作情况。</h3>\n<h3>（六）其他工作情况。</h3>\n<h2>二、存在的主要问题及应对措施</h2>\n<h2>三、2025年<u>&nbsp;&nbsp;</u>月份工作计划</h2>\n<p>1.当月计划运营回款<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;2.…</p>\n<p><br></p>",
        "附件": "运营月报支撑材料.pdf"
      }
    }
  ],
  "features": {
    "thresholdRouting": false,
    "meetingPackage": false,
    "relatedContracts": false,
    "reminderDate": false,
    "editableDesign": true,
    "offline": true
  },
  "direct": false,
  "manual": false,
  "documentForm": {
    "sectionTitle": "月报信息",
    "periodLabel": "月份",
    "bodyLabel": "运营月报",
    "periodPlaceholder": "XX年YY月，如2026年09月",
    "periodPattern": "[0-9]{4}年(0?[1-9]|1[0-2])月",
    "templateFile": "monthly-operation-report-template.docx",
    "templateName": "公司运营月报模板.docx",
    "templatePath": "PPP/PPP/operations-management/monthly-operation-report/monthly-operation-report-template.docx",
    "developerNotesTitle": "应收账款取数逻辑",
    "developerNotes": [
      "“应收账款信息”中的七项数值由系统按关联项目和所选月份自动取数或计算，新增、编辑页面允许修改，查看页面只读。",
      "1. 本月已收款项、本年度累计已收款项：从费用支付登记模块读取已确认收款数据，分别汇总所选月份的收款金额，以及该年度年初至所选月份末的累计收款金额，自动带入对应字段。",
      "2. 本年度合同额、占本年度合同额：从合同台账管理模块获取该项目对应年度的合同额度；比例按“本年度累计已收款项 ÷ 本年度合同额 × 100%”计算后自动带入。",
      "3. 运营期应收金额、运营期已收金额：分别从政府付款申请模块和费用支付登记模块获取并汇总，统计期间为项目运营期开始至所选月份末，自动带入对应字段。",
      "4. 运营期未收金额：按“运营期应收金额 − 运营期已收金额”计算后自动带入。金额统一按“万元”展示，比例按“%”展示。"
    ],
    "templateHtml": "<h1><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>公司<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年度运营月报</h1>\n<p><br></p>\n<h2>一、2025年<u>&nbsp;&nbsp;</u>月份工作完成情况</h2>\n<h3>（一）重点工作完成情况。</h3>\n<h3>（二）项目经营指标及收费情况。</h3>\n<p>1、经营指标完成情况。本月营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计营业收入<u>&nbsp;&nbsp;&nbsp;</u>万元；计划指标为<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>%；本月营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，本年累计完成营业利润<u>&nbsp;&nbsp;&nbsp;</u>万元，完成年度计划<u>&nbsp;&nbsp;&nbsp;</u>万元的<u>&nbsp;&nbsp;&nbsp;</u>%。</p>\n<p>2、应收账款情况。本月已收<u>&nbsp;&nbsp;&nbsp;</u>万元，本年度累计收到<u>&nbsp;&nbsp;&nbsp;</u>万元，占本年度合同额<u>&nbsp;&nbsp;&nbsp;</u>%。自运营期起应收<u>&nbsp;&nbsp;&nbsp;</u>万元、已收<u>&nbsp;&nbsp;&nbsp;</u>万元、未收<u>&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>3、服务费审批情况。</p>\n<h3>（三）项目运营情况。</h3>\n<h3>（四）QHSE工作情况。</h3>\n<h3>（五）党建党风廉政建设工作情况。</h3>\n<h3>（六）其他工作情况。</h3>\n<h2>二、存在的主要问题及应对措施</h2>\n<h2>三、2025年<u>&nbsp;&nbsp;</u>月份工作计划</h2>\n<p>1.当月计划运营回款<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>万元。</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;2.…</p>\n<p><br></p>",
    "alwaysProjectName": true,
    "attachmentsRequired": false,
    "applicationInfoRequired": false
  }
};
