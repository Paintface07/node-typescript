/// <reference path="../typings/index.d.ts" />

"use strict";
import * as fs from "graceful-fs";

export function exec() : void {
    fs.access('.', err => { console.log(err); });
    console.log('In MAIN');
}