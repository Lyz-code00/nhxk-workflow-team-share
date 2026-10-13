window.PPP_BEHAVIOR = {
  receivableValues(data) {
    const fields = window.PPP_PRODUCT.fields.find(group => group.title === '应收账款信息').items;
    const values = {};
    for (const field of fields) {
      const raw = Object.hasOwn(data, field.label) ? data[field.label] : field.value;
      values[field.label] = raw !== undefined && raw !== null && raw !== '' && Number.isFinite(Number(raw)) ? Number(raw).toFixed(2) : '';
    }
    const collected = values['本年度累计已收款项'];
    const contract = values['本年度合同额'];
    const savedRatio = Object.hasOwn(data, '占本年度合同额') ? data['占本年度合同额'] : '';
    values['占本年度合同额'] = savedRatio !== '' && Number.isFinite(Number(savedRatio)) ? Number(savedRatio).toFixed(2) : collected !== '' && contract !== '' && Number(contract) !== 0 ? (Number(collected) / Number(contract) * 100).toFixed(2) : '';
    const due = values['运营期应收金额'];
    const received = values['运营期已收金额'];
    const savedUnreceived = Object.hasOwn(data, '运营期未收金额') ? data['运营期未收金额'] : '';
    values['运营期未收金额'] = savedUnreceived !== '' && Number.isFinite(Number(savedUnreceived)) ? Number(savedUnreceived).toFixed(2) : due !== '' && received !== '' ? (Number(due) - Number(received)).toFixed(2) : '';
    return values;
  },
  renderBeforeDocument(data, { readOnly = false } = {}) {
    const ui = window.PPP_UI;
    const section = window.PPP_PRODUCT.fields.find(group => group.title === '应收账款信息');
    const values = this.receivableValues(data);
    return `<details class="form-section monthly-receivable-section" open><summary><span>${ui.escape(section.title)}</span><small>系统自动带出 · ${readOnly ? '只读' : '可编辑'}</small></summary><div class="monthly-receivable-grid">${section.items.map((field, index) => `<div class="monthly-receivable-field ${index >= 4 ? 'monthly-operation-period' : ''}"><label for="monthly-receivable-${index}">${ui.escape(field.label)}</label><div class="monthly-receivable-control"><div class="monthly-receivable-value"><input id="monthly-receivable-${index}" type="number" step="0.01" data-field="${ui.escape(field.label)}" value="${ui.escape(values[field.label])}" placeholder="系统自动带出，可修改" ${readOnly ? 'readonly aria-readonly="true"' : ''}><span>${ui.escape(field.unit)}</span></div></div></div>`).join('')}</div></details>`;
  },
  validate(data) {
    if (!String(data['月份'] || '').trim()) return [];
    const match = String(data['月份'] || '').trim().match(/^([0-9]{4})年(0?[1-9]|1[0-2])月$/);
    if (!match) return ['月份请按XX年YY月填写，例如2026年09月'];
    data['月份'] = `${match[1]}年${match[2].padStart(2, '0')}月`;
    return [];
  },
  prepareRecord(item, context) {
    item.company ||= item.applicationInfo?.organization || '';
    if (context.submit) {
      item.submittedAt ||= context.savedAt;
      if (item.status === '已完成') item.flowNode = '—';
      else if (!item.flowNode || item.flowNode === '申请人') item.flowNode = '权属企业审核';
    } else if (!item.submittedAt) {
      item.flowNode = '申请人';
    }
    return item;
  }
};
