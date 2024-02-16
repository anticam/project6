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

                $.get("/jokes/random", function(data) {
                    console.log(data);
                    alert(data.value);
                });

            //     const settings = {
            //         "async": true,
            //         "crossDomain": true,
            //         "url": "/jokes/random",
            //         "method": "GET",
            //         "headers": {
            //             "user-agent": "vscode-restclient"
            //         }
            //     };

            //     $.ajax(settings).done(function (response) {
            //         console.log(response);
            //         alert(response.value);
            //     });
             }


        });
    });
