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
* [OSLC Core 3.0 Part 1: Overview s#Resource Constraints](https://open-services.net/spec/core/latest#resourceShapes)

The namespace for each domain is defined in the domain specification.

OSLC [version compatibility guidelines](https://open-services.net/spec/core/latest#versionCompatibility) specify that updated OSLC vocabularies should be backward compatible. That is, classes and properties can be added, or deprecated (archaic), but may not be changed or removed. Resource shapes on the other hand can be created to constrain these vocabularies for whatever purpose is needed, including the needs of the OSLC specifications themselves. As a result, new vocabularies published on this site should be compatible with the old vocabularies. Therefore, only the most recent version of the vocabularies are listed here, and linked to by the various OSLC core and domain namespace URIs.

## Standard Namespaces

### OSLC Core

| Property                | Value                             |
| ----------------------: | :---------------------------------|
| **Deployed vocabulary** | Core 3.0 PS01                    |
| **Publication date**    | 17 September 2020                       |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc`                             |
| **Namespace URI**       |`http://open-services.net/ns/core#`|
| **Turtle prefix**       |`@prefix oslc: <http://open-services.net/ns/core#>`|
| **SPARQL prefix**       |`PREFIX oslc: <http://open-services.net/ns/core#>` |
| **OSLC Query prefix**   |`oslc%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fcore%23` |
| **Specified Vocabulary**| [Core 3.0 Vocabulary](https://docs.oasis-open-projects.org/oslc-op/core/v3.0/ps01/core-vocab.html)     |

### OSLC Change Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | CM 3.0 PS01                                   |
| **Publication date**    | 17 September 2020          |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**     |
| **Recommended prefix**  |`oslc_cm`                                           |
| **Namespace URI**       |`http://open-services.net/ns/cm#`                   |
| **Turtle prefix**       |`@prefix oslc_cm: <http://open-services.net/ns/cm#>`|
| **SPARQL prefix**       |`PREFIX oslc_cm: <http://open-services.net/ns/cm#>` |
| **OSLC Query prefix**   |`oslc_cm%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fcm%23` |
| **Specified Vocabulary**| [CM 3.0 Vocabulary](https://docs.oasis-open-projects.org/oslc-op/core/v3.0/ps01/core-vocab.html)  |

### OSLC Requirements Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | RM 2.1 PS01                                   |
| **Publication date**    | 03 September 2020                                  |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_rm`                                           |
| **Namespace URI**       |`http://open-services.net/ns/rm#`                   |
| **Turtle prefix**       |`@prefix oslc_rm: <http://open-services.net/ns/rm#>`|
| **SPARQL prefix**       |`PREFIX oslc_rm: <http://open-services.net/ns/rm#>` |
| **OSLC Query prefix**   |`oslc_rm%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Frm%23` |
| **Specified Vocabulary**| [RM 2.1 Vocabulary](https://docs.oasis-open-projects.org/oslc-op/rm/v2.1/ps01/requirements-management-vocab.html)                          |

### OSLC Quality Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | QM 2.1 PS01                                   |
| **Publication date**    | 27 August 2020                                  |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_qm`                                           |
| **Namespace URI**       |`http://open-services.net/ns/qm#`                   |
| **Turtle prefix**       |`@prefix oslc_qm: <http://open-services.net/ns/qm#>`|
| **SPARQL prefix**       |`PREFIX oslc_qm: <http://open-services.net/ns/qm#>` |
| **OSLC Query prefix**   |`oslc_qm%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fqm%23` |
| **Specified Vocabulary**| [QM 2.1 Vocabulary](https://docs.oasis-open-projects.org/oslc-op/qm/v2.1/ps01/quality-management-vocab.html)                          |

### OSLC Configuration Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | CfgM 1.0 WD 01 (14 September 2019)                   |
| **Status**              | **<span style="color: #f1c40f">DRAFT</span>**  |
| **Recommended prefix**  |`oslc_config`                                   |
| **Namespace URI**       |`http://open-services.net/ns/config#`           |
| **Turtle prefix**       |`@prefix oslc_config: <http://open-services.net/ns/config#>`|
| **SPARQL prefix**       |`PREFIX oslc_config: <http://open-services.net/ns/config#>` |
| **OSLC Query prefix**   |`oslc_config%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fconfig%23` |
| **Specified Vocabulary**| [CfgM 1.0 WD 01 vocabulary][config]                          |

### OSLC Architecture Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | AM 3.0 PSD01                  |
| **Publication date**    | 17 September 2020                              |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_am`                                   |
| **Namespace URI**       |`http://open-services.net/ns/am#`           |
| **Turtle prefix**       |`@prefix oslc_am: <http://open-services.net/ns/am#>`|
| **SPARQL prefix**       |`PREFIX oslc_am: <http://open-services.net/ns/am#>` |
| **OSLC Query prefix**   |`oslc_am%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fam%23` |
| **Specified Vocabulary**| [AM 3.0 Vocabulary](https://docs.oasis-open-projects.org/oslc-op/am/v3.0/psd01/architecture-management-vocab.html)                          |

### OSLC Asset Management

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | Asset 2.0 Final                  |
| **Publication date**    | 25 September 2012                              |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_asset`                                   |
| **Namespace URI**       |`http://open-services.net/ns/asset#`           |
| **Turtle prefix**       |`@prefix oslc_asset: <http://open-services.net/ns/asset#>`|
| **SPARQL prefix**       |`PREFIX oslc_asset: <http://open-services.net/ns/asset#>` |
| **OSLC Query prefix**   |`oslc_asset%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fasset%23` |
| **Specified Vocabulary**| [Asset 2.0 vocabulary][asset]                          |

### OSLC Automation

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | Automation 2.1 PSD01                  |
| **Publication date**    | 22 January 2013 (errata 17 July 2014)                                  |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>**|
| **Recommended prefix**  |`oslc_auto`                                   |
| **Namespace URI**       |`http://open-services.net/ns/auto#`           |
| **Turtle prefix**       |`@prefix oslc_auto: <http://open-services.net/ns/auto#>`|
| **SPARQL prefix**       |`PREFIX oslc_auto: <http://open-services.net/ns/auto#>` |
| **OSLC Query prefix**   |`oslc_auto%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fauto%23` |
| **Specified Vocabulary**| [Automation 2.1 Vocabulary](https://docs.oasis-open-projects.org/oslc-op/auto/v2.1/psd01/automation-vocab.html)                          |

### OSLC Performance Monitoring

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | Performance Monitoring 2.0 Final                     |
| **Publication date**    | 31 January 2014                                |
| **Status**              | **<span style="color: #2ecc71">ACTIVE</span>** |
| **Recommended prefix**  |`pm`                                            |
| **Namespace URI**       |`http://open-services.net/ns/perfmon#`          |
| **Turtle prefix**       |`@prefix pm: <http://open-services.net/ns/perfmon#>`|
| **SPARQL prefix**       |`PREFIX pm: <http://open-services.net/ns/perfmon#>` |
| **OSLC Query prefix**   |`pm%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fperfmon%23` |
| **Specified Vocabulary**| [PerfMon 2.0 vocabulary][auto]                 |

### Linked Data Basic Profile

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Status**              | **<span style="color: #e74c3c">OBSOLETE</span>**|
| **Recommended prefix**  | `ldbp`                                           |
| **Namespace URI**       | `http://open-services.net/ns/basicProfile#`      |
| **See**                 | [https://www.w3.org/TR/ldp/](https://www.w3.org/TR/ldp/) |


[config]: https://oslc-op.github.io/oslc-specs/specs/config/config-vocab.html
[asset]: https://archive.open-services.net/wiki/asset-management/OSLC-Asset-Management-2.0-Specification/index.html#OSLC-Asset-Management-Resource-Definitions

> **NB!** All namespace URIs support content negotiation. Acceptable RDF MIME types:
>
> - `text/turtle`
> - `application/ld+json`
> - `application/rdf+xml`
> - `application/n-triples`

## Other OSLC Namespaces

This could include:

* Old open-services.net documents and vocabulary namespaces that were never completed.
* Existing open-services.net documents and vocabularies that were at least partially completed, but are not currently targeted for migration to OASIS.
* New experimental domains that the OSLC community might find useful
* Namespaces used by existing tool implementations that should be preserved

In order to foster open integration, we will allow additional domain vocabularies (ontology) and resource shapes to be published on open-services.net. The open-services.net administrator will review these vocabularies and publish them upon community request. These will be listed in the following table to help interested parties know what namespace names people are working on in order to avoid potential collisions.

### OSLC Estimation and Measurement

| Property                | Value                                          |
| ----------------------: | :----------------------------------------------|
| **Deployed vocabulary** | Estimation and Measurement 1.0 Draft           |
| **Publication date**    | 24 September 2014                              |
| **Status**              | **<span style="color: #f1c40f">DRAFT</span>**  |
| **Recommended prefix**  |`ems`                                           |
| **Namespace URI**       |`http://open-services.net/ns/ems#`          |
| **Turtle prefix**       |`@prefix ems: <http://open-services.net/ns/ems#>`|
| **SPARQL prefix**       |`PREFIX ems: <http://open-services.net/ns/ems#>` |
| **OSLC Query prefix**   |`ems%3Dhttp%3A%2F%2Fopen-services.net%2Fns%2Fems%23` |
| **Specified Vocabulary**| [EMS 1.0 vocabulary][ems]                      |

[ems]: https://archive.open-services.net/wiki/estimation-and-measurement/EMS-1.0-REST-API-Data-Model/index.html

### Unpublished vocabularies

- `crvt`: [Common IT Resource Type Vocabulary Version 2.0](https://archive.open-services.net/wiki/reconciliation/Common-IT-Resource-Type-Vocabulary-Version-2.0/index.html)
- `promcode`: [OSLC PROMCODE Specification Version 1.0](https://tools.oasis-open.org/version-control/svn/oslc-promcode/shape/trunk/spec.html#promcode-resource-definitions)
