# Change Log

All notable changes to the "extraSqlScriptAs" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## 0.10.1

### Fixes
- Added the following missing data types:
	- money

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

## 0.9.0

### Added
- Added Script as C# class option to tables

## 0.8.0

### Updates
- Removed `tableCatalog` from stored procedure and function scripting existance check
- Removed extra space in `IF EXISTS` statments for stored procedures and functions

### 0.7.0

- Added Permissions to scripting

### 0.6.0

- Added Script Stored procedure as DROP AND CREATE
- Added Script Function as DROP AND CREATE

### 0.5.0

- Added Script Table as SELECT

### 0.1.0

- Initial release.