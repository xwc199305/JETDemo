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
        
        
        
        //Table
        var deptArray = [{Type: 'Total Num', Ball: 10, dance: 7, outing: 3,other: 4},
        {Type: 'Enrolled Num', Ball: 8, dance: 1, outing: 3,other: 1},
        {Type: 'Ratio', Ball: '80%', dance: '23%', outing: '100%',other: '25%'}];
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
        
        
        var colorHandler = new oj.ColorAttributeGroupHandler();

            var Male = createNode("Male", "0", getValue(), getColor());
            var Female = createNode("Female", "1", getValue(), getColor());
            

            
            var nodes = [Male, Female];

            function createNode(label, id, value, color) {
                return {label: label,
                    id: id,
                    value: value,
                    color: color,
                    shortDesc: "&lt;b&gt;" + label +
                      "&lt;/b&gt;&lt;br/&gt;Value: " + value};
            }

            function addChildNodes(parent, childNodes) {
                parent.nodes = [];
                for (var i = 0; i < childNodes.length; i++) {
                    parent.nodes.push(childNodes[i]);
                }
            }
            function getValue() {
                return Math.round(50 + 50 * Math.random());
            }

            function getColor() {
                return colorHandler.getValue(Math.floor(Math.random() * 4));
            }

            self.nodeValues = ko.observableArray(nodes);
        
        
    }

    
    return StatisticsContentViewModel;
});
