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
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            var CanvasBuild  = {
                build : function(obj){
                    var corners = 5;
                    var cnv = obj.getContext('2d');
                    cnv.beginPath();
                    var oW = obj.width, oH = obj.height, radius = obj.width/2 - 5, y0 = obj.width/2, x0 = obj.width/2;
                    console.log(oW);
                    console.log(oH);
                    //Begin
                    cnv.moveTo(x0, y0);
                    var  da = 360/corners, a= 0, path = [];

                    for (var i =0; i < corners; i++){
                        var temp_x = (x0+Math.round(radius*Math.cos(a*Math.PI/180)));
                        var temp_y = (y0-Math.round(radius*Math.sin(a*Math.PI/180)));
                        path.push([temp_x,temp_y])
                        //console.log(path);
                        if (i == 0) {
                            cnv.moveTo(path[i][0], path[i][1]);
                        } else {
                            cnv.lineTo(path[i][0], path[i][1]);
                        }
                        a = a + da;
                    }
                    cnv.lineTo(path[0][0], path[0][1]);
                    // complete custom shape
                    cnv.closePath();
                    cnv.lineWidth = 2;
                    cnv.strokeStyle = 'green';
                    cnv.fill();
                    cnv.stroke();
                    return true;
                }
            };

            console.log(element.find('canvas'));

            CanvasBuild.build(element.find('canvas')[0]);

        }
    };
  });
