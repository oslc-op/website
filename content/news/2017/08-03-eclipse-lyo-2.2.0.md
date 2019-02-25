+++
category = "announcements"
date = "2017-08-03T18:17+02:00"
author = "Andrew Berezovskyi"
author_uri = "https://github.com/berezovskyi/"
tags = []
title = "Eclipse Lyo 2.2.0 release"
banner = "img/news-default.jpg"
url = "news/2017-eclipse-lyo-2.2.0/"
+++

We are delighted to announce today the Lyo 2.2.0 release! The artefacts are available immediately from the [Eclipse maven repository][1], the Lyo Toolchain Designer is available for download from the [Lyo P2 update site][2].

Main features of the 2.2.0 release are:

✨ **Lyo Toolchain Designer plugin**

The Lyo Toolchain Designer plugin is now officially released as part of the Lyo project. Toolchain Designer allows you to graphically model a complete OSLC toolchain (including interactions between OSLC servers and clients), as well as a single server and/or client. From such models, the Lyo Code Generator can then automatically generate an almost complete OSLC4J-compliant Java web project. To model and generate your first toolchain, follow the [Lyo Designer tutorial](https://wiki.eclipse.org/Lyo/ToolchainModellingAndCodeGenerationWorkshop).

✨ **Lyo Store**

Lyo Store allows you to persist OSLC resources into SPARQL triplestore of your choice, through ORM-like operations. Lyo Store can be used to provide capabilities such as caching, SPARQL queries, etc. Start by going through an [introductory Lyo Store tutorial](https://wiki.eclipse.org/Lyo/Store).

🔥 **Maven only**

OSLC4J projects rely now only on Maven for configuration. If you work from source code using Eclipse, please follow the [instructions][3] for working [from source][4].

🔧 **Fixes**

Logging has been fixed (Bug 513477): the logging library implementation (eg slf4j-log4j12) is not included in the JARs now (also all direct uses of Log4j have been rewritten to use SLF4J API). We also work around old Jena versions that bundle logging library implementations. In order to make sure that no logging messages disappear from your applications, make sure to include at least one SLF4J logging backend in your application (and configure it if needed). If you have a Log4j configuration file in your application, you can add the drop-in dependency towards slf4j-log4j12 to have logging work as before. If you are just starting with a new application, we recommend you to try slf4j-simple, which requires zero configuration.

The following bugs were fixed:

* Bug 517298 - Generated createResourceShape method on a Resource class produces wrong URIs
* Bug 494933 - Architecture resource and link type resources not possible to unmarshall
* Bug 517338 - GET requests to obtain RDF/XML representations of resourceShapes are no longer available
* Bug 518269 - Add a system property to always use RDF/XML-ABBREV for ServiceProvider resources
* Bug 518805 - Generated service class needs to set OSLC-Core-Version header
* Bug 430390 - Missing call to resolve path parameters in method-path annotation for CreationFactory annotation
* Bug 519818 - Update jena-core version to 2.13 in all projects


Best regards,
Andrew, Jad, and Jim

[1]: https://repo.eclipse.org/content/repositories/lyo-releases/org/eclipse/lyo/
[2]: http://download.eclipse.org/lyo/p2/releases/2.2.0
[3]: https://wiki.eclipse.org/Lyo/ContributorsGettingStarted
[4]: https://wiki.eclipse.org/Lyo/modelling_and_generation/working_from_source_code