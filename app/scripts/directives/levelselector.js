'use strict';

/**
 * @ngdoc directive
 * @name jsgameApp.directive:levelSelector
 * @description
 * # levelSelector
 */
angular.module('jsgameApp')
  .directive('levelSelector', function () {
    return {
        templateUrl: '/views/levelSelector.html',
        restrict: 'EA',
        link: function postLink(scope, element, attrs) {

            function Polygon(options) {
                this.options = {
                    lineWidth: 2,
                    colorStroke: 'green',
                    colorFill: '#000',
                    corners: 6
                };

                angular.extend(this.options, options);

                this.options.canvas = this.options.element.find('canvas')[0];

                this.obj = this.options.canvas;
                this.ctx = this.options.canvas.getContext('2d');

                this.build = function() {
                    this.ctx.beginPath();
                    var oW = this.obj.width,
                        oH = this.obj.height,
                        radius = this.obj.width/2 - 5,
                        y0 = this.obj.width/2,
                        x0 = this.obj.width/2;

                    this.ctx.moveTo(x0, y0);

                    var da = 360/this.options.corners,
                        a = 0,
                        path = [];

                    for (var i = 0; i < this.options.corners; i++){
                        var temp_x = (x0+Math.round(radius*Math.cos(a*Math.PI/180)));
                        var temp_y = (y0-Math.round(radius*Math.sin(a*Math.PI/180)));
                        path.push([temp_x,temp_y]);
                        if (i === 0) {
                            this.ctx.moveTo(path[i][0], path[i][1]);
                        } else {
                            this.ctx.lineTo(path[i][0], path[i][1]);
                        }
                        a = a + da;
                    }

                    this.ctx.lineTo(path[0][0], path[0][1]);
                    this.ctx.closePath();

                    this.ctx.lineWidth = this.options.lineWidth;
                    this.ctx.strokeStyle = this.options.colorStroke;
                    this.ctx.fillStyle = this.options.colorFill;

                    this.ctx.fill();
                    this.ctx.stroke();

                };

            }

            var options = {
                element: element,
                colorStroke: attrs.strokeStyle,
                colorFill: attrs.fillStyle,
                corners: scope.$eval(attrs.corners),
                lineWidth: attrs.lineWidth
            };
            console.log(options);
            var p = new Polygon(options);
            p.build();

        }
    };
  });
