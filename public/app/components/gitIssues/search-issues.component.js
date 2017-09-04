(function(){
    
    "use strict"
    var module = angular.module("gitIssues");
    // controller function which is using $http api
    function controller($http){
        var model = this; 
        model.url;
        model.repoName;
        model.totalNumberOfIssues;
        model.issuesOlderThan7days;
        model.issuesInLast24Hours;
        model.issuesLastWeek;
        model.error; 
        model.issues=[];
        model.http = $http;
        model.userName = []; 
        model.displayList = [];    

        // On click event fetchIssues function will called
        model.fetchIssues = function(){
          if(model.url){  
            var url = model.url.split('/');
            // check url in correct form
            if(url[0]==='https:' && url[1]===''&& url[2]==='github.com'&& url[3] && url[4]){
                var today=new Date();
				var lastDay =new Date();
				lastDay.setDate(today.getDate() - 1);
		        var lastWeek=new Date();
                lastWeek.setDate(today.getDate() - 7);
                model.repoName = url[3]+'/'+url[4];
		        model.issuesOlderThan7days =0;
                model.issuesInLast24Hours =0;
                // calling for total number of issues
		        model.http.get('https://api.github.com/repos/'+url[3]+'/'+url[4]).then(function(res){
                    model.totalNumberOfIssues = res.data.open_issues_count;
                    var noOfPage = (model.totalNumberOfIssues/100)+1;
                    for (var i=1;i<=noOfPage;i++){
                        // calling for issues on each page. we can make pagination and use lazy loading.
                        model.http.get('https://api.github.com/repos/'+url[3]+'/'+url[4]+'/issues?page='+i+'&per_page=100').then(function(response){
                        var username=[];    
                        for(var j=0;j<response.data.length;j++){
                                var updateDate = new Date(response.data[j].updated_at),issueInfo = {title:"", number:0,username:"", avatar_url:"" };
                                // geting number of issues in last 24 hour, older than 7 days
                                if(updateDate > lastDay)
                                    model.issuesInLast24Hours= model.issuesInLast24Hours+1;
                                else if(updateDate > lastWeek && updateDate < lastDay)
                                    model.issuesLastWeek = model.issuesLastWeek +1; 
                                else
                                    model.issuesOlderThan7days = model.issuesOlderThan7days +1;

                                issueInfo.title = response.data[j].title;
                                issueInfo.number = response.data[j].number;
                                issueInfo.username = response.data[j].user.login;
                                issueInfo.avatar_url = response.data[j].user.avatar_url;                                  
                                username.push(issueInfo);    
                            }
                            
                            model.displayList = username;  
                        });
                    }
                     
                }).then(function(){model.state=true; });
            }
            else{
                // in case of invalid url.
		    	model.totalNumberOfIssues=0;
		    	model.error="Invalid url!! Please enter in format https://github.com/user/repository";
            }                   
          }else{
              // In case of no url.
            model.totalNumberOfIssues=0;
            model.error="Please Enter Url";
        }
        }        
    }

    module.component("searchIssues",{
        templateUrl:"/app/components/gitIssues/search-issues.component.html",
        controllerAs:'model',
        controller:["$http",controller] // component has dependence on $http and controller Api
    });

})()