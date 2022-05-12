# Taller2-SR

La API del backend se encuentra en http://172.24.41.184:8081/ y el frontend se encuentra en http://172.24.41.184:8080/ ingresando con el VPN de Uniandes.

URL Repositorio: https://github.com/jamorales11/Taller2-SR

API URL
http://172.24.41.184:8081

Paths API:

Obtener info de un usuario:
GET: /get_usuario/<id>
  
  
Obtener las top recomendaciones de locales para un usuario. También recibe los usuarios más importantes y las features de los locales más importantes usados por los modelos para generar las recomendaciones.
GET: /get_recomendaciones/<id>
