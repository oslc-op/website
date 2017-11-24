+++
categories = []
date = "2017-11-07T20:47:28+02:00"
tags = ["faq"]
id = "six"
title = "What is the relationship between OSLC specifications and W3C standards?"
+++

OSLC builds on the web architecture. HATEOAS (Hypertext As The Engine Of Application State) represents the WWW architecture in which RESTful HTTP resources represent the state of some entity and the link elements in the representation represent possible future states and related resources. HTTP addresses complexity through HTTP and REST as the standard mechanism for distributed, loosely coupled APIs. LDP builds on HTTP by reducing variability through self-describing, semantically rich, linked data resources that facilitate HATEOAS. Using LDP and RDF, the links within a resource representation are in a standard format that can be easily discovered. OSLC builds on LDP to enable application integration through minimal, discoverable, self-describing capabilities including standard CRUD operations based on HTTP using LDP and RDF resource representations, delegated dialogs for resource selection and creation across applications, resource preview for human readable links, and a simple query capability. OSLC domains capture common RDF vocabularies in various areas of interest that maintain separation of concerns while enabling the creation of toolchains supporting collaborative value streams through integration.
