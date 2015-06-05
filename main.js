define(function (require, exports, module) {
    "use strict";
    var CommandManager = brackets.getModule("command/CommandManager");
    var Menus = brackets.getModule("command/Menus");
    var EditorManager = brackets.getModule("editor/EditorManager");
    var right_click_search = "RightClickExtended.SearchHandler";
    var AppInit = brackets.getModule("utils/AppInit");

    //   var strings = require("strings");
    /**
        Logs into System Console
        @param 
        @Input: String represnts the message to be printed to console
        @return None
    */
    var strings = {
        RIGHT_CLICK_SEARCH_TITLE: "Search in Google",
        USER_NOT_FOUND: 'Please Enter User Name',
        TEAM_NOT_FOUND: 'Please Enter Team Directory Name',
        SETTINGS_SHORTCUT: 'Ctrl-Shift-I',
        SETTINGS_MENU_TITLE: 'ENG1003 Settings',
        UPLOAD_SHORTCUT: 'Ctrl-Shift-U',
        UPLOAD_NEMU_TITLE: 'ENG1003 Uploader',
        STORAGE_KEY: 'Eng1003Uploader.Monash'
    }
    module.exports = strings;

    function log(msg) {

        console.log('GoogleExt:' + msg);
    }

    /**
        Handle the Right Click Event
        @param 
        @Input: None
        @return None
    */
    function handleRightClickSearch() {

        var thisEditor = EditorManager.getCurrentFullEditor();
        var keyword = thisEditor._codeMirror.getSelection();
        if (keyword.length > 0) { // if the user has selected (highlited) something
            var url = "https://www.google.com.au/search?q=" + keyword;
            brackets.app.openURLInDefaultBrowser(url);
        }
    }

    /**
        System Initialization, Command Registratios, and event handlers
    */

    AppInit.appReady(function () {
        CommandManager.register(strings.RIGHT_CLICK_SEARCH_TITLE, right_click_search, handleRightClickSearch);
        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(right_click_search);
    });
});