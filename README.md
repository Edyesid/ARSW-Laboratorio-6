# ARSW - Laboratorio - 6

## Integrantes

Edwin Yesid Rodriguez Maldonado

Guillermo Esteban Bernal Bonilla

## Comandos para ejecutar la aplicación

```
mvn clean compile
```

```
mvn spring-boot:run
```
 
## Descripción y objetivos

Se desea generar una pequeña interfaz de administrador para el sistema de gestión de compra/reserva de boletos de cine. Para efectos prácticos del ejercicio se creará un espacio en la misma pantalla destinado para esto, tal y como se ve en el mock provisto.

![image](https://user-images.githubusercontent.com/54051399/94070683-41532800-fdb8-11ea-960e-c255743915e3.png)

1. Agregue el campo de entrada para editar el horario de la función y el botón 'Save/Update'. Respetando la arquitectura de módulos actual del cliente, haga que al oprimirse el botón:
	* Se haga PUT al API, con la función actualizada, en su recurso REST correspondiente.
	* Se haga GET al recurso /cinemas/{name}/{date}, para actualizar el listado de las funciones del cine y de la fecha previamente seleccionados.
	Para lo anterior tenga en cuenta:
	* jQuery no tiene funciones para peticiones PUT o DELETE, por lo que es necesario 'configurarlas' manualmente a través de su API para AJAX. Por ejemplo, para hacer una 	peticion PUT a un recurso /myrecurso:
	
	![image](https://user-images.githubusercontent.com/54051399/94070831-80817900-fdb8-11ea-85be-a472526a7382.png)
	
	Para éste note que la propiedad 'data' del objeto enviado a $.ajax debe ser un objeto jSON (en formato de texto). Si el dato que quiere enviar es un objeto JavaScript, 	puede convertirlo a jSON con:
	
	![image](https://user-images.githubusercontent.com/54051399/94070898-9bec8400-fdb8-11ea-90e7-1fd968d5a98d.png)

	* Como en este caso se tienen dos operaciones basadas en callbacks, y que las mismas requieren realizarse en un orden específico, tenga en cuenta cómo usar las promesas 	de JavaScript mediante alguno de los ejemplos disponibles.
	
	![punto 1](https://user-images.githubusercontent.com/54051399/94607586-bd8ab700-0261-11eb-8a8e-1be5480eaca0.png)
	
2. Agregue el botón 'Create new function', de manera que cuando se oprima:

	* Se borre el canvas actual.
	
	* Se solicite el nombre y género de la película, además de la hora de la nueva función (usted decide la manera de hacerlo). Se tendrá en cuenta el nombre del cine y la 	fecha actualmente consultados para asociarles la función.
	
Esta opción debe cambiar la manera como funciona la opción 'save/update', pues en este caso, al oprimirse la primera vez (es decir cuando se va guardar la nueva función 'save') debe (igualmente, usando promesas):

	* Hacer POST al recurso /cinemas/{name}, para crear la nueva función.
	
	* Hacer GET al respectivo recurso, para actualizar el listado de funciones.
	
	
![punto 2](https://user-images.githubusercontent.com/54051399/94607765-f88cea80-0261-11eb-830d-a10c60193314.png)
	
	
3. Agregue el botón 'DELETE', de manera que (también con promesas):

	* Borre el canvas.
	
	* Haga DELETE de la función actualmente seleccionada.
	
	* Haga GET de las funciones ahora disponibles.
	
	![punto 3](https://user-images.githubusercontent.com/54051399/94607604-c1b6d480-0261-11eb-8fa1-a9212bbb6246.png)
