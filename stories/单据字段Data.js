const json = [
  {
    "parentKey": null,
    "title": "友报账报销单",
    "key": "G001ZM0000BILLTYPE000000000000000005",
    "isLeaf": false,
    "infoKey": "",
    "children": [
      {
        "parentKey": "fier_bxd",
        "title": "补贴",
        "key": "G001ZM0000BASE000DEF00000ATT00000002",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000002",
          "tableName": "",
          "propertyName": "subsidy",
          "displayName": "补贴",
          "columnName": "subsidy",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 20,
          "dataType": 11,
          "dataTypeInfo": "",
          "refEntity": "G001ZM0000BILLTYPE000000000000000011",
          "refEntityCode": "",
          "nullable": true,
          "defaultvalue": "",
          "hidden": false
        },
        "code": "subsidy",
        "name": "补贴"
      },
      {
        "parentKey": "fier_bxd",
        "title": "单据类型主键",
        "key": "G001ZM0000BASE000DEF00000ATT00000004",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000004",
          "tableName": null,
          "propertyName": "djlxpk",
          "displayName": "单据类型主键",
          "columnName": "djlxpk",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "djlxpk",
        "name": "单据类型主键"
      },
      {
        "parentKey": "fier_bxd",
        "title": "是否支持分摊",
        "key": "G001ZM0000BASE000DEF00000ATT00000005",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000005",
          "tableName": null,
          "propertyName": "costShared",
          "displayName": "是否支持分摊",
          "columnName": "costShared",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 7,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "costShared",
        "name": "是否支持分摊"
      },
      {
        "parentKey": "fier_bxd",
        "title": "关联申请单情景标签",
        "key": "G001ZM0000BASE000DEF00000ATT00000006",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000006",
          "tableName": null,
          "propertyName": "requisition",
          "displayName": "关联申请单情景标签",
          "columnName": "requisition",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "requisition",
        "name": "关联申请单情景标签"
      },
      {
        "parentKey": "fier_bxd",
        "title": "关联申请单PK",
        "key": "G001ZM0000BASE000DEF00000ATT00000007",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000007",
          "tableName": null,
          "propertyName": "requisitionKey",
          "displayName": "关联申请单PK",
          "columnName": "requisitionKey",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "requisitionKey",
        "name": "关联申请单PK"
      },
      {
        "parentKey": "fier_bxd",
        "title": "是否支持补贴",
        "key": "G001ZM0000BASE000DEF00000ATT00000008",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000008",
          "tableName": null,
          "propertyName": "allowance",
          "displayName": "是否支持补贴",
          "columnName": "allowance",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 7,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "allowance",
        "name": "是否支持补贴"
      },
      {
        "parentKey": "fier_bxd",
        "title": "报账日期",
        "key": "G001ZM0000BASE000DEF00000ATT00000009",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000009",
          "tableName": null,
          "propertyName": "expenseDate",
          "displayName": "报账日期",
          "columnName": "expenseDate",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 2,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "expenseDate",
        "name": "报账日期"
      },
      {
        "parentKey": "fier_bxd",
        "title": "报账单PK",
        "key": "G001ZM0000BASE000DEF00000ATT00000010",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000010",
          "tableName": null,
          "propertyName": "expensePk",
          "displayName": "报账单PK",
          "columnName": "expensePk",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "expensePk",
        "name": "报账单PK"
      },
      {
        "parentKey": "fier_bxd",
        "title": "对应NC报账单PK",
        "key": "G001ZM0000BASE000DEF00000ATT00000011",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000011",
          "tableName": null,
          "propertyName": "billPk",
          "displayName": "对应NC报账单PK",
          "columnName": "billPk",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "billPk",
        "name": "对应NC报账单PK"
      },
      {
        "parentKey": "fier_bxd",
        "title": "单据状态",
        "key": "G001ZM0000BASE000DEF00000ATT00000012",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000012",
          "tableName": null,
          "propertyName": "billStatus",
          "displayName": "单据状态",
          "columnName": "billStatus",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 1,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "billStatus",
        "name": "单据状态"
      },
      {
        "parentKey": "fier_bxd",
        "title": "项目参照",
        "key": "G001ZM0000BASE000DEF00000ATT00000013",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000013",
          "tableName": null,
          "propertyName": "zdyhead",
          "displayName": "项目参照",
          "columnName": "zdyhead",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "zdyhead",
        "name": "项目参照"
      },
      {
        "parentKey": "fier_bxd",
        "title": "项目参照PK",
        "key": "G001ZM0000BASE000DEF00000ATT00000014",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000014",
          "tableName": null,
          "propertyName": "zdyhead_pk",
          "displayName": "项目参照PK",
          "columnName": "zdyhead_pk",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "zdyhead_pk",
        "name": "项目参照PK"
      },
      {
        "parentKey": "fier_bxd",
        "title": "项目参照NAME",
        "key": "G001ZM0000BASE000DEF00000ATT00000015",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000015",
          "tableName": null,
          "propertyName": "zdyhead_value",
          "displayName": "项目参照NAME",
          "columnName": "zdyhead_value",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "zdyhead_value",
        "name": "项目参照NAME"
      },
      {
        "parentKey": "fier_bxd",
        "title": "单据类型名称",
        "key": "G001ZM0000BASE000DEF00000ATT00000016",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000016",
          "tableName": null,
          "propertyName": "billtypeName",
          "displayName": "单据类型名称",
          "columnName": "billtypeName",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "billtypeName",
        "name": "单据类型名称"
      },
      {
        "parentKey": "fier_bxd",
        "title": "单据类型名称",
        "key": "G001ZM0000BASE000DEF00000ATT00000017",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000017",
          "tableName": null,
          "propertyName": "billtypeCode",
          "displayName": "单据类型名称",
          "columnName": "billtypeCode",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "billtypeCode",
        "name": "单据类型名称"
      },
      {
        "parentKey": "fier_bxd",
        "title": "个人银行账户",
        "key": "G001ZM0000BASE000DEF00000ATT00000018",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000018",
          "tableName": null,
          "propertyName": "bankAccount",
          "displayName": "个人银行账户",
          "columnName": "bankAccount",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "bankAccount",
        "name": "个人银行账户"
      },
      {
        "parentKey": "fier_bxd",
        "title": "个人银行账户PK",
        "key": "G001ZM0000BASE000DEF00000ATT00000019",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000019",
          "tableName": null,
          "propertyName": "bankAccount_pk",
          "displayName": "个人银行账户PK",
          "columnName": "bankAccount_pk",
          "maxLength": 100,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "bankAccount_pk",
        "name": "个人银行账户PK"
      },
      {
        "parentKey": "fier_bxd",
        "title": "个人银行账户NAME",
        "key": "G001ZM0000BASE000DEF00000ATT00000020",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000020",
          "tableName": null,
          "propertyName": "bankAccount_value",
          "displayName": "个人银行账户NAME",
          "columnName": "bankAccount_value",
          "maxLength": 150,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "bankAccount_value",
        "name": "个人银行账户NAME"
      },
      {
        "parentKey": "fier_bxd",
        "title": "个人银行账号",
        "key": "G001ZM0000BASE000DEF00000ATT00000021",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000021",
          "tableName": null,
          "propertyName": "bankAccountKey",
          "displayName": "个人银行账号",
          "columnName": "bankAccountKey",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "bankAccountKey",
        "name": "个人银行账号"
      },
      {
        "parentKey": "fier_bxd",
        "title": "个人银行账号PK",
        "key": "G001ZM0000BASE000DEF00000ATT00000022",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000022",
          "tableName": null,
          "propertyName": "bankAccountKey_pk",
          "displayName": "个人银行账号PK",
          "columnName": "bankAccountKey_pk",
          "maxLength": 100,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "bankAccountKey_pk",
        "name": "个人银行账号PK"
      },
      {
        "parentKey": "fier_bxd",
        "title": "个人银行账号NAME",
        "key": "G001ZM0000BASE000DEF00000ATT00000023",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000023",
          "tableName": null,
          "propertyName": "bankAccountKey_value",
          "displayName": "个人银行账号NAME",
          "columnName": "bankAccountKey_value",
          "maxLength": 150,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "bankAccountKey_value",
        "name": "个人银行账号NAME"
      },
      {
        "parentKey": "fier_bxd",
        "title": "处理时间",
        "key": "G001ZM0000BASE000DEF00000ATT00000024",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000024",
          "tableName": null,
          "propertyName": "dealdate",
          "displayName": "处理时间",
          "columnName": "dealdate",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "dealdate",
        "name": "处理时间"
      },
      {
        "parentKey": "fier_bxd",
        "title": "单据事由",
        "key": "G001ZM0000BASE000DEF00000ATT00000025",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000025",
          "tableName": null,
          "propertyName": "descript",
          "displayName": "单据事由",
          "columnName": "descript",
          "maxLength": 500,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "descript",
        "name": "单据事由"
      },
      {
        "parentKey": "fier_bxd",
        "title": "收支项目",
        "key": "G001ZM0000BASE000DEF00000ATT00000026",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000026",
          "tableName": null,
          "propertyName": "szitemKey",
          "displayName": "收支项目",
          "columnName": "szitemKey",
          "maxLength": 255,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "szitemKey",
        "name": "收支项目"
      },
      {
        "parentKey": "fier_bxd",
        "title": "收支项目PK",
        "key": "G001ZM0000BASE000DEF00000ATT00000027",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000027",
          "tableName": null,
          "propertyName": "szitemKey_pk",
          "displayName": "收支项目PK",
          "columnName": "szitemKey_pk",
          "maxLength": 100,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "szitemKey_pk",
        "name": "收支项目PK"
      },
      {
        "parentKey": "fier_bxd",
        "title": "收支项目NAME",
        "key": "G001ZM0000BASE000DEF00000ATT00000028",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000028",
          "tableName": null,
          "propertyName": "szitemKey_value",
          "displayName": "收支项目NAME",
          "columnName": "szitemKey_value",
          "maxLength": 150,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "szitemKey_value",
        "name": "收支项目NAME"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项1",
        "key": "G001ZM0000BASE000DEF00000ATT00000029",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000029",
          "tableName": null,
          "propertyName": "defitem1",
          "displayName": "自定义项1",
          "columnName": "defitem1",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem1",
        "name": "自定义项1"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项2",
        "key": "G001ZM0000BASE000DEF00000ATT00000030",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000030",
          "tableName": null,
          "propertyName": "defitem2",
          "displayName": "自定义项2",
          "columnName": "defitem2",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem2",
        "name": "自定义项2"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项3",
        "key": "G001ZM0000BASE000DEF00000ATT00000031",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000031",
          "tableName": null,
          "propertyName": "defitem3",
          "displayName": "自定义项3",
          "columnName": "defitem3",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem3",
        "name": "自定义项3"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项4",
        "key": "G001ZM0000BASE000DEF00000ATT00000032",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000032",
          "tableName": null,
          "propertyName": "defitem4",
          "displayName": "自定义项4",
          "columnName": "defitem4",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem4",
        "name": "自定义项4"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项5",
        "key": "G001ZM0000BASE000DEF00000ATT00000033",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000033",
          "tableName": null,
          "propertyName": "defitem5",
          "displayName": "自定义项5",
          "columnName": "defitem5",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem5",
        "name": "自定义项5"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项6",
        "key": "G001ZM0000BASE000DEF00000ATT00000034",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000034",
          "tableName": null,
          "propertyName": "defitem6",
          "displayName": "自定义项6",
          "columnName": "defitem6",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem6",
        "name": "自定义项6"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项7",
        "key": "G001ZM0000BASE000DEF00000ATT00000035",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000035",
          "tableName": null,
          "propertyName": "defitem7",
          "displayName": "自定义项7",
          "columnName": "defitem7",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem7",
        "name": "自定义项7"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项8",
        "key": "G001ZM0000BASE000DEF00000ATT00000036",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000036",
          "tableName": null,
          "propertyName": "defitem8",
          "displayName": "自定义项8",
          "columnName": "defitem8",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem8",
        "name": "自定义项8"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项9",
        "key": "G001ZM0000BASE000DEF00000ATT00000037",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000037",
          "tableName": null,
          "propertyName": "defitem9",
          "displayName": "自定义项9",
          "columnName": "defitem9",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem9",
        "name": "自定义项9"
      },
      {
        "parentKey": "fier_bxd",
        "title": "自定义项10",
        "key": "G001ZM0000BASE000DEF00000ATT00000038",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000038",
          "tableName": null,
          "propertyName": "defitem10",
          "displayName": "自定义项10",
          "columnName": "defitem10",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 6,
          "dataTypeInfo": null,
          "refEntity": null,
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "defitem10",
        "name": "自定义项10"
      },
      {
        "parentKey": "fier_bxd",
        "title": "表头其他信息",
        "key": "G001ZM0000BASE000DEF00000ATT00000039",
        "isLeaf": true,
        "infoKey": "",
        "children": null,
        "data": {
          "id": "G001ZM0000BASE000DEF00000ATT00000039",
          "tableName": null,
          "propertyName": "otherInformation",
          "displayName": "表头其他信息",
          "columnName": "otherInformation",
          "maxLength": 50,
          "numberDigit": null,
          "isExtend": false,
          "isSyncDB": true,
          "assemblyType": 10,
          "dataType": 11,
          "dataTypeInfo": null,
          "refEntity": "G001ZM0000BILLTYPE000000000000000013",
          "refEntityCode": null,
          "nullable": true,
          "defaultvalue": null,
          "hidden": false
        },
        "code": "otherInformation",
        "name": "表头其他信息"
      }
    ],
    "data": null,
    "code": "",
    "name": "友报账报销单"
  }
];

export default json;