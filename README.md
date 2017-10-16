# JCE Custom HTML
A simple example plugin for inserting a custom HTML string into JCE

## Download
Click [here to download](https://github.com/widgetfactory/jce-editor-typekit/archive/master.zip), or the Download Zip button on the right.

## Installation
Install using the Joomla Extensions Installer - https://docs.joomla.org/Installing_an_extension

After installation, assign the plugin to an Editor Profile in Editor Profiles -> Features & Layout.

## Customization
This plugin is intended as a jumping off point for creating your own simple JCE plugin. This example inserts a simple HTML string which is declared on line 8 of the plugin's editor_plugin.js file, ie: https://github.com/widgetfactory/jce-custom/blob/master/plugins/jce/editor-custom/editor_plugin.js#L8

```javascript
var html = '<span class="custom">Some HTML</span>';                  

ed.execCommand('mceInsertContent', false, html);
```

This string can be edited to insert your own HTML, or the plugin expanded through the addition of custom functions.
