# Canonical sources

- AM: XML
- Asset: XML
- Automation: XML
- LDBP: XML
- CM: Turtle
- Config: Turtle
- Core: Turtle
- EMS: XML
- Perfmon: XML
- QM: XML
- RM: Turtle
- TRS: Turtle

# Converting RDF files

1. Make sure Jena is installed and its `bin` dir is on your PATH.
2. Go into a folder in the NS.
3. Run `../../../bin/conneg.sh original.ttl`.
4. Make sure exit code is `0` and the files are intact.

# Checking all files

   find . -type f -regextype posix-extended -regex '.*\.(nt|jsonld|xml|rdf|ttl)' -print0 | xargs -0 -I{} riot --check --strict --sink {}

Or, faster:

   find . -type f -regextype posix-extended -regex '.*\.(nt|jsonld|xml|rdf|ttl)' -print | parallel --gnu echo {} ';' riot --check --strict --sink {}           