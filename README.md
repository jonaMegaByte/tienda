# Tienda
- Este es un proyecto personal. Es una tienda, la cual tiene como idea que se puedan realizar pagos mediante tarjetas de credito o debito.
- Se podra acceder a este proyecto desde la dirección: tienda-c1585.web.app .

## Instrucciones:
- Se selecciona cuales productos se desean comprar agregandolos al carrito.
- Cuando ya se termine de seleccionar, vamos al carrito, eliminamos alguno sí lo deseamos, o damos a continuar.
- Añadimos los datos de compra que ahí nos solicita y damos a continuar.
- Seleccionamos el metodo de pago deseado desde el boton de paypal que nos encotramos ahí, realizamos el pagó, y si está correcto, la compra estará hecha.

## Herramientas usadas:
- HTML, CSS.
- React.js.
- React Router Dom para el manejo de rutas.
- Webpack como empaquetador.
- Babel para compilar a diferentes navegadores.
- Redux para el manejo de estado y react-redux para su uso con React.
- Firebase para hosting y GitHub Actions para la integración continua.
- Eslint como linter y prettier para formato
- Paypal para realizar pagos.

## Limitantes de la aplicación:
- Mejora en estilos
- El metodo de pago de Paypal se esta usando solo el modo Sandbox, y no se está realizando la conversión de colones a dolares para que el precio en dolares sea el que se pague.
- Se está usando Paypal buttons, y la idea es no hacerlo, sino que se haga solo con tarjetas de credito o debito.
- No se esta usando una API, todo estará dentro del estado. Esto hace que las fotos posiblemente no se vean.