angular.module('de.devjs.modelEditor')
    .directive('modelEditor', ['DiagramObjectFactory', function (DiagramObjectFactory) {
        var $canvas;

        return {
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                $scope.append = function (element) {
                    $canvas.append('svg:rect')
                        .attr("width", element.width)
                        .attr("height", element.height)
                        .style('fill', element.fill)
                        .style('stroke', element.stroke.color)
                        .style('stroke-width', element.stroke.width);
                };
            }],
            link: function (scope, element, attributes) {
                $canvas = d3.select(element[0]).append('svg');

                var rectangle = DiagramObjectFactory.create('rectangle');

                scope.append(rectangle);
            }
        }
    }]);