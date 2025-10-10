import { ApexAccessTokenHook } from "./apexaccesstokenhook.js";
import { Hooks } from "./types.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  // Register hook which will add JWT Access Token to each request
  hooks.registerBeforeRequestHook(new ApexAccessTokenHook());
}
