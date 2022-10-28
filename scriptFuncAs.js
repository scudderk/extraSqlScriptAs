"use strict";

const sqlUtils = require("./scriptSqlUtils.js");

const colNameOrdinal = 0;

async function getSqlScriptAsDropAndCreateFunctionAsync(
  connectionProfile,
  tableCatalog,
  tableSchema,
  routineName
) {
  let queryText = sqlUtils.getRoutineInfoQuerySql(
    tableCatalog,
    tableSchema,
    routineName
  );

  let results = await sqlUtils.getResultsFromQuerySql(
    connectionProfile,
    "MSSQL",
    queryText
  );

  let permissionsText = sqlUtils.getRoutinePermissionsQuerySql(
    tableCatalog,
    tableSchema,
    routineName
  );

  let permissions = await sqlUtils.getResultsFromQuerySql(
    connectionProfile,
    "MSSQL",
    permissionsText
  );

  if (!results || results.rowCount === 0) {
    throw "No query results returned";
  }

  let updateSqlScript = buildFinalScript(
    results,
    tableCatalog,
    tableSchema,
    routineName,
    permissions
  );

  return updateSqlScript;
}

function buildFinalScript(
  results,
  tableCatalog,
  tableSchema,
  routineName,
  permissions
) {
  let fullScript = [];
  let columsScriptPart = [];

  fullScript.push(
    `IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[${tableCatalog}].[${tableSchema}].[${routineName}]') AND type in (N'FN', N'IF', N'TF', N'FS', N'FT')) \n`
  );

  fullScript.push(`DROP FUNCTION [${tableSchema}].[${routineName}] \n`);
  fullScript.push(`GO \n \n`);

  fullScript.push(`SET ANSI_NULLS ON \n`);
  fullScript.push(`GO \n \n`);

  fullScript.push(`SET QUOTED_IDENTIFIER ON \n`);
  fullScript.push(`GO \n \n`);

  for (let i = 0; i !== results.rowCount; i++) {
    let rowData = results.rows[i];

    columsScriptPart.push(rowData[colNameOrdinal].displayValue);
  }

  columsScriptPart.push(`GO \n \n`);

  for (let i = 0; i !== permissions.rowCount; i++) {
    let rowData = permissions.rows[i];

    columsScriptPart.push(rowData[colNameOrdinal].displayValue);
  }

  return fullScript.concat(columsScriptPart).join("");
}

module.exports.getSqlScriptAsDropAndCreateFunctionAsync =
  getSqlScriptAsDropAndCreateFunctionAsync;
