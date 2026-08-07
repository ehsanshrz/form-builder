// This file is required by karma.conf.js and initializes the Angular testing environment.
// Zone.js and spec file discovery are handled by the @angular-devkit/build-angular:karma builder.

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
