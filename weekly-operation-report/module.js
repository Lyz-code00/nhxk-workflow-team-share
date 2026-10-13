window.PPP_PRODUCT = {
  "id": "weekly",
  "name": "运营周报管理",
  "group": "运营管理",
  "sourceRef": "2.3.2",
  "kind": "form",
  "summary": "按时间区间填报项目周报，记录运营回款、项目运营情况及下周工作重点。",
  "recordVersion": "weekly-report-v3",
  "developerNote": "“项目运营回款”文本框首句默认显示“1.本周运营回款___万元。”；系统根据所选时间区间，自动汇总费用收款登记中对应时间段的收款金额，并回填至首句中的金额位置。",
  "fields": [
    {
      "title": "周报信息",
      "items": [
        {
          "label": "项目标题",
          "type": "text",
          "unit": "",
          "options": [],
          "columns": [],
          "required": true,
          "readonly": false
        },
        {
          "label": "时间区间",
          "type": "date-range",
          "unit": "",
          "options": [],
          "columns": [],
          "required": true,
          "readonly": false
        },
        {
          "label": "项目运营回款",
          "type": "textarea",
          "unit": "",
          "value": "1.本周运营回款___万元。",
          "options": [],
          "columns": [],
          "required": true,
          "readonly": false
        },
        {
          "label": "项目运营情况",
          "type": "textarea",
          "unit": "",
          "options": [],
          "columns": [],
          "required": true,
          "readonly": false
        },
        {
          "label": "下周工作重点",
          "type": "textarea",
          "unit": "",
          "options": [],
          "columns": [],
          "required": true,
          "readonly": false
        },
        {
          "label": "附件",
          "type": "attachment",
          "unit": "",
          "options": [],
          "columns": [],
          "required": false,
          "readonly": false
        }
      ]
    }
  ],
  "filters": [
    {
      "label": "时间区间",
      "field": "period",
      "source": "data.时间区间",
      "placeholder": "请输入日期区间"
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
  "listColumns": [
    "项目名称",
    "时间区间",
    "本周运营回款"
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
        "label": "时间区间",
        "source": "data.时间区间",
        "format": "dateRange"
      },
      {
        "label": "本周运营回款",
        "source": "data.项目运营回款",
        "format": "amountWan"
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
    "部门负责人审核",
    "申请人确认",
    "归档"
  ],
  "flowAudit": {
    "title": "部门负责人审核",
    "description": "审核运营周报内容"
  },
  "flowDescription": "运营周报提交后，由部门负责人审核，再由申请人确认。",
  "states": [
    "进行中",
    "已终止",
    "已完成",
    "已取消"
  ],
  "attachments": [],
  "demoRecords": [
    {
      "id": "WEEKLY-2026-001",
      "status": "进行中",
      "owner": "林经办",
      "updatedAt": "2026-09-21 10:00",
      "projectName": "综合管廊PPP项目",
      "company": "示例城投公司",
      "submittedAt": "",
      "flowNode": "申请人",
      "data": {
        "项目标题": "综合管廊项目运营周报",
        "时间区间": "2026-09-14 到 2026-09-20",
        "项目运营回款": "1.本周运营回款120.00万元。",
        "项目运营情况": "本周项目运行平稳，完成例行巡检与设备维护。",
        "下周工作重点": "推进专项检查，跟进待办整改事项。",
        "附件": ""
      }
    },
    {
      "id": "WEEKLY-2026-002",
      "status": "进行中",
      "owner": "陈审核",
      "updatedAt": "2026-09-22 10:00",
      "projectName": "生态治理PPP项目",
      "company": "示例城投公司",
      "submittedAt": "2026-09-22 09:30",
      "flowNode": "部门负责人审核",
      "data": {
        "项目标题": "生态治理项目运营周报",
        "时间区间": "2026-09-07 到 2026-09-13",
        "项目运营回款": "1.本周运营回款85.00万元。",
        "项目运营情况": "完成水质监测及沿线设施检查。",
        "下周工作重点": "开展月度运行分析。",
        "附件": ""
      }
    },
    {
      "id": "WEEKLY-2026-003",
      "status": "已完成",
      "owner": "林经办",
      "updatedAt": "2026-09-23 10:00",
      "projectName": "城市道路提升PPP项目",
      "company": "示例城投公司",
      "submittedAt": "2026-09-20 14:20",
      "flowNode": "—",
      "data": {
        "项目标题": "城市道路提升项目运营周报",
        "时间区间": "2026-08-31 到 2026-09-06",
        "项目运营回款": "1.本周运营回款92.50万元。",
        "项目运营情况": "道路设施运行正常，完成路面和照明巡检。",
        "下周工作重点": "完成交通设施养护及隐患复查。",
        "附件": ""
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
  "manual": false
};
