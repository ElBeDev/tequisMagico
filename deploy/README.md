# Servidor

Todo corre en un VPS con Ubuntu 24.04 (`72.60.173.175`, 1 vCPU, 4 GB de RAM, 48 GB de disco).

| Pieza | Dónde | Notas |
|---|---|---|
| Sitio público | `tequis-web` → `127.0.0.1:3000` | `/srv/tequis/web`; variables en `/etc/tequis/web.env` |
| Panel y API | `tequis-panel` → `127.0.0.1:3100` | `/srv/tequis/web-admin`; variables en `/etc/tequis/panel.env` |
| Base | PostgreSQL 18, base `tequis` | Solo local; entra por socket con el usuario `tequis`, sin contraseña |
| Fotos | `/srv/tequis/uploads` | Caddy las sirve en `panel.tequismagico.com/uploads/` |
| HTTPS y dominios | Caddy (`/etc/caddy/Caddyfile`) | Certificados automáticos de Let's Encrypt |
| Respaldo | `tequis-backup.timer`, diario a las 09:30 UTC | `/srv/tequis/backups`, guarda 14 días. **Está en el mismo disco** |
| Seguridad | `ufw` (22, 80, 443) y `fail2ban` | |

Esta carpeta es una copia de la configuración del servidor, sin secretos. Si cambias algo allá, cámbialo aquí también.

## Desplegar

```
deploy/deploy.sh panel   # si cambió el API, primero este
deploy/deploy.sh web
```

Sube tu copia local y compila en el servidor en cerca de 1 minuto. Mientras dura, esa app puede responder con errores. Publica lo que tengas en tu máquina, aunque no esté en Git.

## Tareas comunes

Contraseña del panel:

```
ssh root@72.60.173.175 "grep ADMIN_PASSWORD /etc/tequis/panel.env"
```

Para cambiarla, edita ese archivo y corre `systemctl restart tequis-panel`.

Entrar a la base:

```
ssh root@72.60.173.175 "sudo -u tequis psql -d tequis"
```

Restaurar un respaldo en una base nueva y vacía:

```
sudo -u tequis pg_restore -d tequis /srv/tequis/backups/db-AAAA-MM-DD.dump
```

Ver registros:

```
journalctl -u tequis-web -n 50
journalctl -u tequis-panel -n 50
```
