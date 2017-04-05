/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojchart'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function homeContentViewModel() {
        var self = this;
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        /* chart data */
        var barSeries = [{name: "22-26", items: [22]},
            {name: "27-31", items: [27]},
            {name: "32-36", items: [32]},
            {name: "37-41", items: [22]},
            {name: ">41", items: [22]}];

        var barGroups = ["Age Distribution"];  //, "Group B"
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

    return homeContentViewModel;
});
