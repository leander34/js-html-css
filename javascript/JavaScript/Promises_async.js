function exec(texto, falha) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() > falha) {
        resolve(texto);
      } else {
        throw new Error();
      }
    } catch (error) {
      reject("Não foi dessa vez");
    }
  });
}

// exec('leander, lindo!', 0.8).then(console.log).catch(error => console.log(error))

async function esperar() {
  console.log('lnder')
  console.log('lder')
  console.log('lnder')
  console.log('lea')

  for(let i = 0; i < 10000000000; i++) {

  }
}

async function func(nome) {
  await esperar();

  return nome;
}

func("foiiiiiiiiiiiiiiiiiii").then(console.log);
