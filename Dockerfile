FROM node

ARG PROJECT
WORKDIR /opt/${PROJECT}/rfm

COPY ./ /opt/${PROJECT}

RUN npm install
RUN npm completion >> /root/.bashrc

RUN npx playwright install-deps
RUN npx playwright install

COPY docker-config/bashrc /root/.bashrc
COPY ./docker-config/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint"]
