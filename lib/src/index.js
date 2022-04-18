"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@jxa/global-type");
const run_1 = require("@jxa/run");
const process_1 = require("process");
const systemPreferences = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, run_1.run)(() => {
        const preferences = Application("com.apple.systemPreferences");
        const system = Application("com.apple.systemEvents");
        if (system.processes["System Preferences"].exists()) {
            preferences.pane = "com.apple.system.display";
        }
        else {
            preferences.activate();
        }
        console.log(preferences.currentPane());
    }).catch(() => {
        (0, process_1.exit)(1);
    });
});
// const execute = async () => {
//   await systemPreferences()
// }
systemPreferences();
