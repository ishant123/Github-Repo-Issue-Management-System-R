(function () {
    "use strict"
    var module = angular.module('gitIssues');
    function controller($http) {
        var model = this;
        model.http = $http;
        // In a life cycle of a component when router is activate $routerOnActivate function will called
        model.$routerOnActivate = function (next, previous) {
            model.issueName = next.params.repo;
            model.http.get('https://api.github.com/repos/' + next.params.repo + '/issues/' + next.params.id).then(function (res) {
                model.title = res.data.title;
                model.body = res.data.body;
                model.numberComments = res.data.comments;
                model.commentUrl = res.data.comments_url;
                model.http.get(model.commentUrl).then(function (res) {
                    model.commentsBody = res.data;
                });
            });

        };
    }
    module.component("issuesDetails", {
        templateUrl: '/app/components/gitIssues/issues-details.component.html',
        controllerAs: 'model',
        controller: ["$http", controller] // component has dependence on $http and controller Api

    });

})()