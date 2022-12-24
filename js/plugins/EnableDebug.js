/*:ja
 * @target MZ
 */
(() => {
  'use strict';

  Scene_Map.prototype.isDebugCalled = function() {
    return Input.isTriggered("debug");
  };
})();
