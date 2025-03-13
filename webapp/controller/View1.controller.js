sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project6.controller.View1", {
            onInit: function () {

            },
            callJoke() {
                $.get("./chuckdest/jokes/random", function(data) {
                    console.log(data);
                    alert(data.value);
                });
             },
             callNorth() {
                $.get("./north/V3/OData/OData.svc/", function(data) {
                    console.log(data);
                    var xmlSerializer = new XMLSerializer();
                    var xmlStr = xmlSerializer.serializeToString(data);
                    alert(xmlStr);
                });
             },
             callNorthDirect() {
                $.get("https://services.odata.org/V3/OData/OData.svc/", function(data) {
                    console.log(data);
                });
             },
             callSapOdata() {
                $.get("./sap/opu/odata/sap/Y_ORDER/", function(data) {
                    console.log(data);
                    alert("Data fetched from SAP OData service");
                });
             }


        });
    });
