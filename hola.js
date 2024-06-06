
function holaMundo() {
    return "¡Hola Mundo!";
  }
  
  console.log(holaMundo());
  

  test('Prueba de Hola Mundo', () => {
    expect(holaMundo()).toBe("¡Hola Mundo!");
  });
  