# Entregable 1 - Semana 4

## Descripción
Simulador de compra de pasajes. Como primer etapa, solo existe un solo destino, con valor único y un descuento por compra **Ida y Vuelta**.

Se intenta seguir con las **buenas prácticas**, definiendo **variables** y **funciones**, y luego utilizándolas en una función principal que es llamada al presionar el botón **comprar**.

## Tecnologías

- HTML
- CSS
- TailwindCSS
- Javascript

## Scope

### El usuario podrá: 

- Iniciar una compra.
- Elegir cantidad de pasajes.
- Decidir si es ida y vuelta.
- Ingresar Nombre y DNI de cada pasajero.
- Confirmar compra al final.
- Obtener un mensaje de compra finalizada.

## Validaciones

- Se valida que la cantidad de pasajes sea un número entero y se brindan 3 intentos.
- Se valida que el nombre no sea null y se brindan 3 intentos.
- Se valida que el DNI sea un número mayor a 0 y se brindan 3 intentos.
- Para las validaciones se utilizaron diferentes ciclos: **for, while y do while**



## Comentarios

- Iba a utilizar varios destinos pero para simplificar, y que no haya tanto código **JS**, lo dejé solamente en un destino.

- Se colocaron diferentes comentarios en el código **HTML** y en el código **JS** para mejor entendimiento.

- Se agregó funcionalidad onclick en botón **Comprar** para activar la compra.

- Se agregó un **console.table** al final de la función para mostrar una tabla de los pasajes vendidos.

- Adicionalmente cree un array para hacer uso de objetos literales dentro. Se está guardando el objeto **pasajero**

##