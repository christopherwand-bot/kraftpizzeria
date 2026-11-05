FROM caddy:2-alpine

WORKDIR /srv

COPY Caddyfile /etc/caddy/Caddyfile
COPY index.html styles.css locations.css script.js content.js kongsberg-content.js /srv/
COPY *.png *.jpg *.jpeg /srv/
COPY honefoss/ /srv/honefoss/
COPY kongsberg/ /srv/kongsberg/
COPY assets/ /srv/assets/

RUN caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile

ENV PORT=8080
EXPOSE 8080

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
