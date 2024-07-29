## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Feb 16 2024 14:00:43 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.12.4|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>project6|
|**Application Title**<br>App Title|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.120.7|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## project6

An SAP UI5 Fiori application calls Chuck Norris Jokes API https://api.chucknorris.io/.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


#### Configuration in BTP
1. Create an HTTP destinations in the subaccount:

for chuckdest
```shell
#
URL=https\://api.chucknorris.io
Name=chuckdest
HTML5.DynamicDestination=true
ProxyType=Internet
Type=HTTP
WebIDEEnabled=true
WebIDEUsage=odata_gen
Authentication=NoAuthentication
```

for northdest
```shell
#
Name=northdest
URL=https\://services.odata.org
ProxyType=Internet
HTML5.DynamicDestination=true
Type=HTTP
WebIDEEnabled=true
Authentication=NoAuthentication
WebIDEUsage=odata_gen
```

```shell
#todo include CF CLI to create destinations
```

2. Subscribe to one of the services:
  + **SAP Build Work Zone, standard edition**
  + SAP Build Work Zone, advanced edition
  + SAP Cloud Portal

3. clone the repository

4. build, deploy, download deployment logs:
```shell
mbt build
cf deploy mta_archives/project6_0.0.1.mtar 
cf dmol -i <ID>  
```

#### Links
[Developing HTML5 Applications in the Cloud Foundry Environment](https://help.sap.com/docs/btp/sap-business-technology-platform/developing-html5-applications-in-cloud-foundry-environment)  
[Deploy Content Using the Generic Application Content Deployer](https://help.sap.com/docs/btp/sap-business-technology-platform/deploy-content-using-generic-application-content-deployer) 
[Managed Application Router](https://help.sap.com/docs/btp/sap-business-technology-platform/managed-application-router)  
[Application Router](https://help.sap.com/docs/btp/sap-business-technology-platform/application-router)  

[Community - How to access a BTP destination within SAPUI5 when executing AJAX call
](https://community.sap.com/t5/technology-q-a/how-to-access-a-btp-destination-within-sapui5-when-executing-ajax-call/qaq-p/12497764)  
[Community - Calling Service using AJAX in Fiori Elements Extension doesn't work in Launchpad](https://community.sap.com/t5/technology-q-a/calling-service-using-ajax-in-fiori-elements-extension-doesn-t-work-in/qaq-p/12398015)  

[Custom controller AJAX call is returning a 404 when calling the API](https://ga.support.sap.com/dtp/viewer/index.html#/tree/3046/actions/45995:45996:50742:51205:51192:51196:52513)


