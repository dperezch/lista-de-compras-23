<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-expansion-item
      class="shadow-1 overflow-hidden text-subtitle1"
      style="border-radius: 30px"
      icon="waving_hand"
      label="Hola!"
      header-class="bg-cyan-8 text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section
          class="flex column items-center justify-center text-justify"
        >
          <p>
            Muchas gracias por utilizar esta aplicación, tu apoyo es muy
            importante para seguir creando apps útiles y gratuitas, si quieres
            conocer más de mi trabajo, puedes visitar mi página en el siguiente
            link:
          </p>

          <a
            href="http://portafoliodavidperez.netlify.app/#"
            target="_blank"
            class="mi-boton text-black q-pa-xs bg-amber-6 row text-weight-bold"
          >
            <q-icon size="md" name="person_pin" color="black" />
            MI WEBSITE
          </a>
        </q-card-section>
        <q-card-section
          class="flex column items-center justify-center text-justify"
        >
          <p class="q-mt-md">
            Si quieres, también puedes ayudarme con una donación voluntaria!
          </p>
          <a href="https://www.flow.cl/btn.php?token=wjyfoa1" target="_blank">
            <img src="https://www.flow.cl/img/botones/btn-donar-blanco.png" />
          </a>

          <p class="q-my-md">Muchas gracias!!!</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      href: "https://portafoliodavidperez.netlify.app/#",
    };
  },
};
</script>

<style>
.mi-boton {
  text-decoration: none;
  border-radius: 10px;
}
</style>
