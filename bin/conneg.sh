#!/usr/bin/env bash
set -eExuo pipefail

NSNAME="${1%.*}"

riot -q --check --strict --formatted=rdfxml "${NSNAME}.ttl" > "${NSNAME}.rdf"
riot -q --check --strict --formatted=ntriples "${NSNAME}.ttl" > "${NSNAME}.nt"
riot -q --check --strict --formatted=jsonld "${NSNAME}.ttl" > "${NSNAME}.jsonld"