# Canonical sources

- AM: Turtle
- Asset: XML
- Automation: XML
- LDBP: XML
- CM: Turtle
- Config: Turtle
- Core: Turtle
- EMS: XML
- Perfmon: XML
- QM: Turtle
- RM: Turtle
- TRS: Turtle

# Converting RDF files

1. Make sure Jena is installed and its `bin` dir is on your PATH.
 * You will need Java11 ([SDKMan](https://sdkman.io)) 
 * get [Apache jena command line utilities](https://jena.apache.org/documentation/tools/index.html)
 * Download from [Apache Jena Releases](https://jena.apache.org/download/index.cgi) to say `~/lib/`
 * `export JENA_HOME=~/lib/jena-4.6.1/apache-jena`
 * `export PATH=$PATH:$JENA_HOME/bin`
 * Make sure JAVA_HOME is set properly
 * Or use `brew install jena`
2. Go into a folder in the NS.
3. Run `../../../bin/conneg.sh <file>`. where `<file>` is the name of a vocab or shape ttl file wihout the .ttl extension
4. Make sure exit code is `0` and the files are intact.

# Checking all files

   find . -type f -regextype posix-extended -regex '.*\.(nt|jsonld|xml|rdf|ttl)' -print0 | xargs -0 -I{} riot --check --strict --sink {}

Or, faster:

   find . -type f -regextype posix-extended -regex '.*\.(nt|jsonld|xml|rdf|ttl)' -print | parallel --gnu echo {} ';' riot --check --strict --sink {}           