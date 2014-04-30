describe("cordovaNetworkInformationModule Tests Suite", function () {

    // cordovaNetworkInformationConstants

    describe("cordovaNetworkInformationConstants Tests", function () {

        var cordovaNetworkInformationConstants;

        beforeEach(function () {
            module('cordovaNetworkInformationModule');
            inject(function (_cordovaNetworkInformationConstants_) {
                cordovaNetworkInformationConstants = _cordovaNetworkInformationConstants_;
            });
        });

        it("apiVersion", function () {
            expect(cordovaNetworkInformationConstants.apiVersion).toBe('1.0.0');
        });

        it("cordovaVersion", function () {
            expect(cordovaNetworkInformationConstants.cordovaVersion).toBe('>=3.4.0');
        });

        it("connectionStatusEvent > online", function () {
            expect(cordovaNetworkInformationConstants.connectionStatusEvent.online).toBe('online');
        });

        it("connectionStatusEvent > offline", function () {
            expect(cordovaNetworkInformationConstants.connectionStatusEvent.offline).toBe('offline');
        });
    });

    // cordovaNetworkInformationService

    describe("cordovaNetworkInformationService Tests", function () {

        var cordovaNetworkInformationService;
        var cordovaNetworkInformationConstants;

        var $document;
        var $httpBackend;

        beforeEach(function () {
            module('cordovaNetworkInformationModule');
            inject(function (_cordovaNetworkInformationService_, _cordovaNetworkInformationConstants_, _$document_, _$httpBackend_) {
                cordovaNetworkInformationService = _cordovaNetworkInformationService_;
                cordovaNetworkInformationConstants = _cordovaNetworkInformationConstants_;

                $document = _$document_;
                $httpBackend = _$httpBackend_;
            });
            navigator.connection = null;
        });

        it("apiVersion should return apiVersion defined in cordovaNetworkInformationConstants", function () {
            expect(cordovaNetworkInformationService.apiVersion()).toBe('1.0.0');
        });

        it("cordovaVersion should return apiVersion defined in cordovaNetworkInformationConstants", function () {
            expect(cordovaNetworkInformationService.cordovaVersion()).toBe('>=3.4.0');
        });

        it("checkNetworkInformationAvailability should return false if plugin is not installed", function () {
            expect(cordovaNetworkInformationService.checkNetworkInformationAvailability()).toBe(false);
        });

        it("checkNetworkInformationAvailability should return true if plugin is installed", function () {
            navigator.connection = {};
            expect(cordovaNetworkInformationService.checkNetworkInformationAvailability()).toBe(true);
        });

        it("getConnectionType should return null if plugin is not installed", function () {
            expect(cordovaNetworkInformationService.getConnectionType()).toBeNull();
        });

        it("getConnectionType should return connection type() function invocation if plugin is installed", function () {
            var expectedType = 'wifi';
            navigator.connection = {
                type: function () {
                    return expectedType;
                }
            };
            expect(cordovaNetworkInformationService.getConnectionType()).toBe(expectedType);
        });

        it("addConnectionStatusChangedListener should do nothing if plugin is not installed", function () {
            // TODO
        });
    });
});