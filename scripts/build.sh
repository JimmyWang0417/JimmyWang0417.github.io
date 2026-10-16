#!/usr/bin/env bash
# Assemble deployable site into public/ (source stays on master).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public"

rm -rf "$PUBLIC"
mkdir -p "$PUBLIC"

rsync -a \
  --exclude='.git' \
  --exclude='.github' \
  --exclude='docs' \
  --exclude='scripts' \
  --exclude='public' \
  --exclude='README.md' \
  --exclude='.gitignore' \
  --exclude='package.json' \
  --exclude='package-lock.json' \
  --exclude='assets/avatar.jpg' \
  "$ROOT/" "$PUBLIC/"

# Keep upstream provenance out of the published tree.
rm -f "$PUBLIC/password-generator/UPSTREAM.md"

echo "Built $PUBLIC"
