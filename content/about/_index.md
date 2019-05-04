+++
categories = []
date = "2017-06-21T20:46:28+02:00"
tags = []
title = "About"
heroTitle = "About"
heroSubtitle = "This is OSLC. Learn more."
why_title = "Why OSLC?"

mission_title = "Our Mission"
mission_subtitle = "What we are trying to achieve"
mission_content = [
  "The community is striving to pull together many diverse initiatives focused around application integration solutions to collaborate and partner with each other rather than compete. There are many organizations with different backgrounds sharing the vision of integrated engineering environments. Sometimes they are promoting different approaches than OSLC and linked data solutions, but the goal of the community is to openly discuss complementary approaches which can also be appropriate with the goal of improving the overall viability of standards/implementations for supporting industry integration challenges."
]

people_title = "Leadership"
people_subtitle = "Governance for the OSLC Open Project is managed by its Project Governing Board and its Technical Steering Committee. These two groups ensure that all OSLC stakeholders have a voice in decisions affecting the project and that the contributions of developers, corporate sponsors, and technology consumers are all valued."

governing_title = "Project Governing Board"
governing_subtitle = "The Project Governing Board provides top-level guidance and strategic direction for OSLC. The Board includes representatives from OSLC Sponsor organizations as well as the OSLC Technical Steering Committee."
governing_members = [
  "Jim Amsden",
  "Bill Chown",
  "Andrew Berezovskyi",
  "Axel Reichwein",
]
governing_company = [
  "IBM",
  "KTH Royal Institute of Technology",
  "Siemens",
  "Koneksys",
]

committee_title = "Technical Steering Committee"
committee_subtitle = "The Technical Steering Committee (TSC) directs the day-to-day technical activities of OSLC. TSC members include representatives from the developer community who are actively contributing to the project."

supporters_title = "Supporters"
supporters_subtitle = "The many supporters of OSLC"
supporters_type_1_title = "Foundational Sponsor-level members"
supporters_type_1_list = [
  "IBM"
]
supporters_type_1_url_list = [
  "http://www.ibm.com/software"
]
supporters_type_2_title = "Sponsor-level members"
supporters_type_2_list = [
  "ActewAGL Distribution",
  "Cisco",
  "Fujitsu Limited",
  "PTC",
  "Red Hat",
  "Software AG",
  "Boeing"
]
supporters_type_2_url_list = [
  "https://www.actewagl.com.au/",
  "https://www.cisco.com/",
  "https://www.fujitsu.com/",
  "https://www.ptc.com/",
  "https://www.redhat.com/",
  "https://www.softwareag.com/",
  "https://www.boeing.com/"
]
supporters_type_3_title = "Contributor-level members"
supporters_type_3_list = [
  "Airbus",
  "AIT Austrian Institute of Technology",
  "Bank of America",
  "Dassault Systemes S.A.",
  "EADS France",
  "Ericsson",
  "pure-systems GmbH",
  "Siemens AG",
  "KTH Royal Institute of Technology",
  "Tasktop Technologies Inc."
]
supporters_type_3_url_list = [
  "https://www.airbus.com/",
  "https://www.ait.ac.at/en/",
  "https://www.bankofamerica.com/",
  "https://www.3ds.com",
  "https://www.eads.com",
  "https://www.ericsson.com/en",
  "https://www.pure-systems.com/",
  "https://www.siemens.com",
  "https://www.kth.se/en",
  "https://www.tasktop.com/"
]

faq_title = "Frequently Asked Questions"
faq_subtitle = "Your OSLC questions, answered. Select a question to reveal the answer"

faq_questions = [
  "How can I get involved in OSLC?",
  "Do I need to join OASIS to participate in the OSLC community?",
  "Is OSLC only for software/systems engineering?",
  "Why aren't OSLC specifications W3C standards?",
  "What is the relationship between OSLC specifications and W3C standards?",
  "What is the difference between OSLC and openAPI/Swagger?",
  "What is the difference between OSLC and microservices?",
  "What is the difference between OSLC and a SPARQL endpoint?",
  "What is the difference between RDF and JSON?",
  "Is your question not addressed here?"
]

faq_answers = [
  "There are many ways to become involved. You can make technical contributions (anything from reporting bugs to writing reference implementations) via an OSLC GitHub repository. You can write a blog or article for this site. You can post questions and join discussions on the OSLC Forum. You can deepen your participation by serving on the OSLC Project Governing Board or Technical Steering Comittee. More details are on the Contribute page.",
  
  "No. Participation in OSLC is not tied to OASIS membership. Everyone is welcome to contribute technically. Organizations that want to ensure the sustainability of OSLC development (and have a seat on the OSLC Project Governing Board) are encouraged to become OSLC Sponsors.",
  
  "No. the Web is neutral and can be used to share any information. OSLC data on the Web can describe any information in the same way as HTML documents can describe any information.",
  
  "W3C is focused on shaping the future of the Internet Architecture. OASIS on the other hand focuses on the development, convergence and adoption of open standards for the global information society. OSLC uses and builds on the W3C REST Internet Architecture including HTTP and LDP. However, OSLC is a use of the REST architecture in support of lifecycle management tool integration, it does not contribute to that architecture.",
  
  "OSLC builds on the web architecture. HATEOAS (Hypertext As The Engine Of Application State) represents the WWW architecture in which RESTful HTTP resources represent the state of some entity and the link elements in the representation represent possible future states and related resources. HTTP addresses complexity through HTTP and REST as the standard mechanism for distributed, loosely coupled APIs. LDP builds on HTTP by reducing variability through self-describing, semantically rich, linked data resources that facilitate HATEOAS. Using LDP and RDF, the links within a resource representation are in a standard format that can be easily discovered. OSLC builds on LDP to enable application integration through minimal, discoverable, self-describing capabilities including standard CRUD operations based on HTTP using LDP and RDF resource representations, delegated dialogs for resource selection and creation across applications, resource preview for human readable links, and a simple query capability. OSLC domains capture common RDF vocabularies in various areas of interest that maintain separation of concerns while enabling the creation of toolchains supporting collaborative value streams through integration.",
  
  "Swagger.io is a popular framework of API developer tools for describing and managing REST APIs. SmartBear Software donated the Swagger Specification directly to the Open API Initiative (OAI) as the basis of the Open Specification managed by openapis.org. The  OAI was created to support an industry standard for describing REST APIs in order to promote application integration. OSLC is one such REST API, that can be described using Swagger.io, that defines a standard set of application integration capabilities that have been found useful in creating development and lifecycle management toolchains. OSLC defines REST APIs for discovery, standard CRUD operations based on HTTP using LDP and RDF resource representations, delegated dialogs for resource selection and creation across applications, resource preview for human readable links, and a simple query capability.",

  "OSLC defines a set of application integration capabilities based on HTTP, RDF and LDP. Microservices represent an architectural style that factors applications into loosely coupled services that implement business capabilities. This is not a new concept. The ideas of maximizing functional cohesion and minimizing coupling in order to support efficient and effective development, maintenance and reuse of application components is the foundation of modern software engineering disciplines. Microservices are often build on the WWW REST architecture, and have become a popular way of developing RESTful applications. OSLC clients and servers assembled into toolchains that implement different, but related domains could be seen as assemblies of microservices. For example, a Requirements Management server could be connected with a Change Management server in a tool chain. Each of these servers could be considered to provide microservices that enable the integration in order to determine the work required to implement requirements.",

  "A SPARQL endpoint is provided by a REST server that supports the execution of SQPARL queries and returns the query results either constructed RDF graphs or result sets in a standard format. OSLC also supports a query capability, but is not coupled directly to SPARQL. OSLC query was intended to specify a simple, easy to implement, reasonably efficient to execute query language that could be adapted to many different data sources including SQL, and RDF data sources supporting SPARQL. That is, OSLC query capability is meant to be data source independent, and therefore enabling query across different data sources, including those that support SPARQL.",

  "RDF is a family of W3C standards and a general, standard method for describing information implemented as web resources. Some of W3C standards describe specific serialization formats of RDF resources including RDF/XML, Turtle, N-Triples, N-Quads, and Notation3. JSON is the standard, human readable, text representation of JavaScript objects. So RDF and JSON are similar in that both can be human readable text representations of information. However RDF is based on mathematical relations in the form of (subject, predicate, object) triples. JSON is structured name/value pairs that are very easy to parse and consume. Fortunately these two technologies come together since JSON-LD is a standard serialization format for RDF using JSON.",

  "In this case please visit our Forum! There you can join the conversation, see what others are talking about or start a topic yourself."
]
+++
