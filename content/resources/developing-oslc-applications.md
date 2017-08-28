+++
categories = ["tutorial"]
date = "2017-06-21T20:57:23+02:00"
author = "OSLC Community"
author_uri = ""
tags = ["tutorial"]
title = "Developing OSLC Applications"
+++

# Get started with developing OSLC applications

“OSL-whaaaat now?”

Open Services for Lifecycle Collaboration (OSLC) is a community that writes specifications to integrate software. Learn more at Why develop OSLC applications and at our main site.

For a high-level overview of how to add OSLC support to software, we recommend our video "[Getting started on implementing OSLC](http://www.youtube.com/watch?v=-oXqudLmNMI)":

{{< youtube oXqudLmNMI >}}

The description on YouTube includes a table of contents and links to references.

## Explore our tutorial

For a more detailed look at what goes into OSLC support, read through our tutorial "[Integrating Products with OSLC](http://open-services.net/resources/tutorials/integrating-products-with-oslc/)", which walks you through building an adapter that adds OSLC support to the popular Bugzilla defect-tracking software.

The concepts in the tutorial are broadly applicable to other software.

If you're **building an OSLC provider** (in other words, software that outputs OSLC resources), you'll learn how to

* [Provide Service Providers and catalogs](http://open-services.net/resources/tutorials/integrating-products-with-oslc/implementing-an-oslc-provider/providing-service-providers-and-catalogs/)
* [Represent Bugzilla bugs as OSLC Change Management resources](http://open-services.net/resources/tutorials/integrating-products-with-oslc/implementing-an-oslc-provider/providing-oslc-representations/)
* [Provide UI Previews](http://open-services.net/resources/tutorials/integrating-products-with-oslc/implementing-an-oslc-provider/providing-ui-previews/)
* [Provide a delegated UI for finding existing bugs](http://open-services.net/resources/tutorials/integrating-products-with-oslc/implementing-an-oslc-provider/providing-a-delegated-ui-for-selection/)
* [Provide a delegated UI for creating new bugs](http://open-services.net/resources/tutorials/integrating-products-with-oslc/implementing-an-oslc-provider/providing-a-delegated-ui-for-creation/)
* [Allow software to programmatically create new bugs](http://open-services.net/resources/tutorials/integrating-products-with-oslc/implementing-an-oslc-provider/providing-a-creation-factory/)

If you're building an OSLC consumer application, you'll learn how to:

* [Link to OSLC resources in another application and display previews](http://open-services.net/resources/tutorials/integrating-products-with-oslc/integrating-with-an-oslc-provider/implementing-links-and-previews/)
* [Find, select, and create bugs without leaving the application with delegated UIs](http://open-services.net/resources/tutorials/integrating-products-with-oslc/integrating-with-an-oslc-provider/making-incident-to-defect-linking-easy/)
* [Parse OSLC resources](http://open-services.net/resources/tutorials/integrating-products-with-oslc/integrating-with-an-oslc-provider/implementing-a-customers-to-notify-page/)
* [Create new bugs automatically](http://open-services.net/resources/tutorials/integrating-products-with-oslc/integrating-with-an-oslc-provider/automated-bug-creation/)

The tutorial has working sample applications and [detailed instructions for running them](http://open-services.net/resources/tutorials/integrating-products-with-oslc/running-the-examples/).

# Why developr OSLC applications

Integrating software is hard; we want it to be easier. And we need your help.

[We define standardized ways](http://open-services.net/specifications/) to represent common resources in software development (for example, a defect or a performance test). We also define standardized methods to allow other applications to access, display, preview, find, create, and update those resources.

With standardized resources and methods, any tool can access and manipulate the data and artifacts from any other compliant tool. So instead of a variety of fragile point-to-point integrations you have one common way to connect and integrate [many products](http://open-services.net/software/). It's not quite plug-and-play, but it's close.

We want OSLC to succeed because better and easier integrations will save everyone time and money. And we think that software with OSLC integration has a competitive advantage.

Don't just take our word for it. [Icaro Technologies](http://open-services.net/resources/presentations/reducing-system-integration-costs-with-oslc-and-data-federation/) estimated that they could have saved two million dollars over two years if they used OSLC standards for a project with more than 10 integrations. And major industry groups like [SPRINT](http://www.sprint-iot.eu/) and [EADS](http://www.eads.com/eads/int/en.html) have decided that OSLC-compliant software can help them collaborate and verify requirements [on highly complex products like commercial airplanes](http://open-services.net/resources/videos/concurrent-engineering-for-systems-based-on-oslc).

OSLC specifications are free to adopt, and we want them to spread. So help us out!

# Technical foundations

To build software that supports OSLC, you should be familiar with the following concepts:

## Linked Data

[Linked data](http://www.w3.org/DesignIssues/LinkedData.html) is the main technical foundation of all of our specifications. The video below provides a brief overview of the value of linked data and how we implement it with OSLC:

{{< youtube 40mjwqGEKBU >}}

If you're new to linked data and RDF, we've put together [a playlist of videos](http://open-services.net/resources/videos/linked-data-and-rdf-overview-playlist/) that can help you catch up.

## RESTful web architecture and HTTP

You should be familiar with designing [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer#Central_principle) applications.

For a quick primer, we recommend [“Learn REST” by Dr. M. Elkstein](http://rest.elkstein.org/), particularly these sections:

* [What is REST?](http://rest.elkstein.org/2008/02/what-is-rest.html)
* [REST as Lightweight Web Services](http://rest.elkstein.org/2008/02/rest-as-lightweight-web-services.html)
* [How Simple is REST?](http://rest.elkstein.org/2008/02/how-simple-is-rest.html)
* [More Complex REST Requests](http://rest.elkstein.org/2008/02/more-complex-rest-requests.html)
* [REST Server Responses](http://rest.elkstein.org/2008/02/rest-server-responses.htmls)

For OSLC implementations, you must use [HTTP protocol](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol).

## RDF, Turtle, JSON, and HTML

We require services and resources to be represented in [RDF](http://www.w3.org/RDF/), but you might prefer to supplement that with a variety of machine-readable and human-readable formats like Turtle, JSON, or HTML.

Instead of string parsing and regular expressions, you will definitely want to explore using an RDF parser such as [Apache Jena](http://jena.apache.org/).

## OAuth

OSLC does not require OAuth, but it is the most common approach for managing authentication between clients.

# Services, resources and design patterns

The [OSLC Core specification](http://open-services.net/bin/view/Main/OslcCoreSpecification) defines the basic patterns and protocols that any OSLC software must implement. The other workgroups define additional resources or extend existing ones, but they do not add new protocols.

Here are the major resources defined in the [OSLC Core specification](http://open-services.net/bin/view/Main/OslcCoreSpecification):

| Resource or Pattern | Description | More information |
|----------|----------------------|--------------------|
| Service Provider | A resource that describes a collection of resources and tells you how to create new resources, find existing resources, or expose a user interface to do either | [OSLC Primer: Service Provider](http://open-services.net/resources/tutorials/oslc-primer/serviceprovider/) |
| Resource Paging | A pattern to break long lists of resources into smaller pages, and provide a URL for the next page | [OSLC Primer: Resource Paging](http://open-services.net/resources/tutorials/oslc-primer/resource-paging/) |
| Queries | Standard query string patterns to retrieve a subset of resources or properties | [OSLC Primer: Query mechanisms](http://open-services.net/resources/tutorials/oslc-primer/query-mechanisms/) |
| Resource Shapes | Documents that define and describe the properties a resources should have, including acceptable values, cardinality, and whether or not those properties are required | [OSLC Primer: Resource Shapes](http://open-services.net/resources/tutorials/oslc-primer/resourceshapes/) |
| Creation Factory | A service that creates new resources and (via HTTP POST) and may also provide the Resource Shape for new resources | [Core 2.0: Creation Factories](http://open-services.net/bin/view/Main/OslcCoreSpecification?sortcol=table;table=up;up=#Creation_Factories) |
| Service Provider Catalog | A resources that lists a set of ServiceProviders | [OSLC Primer: ServiceProvider](http://open-services.net/resources/tutorials/oslc-primer/serviceprovider/) |
| Delegated User Interface (UI) dialogs | A method for embedding an interface to create or find resources inside another tool | [OSLC Primer: Delegated UI dialogs](http://open-services.net/resources/tutorials/oslc-primer/delegated-user-interface-dialogs/) |
| UI Previews | A method for discovering and displaying a preview of a resource in another tool | [OSLC Primer: UI Preview](http://open-services.net/resources/tutorials/oslc-primer/ui-preview/) |

To explore some of our other specifications, the OSLC Core Workgroup maintains [a list of OSLC vocabularies and specifications](http://open-services.net/wiki/core/Vocabulary-index/) that includes relationship diagrams.

# Tools & SDKs

## Eclipse Lyo

The [Eclipse Lyo](http://www.eclipse.org/lyo/) project has a variety of tools to help you adopt OSLC specifications:

* [OSLC4J](http://wiki.eclipse.org/Lyo/LyoOSLC4J): a Java SDK for OSLC providers and consumers that lets you define OSLC resources and convert them to Java objects
* [Perl libraries and samples](http://wiki.eclipse.org/Lyo/LyoPerl): modules for Perl for interacting with OSLC providers, including [the Net-OSLC PERL library](http://arroway.github.com/Net-OSLC-CM/)
* [Test Suites](http://wiki.eclipse.org/Lyo/LyoTestSuite): test if your OSLC applications complies with the requirements of our specifications
* [Tracked Resource Set SDK](http://wiki.eclipse.org/Lyo/TRSSDK): a test suite, toolkit, and sample application for the Tracked Resource Set specification

**You do not have to use the Eclipse application to use Eclipse Lyo**: Although much of the documentation assumes you will be using Eclipse, the source code is available in [a Git repository](http://git.eclipse.org/c/?q=lyo) and much of it does not require the Eclipse application to work.

# Sample applications and code

If you'd like to explore some existing code, there are a variety of samples and existing applications available.

The Communications Workgroup has [a list of Open Source OSLC projects](http://open-services.net/wiki/communications/Open-source-software-and-tools/) (along with their licenses).

If you'd like to explore a basic application that provides OSLC Service Provider resources and UI previews, Vijay Kalangumvathakkal of developerWorks [has some simple applications available to download and try out](https://www.ibm.com/developerworks/mydeveloperworks/blogs/69ec672c-dd6b-443d-add8-bb9a9a490eba/entry/build_your_own_serviceprovider_that_provides_resource_preview_based_on_oslc_specifications_in_no_time4?lang=en).

Our [tutorial](http://open-services.net/resources/tutorials/integrating-products-with-oslc/) walks you through [a working adapter that adds OSLC Change Management support to Bugzilla and a simple consumer application](http://open-services.net/resources/tutorials/integrating-products-with-oslc/running-the-examples/).

Finally, many of the software development kits include sample applications. [The OSLC4J component of Eclipse Lyo](http://wiki.eclipse.org/Lyo/BuildingOSLC4J) has a variety of applications:

* a stock quote sample applications
* a Change Management provider
* a Quality Management provider
* an Automation provider
* the aforementioned Bugzilla Change Management adapter

The [Lyo Client component](http://wiki.eclipse.org/Lyo/BuildClient) in Eclipse Lyo includes additional APIs and sample code that addresses a variety of common OSLC use cases including login, OAuth, service discovery, and queries.

The [OSLC4Net](http://oslc4net.codeplex.com/) project includes sample applications if you favor .NET/C#.

# OSLC Open Source Node.js Projects

Eclipse/Lyo provides a set of Java based APIs and generative tools to support the creation of OSLC domain servers and integrated client applications. While Eclipse/Lyo provides a very rich and robust platfrom for OSLC development, it has a relatively high learning curve and that can increase development time, costs and risks.

OSLC4JS represents a set of related Open Source projects supporting the creation and integration of OSLC based client and server applications that leverage the dynamic and asynchronous capabilities of JavaScript and Node.js. The LDP Service and OSLC Service projects provide Express.js middleware components that can be used to add LDP and/or OSLC services to any Express Web application. The OSLC Browser and OSLC Server projects use these services to create sample OSLC client and server apps that can easily and dynamically adapted to any OSLC domain, extensions to domains, and/or integrations between domains.

OSLC4JS's goal is to minimize the cost of developing the OSLC specifications, reference implementation and test suites. The OASIS OSLC specifications would also benefit from a reference implementation in dynamic language such as JavaScript.

## The OSLC4JS Projects

The following sections provide a brief description of each OSLC4J sub-project and provide links to the development sites and related work products. The figure below shows the relationship between the modules created in the projects, and how they are assembled into a Web application.

![Image OSLC4JS Schematic](/img/OSLC4JS-schematic.png "OSLC4JS Schematic")

Adapter middleware in the figure represents some Express.js middleware component that provides CRUD access to some existing data source. This provides a simple way for vendors to provide OSLC access to their data sources without having to implement the details of OSLC and/or LDP.

A [oslc4js Slack Channel](https://openintegrations.slack.com/archives/oslc4js) has been created to facilitate collaborative development of these Open Source Projects.

| Project | Description | More information |
|---------|------------ |------------------|
| [OSLC Browser](http://oslc.github.io/developing-oslc-applications/oslc-open-source-node-projects.html) | A sample OSLC Web application that uses the OSLC Service to provide a means of browsing OSLC resources. OSLC Browser allows you to configure a connection pool of contributing OSLC servers, and provides a convenient means of browsing the content contributed by those servers. The federation of thigs information is supported by the OSLC service with can also support OSLC domains, extension to domains, integration between domains. This allows the OSLC Browser to act as a federation hub for OSLC resources where stakeholder viewpoints, views (i.e., active dashboards) can be created to support integration needs. | [Mural Design](https://app.mural.ly/t/ibm14/m/ibm14/1452806819730) Wiki Track & Plan Bluemix App app route |
| [OSLC Client API](https://github.com/OSLC/oslc-client) | A simple Node.js asynchronous OSLC client API to facilitate rich application development in JavaScript. This API may be attractive to client developers who wish to access OSLC capabilities and resources through a more logical API abstraction rather than more raw REST services. | [Wiki](https://github.com/OSLC/oslc-client/wiki) [Track & Plan](https://hub.jazz.net/project/jamsden/oslc-client/track) npm package|
| [OSLC Service](https://github.com/OSLC/oslc-service) | A generic Node.js Express middleware OSLC 3.0 service that can support any domain and can be easily adapted to any applicable data source. This services also utilizes the LDP Service. | [Wiki](https://github.com/OSLC/oslc-service/wiki) [Track & Plan](https://hub.jazz.net/project/jamsden/oslc-service/track) npm package |
| [OSLC Server](https://github.com/OSLC/oslc-server) | A minimal OSLC server that uses the oslc-service and ldp-service and can be accessed using a browser REST client. An instance of this server is deployed to IBM Bluemix in order to provide a platform for OSLC experimentation and testing. | [Wiki](https://github.com/OSLC/oslc-server/wiki) [Track & Plan](https://hub.jazz.net/project/jamsden/oslc-server/track) [Bluemix App](https://console.ng.bluemix.net/?direct=classic/#/resources/appGuid=08af38ec-37f9-4138-9fb6-3775bb56f27e&orgGuid=c4aaef36-b968-446f-9e72-d26046d28c9a&spaceGuid=b07e4db6-9a60-4423-b233-873e6e443fd6) [app route](http://oslc-server.mybluemix.net/) |
| [LDP App](https://github.com/OSLC/ldp-app) | A sample Linked Data Platform (LDP) Web application that uses the LDP Service and supports CRUD operations and a graph of linked data. | [Wiki](https://github.com/OSLC/ldp-app/wiki) [Track & Plan](https://hub.jazz.net/project/jamsden/ldp-app/track) [Bluemix App](https://console.ng.bluemix.net/?direct=classic/#/resources/appGuid=f9ff4bb4-2732-4e99-86e8-613fafe67d53&orgGuid=c4aaef36-b968-446f-9e72-d26046d28c9a&spaceGuid=b07e4db6-9a60-4423-b233-873e6e443fd6) [app route](http://ldp-app.mybluemix.net/) |
| [LDP Service](https://github.com/OSLC/ldp-service) | Express middleware providing LDP capabilities to Web apps, with storage of JSON-DL in MongoDB. | [Wiki](https://github.com/OSLC/ldp-service/wiki) [Track & Plan](https://hub.jazz.net/project/jamsden/ldp-service/track) [npm package](https://www.npmjs.com/package/ldp-service) |
