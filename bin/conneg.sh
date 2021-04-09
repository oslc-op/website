#!/usr/bin/env bash
set -eExuo pipefail

NSNAME="${1%.*}"

riot -q --check --stop-warnings --formatted=rdfxml "${NSNAME}.ttl" > "${NSNAME}.rdf"
riot -q --check --stop-warnings --formatted=ntriples "${NSNAME}.ttl" > "${NSNAME}.nt"
riot -q --check --stop-warnings --formatted=jsonld "${NSNAME}.ttl" > "${NSNAME}.jsonld"