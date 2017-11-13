var express =  require ( ' express ' )
var app =  express ()

aplicación . set ( ' puerto ' , ( proceso . env . PORT  ||  5000 ))
aplicación . use ( express . static ( __dirname  +  ' / public ' ))

aplicación . get ( ' / ' , función ( solicitud , respuesta ) {
  respuesta . enviar ( ' ¡Hola mundo! ' )
})

aplicación . listen ( app . get ( ' puerto ' ), función () {
  consola . log ( "La aplicación Node se está ejecutando en localhost: "  +  app . get ( ' port ' ))
})