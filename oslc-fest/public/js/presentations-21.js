var presentations = {
  PjohnW: {
    'title': 'OSLC through the formative years',
    'description': [
      '<p>10 years ago, OSLC was just coming into existence. This presentation will explore the dynamics that led to OSLC’s formation, discussing the threads of technology and community, and how they wove together to deliver key elements of an open product lifecycle integration solution. We’ll then travel along OSLC’s evolution, remembering (or perhaps discovering) some of the steps along the way, with the goal of understanding OSLC’s contributions while absorbing lessons for the continuing journey.</p>',
    ],
    'authors': [
      bio.johnW
    ]
  },
  PmikeA: {
    'title': 'Open Services, Interoperability, and Hypermedia: A possible Future',
    'description': [
      '<p>This talk will focus on what it means to design and support “Open Services” and the role hypermedia might play in advancing open systems. Author, speaker, and trainer Mike Amundsen will pose a series of questions aimed at identifying characteristics of open, collaborative ecosystems. For example, what are the pillars of open, interoperable systems and what can the last 20 years of the WWW teach us about what works – and what does not work – when creating specifications for an open, collaborative system?</p>',
      '<p>Drawing from a history of over forty years of software architecture and design, and from more recent experience in creating loosely-coupled, reusable services, this talk explores the reasons why some specifications have lasted decades without substantial change while still successfully supporting unanticipated uses and why have other specifications, while well-thought out and carefully executed, have foundered without long-term positive impact.</p>',
      '<p>The talk will also focus on the design elements that enable easy connection, sharing, & interop and explores what it takes to design-in support for evolvability and adaptability. Finally, we’ll zero in on a small set of properties that successful collaborative systems share and seek to identify what it is that OSLC can do today to better assure success in creating a community of interoperability that can safely evolve and adapt well into the future.</p>'
    ],
    'authors': [
      bio.mikeA
    ]
  },
  PyashK: {
    'title': 'Search & Browse and Lyo Validation',
    'description': [
      '<p>Search and Browse is a cross domain data exploration web application for searching and exploring linked data. The main purposes of S&B is to textually and graphically explore data, view results of automated data analysis done on Linked data layer (eg. safety case exploration, progress monitoring, data quality etc), defining custom pages for merging use cases based on Linked Data etc. Lyo Validation is a Java based library that is used for validating RDF resources against constraints defined either in OSLC or SHACL Resource shapes.</p>'
    ],
    'authors': [
      bio.yashK
    ]
  },
  PwesleyC: {
    'title': 'Lifecycle Integration Patterns',
    'description': [
      '<p>Have you ever wanted to see how the community is using OSLC in practice to address a given integration problem? The OSLC community is creating a new library of integration patterns to demonstrate how OSLC can be applied as a solution to common integration challenges. Join this talk to learn about the Lifecycle Integration Pattern Catalog including templates and examples. Learn how to define and contribute your own patterns and help the community demonstrate how to benefit from OSLC-based integration approaches.</p>'
    ],
    'authors': [
      bio.wesleyC
    ]
  },
  PstephenD: {
    'title': 'OSLC and configuration-aware links between ALM and PLM systems',
    'description': [
      '<p>OSLC has gained a strong position in the integration of systems, platforms, and tools in the ALM space, but ALM is not an island in industries that manufacture and construct physical products and systems. Product Lifecycle Management (PLM) systems remain the standard for managing the hardware engineering lifecycle, and the two, ALM and PLM, simply do not communicate well, if at all, in nearly every one of those organizations. Engineering, manufacturing, service, and operations organizations have tolerated the engineering domains being isolated in different practitioner tools and lifecycle management systems for many years but strong evidence is emerging that this tolerance is evaporating and being replaced by a range of emotions that tend to frighten ALM and PLM vendors alike, as well they should. In short, we integrators are now faced with quite a challenge.</p>',
      '<p>This challenge arises from the fact that ALM and PLM systems approach configuration management from two radically different perspectives and thus using very different CM models and approaches. Many attempts to resolve these differences have been attempted over the years with very little success. Whether the approach is to try to use one system, usually PLM, to manage the entire lifecycle and all associated domains, or to integrate the systems, countless projects have failed to accomplish the task. At the root of these failures lies the significantly different CM models of the two systems. If OSLC is to be the best means of integrating ALM and PLM, and it certainly has that potential, the OSLC standard must be enhanced to address not only one of the two CM models (the majority of the effort today seems focused on the ALM model), but both models and in such a way that ALM and PLM assets may be linked in a configuration-aware manner without error or loss of fidelity.</p>',
      '<p>This will not be a trivial task for the OSLC community and working groups. It has been tried many times before in one form or another and the challenge has always been fatally underestimated. Arguably, though, now is the right time to finally address and solve this challenge. The OSLC community can make large contributions to this effort, though such contributions will require much deeper understanding of the challenge and collaboration with the PLM community to succeed.</p>',
      '<p>In this presentation, we will briefly examine a few of the root causes of this challenge and some proposed approaches that may be used to address it.</p>'
    ],
    'authors': [
      bio.stephenD
    ]
  },
  PpeterG: {
    'title': 'Cross-Discipline Lifecycle Collaboration Forum – a linked Systems Engineering approach',
    'description': [
      '<p>Today’s challenge is to ensure efficient collaborative development processes while always keeping track of all dependencies within a product. Interdependencies between different engineering disciplines are increasing as products become smarter, more interconnected and feature complex yet individually configurable functions. Pure component-oriented development has been augmented by a functional orientation, where functional aspects of a product are the focal point regardless of whether they are implemented by mechanical, electrical/electronic or software components. Secure cross-discipline collaboration is of key importance for successful product engineering.</p>',
      '<p>While collaboration works well, and artefacts are linked within a given domain, the situation looks different across domain borders: Many data-exchange standards have been evolved to make engineering information exchangeable between engineers of different departments and organizations. Nevertheless, links between artefacts are missing at the system level and collaboration must be enhanced. The prostep ivip Cross-Discipline Lifecycle Collaboration (CDLC) Forum is combining the efforts of users, vendors and research institutes to face today’s cross-discipline collaboration challenges.</p>',
      '<p>The CDLC Forum is analyzing promising methods and technologies in this context by identifying key principles and best practices for cross-discipline engineering collaboration, based on industrial use cases. The use cases discussed are: Engineering Collaboration – focusing on the communication between engineers; Functional Safety – life and history of cross-discipline traceability to easily meet ISO 26262 for functional safety of Advanced Driver Assistance Systems (ADAS) functions; Manage Trace Information – checking traces to ensure completeness, actuality and accuracy, and also to store traces that allow relevant attributes, flexible tool landscapes, baselines, variants and configurations. Based on the above mentioned industrial use cases the following questions are in focus: How can Model-based Systems Engineering ensure interoperability between engineers? How can Linked Technologies help to connect the relevant information artefacts throughout the product lifecycle? What do we need for a successful interdisciplinary Enterprise Change Management?</p>'
    ],
    'authors': [
      bio.rainerE,
      bio.peterG,
      bio.christianB
    ]
  },
  PrubenV: {
    'title': 'Solid and OSLC: similar stack, similar goals?',
    'description': [
      '<p>Solid is an ecosystem in which people can store data wherever they choose, while still using the applications they want. Such a decentralized approach requires interoperability, which in turn requires standards. Like OSLC, Solid has adopted the Linked Data Platform. An important question is how much we need to standardize, and how much freedom the network gets. Interestingly, Solid and OSLC share the same background and standards, but do we also share the same goals?</p>'
    ],
    'authors': [
      bio.rubenV
    ]
  },
  PjoseM: {
    'title': 'OSLC KM: elevating the meaning of data and operations within the toolchain',
    'description': [
      '<p>The use of different techniques and tools is a common practice to cover all stages in the systems development lifecycle, generating a very good number of system artefacts. Moreover, these artefacts are commonly encoded in different formats and can only be accessed, in most cases, through proprietary and non-standard protocols. In this context, the OSLC (Open Services for Lifecycle Collaboration) initiative pursues the creation of public specifications (data shapes) to exchange any artefact generated during the development lifecycle. In this talk, authors present the OSLC KM (Knowledge Management) specification as a solution with a two-folded objective: 1) representation and management of any kind of system artefact and 2) extension of OSLC mechanisms to support the notion of delegated operation. In this manner, it is possible to enhance the exchange of data items and to reuse existing operations within the toolchain. Some practical examples of application developed in conjunction with The Reuse Company will be shown to demonstrate the viability and value of the proposed approach.</p>'
    ],
    'authors': [
      bio.joseM
    ]
  },
  PholgerP: {
    'title': 'How Product Line Engineering can benefit from OSLC',
    'description': [
      '<p>Strategic variant management based on Product Line Engineering has to manage variability information across all (engineering) artifacts. As variability information is highly distributed throughout these artifacts in various engineering tools on one hand, but on the other hand is there is a high dependence between this information, there is a need to easily connect the bits and pieces in an easy way. OSLC provides a general concept of links between artifacts and also defines support concepts to provide the necessary user interface for link management.</p>',
      '<p>We’ll demonstrate how this helps with the integration of engineering tools and variant management tools (using our variant management tool pure::variants as an example). We also touch on how the OSLC Global Configuration helps to maintain consistent sets of engineering artifacts for related products in a product line.</p>'
    ],
    'authors': [
      bio.holgerP
    ]
  },
  PandrewB: {
    'title': 'Eclipse Lyo 2.4.0 and beyond',
    'description': [
      '<p>Eclipse Lyo provides a reference SDK for implementing OSLC Servers and Clients. In the first part of the talk, we will introduce Lyo in general and present its latest components such as:</p>',
      '<ul><li>Lyo Designer as a model-based software engineering (MBSE) approach to modelling and generating code of the OSLC-based solutions</li>',
      '<li>Lyo Store, an object-resource mapping (OR*M) framework</li>',
      '<li>Lyo Validation, a library for validating RDF resources according to the OSLC Shapes & SHACL Shapes (presented in detail on Day 1 by Yash Khatri)</li>',
      '<li>Lyo TRS Client & Server to keep resources up-to-date across OSLC Servers</li></ul>',
      '<p>In the second part of the talk, we would like to engage with the community regarding the future of Eclipse Lyo:</p>',
      '<ul><li>Lyo since 2.1.0</li>',
      '<li>Upcoming Lyo 2.4.0 release</li>',
      '<li>Lyo 2.5.0+ roadmap</li></ul>'
    ],
    'authors': [
      bio.andrewB
    ]
  },
  PnickC: {
    'title': 'What can OSLC Configuration Management do for me?',
    'description': [
      '<p>This talk gives a brief introduction to the scope and status of OSLC Configuration Management, then explains why this is an important specification, why you should push your vendors to adopt it, and the benefits you gain when they do. We will look at some current implementations, and discuss some of the potential areas of improvement.</p>'
    ],
    'authors': [
      bio.nickC
    ]
  },
  PjimA: {
    'title': 'OSLC4JS Open Source JavaScript Client and Server Components',
    'description': [
      '<p>OSLC4JS is an open source project that is intended to provide Express.js middleware components to simplify the development of Web applications that utilize OSLC for integration. The project has the following subcomponents:</p>',
      '<ul><li>OSLC Browser - Multi-column navigator and graphic explorer React Web app to efficiently navigate and explore any OSLC resources</li>',
      '<li>OSLC Client - A JavaScript client API supporting jazz.net apps (rootservices) and OSLC Discovery</li>',
      '<li>OSLC Service - Express middleware component to add OSLC REST API to a Web application</li>',
      '<li>OSLC Server - Sample OSLC server using OSLC Service and LDP Service</li>',
      '<li>LDP Service - Express middleware comnponent to add LDP REST API to a Web application</li>',
      '<li>LDP App - Sample Web application using LDP Service</li></ul>',
      '<p>This talk will summarize some of the integration challenges you may be facing, how OSLC4JS may help, and the goals and intended outcomes of the project. There will be a demo of the OSLC Browser with a brief discussion of how its React components use the oslc-client.',
      '<p>We’ll wrap up with a summary of the project’s current status, and a call for contribution in order to accelerate development progress.</p>'
    ],
    'authors': [
      bio.jimA
    ]
  },
  // 2020 Presentation Abstracts add year at end if speaker is the same
  PMikeA2020: {
    'title': 'Hypermedia Made Easy',
    'description': [
      '<p>The success of the Web is due, in large part, to its reliance on hypermedia as the primary way to connect and access arbitrary content on unrelated servers along with two principles established at the start of the Web: up-front agreement plus open-ended standards. The up-front agreement of a message format (HTML) delivered over a standard protocol (HTTP) sparked an exponential growth pattern that has continued over the last thirty years. Both HTML and HTTP are open-ended standards. People are free to add new elements to the format and new methods to the protocol without harming existing implementations.</p>',
      '<p>While the hyperlinked document web has been a huge success, this has not been the case for the application web. So far, the wide-scale attempts for the application web have relied upon up-front agreement but failed to support open-ended standards that allow creative additions without breaking existing applications.</p>',
      '<p>However, hypermedia applications are totally possible and, for the most part, quite easy to implement. This short talk will illustrate a working browser-based single-page app (SPA) that uses the Collection+JSON hypermedia format and shows how both servers and clients can "follow the rules" to build loosely-coupled, highly-extensible web applications.</p>'
    ],
    'authors': [
      bio.mikeA
    ]
  },
  PLutzL: {
    'title': 'OSLC as enabler for seamless application integration',
    'description': [
      '<p>OSLC capabilities are offered by an increasing number of products. In real life scenarios, the integration of legacy software, usually not OSLC aware but valuable data provider, requires special attention. PROSTEP provides a general solution. Our approach comprises an OSLC provider for OpenPDM, our flagship integration product bundled with OpenPDM integrate and a large number of industry proven PLM, ALM and ERP connectors.</p>'
    ],
    'authors': [
      bio.lutzL
    ]
  },
  PJuanS: {
    'title': 'Knowledge Graphs: History of the Main Ideas',
    'description': [
      '<p>Knowledge Graphs can be considered as fulfilling an early vision in Computer Science of creating intelligent systems that integrate knowledge and data at large scale. Stemming from scientific advancements in research areas of Semantic Web, Databases, Knowledge representation, NLP, Machine Learning, among others, Knowledge Graphs have rapidly gained popularity in academia and industry in the past years. The integration of such disparate disciplines and techniques give the richness to Knowledge Graphs, but also present the challenge to practitioners and theoreticians to know how current advances develop from early techniques in order, on one hand, take full advantage of them, and on the other, avoid reinventing the wheel. This talk will provide a historical context on the roots of Knowledge Graphs grounded in the advancements of Logic, Data and the combination thereof.</p>'
    ],
    'authors': [
      bio.juanS
    ]
  },
  Pahmed: {
    'title': 'Proof of Concept: Capella & IBM Jazz Integration based on OSLC',
    'description': [
      '<p>The presentation focuses on a prototype of a client-type OSLC connector, which allows traceability from the Capella modeling tool to IBM DNG, in a multi-configuration context.</p>',
      '<p>This solution consists of allocating a project area on IBM DNG that will be dedicated to containing artefacts (Model Elements) projected from Capella to be able to trace them to the artefacts (Requirements) from Jazz\'s other domains.</p>'
    ],
    'authors': [
      bio.ahmedE
    ]
  },
  ProbertB: {
    'title': 'Bridging to PLM with OSLC',
    'description': [
      '<p>OSLC provides a critical foundation for integrating tools in the enterprise without moving data. While Product Lifecycle Management (PLM) tools have traditionally been aggregators/warehouses of assets, a PLM-ALM bridge is critical to realizing the digital thread. We have a pragmatic approach to creating the interoperability of ALM and PLM via OSLC demonstrated with our OSLC Connect for Windchill. In this talk, we present user scenarios and how the OSLC standard enables the linking of enterprise systems.</p>'
    ],
    'authors': [
      bio.robertB
    ]
  },
  Psparx: {
    'title': 'OSLC the silver bullet for modelling interoperability?',
    'description': [
      '<p>Sparx Systems Enterprise Architect’s complete middleware named Sparx ProCloud Server is based on OSLC.</p>',
      '<p>Enterprise Architect complies with these Architecture Management 2.0 base requirements, as specified in the Architecture Management 2.0 specification:</p>',
      '<ul><li>Service Provider Resource</li>',
      '<li>Absolute URIs</li>',
      '<li>RDF/XML Representations</li>',
      '<li>HTTP Rest Services</li>',
      '<li>Resource Creation Factory</li>',
      '<li>Resource Query Capability</li>',
      '<li>Link Type Query Capability</li>',
      '<li>Partial Resource Update</li>',
      '<li>Resource Removal</li>',
      '<li>Selective Properties</li>',
      '<li>Error Responses</li>',
      '<li>Authentication (Form and OAuth (OpenID Connect) Authentication)</li></ul>',
      '<p>This will be a deep-tech session to show the capabilities of using OSLC to interact with model repositories on servers.</p>'
    ],
    'authors': [
      bio.peterL,
      bio.horstK
    ]
  },
  PNicolasF: {
    'title': 'Establishing Digital Continuity for End to End Collaboration',
    'description': [
      '<p>Relying on the experience gained on Airbus strategic governance of PLM standards and applied research on interoperability of technical enterprise applications, Dr Nicolas Figay will describe strengths and weaknesses of OSLC, and discussing opportunities of future evolutions for making  it one of  the building block supporting the establishing of the digital continuity required for end to end collaboration within the Aeronautic, Space and Defense digital business ecosystem.</p>',
    ],
    'authors': [
      bio.nicolasF
    ]
  },
  PRubenT: {
    'title': 'A Technical View on the Solid Ecosystem',
    'description': [
      '<p>Solid is an ecosystem that gives users full control on how and where they want to store their data. The level of decentralization that Solid introduces, requires a different way of building applications. In this talk, an overview will be given on the different standards that Solid makes use of. Furthermore, several tools that implement these standards will be discussed.</p>',
    ],
    'authors': [
      bio.rubenT
    ]
  },
  PAndyL: {
    'title': 'Using OSLC to gain Insight into your Connected Engineering Data',
    'description': [
      '<p>In this session Andy will present how OSLC connected engineering data from across the lifecycle may be visualized and analyzed using Engineering Insights, part of the IBM Engineering Lifecycle Management suite.</p>'
    ],
    'authors': [
      bio.andyL
    ]
  },
  PChristophB: {
    'title': 'Beyond linking artifacts: “Federated Authoring” and “Dashboards” based on OSLC',
    'description': [
      '<p>Many authoring tools in engineering are complex, hard to learn and not web-based while users often have a limited job to do and try to avoid working with heavy weight tools. OSLC can help to provide a focused and simplified web-environment to do certain tasks easily and without having to learn many tools.</p>',
      '<p>The talk demos a Confluence page referencing various OSLC resources. The focus here is not on linking or consuming OSLC-based information. We want to compile a functional “dashboard” composed from OSLC resources in Confluence. Analysis, reports but also simple authoring functions help to work more efficiently with distributed engineering information.</p>'
    ],
    'authors': [
      bio.christophB
    ]
  },
  PErikH: {
    'title': 'The Role of OSLC in the Enterprise PLM Landscape',
    'description': [
      '<p>Building and maintaining an enterprise PLM capability is a strategic undertaking. In this presentation we discuss how Saab Aeronautics view its future PLM Landscape and the role we see for OSLC in realizing the landscape.</p>',
      '<p>We introduce a PLM landscape model that focuses on exploiting the strengths of engineering discipline specific integrated development environments (e.g., a software or systems engineering development environment) and using linking to enable traceability across engineering disciplines. Four traceability dimensions are identified for enabling product lifecycle support, namely requirements management, configuration item structure, change management, and realisations.</p>',
      '<p>We discuss the merits of the model and the applicability of OSLC as integration middleware for realizing the desired interoperability.</p>'
    ],
    'authors': [
      bio.erikH,
      bio.asaL
    ]
  },
  PJonasW: {
    'title': 'Journey to be data driven',
    'description': [
      '<p>One of the main and current focus areas for Scania is on digitalizing the tool-chain supporting the development process. Digitalization is considered to be needed to comply with requirements on traceability from standards such as ISO 262626, but also to manage the increasing system and organizational complexity in general. One of the main challenges is integrating data and information distributed across a heterogeneous landscape of tools and databases. The primary target solution for this challenge for the last couple of year has been, and still is, linked data. In this presentation, I will share Scania’s vision for using linked data and present some major obstacles (both organizational and technical) we have faced when working towards such a vision.</p>'
    ],
    'authors': [
      bio.jonasW
    ]
  },
  PKoneksys: {
    'title': 'OpenAPI Extensions for OSLC',
    'description': [
      '<p>OpenAPI is a popular specification for defining Web APIs. The specification originated from Swagger, an open-source set of tools to generate API documentation and code. The customizable nature of the Swagger tools, combined with the capability to extend OpenAPI, provides several opportunities for expanding the code generation capabilities of Lyo Designer and OSLC service documentation. In this presentation, I will talk about these opportunities and propose a set of OpenAPI extensions to support OSLC concepts. I will also show how to add these extensions to an existing OpenAPI specification file and how Swagger Code Generator can process them to generate an OSLC server.</p>'
    ],
    'authors': [
      bio.luisR
    ]
  },
  PTarikM: {
    'title': 'Persistent UNITE: State of the Art OSLC Integrations',
    'description': [
      '<p>The Persistent UNITE integration foundation is a family of lightweight integration plugins created for industrial organizations looking to accelerate their digital journeys. UNITE elegantly brings together IBM Enterprise Lifecycle Management (ELM), one of the leading ALM solutions on the market, with a growing portfolio of enterprise development tools, including:</p>',
      '<ul><li>UNITE for Jira®</li>',
      '<li>UNITE for Git, including GitLab and BitBucket</li>',
      '<li>UNITE for ENOVIA® PLM</li></ul>',
      '<p>UNITE leverages Open Services for Lifecycle Collaboration (OSLC) to create relationships between artifacts, enabling integrations with IBM ELM tools without data synchronization.</p>'
    ],
    'authors': [
      bio.tarikM
    ]
  },
  PMarioC: {
    'title': 'PyOSLC the Python SDK for OSLC APIs',
    'description': [
      '<p>In the last years Python has become so popular among web developers and specifically API developers, the creation of an API is very easy using Python through different frameworks with some extensions. Until now for creating an OSLC API there are some frameworks or libraries mainly for Java, then why not leverage the popularity of Python for creating OSLC APIs?</p>',
      '<p>The PyOSLC project aim to create a SDK for having the required elements for developing OSLC APIs in Python meeting the OSLC specs and having the capability to extend the features for other specific-domain applications.</p>'
    ],
    'authors': [
      bio.christianM,
      bio.marioC
    ]
  },
  PLeoM: {
    'title': 'Prolog OSLC SDK',
    'description': [
      '<p>Prolog is an elegant programming language based on classical logic, which can be very powerful at solving many practical problems. Modern SWI-Prolog implementation provides native RDF support, efficient triple store, and convenient stack for building web applications making it an ideal platform for building OSLC services. In this talk I will present an open source OSCL SDK for Prolog created to simplify development of knowledge intensive applications.</p>'
    ],
    'authors': [
      bio.leoM
    ]
  },
  PAndreasK: {
    'title': 'Enabling the Federated Single Source of truth using OSLC as standard in between Engineering tools',
    'description': [
      '<p>Complex and connected Systems Engineering requires a lot of people in different domains to collaborate efficiently without losing the details and capabilities of the tools used in these domains. This challenge in the engineering infrastructure can be solved in the same way like connecting systems of systems: The use of standards like OSLC allows to concentrate on one connector per tool or perpective instead of building up  and maintaining a interfaces in this n to m setup. At PTC, we have integrated OSLC as base technology for the engineering digital thread, and we will show the usage of in linking requirements, SysML model views and BOM elements using OSLC in an efficient way.</p>'
    ],
    'authors': [
      bio.andreasK
    ]
  },
  PJad1: {
    'title': 'State of OSLC support in commercial applications',
    'description': [
      '<p>In this presentation, Jad will present his findings from a recent survey of commercial software applications that provide some support for OSLC capabilities. The implementation trends of the OSLC standard will be discussed, hopefully leading to insights on the necessary development directions of the standard.</p>'
    ],
    'authors': [
      bio.jadE
    ]
  },
  PJad2: {
    'title': 'Eclipse Lyo Introduction',
    'description': [
      '<p>Eclipse Lyo is the open-source project that supports Java developers with the development of OSLC servers and clients.</p>',
      '<p>In this presentation, Jad will provide a walkthrough of Lyo\'s features, and how they can be used in the development of OSLC solutions. In this presentation, focus will be placed on Lyo\'s libraries and SDK. In the presentation that follows, Jad will present the Lyo Designer modelling application.</p>'
    ],
    'authors': [
      bio.jadE
    ]
  },
  PJad3: {
    'title': 'Lyo Designer Introduction',
    'description': [
      '<p>Eclipse Lyo is the open-source project that supports Java developers with the development of OSLC servers and clients.</p>',
      '<p>In this presentation, Jad will provide a walkthrough of Lyo\'s features, and how they can be used in the development of OSLC solutions. Following form the previous presentation on Lyo\'s libraries and SDK, Jad will here continue to present the Lyo Designer modelling application, which provides a model-based approach to building a complete OSLC-based toolchain.</p>'
    ],
    'authors': [
      bio.jadE
    ]
  },
  PAndrewJim: {
    'title': 'OSLC Open Project status',
    'description': [
      '<p>In this talk, Andrew and Jim will present the journey the OLSC project undertook since the last OSLCFest to becoming an Open Project with less barriers to contribution. On behalf of the project board, they will share with you the spec progress made so far and open the curtain to what\'s in store for 2020.</p>'
    ],
    'authors': [
      bio.jimA,
      bio.andrewB
    ]
  },
  PRobertH: {
    'title': 'OSLC-enabled Product Line Engineering with pure::variants 5.0',
    'description': [
      '<p>pure::variants is the leading product line engineering tool that enables its customers from automotive, aerospace & defense, medical, rails & transportation and other industries to increase engineering efficiency with a holistic variant management for their engineering assets.</p>',
      '<p>With its latest release pure::variants includes a bundle of new OSLC capabilities that increase its connectivity with other engineering tools.</p>',
      '<p>Join this presentation to get an overview of the new OSLC-related capabilities of pure::variants 5.0.</p>',
    ],
    'authors': [
      bio.robertH
    ]
  },
  PChristophB2021: {
    'title': 'Using OSLC for managing traceability into the details of a software project',
    'description':[
      '<p>There is a lot more you can do with OSLC than bidirectional linking of artifacts from the AM, CCM, RM, QM domain.</p>',
      '<p>The talk shows how to establish robust links between detailed parts of software code (e.g. Java classes, functions, interfaces) and...</p>',
      '<ul><li>Architecture artifacts from Cameo, EA, Rhapsody</li>',
      '<li>Requirements from codeBeamer, DOORS Next, Jama Connect</li>',
      '<li>Test cases from codeBeamer, Engineering Test Management</li>',
      '<li>Issues from Jira</li></ul>',
      '<p>Eclipse, Visual Studio or Jetbrains MPS can be used as IDEs. The links are robust and sustain branching, merging, refactoring of the code.</p>',
      '<p>As a result you see SysML diagrams, requirements, etc. in your IDE and the linked implemented code of classes, functions and interfaces in your SysML tool.</p>',
      '<p>You can also generate detailed traceability reports, that show which SysML use cases or requirements are implemented in which Java function in which namespace and are persisted in which physical file.</p>'
    ],
    'authors': [
      bio.christophB
    ]
  },
  PErikH2021: {
    'title':'Keeping up with the pace of opportunity',
    'description':[
      '<p>Saab has been in the Aerospace domain since 1937. It has produced a long lineage of state of the art jet powered fighter aircraft, from the J29 Flying barrel, over icons like the J35 Draken, J37 Viggen, to the current JAS 39 Gripen. Traditionally, development has been a close partnership between the Saab and Sweden. Exports has been scarce and international collaboration rarely pursued. Over the last decade this has changed drastically. The Gripen E is being developed in collaboration with Brazil, the GlobalEye AEW maiden customer is the UAE and Saab did partner with Boeing to develop the new T-7 Redhawk trainer. Clearly, international collaboration and exports is the way ahead. This change also mean that there is a change from a highly predictable environment to one of sudden opportunities. To be competitive the organisation need to be aligned with international best practice and able to quickly adopts the latest methods and tools. There is a need for a tool architecture that allow for rapid changes while maintaining low acquisition and maintenance costs. As a result an architectural pattern promoting the adoption of engineering discipline specific development environments with OSLC as the key standard for inter-environment integration. Apart from introducing the architectural pattern the talk will also outline Saab\'s activities demonstrating and promoting the value of OSLC</p>'
    ],
    'authors': [
      bio.erikH,
      bio.asaL
    ]
  },
  PAndrewJim2021: {
    'title':'State of the OSLC Open Project',
    'description':[
      '<p>Last year, we announced at OSLCfest the transition of various OSLC activities under Technical Commitees and the Member Section to the OSLC Open Project. This year we will give a status update reporting on the work done, compare the results with the OSLC community expectations gathered last year in a poll, and discuss the status of the project in general. We will present the publication of 4 OASIS Standards, 2 Project Specifications, and 2 Project Specification Drafts.</p>'
    ],
    'authors': [
      bio.andrewB,
      bio.jimA
    ]
  },
  PAndrewJad2021: {
    'title':'OSLC Reference Implementation: From zero to 4 OSLC servers in 20 minutes',
    'description':[
      '<p>OSLC Open Project provides an open-source reference implementation of a toolchain consisting of 4 OSLC servers implementing the AM, CM, QM, and RM specifications (Architecture Management, Change Management, Quality Management, and Requirements Management respectively). The servers are implemented using the latest versions of the Eclipse Lyo SDK and modelling tool for building OSLC client and server applications. In this talk, we will do a project walk-through, describing the integration scenario, the structure of the codebase and an overview of relevant Eclipse Lyo concepts. We will use an online Gitpod environment that allows you to build and run 4 server applications without installing anything locally, so that you can follow along!</p>'
    ],
    'authors': [
      bio.andrewB,
      bio.jadE
    ]
  },
  PEranG2021: {
    'title':'OSLC as a backbone for digital engineering',
    'description':[
      '<p>Digital engineering (DE) promotes usage of digital tools to essentially establish a "document-free" digital fabric where data can be consistently used across different viewpoints and sources. An imminent challenge is how to integrate engineering data coming from different sources and tools, such that digital threads and data consistency are established, and useful viewpoints and insights can be digitally created.</p>',
      '<p>In this talk we will explain the DE challenges and explain and illustrate how OSLC services can address them.</p>'
    ],
    'authors': [
      bio.eranG
    ]
  },
  PRobertH2021: {
    'title':'Deploying OSLC In the Enterprise',
    'description':[
      '<p>OSLC provides the opportunity for connecting repositories in the enterprise. By using standard components of the web, OSLC leverages your browser to be the gateway of accessing data and embedding interfaces across the enterprise.</p>',
      '<p>The mechanisms we use in OSLC to embed content are also the means for ads, pop-ups, and other security concerns introduced on the internet. Our browsers have become smarter, and they now can interfere with desired OSLC interactions if our repositories are not configured carefully. So how do teams pragmatically deploy OSLC in the enterprise? How do they have a repository be both deeply integrated and secure? We will detail our practical experience integrating OSLC capabilities in the enterprise to connect to diverse tooling. Critically we will explore how the cloud, network devices, and even cookie management are critical in your successful and secure deployment in the enterprise.</p>'
    ],
    'authors': [
      bio.robertB,
      bio.sebastienB
    ]
  },
  PTorbjornH2021: {
    'title':'OSLC from the Perspective of a Data Integrator',
    'description':[
      '<p>Eurostep has had a focus on data representation and exchange standardisation since the organisation was founded in 1994. This presentation focuses on how OSLC and linking technology compares and extend the traditional information model based representations and outlines the strengths and weaknesses of the respective approach as well as presents the potential in combining the two approaches.</p>'
    ],
    'authors': [
      bio.torbjornH,
      bio.nigelS
    ]
  },
  PDamirN: {
    'title':'Leveraging OSLC and Linked Data for the Creation of Assurance Cases',
    'description':[
      '<p>Technologies such as intelligent transport systems, or autonomous vehicles, are driving an increase in complexity in the automotive domain. In turn, these developments are placing an increased pressure on assurance activities for properties such as safety or cybersecurity. To that end, existing and upcoming standards and legislation, e.g. ISO26262, ISO 21434, or ISO 5083, are requiring the creation of an assurance case in order to explicitly argue for safety or cybersecurity of a system. Since such argument involves claims about all aspects of the system lifecycle, the information required to produce an assurance case also spans across the whole lifecycle. Coupled with the typical size of an assurance case, i.e. hundreds of interdependent claims with references to concrete engineering artefacts, creation and maintenance of assurance cases without some degree of automation is a daunting task.</p>',
      '<p>This talk presents the Scania\'s long-term vision, but also the current results, for the creation of assurance cases. The key enabler for the approach is a federated toolchain, based on OSLC principles, that manages the necessary information according to a commonly agreed information model. Given such support, the assurance-case tool allows the users to work in a data-driven way by defining assurance-case patterns directly in terms of the information objects from the common information-model. As a result, the creation of concrete assurance cases becomes the task of automatically instantiating the defined patterns with instances of the common information model, i.e. with concrete engineering artefacts exposed as linked data. Finally, to decide whether the claims of a concrete assurance case are true or false, the assurance-case tool executes a number different analyses over the available engineering artefact, i.e. linked data.</p>'
    ],
    'authors': [
      bio.damirN
    ]
  },
  PJuanQ: {
    'title':'Coatl: an OSLC API generation framework based on OpenAPI',
    'description':[
      '<p>Implementing an OSLC API from scratch is complicated; it requires several skills like transforming raw data into RDF format, implementing several OSLC-compliant endpoints, and optionally implementing Jazz-specific resources for integration with IBM ELM. However, as OSLC concepts are standardized, the implementations of OSLC APIs have a lot of common code. Furthermore, many data sources that require OSLC APIs, such as software applications or databases, already have REST APIs.</p>',
      '<p>Coatl is a framework helping developers add OSLC APIs to data sources that already have REST APIs. Inspired by GraphQL-wrappers for REST APIs, Coatl is an OSLC-wrapper for REST APIs based on an OpenAPI definition describing how existing REST API resources are mapped to the generated OSLC API resources, Coatl uses Swagger Codegen to generate the OSLC API code. For developers with prior knowledge of OSLC concepts and specifications, Coatl would significantly reduce the effort of implementing OSLC APIs.</p>'
    ],
    'authors': [
      bio.juanQ
    ]
  },
  PGrahamB: {
    'title':'The challenges of connecting data in the world of Infrastructure',
    'description':[
      '<p>Most people typically think of Infrastructure and civil engineering projects as being about project management and pouring concrete, this could not be further from the truth. Infrastructure and civil engineering are highly digitised, with numerous data sources, such as, Primavera(P6) for project management, Building Information Model data (3,4 and 5D BIM), Geographical Information System data, telemetry data, requirements, and technical assurance evidence etc. This data is invariably in different data formats and the tools are completely federated. This sort of environment provides large challenges to bringing data together to realise the opportunities that the numerous types of Digital Twins (that are expected to be supported) are expected to bring.</p>',
      '<p>This presentation will describe the challenges faced by infrastructure in bringing this information together and how they manage the situation at present. This author feels that the current state of tools in use in infrastructure today provides an opportunity for the OSLC community to influence and properly support the concepts of single source of truth and data visualization across this domain.</p>'
    ],
    'authors': [
      bio.grahamB
    ]
  },
  PSeanM: {
    'title':'INCOSE Digital Engineering Information Exchange Working Group',
    'description':[
      '<p>The INCOSE Digital Engineering Information Exchange Working Group (DEIXWG) has been working closely with the US DoD, industry partners, and academic organizations to advance a critical aspect of Digital Engineering: how to exchange digital work products between organizations in a semantically-meaningful way. Since its inception in late 2017 due to the support of OSD(R&E), the DEIXWG has been modeling a conceptual ontology for describing digital work products and the information they contain. With that ontology in hand, the DEIXWG has been soliciting stakeholder needs from the broader community in the form of desired information exchange scenarios that require combining data from a variety of different digital sources. This presentation will provide an overview of the DEIXWG\'s ongoing activities and a look ahead at future efforts.</p>'
    ],
    'authors': [
      bio.seanM
    ]
  },
  PHorstK2021: {
    'title':'Developing an OSLC client with the OSLC API from Sparx Systems',
    'description':[
      '<p>In this demonstration we will show the OSLC implementation of Sparx Systems to integrate tools with the Modelling Tool Enterprise Architect from Sparx Systems. We show how the Restful OSLC API from SparxSystems can be used to retrieve model data and search, create and manipulate the model. A simple application is used as a show case which explains how to build an application based on OSLC as a data backend. The audience will get hands on information about how a OSLC client can be implemented using Sparx Systems Restful OSLC API.</p>'
    ],
    'authors': [
      bio.horstK
    ]
  },
  PAndyL2021: {
    'title':'Cross lifecycle analytics and reporting based on OSLC TRS',
    'description':[
      '<p>While OSLC is well known as a cross-applications linking protocol, its capability to enable global analytics and reporting appears to be yet fairly unknown. In this presentation, we explain and demonstrate how OSLC TRS can be leveraged to construct global analytics and reporting across all the OSLC data providers, such as requirements, test and planning. We will demonstrate central reporting and analytics implementations that perform various analytics such as change impact analysis, coverage analysis, and various development KPIs such as readiness indicators.</p>'
    ],
    'authors': [
      bio.andyL
    ]
  },
  PKennyM2021: {
    'title':'Applied Category Theory for Scalable Data Integration and Semantic Interoperability',
    'description':[
      '<p>Every engineering organization struggles to exchange data reliably between their many application databases. Attempting to build integrations between all relevant systems is impractical with current mainstream practices, because of the quadratic relationship between applications and the number of integrations between them. To avoid the exploding cost of scaling ad-hoc integrations, organizations may attempt to standardize the application semantics. This approach hasn\'t worked in practice because it\'s impractical to get many people from diverse domains to agree on a single perspective, and nuanced domain-specific meaning is always sacrificed.</p>',
      '<p>Category Theory is a mathematical language for encoding and computing semantic structures across contexts, and has been used by mathematicians and scientists to formally communicate meaning across domains. Recent developments out of MIT have worked out how to apply the approach to data schemas and are leading to a paradigm shift in semantic data interoperability. There are several benefits, but two key benefits are compositionality and machine verification. Integrations can be added together and checked for integrity, which means that a quadratic number of integrations can be inferred from a linear input with mathematical guarantees that data won\'t be corrupted. A third benefit is that the approach is agnostic to any specific data structure and can interoperate across all of them (SQL, XML, Json, Graph, RDF, etc).</p>'
    ],
    'authors': [
      bio.kennyM,
      bio.ryanM
    ]
  },
  PGarciaG2021: {
    'title':'OSLC for DevOps event-based automation',
    'description':[
      '<p>My name is Guillermo García, I\'m a PhD student at Universidad Politécnica de Madrid (UPM - https://www.upm.es/), in the Intelligent Systems Research Group (GSI - https://gsi.upm.es/en). For the past few months, I\'ve been working on ways of integrating DevOps with semantic technologies to enable automation of different workflows and processes. I\'ve been studying the OSLC specifications and the possibilities they can bring to the field.</p>',
      '<p>The idea of my presentation is to give the audience an overview of the challenges faced when implementing DevOps where OSLC could be very beneficial. Two specific issues will be tackled: vendor lock-in and task automation. The first one could be approached by proposing a standard for service interfaces so they can be seamlessly integrated together. A Linked Data specification like OLSC could provide such a standard without sacrificing flexibility. For the challenge of task automation, specifications like TRS and OSLC Automation could be used to model the events and actions provided by a service. This would allow us to create an automation framework where events and actions between services are standardized and independent of the service internal implementation.</p>',
      '<p>We expect to show the audience new ways of applying OSLC to the DevOps domain and how specifications like OSLC Automation and OSLC Actions could be very useful in this context. We will also provide an example implementation with two services with simple events and actions automated between them. We hope all of this can be of interest and that it helps in expanding the OSLC ecosystem.</p>'
    ],
    'authors': [
      bio.garciaG
    ]
  },
  PFrankP2021: {
    'title':'Latest PyOSLC Improvements',
    'description':[
      '<p>PyOSLC is an SDK to implement OSLC APIs in Python. The first version of PyOSLC supported domain-independent OSLC resources for discovery as well as requirements as the only domain-specific resource. The current work on PyOSLC supports the development of OSLC APIs for any domain-specific resources. A developer only needs to have a basic understanding of OSLC concepts to implement some predefined adapter methods which will then be used by PyOSLC to create a complete OSLC API. A developer thereby does not need to modify nor manage any code related to the translation of Python objects into RDF, nor any code related to the REST API endpoints.</p>',
      '<p>Furthermore, PyOSLC now supports two options to deploy an OSLC API. Initially, the OSLC API could only be deployed on a standalone WSGI-compatible server. Now, as an additional deployment option, OSLC API endpoints created by PyOSLC can be added to an existing REST API by adding a few lines of Python code. Initially, PyOSLC was using the Flask framework for the implementation of REST API endpoints. Now, PyOSLC is a Web framework independent of Flask such that it can be compatible with any WSGI-compatible REST API framework such as Django or Bottle.</p>'
    ],
    'authors': [
      bio.frankP,
      bio.marioC
    ]
  },
  PRobertB2021: {
    'title':'Navigating Versions in the Enterprise',
    'description':[
      '<p>Configuration Management is an activity attributed to our Software Engineers but is a common need for all engineering disciplines. When linking between artifacts across disciplines, the need for configuration management becomes even more critical. The creation of a digital thread mandates we must compose configurations from these unique disciplines. Rather than copy artifacts to one repository, OSLC enables an enterprise configuration to leverage local configurations from distributed repositories. These collective enterprise configurations allow the navigation of the links; to the correct object and the correct version of the object. This session will focus on the practical application of enterprise configurations and how they enable the digital thread, connect concepts across siloed boundaries, and allow common engineering tasks more robustly.</p>'
    ],
    'authors': [
      bio.robertB
    ]
  },
  PThomasZ: {
    'title':'Using OSLC for a Closed-Loop Digital Twin Demonstrator',
    'description':[
      '<p>As part of worldwide efforts towards clean aviation, the development of hybrid-electric propulsion is one of the most popular approaches for regional and short-haul aircraft. Together with industry partners, Fraunhofer IPK is leveraging an existing experimental aircraft architecture to MBSE and demonstrate digital twin usage across the development and manufacturing lifecycle.In order to support the establishment of novel architectures, we leverage co-simulation with open standards to allow for the ad-hoc generation of digital masters utilizing descriptive MBSE models. The digital master contains various system and domain models and provides the digital system representation, which is later merged with real-life data (the "digital shadow") to establish the digital twin. In conjunction with FMI/FMU for co-simulating heterogenious models authored in multiple tools, OSLC provides an open standard supported by various commercial tools, but also open source solutions as well as in-house tools. This way we are able to establish a closed-loop connecting requirements, systems architecting and simulation, in order to enable early virtual systems integration. OSLC already supports various existing concepts, such as configuration management, requirements management etc. This allows for a scalable solution to support the evolving demonstrator environment. The possibility to easily add our own concepts and rely on an extensive community provides a scalable and reliable solution for traceability and linking across various tools, including our own demonstrator components. OSLC complements our FMU/FMI based co-simulation environment and offers the flexibility to add and change functionalities and maintain our vendor-indepenent approach for system modeling and simulation.</p>'
    ],
    'authors': [
      bio.thomasZ
    ]
  },
  PSunilK: {
    'title':'Knowledge graph for Multi brand engineering collaboration',
    'description':[
      '<p>Knowledge graph and associated technologies has been an emerging trend and we at Scania are also trying to benefit from it. Scania is a world-leading provider of transport solutions and is part of TRATON GROUP. In one of the initiatives where Scania engineers need to collaborate on R&D Engineering information with its Partner brand engineers such as MAN Truck and Bus and Navistar International, We have developed a solution that uses RDF and OSLC technology. When Scania shares vehicle components and related information with its partners. it is required to share and keep track of technical info such as part numbers , technical documents, product structures including its equivalent information at partner brands. so that information can be traced , cross referenced and used for performing updates. This process requires object referencing. e.g. Scania part number – MAN part number – Navistar Part number and unique relation is described by its specific versions and status. also this relations are extended with unlock for sharing rules and document cross references. Since it is a multi-brand scenario keeping track of such information is needed by all brands and hence we developed a common solution that supports such use cases and provides a single source of truth. We find it very useful to use RDF and Triple store to develop such an information model that is dynamic and connects many information layers and also stores the information accordingly. Earlier we tried a solution with a traditional relational data model and No SQL DB. but soon it became too complex to handle multi-brand scenarios and maintain. We decided to replace the data layer with Graph technology using RDF and are very satisfied with the result so far. Partner engineers are benefited in their daily work, feel more confident and trust the data quality delivered by knowledge graphs and can rely on finding unknown or missing data traces . It helps to perform information analysis, rectify the problem and do needful resolution. We are happy to demonstrate the use case and solution components.</p>'
    ],
    'authors': [
      bio.sunilK
    ]
  },
  PLaurentD: {
    'title':'MBSE in the Digital Thread with Capella Models Exposed to OSLC-compliant ALM and Requirements Management Tools',
    'description':[
      '<p>Capella is a widely adopted open-source MBSE solution that allows systems architects to design the architecture of systems, software and hardware.</p>',
      '<p>Guided by a field-proven methodology, Capella users produce models containing both the design elements and the diagrams that describe a system according to different perspectives : operational, functional and non functional, logical, physical.</p>',
      '<p>In order to connect these MBSE models to other project artifacts, such as requirements, tasks, issues, change requests, test cases, releases, and so on, Obeo has developed Publication for Capella, a solution that exposes Capella models on a server accessible by OSLC-compliant ALM and requirements management tools.</p>',
      '<p>Directly from these tools, a user can navigate through the Capella model elements that have been published on the Publication for Capella server, and establish traceability links from work items.</p>',
      '<p>A demo will show the integration between Publication for Capella and two ALM platforms: Siemens Polarion and IBM Jazz.</p>'
    ],
    'authors': [
      bio.laurentD
    ]
  },
  PRobertHellebrand2021: {
    'title':'Global Configurations in Product Line Engineering',
    'description':[
      '<p>pure::variants is the leading product line engineering tool that enables its customers from automotive, aerospace & defense, medical, rails & transportation and other industries to increase engineering efficiency with a holistic variant management for their engineering assets.</p>',
      '<p>This requires pure::variants to be well-integrated into the whole engineering tool landscape and to interoperate with the engineering data management in place.</p>',
      '<p>Join this presentation to get an overview of the OSLC capabilities of pure::variants that integrate variant management assets into Global Configurations as well as integrating Global Configurations into a holistic variant management strategy to make evolution of engineering assets across multiple variants manageable.</p>'
    ],
    'authors': [
      bio.robertH
    ]
  },
  PAndreasK2021: {
    'title':'How to use OSLC Links Bidirectionally',
    'description':[
      '<p>OSLC Links are, by definition, unidirectional. However, Engineering Process Norms like A-SPICE or Safety Norms like ISO26262 require bi-directional Traceability. The option to use 2 independent links from both directions seems to be simple, but could result in very difficult workflows and means also that the user has to create and maintain them.</p>',
      '<p>PTC developed and implemented the capability to use unidirectional links also from the reverse direction, called "Reverse Lookup". Basically it is using a query "who is connected to me?" It is available for both Windchill RV&S and Windchill Modeler and is already in practical use in projects.</p>',
      '<p>We will present this tool capability for both PTC SSE tools in a typical project environment within the SPES System-of-Systems methodology.</p>'
    ],
    'authors': [
      bio.andreasK
    ]
  },
  PAxelR2021: {
    'title':'Fundamental OSLC Concepts for Distributed Link Creation',
    'description':[
      '<p>Many different software applications are needed to describe and simulate many different aspects of a complex system. Achieving traceability in a multi-application context requires linking data across applications. However, this cannot be done by engineers in the most user-friendly manner within their familiar software applications without a distributed link creation paradigm. This presentation will address the key ideas of Open Services for Lifecycle Collaboration (OSLC) to realize a distributed link creation strategy including embeddable search dialogs, APIs adopting the Open World Assumption, and decoupling of link creation from link analysis.</p>'
    ],
    'authors': [
      bio.axelR
    ]
  },
  PMotiB2021: {
    'title':'Extending OSLC into the Digital Thread',
    'description':[
      '<p>SBE Vision has leading technology in the Digital Thread arena that enables ontology-first, hub-and-spoke linking and interoperability across the enterprise. OSLC interoperability is a critical element of the Digital Engineering ecosystem. SBE supports the OSLC 3.0 standard with general purpose consumer and provider container microservices. SBE will demonstrate its deep integration of ELM (DOORS Next w/GC) with Siemens Teamcenter, IBM Rhapsody, and Dassault Cameo. This demonstration will highlight SBE\'s strong OSLC support that is seamlessly interwoven with synchronization and transformation capabilities to provide comprehensive coverage of a wide variety of common use cases.</p>'
    ],
    'authors': [
      bio.motiB,
      bio.josephS,
      bio.davidV
    ]
  }
};
