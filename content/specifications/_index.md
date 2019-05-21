+++
title = "Specifications"
heroTitle = "Specifications"
heroSubtitle = ""
+++

The table below provides a convenient place to see the currently available OSLC specifications, their status, and links to the documents.  Many of these specifications are still under development so you should consult the actual documents for the most up to date information.

All OSLC specifications are governed by [OASIS Technical Committees](http://www.oasis-oslc.org) including:

* [OSLC Core Technical Committee](https://www.oasis-open.org/committees/oslc-core)
* [OSLC Domains Technical Committee](https://www.oasis-open.org/committees/oslc-domains)
* [OSLC PROMCODE Technical Committee](https://www.oasis-open.org/committees/oslc-promcode)

The titles below are abbreviated for convenience. The full titles a available from the linked documents. For multi-part specifications, typically only the main specification is listed. The other parts are available from that specification.

Status refers to the OASIS Standards Track Work Products in the [OASIS Naming Directives](http://docs.oasis-open.org/specGuidelines/ndr/namingDirectives.html#stage)

* Working Draft (WD) \[not approved, no official status\]
* Committee Specification Draft (CSD)
* Committee Specification Public Review Draft (CSPRD)
* Committee Specification (CS)
* Candidate OASIS Standard (COS)
* OASIS Standard (OS)
* *Final* Indicates an open-services.net OSLC specification that has not yet been migrated to OASIS.

Note: The open-services.net specifications that are being migrated to OASIS by the OSLC Domains TC are strictly a document maintenance exercise. That is, a *Final* open-service.net specification may appear as an OASIS CSD with different formatting, but will have the same specification normative content. Migration of these documents to OASIS will therefore have no impact on implementations. open-services.net specifications that do not yet have at least OASIS CSD status will reference the existing (PDF) open-services.net specification, and the status will be shown in *italics*.


**OSLC Core**

<a href="http://docs.oasis-open.org/oslc-core/oslc-core/v3.0/oslc-core-v3.0-part1-overview.html"><span class="label label-success">3.0 CS</span></a>

A collection of specifications that defines the basic patterns, protocols and capabilities of OSLC clients and servers.

**OSLC Query**

<a href="http://docs.oasis-open.org/oslc-core/oslc-query/v3.0/csprd01/oslc-query-v3.0-csprd01.html" title="Committee Specification Public Review Draft"><span class="label label-primary">3.0 CSPRD</span></a>
<a href="https://raw.githack.com/oslc-op/oslc-specs/master/specs/query/oslc-query.html"><span class="label label-info">3.0 WD</span></a>
<a href="https://archive.open-services.net/bin/view/Main/OSLCCoreSpecQuery.html"><span class="label label-default">2.0 Final</span></a>

Defines a simple, implementation independent selection and projection query capability.

**OSLC Tracked Resource Set**

<a href="https://raw.githack.com/oslc-op/oslc-specs/master/specs/trs/tracked-resource-set.html"><span class="label label-info">3.0 WD</span></a>
<a href="https://archive.open-services.net/wiki/core/TrackedResourceSet-2.0/"><span class="label label-default">2.0 Final</span></a>

Allows servers to expose a set of resources whose state can be tracked by clients.

<div class="btn-group">
  <button type="button" class="btn btn-primary"><a href="https://raw.githack.com/oslc-op/oslc-specs/master/specs/trs/tracked-resource-set.html" class="btn btn-primary">3.0 CSPRD</a></button>
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="https://raw.githack.com/oslc-op/oslc-specs/master/specs/trs/tracked-resource-set.html">3.0 <span class="label label-info">WD</span></a></li>
    <li role="separator" class="divider"></li>
    <li><a href="https://raw.githack.com/oslc-op/oslc-specs/master/specs/trs/tracked-resource-set.html">2.0 <span class="label label-default">obsolete</span></a></li>
  </ul>
</div>



| Title | Status | Description |
|-------|--------|-------------|
| [Tracked Resource Set 3.0](https://raw.githack.com/oasis-tcs/oslc-core/master/docs/trs/tracked-resource-set.html)  | WD | Allows servers to expose a set of resources whose state can be tracked by clients. |
| [Change Management 3.0](http://docs.oasis-open.org/oslc-domains/cm/v3.0/cm-v3.0-part1-change-mgt.html) | CS | Defines the OSLC services and vocabulary for the Change Management domain. |
| [Configuration Management 1.0](https://raw.githack.com/oasis-tcs/oslc-core/master/docs/config/oslc-config-mgt.html) | WD | OSLC Configuration Management defines an RDF vocabulary and a set of REST APIs for managing versions and configurations of linked data resources from multiple domains. |
| [Requirements Management 2.1](http://docs.oasis-open.org/oslc-domains/oslc-rm/v2.1/oslc-rm-v2.1-part1-requirements-management-spec.html) | WD | Defines the OSLC services and vocabulary for the Requirements Management domain. |
| [Quality Management 2.1](https://raw.githack.com/oasis-tcs/oslc-core/master/docs/qm/quality-management-spec.html) | WD | Defines the OSLC services and vocabulary for the Quality Management domain. |
| [Architecture Management 2.1](http://docs.oasis-open.org/oslc-domains/oslc-am/v2.1/oslc-am-v2.1-part1-architecture-management-spec.html) | WD | Defines the OSLC services and vocabulary for the Architecture Management domain. |
| [Asset Management 2.1](https://raw.githack.com/oasis-tcs/oslc-core/master/docs/asset/asset-management-spec.html) | WD | Defines the OSLC services and vocabulary for the Asset Management domain. |
| [Automation 2.1](https://raw.githack.com/oasis-tcs/oslc-core/master/docs/auto/automation-spec.html) | WD | Defines the OSLC services and vocabulary for the domain that supports automation of sequences of actions on OSLC resources. |
| [Performance Monitoring 2.1](https://raw.githack.com/oasis-tcs/oslc-core/master/docs/perfmon/performance-monitoring-spec.html) | WD | Defines the OSLC services and vocabulary for the Performance Monitoring domain. |
| [Tracked Resource Set 2.0](https://archive.open-services.net/wiki/core/TrackedResourceSet-2.0/)  | *Final* | Allows servers to expose a set of resources whose state can be tracked by clients. |
| [PROMCODE 1.0](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-promcode/WorkingDrafts/promcode-interface-v1.0-wd01_Chapter3.docx) | WD | OSLC PROMCODE TC | The PROMCODE (Project Management of Contracted Delivery for Software Supply Chains) defines OSLC services and vocabulary for exchanging project management information across organizational boundaries in support of Software Supply Chain (SSC) delivery. |

There are some additional OSLC documents that are currently inactive but are candidates for migration and could be sources of future specifications:

* [Reconciliation](http://archive.oslc.co/wiki/reconciliation/OSLC-Reconciliation-Specification-Version-2.0/index.html)
* [Estimation and Measurement](http://archive.oslc.co/wiki/estimation-and-measurement/Estimation-and-Measurement-Service-Version-1.0_-REST-API/index.html)
* [Actions 2.0](https://tools.oasis-open.org/version-control/browse/wsvn/oslc-core/trunk/specs/actions.html)

Obsolete or abandoned specifications:

* [Reporting](http://archive.oslc.co/bin/view/Main/ReportingSpecifications.html)
* [Product Definition](http://archive.oslc.co/bin/view/Main/PlmSpecExtensions.html)


Anyone interested in contributing to these specifications should join the applicable TC and propose additional work to add to the TC charter.
