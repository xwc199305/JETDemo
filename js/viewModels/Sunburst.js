/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Sunburst module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function Sunburst() {
        var self = this;
        var colorHandler = new oj.ColorAttributeGroupHandler();

            var MA = createNode("Massachusetts", "0", getValue(), getColor());
            var CT = createNode("Connecticut", "1", getValue(), getColor());
            var ME = createNode("Maine", "2", getValue(), getColor());
            var VT = createNode("Vermont", "3", getValue(), getColor());
            var RI = createNode("Rhode Island", "4", getValue(), getColor());

            addChildNodes(MA, [
                createNode("Boston", "00", getValue(), getColor()),
                createNode("Springfield", "01", getValue(), getColor()),
                createNode("Worcester", "02", getValue(), getColor())
            ]);
            addChildNodes(CT, [
                createNode("Hartford", "10", getValue(), getColor()),
                createNode("New Haven", "11", getValue(), getColor())
            ]);
            addChildNodes(ME, [
                createNode("Portland", "20", getValue(), getColor()),
                createNode("Augusta", "21", getValue(), getColor())
            ]);
            addChildNodes(VT, [
                createNode("Burlington", "30", getValue(), getColor())
            ]);
            addChildNodes(RI, [
                createNode("Providence", "40", getValue(), getColor()),
                createNode("Newport", "41", getValue(), getColor())
            ]);
            var nodes = [MA, CT, ME, VT, RI];

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

        };

        function menuModel() {
            var self = this;
            self.selectedMenuItem = ko.observable("(None selected yet)");
            var node;
            self.beforeOpenFunction = function (event, ui) {
              var target = event.originalEvent.target;
              var sunburst = $("#sunburst1");
              var context = sunburst.ojSunburst("getContextByNode", target);
              if (context != null)
                node = sunburst.ojSunburst("getNode", context["indexPath"]);
            };
            self.menuItemSelect = function (event, ui) {
              var text = ui.item.children("a").text();
              if (node) {
                self.selectedMenuItem(text + " from " + node.label);
                node = null;
              } else {
                self.selectedMenuItem(text + "from Sunburst background");
              }
            };
        };



    }
    
);
