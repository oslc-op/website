+++
categories = ["why"]
date = "2017-10-13T20:47:03+02:00"
title = "Why OSLC?"
tags = ["value", "why"]
banner = "/img/computer.jpg"
gradient = "to bottom, rgba(55,8,108,0.67), rgba(22,6,55,0.67)"
description = "The OSLC value proposition - reasons to embrace the technology"
+++

As a newcomer to the OSLC community, you might have been pondering over one question, but too shy to ask it aloud:

> Why should I invest my time and effort into OSLC?

Great that you asked! There are many good reasons for you to embrace OSLC and the specific reasons depend on your role. **If you are...**

## .. a Tool Vendor

As a tool vendor, you need to ensure that your customers can integrate your product with other tools in order to extract the most value from your product. While providing a REST API is a norm nowadays, a developer has to build an integration layer. As every REST API is different, it means extra time reading the documentation, extra time developing plumbing code to perform model transformation, and most importantly, all this needs to be done on a case basis, leading to _point-to-point_ integrations.

OSLC allows you to provide:

- a uniform self-descriptive REST API;
- a linked data model based on standard domains, common in ALM/PLM (RM, QM, CCM, etc.), that you can tailor to your product;
- exchange data in plain JSON with the clients that are not linked-data ready;
- provide rich UIs from your tool for use in 3rd-party tools for seamless linked data workflow;
- and many other features that your customers would appreciate.

A [number of other products used in ALM/PLM already implement OSLC](http://open-services.net/software/) and your OSLC-enabled tool can integrate with many of them without extra development effort.

## ..  a Tool Buyer

As a tool buyer, you have a unique set of requirements towards your toolchain and for many reasons (technical, organisational, financial) a single-vendor solution might not be viable for you. Therefore, one of the most important criteria for procurement of the new software tools is their TCO _including the integration costs_. Most of the tools come with semi-open proprietary APIs that often lack documentation. Those APIs will incur considerable development costs, often involving highly specialised consultants with a deep knowledge of the tool in question.

Tools that come with an OSLC-based API will you to integrate them into your toolchain with less (or none, in many cases) development effort, while performing a _deeper_ integration, at the workflow level.

OSLC reduces the complexity and risk of increasingly complex software infrastructures, and improves the value of software across a broader set of internal and external stakeholders. OSLC-based API is an experience truly free from a vendor lock-in.

## .. a Tool User

As a tool user, you have to switch between a plethora of tools on a daily basis. You often don't see how their integration is done, but you _feel_ that it's done poorly: updates showing up in other tools many hours later, integrations getting broken every other tool update, etc.

Well-implemented OSLC integrations mostly remain backwards-compatible even across major releases. Standardised OSLC APIs often allow vendors to provide a fully supported integration with many other OSLC-compliant tools out of the box. Finally, an OSLC integration can be performed not only at the level of two tool data models, but at the level of your workflow involving those tools. This is possible through the use of _delegated UIs_, which allow you to interact with another OSLC-compatible tool without leaving your current open tool!
