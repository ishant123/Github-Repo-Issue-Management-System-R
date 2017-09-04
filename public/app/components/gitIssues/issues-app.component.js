(function () {
    "use strict";
    var module = angular.module("gitIssues");
    module.component("issuesApp", {
        templateUrl: '/app/components/gitIssues/issues-app.component.html',
        //defining route config
        $routeConfig: [
            { path: "/", component: "searchIssues", name: "Issues" },
            { path: "/detail/:id/:repo", component: "issuesDetails", name: "Details" }
        ]
    })
})();