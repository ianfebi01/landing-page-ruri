<template>
  <v-container class="py-0" fluid style="max-width: 1006px">
    <!-- <v-btn flat color="primary" @click="toggleTheme()">Ruri Hilman Maul</v-btn> -->
    <v-row
      align="center"
      class="py-12"
      justify="center"
      style="min-height: 100vh"
    >
      <v-col cols="12" class="mb-12">
        <v-row align="center" justify="center" class="text-42 font-weight-bold"
          >RURI HILMAN</v-row
        >
        <v-row
          align="center"
          justify="center"
          class="text-24 font-weight-normal"
          >Lorem Ipsum</v-row
        >
      </v-col>

      <v-col cols="12" sm="12" md="6" class="d-flex flex-column justify-center">
        <span
          class="text-48 font-weight-bold line-height-normal letter-spacing-small"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <p class="text-18 font-weight-normal mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
          integer malesuada nunc vel risus commodo viverra. Adipiscing tristique
          risus nec feugiat.
        </p>
        <div class="text-18 font-weight-normal mt-4">
          <span>Non odio euismod lacinia,</span>
          <span class="text-primary font-italic">
            "at quis risus sed vulputate odio"</span
          >
        </div>
        <div>
          <v-btn class="font-weight-bold mt-6" flat color="primary" height="44"
            >Daftar Sekarang</v-btn
          >
        </div>
      </v-col>
      <v-col>
        <img
          class="img"
          src="https://res.cloudinary.com/djyp9rr7s/image/upload/v1675074358/ruri/316361489_873560520304969_5730880566553154489_n_nq96ev.jpg"
        />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" class="py-12" justify="center" style="height: 100vh"
      ><v-col class="d-flex flex-column justify-center">
        <span
          class="text-48 font-weight-bold line-height-normal letter-spacing-small"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <p class="text-18 font-weight-normal mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
          integer malesuada nunc vel risus commodo viverra. Adipiscing tristique
          risus nec feugiat.
        </p>
        <div class="text-18 font-weight-normal mt-4">
          <span>Non odio euismod lacinia,</span>
          <span class="text-primary font-italic">
            "at quis risus sed vulputate odio"</span
          >
        </div>
        <div>
          <v-btn class="font-weight-bold mt-6" flat color="primary" height="44"
            >Daftar Sekarang</v-btn
          >
        </div>
      </v-col></v-row
    >
    <v-divider></v-divider>
    <v-row align="center" class="py-12" justify="center" style="height: 100vh"
      ><v-col
        :cols="smAndDown && '12'"
        :class="['d-flex flex-column justify-center']"
      >
        <v-sheet
          class="mx-auto"
          max-width="100%"
          color="background"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-group-item
              v-for="n in 5"
              :key="n"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <div class="slides-wrapper ma-4">
                <img
                  src="https://res.cloudinary.com/djyp9rr7s/image/upload/v1675074358/ruri/316361489_873560520304969_5730880566553154489_n_nq96ev.jpg"
                  :class="['sildes', selectedClass, isSelected && 'select']"
                  style="cursor: pointer"
                  @click="toggle"
                />
              </div>
            </v-slide-group-item>
          </v-slide-group>

          <v-expand-transition>
            <v-sheet v-if="model != null" height="100" color="background">
              <div class="d-flex fill-height align-center justify-center">
                <h3 class="text-24">Nyengoh {{ model }}</h3>
              </div>
            </v-sheet>
          </v-expand-transition>
        </v-sheet>
      </v-col></v-row
    >
    <v-divider> </v-divider>
    <v-row
      align="center"
      class="py-12"
      justify="center"
      style="min-height: 100vh: overflow: hidden; position: relative"
    >
      <v-col cols="12" class="d-flex flex-column justify-center">
        <div :class="!smAndDown && 'px-16 mx-10'">
          <span
            class="text-48 font-weight-bold line-height-normal letter-spacing-small"
          >
            Lorem Ipsum is simply dummy text
          </span>
          <p class="text-18 font-weight-normal mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
            integer malesuada nunc vel risus commodo viverra. Adipiscing
            tristique risus nec feugiat.
          </p>
          <div class="text-18 font-weight-normal mt-4">
            <span>Non odio euismod lacinia,</span>
            <span class="text-primary font-italic">
              "at quis risus sed vulputate odio"</span
            >
          </div>
          <p class="text-18 font-weight-normal mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
            integer malesuada nunc vel risus commodo viverra. Adipiscing
            tristique risus nec feugiat.
          </p>
          <div class="text-18 font-weight-normal mt-4">
            <span>Non odio euismod lacinia,</span>
            <span class="text-primary font-italic">
              "at quis risus sed vulputate odio"</span
            >
          </div>
          <p class="text-18 font-weight-normal mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
            integer malesuada nunc vel risus commodo viverra. Adipiscing
            tristique risus nec feugiat.
          </p>
          <div class="text-18 font-weight-normal mt-4">
            <span>Non odio euismod lacinia,</span>
            <span class="text-primary font-italic">
              "at quis risus sed vulputate odio"</span
            >
          </div>
        </div>
        <div
          :class="[
            'mt-8 d-flex',
            smAndDown && 'flex-column align-center justify-center',
          ]"
          style="gap: 18px"
        >
          <v-card
            v-for="items in 3"
            :key="item"
            :width="smAndDown ? '100%' : '300'"
            height="175"
            color="background-50"
            class="d-flex flex-column align-center justify-center"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <span class="text-primary text-48 font-weight-bold">6500+</span>
            <span class="text-surface text-18 font-weight-medium"
              >Adipiscing elit</span
            >
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useTheme, useDisplay } from "vuetify";

// Change Theme
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
// Change Theme

// Responsive

const { smAndDown } = useDisplay();

// Responsive

// slider
const model = ref(false);
// slider

// Paralax
// onMounted(() => {
//   document.addEventListener("scroll", onScroll);
// });

// const onScroll = (e) => {
//   console.log(window.scrollY);
//   const gg = document.getElementById("paralax");
//   console.log("gg", window.scrollY + gg.getBoundingClientRect().top);
//   gg.style.bottom = window.scrollY - 2000 + "px";
// };
// Paralax
</script>
<style lang="scss" scoped>
@use "@/assets/scss/abstracts/variables.scss" as v;
.img {
  border-radius: 8px !important;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
}
.select {
  padding: 0;
  transform: scale(1.1);
}
.sildes {
  padding: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: ease-in transform 0.2s;
}
.slides-wrapper {
  border-radius: 8px;
  height: 400px;
  width: 300px;
  overflow: hidden;
}
.paralax {
  position: absolute;
  bottom: 0;
}
</style>
