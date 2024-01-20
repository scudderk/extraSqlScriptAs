'use strict'

const sqlUtils = require('./scriptSqlUtils.js')

const colNameOrdinal = 0
const colDataTypeOrdinal = 1
const colIsNullableOrdinal = 5
const colIsIdentityOrdinal = 6
const colComputedOrdinal = 7

async function getSqlScriptAsClassAsync(connectionProfile, tableCatalog, tableSchema, tableName) {
	let queryText = sqlUtils.getColumnInfoQuerySql(tableCatalog, tableSchema, tableName)

	let results = await sqlUtils.getResultsFromQuerySql(connectionProfile, 'MSSQL', queryText)

	if (!results || results.rowCount === 0) {
		throw 'No query results returned'
	}

	let classSqlScript = buildFinalScript(results, tableName)

	return classSqlScript
}

function buildFinalScript(results, tableName) {
	let fullScript = []
	let valuesScriptPart = []
	tableName = tableName.startsWith("tbl") ? tableName.slice(3) : tableName;
	fullScript.push(`public class ${tableName}`)

	valuesScriptPart.push('{')

	for (let i = 0; i !== results.rowCount; i++) {
		let rowData = results.rows[i]

		let isComputed = rowData[colComputedOrdinal].displayValue
		let IsIdentity = rowData[colIsIdentityOrdinal].displayValue

		if (isComputed === '1' || IsIdentity === '1') {
			valuesScriptPart.push('\t[Key]')
		}

		valuesScriptPart.push(
			'\tpublic ' +
				sqlUtils.getColTypeAsCSharpString(
					rowData[colDataTypeOrdinal].displayValue,
					rowData[colIsNullableOrdinal].displayValue
				) +
				' ' +
				rowData[colNameOrdinal].displayValue +
				' { get; set; }'
		)
	}

	valuesScriptPart.push('}')

	return fullScript.concat(valuesScriptPart).join('\n')
}

module.exports.getSqlScriptAsClassAsync = getSqlScriptAsClassAsync
