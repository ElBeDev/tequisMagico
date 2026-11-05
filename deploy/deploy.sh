#!/usr/bin/env bash
# Despliega web/ o web-admin/ al VPS desde tu copia local. Uso: deploy/deploy.sh web|panel
# Pide la contraseña de root si no tienes llave SSH. Compila en el servidor (~1 min): mientras
# dura, esa app puede responder con errores.
# Orden si cambian las dos: primero panel, porque web lee su API al compilar.
set -euo pipefail
HOST="${DEPLOY_HOST:-root@72.60.173.175}"
case "${1:-}" in
  web)   DIR=web;       SVC=tequis-web;   ENVF=/etc/tequis/web.env ;;
  panel) DIR=web-admin; SVC=tequis-panel; ENVF=/etc/tequis/panel.env ;;
  *) echo "Uso: $0 web|panel" >&2; exit 2 ;;
esac
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
rsync -az --delete --exclude node_modules --exclude .next --exclude '.env*' \
  --exclude tsconfig.tsbuildinfo --exclude public/maplibre-gl-worker.mjs \
  "$ROOT/$DIR/" "$HOST:/srv/tequis/$DIR/"
ssh "$HOST" "bash -s" <<EOF
set -euo pipefail
chown -R tequis:tequis /srv/tequis/$DIR
cd /srv/tequis/$DIR
sudo -u tequis -H npm ci --no-audit --no-fund | tail -1
# Sin esto, la compilación reutiliza respuestas del API de hasta 5 min y no genera lo recién agregado.
rm -rf /srv/tequis/$DIR/.next/cache/fetch-cache
sudo -u tequis -H bash -c 'set -a; . $ENVF; set +a; NEXT_TELEMETRY_DISABLED=1 npm run build' | tail -3
systemctl restart $SVC
sleep 5
systemctl is-active $SVC
EOF
