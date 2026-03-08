# 📝 ENUNCIADO DEL EJERCICIO: REFUERZO

## Sistema de Notificaciones Omnicanal (SmartNotify)

**Asignatura**: Diseño de Software I
**Tiempo**: 150 minutos
**Modalidad**: Individual (Práctica de Refuerzo)

---

## 📤 Instrucciones de entrega

* Sigue las instrucciones en ENTREGA.md
* Alternativamente, envía un `.zip` de la carpeta `rehearsal-exam` a `vinyes@outlook.com`

---

## Criterios de evaluación

* **Legibilidad**: Código limpio y nombres semánticos.
* **SOLID**: Aplicación estricta de los 5 principios.
* **Patrones Solicitados**:
* **Factory Method**: Para la creación de canales de comunicación.
* **Strategy**: Para los diferentes niveles de prioridad/formateo.
* **Observer (o Pub-Sub)**: Para que los usuarios se suscriban a diferentes categorías de alertas.
* **Facade**: Para simplificar el envío de notificaciones desde el cliente.



---

## 🎯 Objetivos de implementación

* **SRP**: Separar la lógica de envío de la lógica de suscripción.
* **OCP**: Permitir añadir nuevos canales (ej. Slack, WhatsApp) sin modificar el núcleo.
* **Simple Factory / Factory Method**: Centralizar la creación de los "Senders".
* **Strategy**: Intercambiar el algoritmo de "Formateo de Mensaje" (Corto para SMS, Enriquecido para Email).
* **Observer**: Gestionar la lista de usuarios interesados en categorías (Promociones, Seguridad, Sistema).

---

## 📋 Descripción del Problema

La startup "SmartNotify" necesita un motor de notificaciones que permita a los usuarios suscribirse a diferentes **temas** (topics) y recibir alertas por distintos **canales**.

### Requisitos Funcionales:

#### 1. Gestión de Suscripciones (Observer)

El sistema debe permitir que los usuarios se den de alta o baja en temas específicos:

* **Seguridad**: Alertas de inicio de sesión.
* **Promociones**: Ofertas de marketing.
* **Sistema**: Avisos de mantenimiento.

#### 2. Canales de Envío (Factory + Strategy)

Existen tres canales principales inicialmente:

* **Email**: Requiere dirección de correo y asunto.
* **SMS**: Requiere número de teléfono y máximo 160 caracteres.
* **Push**: Requiere un token de dispositivo.

Cada canal debe usar una **Estrategia de Formateo**:

* **Estrategia Urgente**: Añade "[ALERTA CRÍTICA]" al inicio.
* **Estrategia Marketing**: Añade un link de "Darse de baja" al final.

#### 3. Fachada de Envío (Facade)

Para evitar que el programador de "Frontend" tenga que configurar el Factory y el Observer manualmente, se requiere una `NotificationFacade` que:

* Reciba un mensaje, un tema (topic) y un nivel de urgencia.
* Identifique a los usuarios suscritos.
* Envíe el mensaje formateado por el canal preferido de cada usuario.

---

## 🎯 Ejemplo de Uso Esperado

```typescript
const notifyService = new NotificationFacade();

// Un usuario se suscribe a alertas de Seguridad
const user1 = new User("Ana", "ana@email.com", "600000000");
notifyService.subscribe(user1, "SECURITY");

// El sistema detecta un problema y envía notificación
// La fachada se encarga de usar la Factory para crear el Sender, 
// aplicar la Strategy de "Urgente" y notificar a los observadores.
notifyService.broadcast("Intento de acceso detectado", "SECURITY", "URGENT");

```

---

## 🚫 NO Permitido

* Uso de Inteligencia Artificial para generar el código.
* Librerías externas de notificación (usar `console.log` para simular el envío).
* Compartir la solución con otros compañeros.

---

## Notas Importantes

* **Simplicidad**: El envío real de un SMS no es necesario, basta con un `console.log("Enviando SMS a 600...: [ALERTA] ...")`.
* **Arquitectura**: Se valorará positivamente la separación en carpetas (`/patterns`, `/models`, `/services`).
* **Flexibilidad**: Asegúrate de que si mañana queremos añadir "Discord" como canal, sea solo crear una clase nueva y tocar la Factory.