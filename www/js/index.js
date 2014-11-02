/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};	
	
var projectsArray = [];

projectsArray[0] = new Project();
projectsArray[1] = new Project();
	
projectsArray[0].projectName = "Winter Cider";
projectsArray[0].projectRecipe = "Hard Cider";
projectsArray[1].projectName = "2nd Mead Batch";
projectsArray[1].projectRecipe = "Mead";

projectsArray[0].taskList = [];
projectsArray[1].taskList = [];

projectsArray[0].taskList[0] = new Task("Pitch Yeast", new Date(2014,10,5,12));
projectsArray[0].taskList[1] = new Task("Rerack", new Date(2014,10,30));
projectsArray[0].taskList[2] = new Task("Bottle", new Date(2014,11,15));

projectsArray[1].taskList[0] = new Task("Pitch Yeast", new Date(2014,10,7));
projectsArray[1].taskList[1] = new Task("Add more Honey", new Date(2014,11,7));
projectsArray[1].taskList[2] = new Task("Bottle", new Date(2015,4,1));

	
var currentDate = new Date();

var alertWindow = document.getElementById("alerts");
	
for (i=0;projectsArray.length;i++){
	for (j=0;j<projectsArray[i].taskList.length;j++){
		if(projectsArray[i].taskList[j].taskComplete == false && projectsArray[i].taskList[j].taskDueDate.getTime()-currentDate.getTime() <= 604800000){
			alert(projectsArray[i].taskList[j].taskDueDate.toString());
			var tempElement = document.createElement("li");
			var tempTime = (projectsArray[i].taskList[j].taskDueDate.getTime() - currentDate.getTime())/86400000;
			var tempString = projectsArray[i].projectName + ":" +projectsArray[i].taskList[j].taskName + " due in " + tempTime.toString() + " days";
			var tempChild = document.createTextNode(tempString);
			tempElement.appendChild(tempChild);
			alertWindow.appendChild(tempElement);
		}
	}
}
	


function Project (){
	var projectName = "";
	var projectRecipe = "";
	var taskList = [];
}

function Task(taskName,taskDueDate){
	this.taskName = taskName;
	this.taskDueDate = taskDueDate;
	this.taskComplete = false;
}