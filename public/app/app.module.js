(function () {
    "use strict"
    // stating pont of application calling module gitIssues.
    var module = angular.module("gitIssues", ["ngComponentRouter"]);
    module.value("$routerRootComponent", "issuesApp");

})();