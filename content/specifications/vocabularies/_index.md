+++
title = "OSLC Vocabularies"
date = "2017-10-02T18:23:03+02:00"

+++

The purpose of this page is to provide a single index of all the vocabulary documents on the OSLC website. Not all these vocabularies are from OASIS Standards. Some are references to current OSLC v2.0 domain specifications that have not yet been migrated to OASIS. Others are still under development and may change. Consult the corresponding specification to learn about its status. The process by which the domain namespaces are mapped to the RDF Schema and HTML documents is documented in the following documents:

* [OSLC Core URI Naming Guidance](https://wiki.oasis-open.org/oslc-core/URINamingGuidance)
* [Best Practice Recipes for Publishing RDF Vocabularies](http://www.w3.org/TR/swbp-vocab-pub/)
* [OSLC Core 3.0 Part 1: Overview specification#Resource Constraints](#resourceShapes)

The namespace for each domain is defined in the domain specification.

OSLC [version compatibility guidelines](http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part1-overview.html#versionCompatibility) specify that updated OSLC vocabularies should be backward compatible. That is, classes and properties can be added, or deprecated (archaic), but may not be changed or removed. Resource shapes on the other hand can be created to constrain these vocabularies for whatever purpose is needed, including the needs of the OSLC specifications themselves. As a result, new vocabularies published on this site should be compatible with the old vocabularies. Therefore, only the most recent version of the vocabularies are listed here, and linked to by the various OSLC core and domain namespace URIs.

# Namespaces

| Specification | Namespace | RDF Schema | HTML |
|---------------|-----------|------------|------|
| [Core 3.0](http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part1-overview.html) | [http://open-services.net/ns/core#](http://open-services.net/ns/core#) | [core.rdf](http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/cs01/vocab/core-vocab.ttl) | [Core 3.0 Vocabulary](http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part7-core-vocabulary.html) |
| [Config 1.0](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/config/oslc-config-mgt.html) | [http://open-services.net/ns/config#](http://open-services.net/ns/config#) | [config-vocab.ttl](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/config/config-vocab.ttl) | [Configuration Management Vocabulary](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/config/config-vocab.html) |
| [RM 2.0](https://www.oasis-open.org/committees/download.php/61072/Requirements%20Management%202.0%20Final.pdf) | [http://open-services.net/ns/rm#](http://open-services.net/ns/rm#) | [rm.rdf](https://github.com/oasis-tcs/oslc-domains/blob/master/open-services-vocabs/rm.rdf) | [Requirements Management Vocabulary](http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/rm/requirements-management-vocab.html) |
| [CM 3.0](http://docs.oasis-open.org/oslc-domains/cm/v3.0/cm-v3.0-part1-change-mgt.html) | [http://open-services.net/ns/cm#](http://open-services.net/ns/cm#) | [change-management-vocab.ttl](https://github.com/oasis-tcs/oslc-domains/blob/master/cm/change-mgt-vocab.ttl) | [Change Management Vocabulary](http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/cm/change-mgt-vocab.html) |
| [QM 2.0](https://www.oasis-open.org/committees/download.php/61711/QmSpecificationV2.pdf) | [http://open-services.net/ns/qm#](http://open-services.net/ns/qm#) | [qm.rdf](https://github.com/oasis-tcs/oslc-domains/blob/master/open-services-vocabs/qm.rdf) | [Quality Management Vocabulary](http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/qm/quality-management-vocab.html) |
| [AM 2.0](https://www.oasis-open.org/committees/download.php/61061/Architecture%20Management%202.0%20Final.pdf) | [http://open-services.net/ns/am#](http://open-services.net/ns/am#) | [am.rdf](https://github.com/oasis-tcs/oslc-domains/blob/master/open-services-vocabs/am.rdf) | [Architecture Management Vocabulary](http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/am/architecture-management-vocab.html) |
| [Asset 2.0](https://www.oasis-open.org/committees/download.php/61063/Asset%20Management%202.0%20Final.pdf) | [http://open-services.net/ns/asset#](http://open-services.net/ns/asset#) | [asset.rdf](https://github.com/oasis-tcs/oslc-domains/blob/master/open-services-vocabs/asset.rdf) | [Asset Management Vocabulary](http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/asset/asset-management-vocab.html) |
| [Automation 2.0](https://www.oasis-open.org/committees/download.php/61052/Automation%202.0%20Final.pdf) | [http://open-services.net/ns/auto#](http://open-services.net/ns/auto#) | [auto.rdf](https://github.com/oasis-tcs/oslc-domains/blob/master/open-services-vocabs/auto.rdf) | [Automation Vocabulary](http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/auto/automation-vocab.html) |
| [PerfMon 2.0](https://www.oasis-open.org/committees/download.php/61067/Performance%20Monitoring%202.0%20Final.pdf) | [http://open-services.net/ns/perfmon#](http://open-services.net/ns/perfmon#) | [perfmon.rdf](https://github.com/oasis-tcs/oslc-domains/blob/master/open-services-vocabs/perfmon.rdf) | [Performance Monitoring Vocabulary](http://htmlpreview.github.io/?https://github.com/oasis-tcs/oslc-domains/blob/master/pm/performance-monitoring-vocab.html) |
| [PROMCODE 1.0](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-promcode/WorkingDrafts/promcode-interface-v1.0-wd01_Chapter3.docx) |  |  |  |




