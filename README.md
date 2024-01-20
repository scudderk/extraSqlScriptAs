# Azure Data Studio -   3 "Extra Sql Script As" Extension

This extension adds several missing options to the context menu of the object tree:

* Script Table as INSERT
* Script Table as INSERT to clipboard
* Script Table as UPDATE
* Script Table as UPDATE to clipboard
* Script Table as DELETE
* Script Table as DELETE to clipboard
* Script Table as SELECT
* Script Table as SELECT to clipboard
* Script Table as Table as C# Class
* Script Table as Table as C# Class to clipboard
* Script Stored procedure as DROP AND CREATE
* Script Stored procedure as DROP AND CREATE to clipboard
* Script Function as DROP AND CREATE
* Script Function as DROP AND CREATE to clipboard

## Features

#### Script Table as INSERT
![Import a Script](https://raw.githubusercontent.com/pacoweb/extraSqlScriptAs/master/images/insert_capture.gif)
#### Script Table as UPDATE
![Import a Script](https://raw.githubusercontent.com/pacoweb/extraSqlScriptAs/master/images/update_capture.gif)
#### Script Table as DELETE
![Import a Script](https://raw.githubusercontent.com/pacoweb/extraSqlScriptAs/master/images/delete_capture.gif)
#### Script Table as SELECT
![Import a Script](https://raw.githubusercontent.com/pacoweb/extraSqlScriptAs/master/images/select_capture.gif)
#### Script Stored procedure as DROP AND CREATE
![Import a Script](https://raw.githubusercontent.com/scudderk/extraSqlScriptAs/master/images/stored_procedure_capture.gif)
#### Script Function as DROP AND CREATE
![Import a Script](https://raw.githubusercontent.com/scudderk/extraSqlScriptAs/master/images/function_capture.gif)

## Known Issues

No open issues at this time.

## Unknown Issues
Can be raised here: https://github.com/pacoweb/extraSqlScriptAs/issues

## 0.10.0

### Fixes
- Added the following missing data types:
	- text
	- timestamp
	- ntext
	- float
	- smallint
	- bit
- Removed `isComputed` from `[Key]` calculations

## 0.9.1

### Updates

- If the table starts with `tbl` it is now trimmed from the outputted class name.

### Fixes
- Fixed Script as C# class outputting table `tableCatalog` (database name). Now outputs table name as class name.

### 0.9.0

- Added Script as C# Class function

## Release Notes

### 0.7.0

- Added Permissions to scripting

### 0.6.0

- Added Script Stored procedure as DROP AND CREATE
- Added Script Function as DROP AND CREATE

### 0.5.0

- Added Script Table as SELECT

### 0.1.0

- Initial release.
