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

### OSLC Core

| Property                | Value                             |
| ----------------------: | :---------------------------------|
| **Deployed vocabulary** | Core 2.0 Final                     |
| **Publication date**    | ???                               |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`core`                             |
| **Namespace URI**       |`http://open-services.net/ns/core#`|
| **Turtle prefix**       |`@prefix core: <http://open-services.net/ns/core#>`|
| **SPARQL prefix**       |`PREFIX core: <http://open-services.net/ns/core#>` |
| **OSLC Query prefix**   |`core%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fcore%23` |
| **Specified Vocabulary**| [Core 2.0 Final vocabulary][core]     |

### OSLC Change Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | CM 2.0 Final                                   |
| **Publication date**    | ???                                            |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_cm`                                           |
| **Namespace URI**       |`http://open-services.net/ns/cm#`                   |
| **Turtle prefix**       |`@prefix oslc_cm: <http://open-services.net/ns/cm#>`|
| **SPARQL prefix**       |`PREFIX oslc_cm: <http://open-services.net/ns/cm#>` |
| **OSLC Query prefix**   |`oslc_cm%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fcm%23` |
| **Specified Vocabulary**| [CM 2.0 Final vocabulary][cm]                          |

### OSLC Requirements Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | RM 2.0 Final                                   |
| **Publication date**    | 21 September 2012                                  |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_rm`                                           |
| **Namespace URI**       |`http://open-services.net/ns/rm#`                   |
| **Turtle prefix**       |`@prefix oslc_rm: <http://open-services.net/ns/rm#>`|
| **SPARQL prefix**       |`PREFIX oslc_rm: <http://open-services.net/ns/rm#>` |
| **OSLC Query prefix**   |`oslc_rm%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Frm%23` |
| **Specified Vocabulary**| [RM 2.0 Final vocabulary][rm]                          |

### OSLC Quality Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | QM 2.0 Final                                   |
| **Publication date**    | 26 May 2011                                  |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_qm`                                           |
| **Namespace URI**       |`http://open-services.net/ns/qm#`                   |
| **Turtle prefix**       |`@prefix oslc_qm: <http://open-services.net/ns/qm#>`|
| **SPARQL prefix**       |`PREFIX oslc_qm: <http://open-services.net/ns/qm#>` |
| **OSLC Query prefix**   |`oslc_qm%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fqm%23` |
| **Specified Vocabulary**| [QM 2.0 Final vocabulary][qm]                          |

### OSLC Config

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | CfgM 1.0 WD 01 (14 Sep 2019)                   |
| **Status**              | **<span style="color: #f1c40f">DRAFT</span>**  |
| **Recommended prefix**  |`oslc_config`                                   |
| **Namespace URI**       |`http://open-services.net/ns/config#`           |
| **Turtle prefix**       |`@prefix oslc_config: <http://open-services.net/ns/config#>`|
| **SPARQL prefix**       |`PREFIX oslc_config: <http://open-services.net/ns/config#>` |
| **OSLC Query prefix**   |`oslc_config%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fconfig%23` |
| **Specified Vocabulary**| [CfgM 1.0 WD 01 vocabulary][config]                          |


### Linked Data Basic Profile

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Status**              | **<span style="color: #e74c3c">OBSOLETE</span>**|
| **Recommended prefix**  | `ldbp`                                           |
| **Namespace URI**       | `http://open-services.net/ns/basicProfile#`      |
| **See**                 | [https://www.w3.org/TR/ldp/](https://www.w3.org/TR/ldp/) |


[core]: https://archive.open-services.net/bin/view/Main/OslcCoreSpecification.html
[cm]: https://archive.open-services.net/bin/view/Main/CmSpecificationV2.html#CM_Resource_Definitions
[rm]: https://archive.open-services.net/bin/view/Main/RmSpecificationV2.html#RM_Resource_Definitions
[qm]: https://archive.open-services.net/bin/view/Main/QmSpecificationV2.html#QM_Resource_Definitions
[config]: https://oslc-op.github.io/oslc-specs/specs/config/config-vocab.html

> **NB!** All namespace URIs support content negotiation. Acceptable RDF MIME types:
>
> - `text/turtle`
> - `application/ld+json`
> - `application/rdf+xml`
> - `application/n+triples`

## Other OSLC Namespaces

There may be many other domain vocabularies that are for whatever reason, not currently on an OASIS standards track. This could include:

* Old open-services.net documents and vocabulary namespaces that were never completed.
* Existing open-services.net documents and vocabularies that were at least partially completed, but are not currently targeted for migration to OASIS.
* New experimental domains that the OSLC community might find useful
* Namespaces used by existing tool implementations that should be preserved

In order to foster open integration, we will allow additional domain vocabularies (ontology) and resource shapes to be published on open-services.net. The open-services.net administrator will review these vocabularies and publish them upon community request. These will be listed in the following table to help interested parties know what namespace names people are working on in order to avoid potential collisions.

| Document | Namespace | RDF Schema | HTML |
|----------|-----------|------------|------|
| [AM 2.1](http://docs.oasis-open.org/oslc-domains/oslc-am/v2.1/oslc-am-v2.1-part1-architecture-management-spec.html) | [http://open-services.net/ns/am#](http://open-services.net/ns/am#) | [architecture-management-vocab.rdf](http://open-services.net/ns/am/architecture-management-vocab.rdf) | [Architecture Management Vocabulary](http://docs.oasis-open.org/oslc-domains/oslc-am/v2.1/oslc-am-v2.1-part2-architecture-management-vocab.html) |
| [Asset 2.1](https://rawgit.com/oasis-tcs/oslc-domains/master/asset/asset-management-spec.html) | [http://open-services.net/ns/asset#](http://open-services.net/ns/asset#) | [asset-management-vocab.rdf](http://open-services.net/ns/asset/asset-management-vocab.rdf) | [Asset Management Vocabulary](https://rawgit.com/oasis-tcs/oslc-domains/master/asset/asset-management-vocab.html) |
| [Automation 2.1](https://rawgit.com/oasis-tcs/oslc-domains/master/auto/automation-spec.html) | [http://open-services.net/ns/auto#](http://open-services.net/ns/auto#) | [automation-vocab.rdf](http://open-services.net/ns/auto/automation-vocab.rdf) | [Automation Vocabulary](https://rawgit.com/oasis-tcs/oslc-domains/master/auto/automation-vocab.html) |
| [PerfMon 2.1](https://rawgit.com/oasis-tcs/oslc-domains/master/perfmon/performance-monitoring-spec.html) | [http://open-services.net/ns/perfmon#](http://open-services.net/ns/perfmon#) | [performance-monitoring-vocab.rdf](http://open-services.net/ns/perfmon/performance-monitoring-vocab.rdf) | [Performance Monitoring Vocabulary](https://rawgit.com/oasis-tcs/oslc-domains/master/perfmon/performance-monitoring-vocab.html) |
| [PROMCODE 1.0](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-promcode/WorkingDrafts/promcode-interface-v1.0-wd01_Chapter3.docx) |  |  |  |
| [Estimation and Measurement](https://www.oasis-open.org/committees/document.php?document_id=61066&wg_abbrev=oslc-domains) | http://open-services.net/ns/ems# | [ems.rdf](../../ns/ems/ems.rdf) | |

