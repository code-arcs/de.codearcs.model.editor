angular.module('de.devjs.modelEditor')
    .service('DiagramObjectFactory', [function () {
        var Rectangle = function () {
            this.width = 80;
            this.height = 40;
            this.fill = '#ffffff';
            this.stroke = {
                width: 1,
                color: '#000000'
            };
        };

        return {
            create: function() {
                return new Rectangle()
            }
        }
    }]);