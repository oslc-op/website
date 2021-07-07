# Canonical sources

- AM: Turtle
- Asset: XML
- Automation: XML
- LDBP: XML
- CM: XML
- Config: Turtle
- Core: XML
- EMS: XML
- Perfmon: XML
- QM: XML
- RM: XML

# Converting RDF files

Use Jena command line tools to produce the files in other formats:

    riot --output turtle core.rdf > core.ttl

For Turtle as a canonical source:

    riot --strict --quiet --formatted=rdfxml source.ttl > source.rdf
    riot --strict --quiet --formatted=jsonld source.ttl > source.jsonld
    riot --strict --quiet --formatted=ntriples source.ttl > source.nt