/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Statistics module
 */
define(['ojs/ojcore', 'knockout','ojs/ojmodule','jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'
], function (oj, ko) {
    
    
    
    /**
     * The view model for the main content view template
     */
    function StatisticsContentViewModel() {
        var self = this;
        
        
        
        
        var deptArray = [{Type: 'Total Num', Ball: 10, dance: 7, outing: 3,other: 4},
        {Type: 'Enrolled Num', Ball: 8, dance: 1, outing: 3,other: 1},
        {Type: 'Ratio', Ball: '80%', dance: '23%', outing: '100%',other: '25%'}];
//        {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
//        {DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300}];
         self.datasource = new oj.ArrayTableDataSource(deptArray, {idAttribute: 'Type'});
        
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        /* chart data */
        var barSeries = [{name: "Age 21-24", items:[42] },  //[42, 34]
            {name: "Age 25-28", items:[55] },           // [55, 30]
            {name: "Age 29-32", items:[36] },      //[36, 50]
                {name: "Age 33-36", items:[22] },  //[22, 46]
            {name: "Age 36+", items:[22] }];  [22, 46]

        var barGroups = ["Group A"];   // ["Group A", "Group B"];
        self.barSeriesValue = ko.observableArray(barSeries);
        self.barGroupsValue = ko.observableArray(barGroups);
        /* toggle buttons*/
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
        ];
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
        ];
        
        
        
    }
//    $(
//        function() 
//        {
//            ko.applyBindings(null, document.getElementById('listview'));
//        }
//    );
    
    return StatisticsContentViewModel;
});
