# Change Log

All notable changes to the "extraSqlScriptAs" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

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

## [Unreleased]

- Initial release