define(function (require, exports, module) {
            "use strict";
            var CommandManager = brackets.getModule("command/CommandManager");
            var Menus = brackets.getModule("command/Menus");
            var EditorManager = brackets.getModule("editor/EditorManager");



            var right_click_search = "RightClickExtended.SearchHandler";
            var AppInit = brackets.getModule("utils/AppInit");

            var strings = require("strings");
            /**
                Logs into System Console
                @param 
                @Input: String represnts the message to be printed to console
                @return None
            */

            function log(msg) {

                console.log('GoogleExt:' + msg);
            }

            /**
                System Initialization, Command Registratios, and event handlers
            */

            AppInit.appReady(function () {
                        CommandManager.register(strings.RIGHT_CLICK_SEARCH_TITLE, right_click_search, handleRightClickSearch);
                        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
                        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(right_click_search);
                    }