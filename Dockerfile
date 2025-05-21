FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 



COPY ./dist /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod -R 755 /etc/nginx/nginx.conf
RUN chown -R nginx:nginx /etc/nginx/nginx.conf


EXPOSE 80