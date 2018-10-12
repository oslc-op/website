+++
title = "OSLC Vocabularies"
date = "2017-10-02T18:23:03+02:00"
heroTitle = "OSLC Vocabularies"
heroSubtitle = ""

+++
## Introduction

The purpose of this page is to provide a single index of all the vocabulary documents on the OSLC website. Not all these vocabularies are from OASIS Standards. Some are references to current OSLC v2.0 domain specifications that have not yet been migrated to OASIS. Others are still under development and may change. Consult the corresponding specification to learn about its status. The process by which the domain namespaces are mapped to the RDF Schema and HTML documents is documented in the following documents:

* [OSLC Core URI Naming Guidance](https://wiki.oasis-open.org/oslc-core/URINamingGuidance)
* [Best Practice Recipes for Publishing RDF Vocabularies](http://www.w3.org/TR/swbp-vocab-pub/)
* [OSLC Core 3.0 Part 1: Overview specification#Resource Constraints](#resourceShapes)

The namespace for each domain is defined in the domain specification.

OSLC [version compatibility guidelines](http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part1-overview.html#versionCompatibility) specify that updated OSLC vocabularies should be backward compatible. That is, classes and properties can be added, or deprecated (archaic), but may not be changed or removed. Resource shapes on the other hand can be created to constrain these vocabularies for whatever purpose is needed, including the needs of the OSLC specifications themselves. As a result, new vocabularies published on this site should be compatible with the old vocabularies. Therefore, only the most recent version of the vocabularies are listed here, and linked to by the various OSLC core and domain namespace URIs.

## Standard Namespaces

| Specification | Namespace | RDF Schema | HTML |
|---------------|-----------|------------|------|
| [Core 3.0](http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part1-overview.html) | [http://open-services.net/ns/core#](http://open-services.net/ns/core#) | [core-vocab.rdf](http://open-services.net/ns/core/core-vocab.rdf) | [Core 3.0 Vocabulary](http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part7-core-vocabulary.html) |
| [Config 1.0](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/config/oslc-config-mgt.html) | [http://open-services.net/ns/config#](http://open-services.net/ns/config#) | [config-vocab.rdf](http://open-services.net/ns/config/config-vocab.rdf) | [Configuration Management Vocabulary](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/config/config-vocab.html) |
| [RM 2.1](http://docs.oasis-open.org/oslc-domains/oslc-rm/v2.1/oslc-rm-v2.1-part1-requirements-management-spec.html) | [http://open-services.net/ns/rm#](http://open-services.net/ns/rm#) | [requirements-management-vocab.rdf](http://open-services.net/ns/rm/requirements-management-vocab.rdf) | [Requirements Management Vocabulary](http://docs.oasis-open.org/oslc-domains/oslc-rm/v2.1/oslc-rm-v2.1-part2-requirements-management-vocab.html) |
| [CM 3.0](http://docs.oasis-open.org/oslc-domains/cm/v3.0/cm-v3.0-part1-change-mgt.html) | [http://open-services.net/ns/cm#](http://open-services.net/ns/cm#) | [change-mgt-vocab.rdf](http://open-services.net/ns/cm/change-mgt-vocab.rdf) | [Change Management Vocabulary](http://docs.oasis-open.org/oslc-domains/cm/v3.0/cm-v3.0-part2-change-mgt-vocab.html) |
| [QM 2.1](https://rawgit.com/oasis-tcs/oslc-domains/master/qm/quality-management-spec.html) | [http://open-services.net/ns/qm#](http://open-services.net/ns/qm#) | [quality-management-vocab.rdf](http://open-services.net/ns/qm/quality-management-vocab.rdf) | [Quality Management Vocabulary](https://rawgit.com/oasis-tcs/oslc-domains/master/qm/quality-management-vocab.html) |
| [AM 2.1](http://docs.oasis-open.org/oslc-domains/oslc-am/v2.1/oslc-am-v2.1-part1-architecture-management-spec.html) | [http://open-services.net/ns/am#](http://open-services.net/ns/am#) | [architecture-management-vocab.rdf](http://open-services.net/ns/am/architecture-management-vocab.rdf) | [Architecture Management Vocabulary](http://docs.oasis-open.org/oslc-domains/oslc-am/v2.1/oslc-am-v2.1-part2-architecture-management-vocab.html) |
| [Asset 2.1](https://rawgit.com/oasis-tcs/oslc-domains/master/asset/asset-management-spec.html) | [http://open-services.net/ns/asset#](http://open-services.net/ns/asset#) | [asset-management-vocab.rdf](http://open-services.net/ns/asset/asset-management-vocab.rdf) | [Asset Management Vocabulary](https://rawgit.com/oasis-tcs/oslc-domains/master/asset/asset-management-vocab.html) |
| [Automation 2.1](https://rawgit.com/oasis-tcs/oslc-domains/master/auto/automation-spec.html) | [http://open-services.net/ns/auto#](http://open-services.net/ns/auto#) | [automation-vocab.rdf](http://open-services.net/ns/auto/automation-vocab.rdf) | [Automation Vocabulary](https://rawgit.com/oasis-tcs/oslc-domains/master/auto/automation-vocab.html) |
| [PerfMon 2.1](https://rawgit.com/oasis-tcs/oslc-domains/master/perfmon/performance-monitoring-spec.html) | [http://open-services.net/ns/perfmon#](http://open-services.net/ns/perfmon#) | [performance-monitoring-vocab.rdf](http://open-services.net/ns/perfmon/performance-monitoring-vocab.rdf) | [Performance Monitoring Vocabulary](https://rawgit.com/oasis-tcs/oslc-domains/master/perfmon/performance-monitoring-vocab.html) |
| [PROMCODE 1.0](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-promcode/WorkingDrafts/promcode-interface-v1.0-wd01_Chapter3.docx) |  |  |  |


## Other OSLC Namespaces

There may be many other domain vocabularies that are for whatever reason, not currently on an OASIS standards track. This could include:

* Old open-services.net documents and vocabulary namespaces that were never completed.
* Existing open-services.net documents and vocabularies that were at least partially completed, but are not currently targeted for migration to OASIS.
* New experimental domains that the OSLC community might find useful
* Namespaces used by existing tool implementations that should be preserved

In order to foster open integration, we will allow additional domain vocabularies (ontology) and resource shapes to be published on open-services.net. The open-services.net administrator will review these vocabularies and publish them upon community request. These will be listed in the following table to help interested parties know what namespace names people are working on in order to avoid potential collisions.

| Document | Namespace | RDF Schema | HTML |
|----------|-----------|------------|------|
| [Estimation and Measurement](https://www.oasis-open.org/committees/document.php?document_id=61066&wg_abbrev=oslc-domains) | http://open-services.net/ns/ems# | [ems.rdf](../../ns/ems/ems.rdf) | |

