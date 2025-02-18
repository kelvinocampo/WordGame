# WordGame

Crear un juego interactivo para 4 jugadores que, por turnos de 1 minuto, agreguen palabras que comiencen con una letra aleatoria. Al final del turno de cada jugador, se mostrará la lista de palabras ingresadas y su cantidad total.

Dispositivo objetivo: Mínimo funcionamiento en dispositivos móviles.

## Integrantes

Líder de Proyecto - Kevin Esneider Ocampo Osorio
Desarrollador Frontend - Jasmin Esperanza Garcia Paez, Kevin Esneider Ocampo Osorio
Desarrollador JavaScript - Jhonatan David Arcos Dominguez
Tester - Kevin Esneider Ocampo Osorio

## Documentación del Proceso

Durante el desarrollo, se debe registrar: 
- [Descripción de cada tarea realizada.](#descripción-de-cada-tarea-realizada)
- [Tiempo estimado vs tiempo real.](#tiempo-estimado-vs-tiempo-real)
- [Problemas encontrados y soluciones aplicadas.](#problemas-encontrados-y-soluciones-aplicadas)
- [Feedback del cliente y cambios realizados.](#feedback-del-cliente-y-cambios-realizados)

## Descripción de cada tarea realizada

1. **Crear Estructura del proyecto**: 
    - Establecer la organización básica del proyecto, incluyendo la configuración de carpetas y archivos necesarios para el desarrollo del juego.

2. **Crear Interfaz inicio**: 
   - Diseñar y desarrollar la pantalla de inicio del juego, donde los jugadores pueden ver el título del juego y seleccionar la cantidad de participantes para comenzar a jugar.

3. **Crear Interfaz del juego**: 
   - Implementar la interfaz principal donde se desarrollará la dinámica del juego, mostrando la letra aleatoria, el jugador actual, lugar para ingresar palabras y las 3 palabras validas recientes.

4. **Crear Interfaz del ganador**: 
   - Diseñar la pantalla que se mostrará al final del juego, donde se anunciará al ganador y se mostrarán las palabras de cada jugador indicando el puntaje mas alto con una corona sobre su numero y color.

5. **Crear Interfaz de espera**: 
   - Desarrollar una pantalla que se muestre mientras los jugadores esperan que el juego comience o mientras se generan letras.

6. **Crear Interfaz de siguiente jugador**: 
   - Implementar los cambios en la interfaz del juego para indicar que el siguiente jugador comenzara su turno

7. **Crear logica de seleccionar jugadores**: 
   - Desarrollar la funcionalidad que permite seleccionar la cantidad de jugadores definiendo la cantidad de turnos.

8. **Crear logica de generar letra al azar**: 
   - Implementar la lógica que selecciona una letra al azar para que los jugadores la utilicen en sus turnos.

9. **Crear logica de manejo de tiempo**: 
   - Desarrollar un temporizador que cuente regresivamente 60 segundos para cada turno.

10. **Crear logica de ingreso de palabras**: 
    - Implementar la funcionalidad que permite a los jugadores ingresar palabras en un campo de texto, asegurando que se registren correctamente ademas de validar que estas sean correctas, si es incorrecta esta no puede registrada.

11. **Crear logica de mostrar palabras recientes**: 
    - Desarrollar la lógica que muestra las 3 palabras mas recientes ingresadas por el jugador del turno actual.

12. **Crear logica de cambio de jugador**: 
    - Implementar la funcionalidad que permite cambiar entre jugadores después de que cada uno complete su turno.

13. **Crear logica de calcular ganador**: 
    - Desarrollar la lógica que contabiliza las palabras ingresadas por cada jugador al final del juego y determina quién es el ganador basado en la cantidad total de palabras registradas.

14. **Probar la Interfaz de inicio**: 
    - Probar y determinar el correcto funcionamiento de la seleccion de jugadores ademas del responsive la interfaz.

15. **Probar la Interfaz de espera**: 
    - Probar y determinar el correcto funcionamiento del tiempo de espera ademas del responsive la interfaz.

16. **Probar la Interfaz de juego**: 
    - Probar y determinar el correcto funcionamiento del ingreso de palabras, la validacion de las mismas y la correcta visualizacion de las palabras recientes ademas del responsive la interfaz.

17. **Probar la Interfaz de siguiente**: 
    - Probar y determinar el correcto funcionamiento del cambio entre jugadores jugadores ademas del responsive la interfaz.

18. **Probar la Interfaz de ganador**: 
    - Probar y determinar el correcto funcionamiento del calculo de puntajes y determinacion del ganador ademas del responsive la interfaz.

19. **Crear la documentacion requerida**: 
    - Crear documentacion requerida para la correcta presentacion del sistema.

## Tiempo estimado vs tiempo real

| Tarea                                      | Tiempo Estimado  | Tiempo Real |
|--------------------------------------------|------------------|-------------|
| Crear Estructura del proyecto              | 10 minutos       | 8 minutos   |
| Crear Interfaz Inicio                      | 3 horas          | 3.5 horas   |
| Crear Interfaz del juego                   | 3.5 horas        | 3.5 horas   |
| Crear Interfaz del ganador                 | 3 horas          | 2 horas     |
| Crear Interfaz de espera                   | 30 minutos       | 30 minutas  |
| Crear Interfaz de siguiente jugador        | 30 minutos       | 10 minutos  |
| Crear logica de seleccionar jugadores      | 30 minutos       | 20 minutos  |
| Crear logica de generar letra al azar      | 20 minutos       | 20 minutos  |
| Crear logica de manejo de tiempo           | 40 minutos       | 5 minutos   |
| Crear logica de ingreso de palabras        | 40 minutos       | 30 minutos  |
| Crear Logica de mostrar palabras recientes | 40 minutos       | 20 minutos  |
| Crear logica de cambio de jugador          | 1 hora           | 50 minutos  |
| Crear Logica de calcular ganador           | 1 hora           | 55 minutos  |
| Probar la Interfaz de inicio               | 15 minutos       |             |
| Probar la Interfaz de espera               | 10 minutos       |             |
| Probar la Interfaz de juego                | 10 minutos       |             |
| Probar la Interfaz de siguiente            | 5 minutos        |             |
| Probar la Interfaz de ganador              | 10 minutos       |             |
| Crear la documentacion requerida           | 2 hora           | 1.5 hora... |

## Problemas encontrados y soluciones aplicadas

## Feedback del cliente y cambios realizados
