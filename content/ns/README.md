# Canonical sources

- AM: XML
- Asset: XML
- Automation: XML
- LDBP: XML
- CM: XML
- Config: Turtle
- Core: Turtl
- EMS: XML
- Perfmon: XML
- QM: XML
- RM: XML

# Converting RDF files

1. Make sure Jena is installed and its `bin` dir is on your PATH.
2. Go into a folder in the NS.
3. Run `../../../bin/conneg.sh original.ttl`.
4. Make sure exit code is `0` and the files are intact.