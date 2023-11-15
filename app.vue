<template>
  <div class="flex flex-col gap-10 p-5 max-lg:p-0">
    <!-- whatsapp -->
    <a
      href="https://api.whatsapp.com/send?phone=5511981206959&text=Ol%C3%A1%2C%20quero%20me%20associar!"
      target="_blank"
      class="fixed md:right-10 md:bottom-10 right-0 bottom-0 z-50"
    >
      <img src="/whatsapp.webp" width="100" alt="Botão do Whatsapp" />
    </a>

    <section id="home" class="!mb-0 overflow-visible">
      <!-- banner -->
      <main class="main w-full lg:rounded-3xl bg-cover px-6 md:px-24 py-10">
        <!-- header -->
        <header class="flex max-md:flex-col gap-5 justify-between items-center">
          <!-- logo -->
          <img src="/logo-white.png" alt="Logo Branca da Gehon" />

          <!-- nav -->
          <nav>
            <a
              class="btn text-white"
              v-for="{ label, path } in tabs"
              :href="path"
              >{{ label }}</a
            >
          </nav>
        </header>

        <section
          class="flex max-lg:flex-col items-center justify-between md:my-36 my-24"
        >
          <article class="flex flex-col gap-10">
            <!-- avatares -->
            <figure class="avatars flex w-fit p-1 rounded-full">
              <img
                v-for="{ picture } in reviews"
                :src="picture"
                class="w-11 border border-solid rounded-full border-white bg-white [&:not(:first-child)]:-ml-2"
              />
            </figure>

            <!-- title -->
            <h1 class="text-white text-4xl sm:!text-6xl">
              Somos
              <b class="text-4xl sm:!text-6xl text-white font-bold">+2000</b>
              <br />associados
            </h1>

            <!-- buttons -->
            <footer class="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5511981206959&text=Ol%C3%A1%2C%20quero%20me%20associar!"
                target="_blank"
                class="btn btn-white hover:!bg-white"
              >
                Quero me associar
              </a>
              <a
                href="#reviews"
                class="btn btn-white !bg-transparent text-white"
              >
                Depoimentos
              </a>
            </footer>
          </article>

          <!-- reviews -->
          <aside class="max-lg:hidden">
            <CardReview
              :review="reviews[0]"
              class="bg-white sm:!w-96 xl:-translate-x-36"
            />
            <CardReview :review="reviews[1]" class="bg-white sm:!w-96 mt-5" />
          </aside>
        </section>
      </main>
    </section>

    <!-- about -->
    <section id="about" class="bg-secondary p-12 max-lg:px-5 lg:rounded-3xl">
      <h2 class="text-4xl font-semibold">Valores</h2>

      <article class="flex max-lg:flex-wrap gap-10 mt-10">
        <!-- mission -->
        <div class="card card-body !p-8 gap-5">
          <i class="bi-house-fill text-3xl"></i>

          <h5 class="text-2xl font-semibold">Construir Sonhos</h5>

          <p class="text-base">
            Temos como missão impactar a vidas das pessoas, através da habitação
            social e regularização fundiária.
          </p>
        </div>

        <!-- vision -->
        <div class="card card-body !p-8 gap-5">
          <i class="bi-star-fill text-3xl"></i>

          <h5 class="text-2xl font-semibold">Trabalhar com Inovação</h5>

          <p class="text-base">
            Ser reconhecidos pela inovação, através de nossos projetos sociais,
            impactando a sociedade de forma positiva.
          </p>
        </div>

        <!-- values -->
        <div class="card card-body !p-8 gap-5">
          <i class="bi-heart-fill text-3xl"></i>

          <h5 class="text-2xl font-semibold">Colaboração e Criatividade</h5>

          <p class="text-base">
            Temos como valores que guiam nossas ações: Fé, Determinação, Ética,
            Colaboração e Criatividade.
          </p>
        </div>
      </article>
    </section>

    <!-- reviews -->
    <section id="reviews" class="p-12 max-lg:px-5">
      <h2 class="text-4xl font-semibold">Depoimentos</h2>

      <!-- cards -->
      <article class="splide flex mt-10">
        <div class="splide__track">
          <div class="splide__list">
            <div
              v-for="(review, i) in reviews"
              class="splide__slide px-5 w-full sm:max-w-[400px]"
            >
              <CardReview :review="review" :key="i" class="!w-full" />
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- about -->
    <footer
      id="about"
      class="bg-secondary flex max-md:flex-col justify-around gap-14 p-12 max-lg:px-5 lg:rounded-3xl"
    >
      <!-- contact -->
      <aside
        class="flex flex-col gap-2 icons-footer max-md:items-center max-md:text-center"
      >
        <!-- logo -->
        <img src="/logo.png" class="w-fit" alt="Logo Gehon" />
        <!-- email -->
        <a
          href="mailto:intituto@gehon.org.br"
          class="flex items-center gap-2 text-base"
        >
          <i class="bi-envelope-fill text-base"></i>intituto@gehon.org.br
        </a>
        <!-- phone -->
        <a href="tel:+5511981206959" class="flex items-center gap-2 text-base">
          <i class="bi-telephone-fill text-base"></i>+55 (11) 98120-6959
        </a>
        <!-- phone -->
        <a class="flex items-center gap-2 text-base">
          <i class="bi-clock-fill text-base"></i>Segundo a Sexta (9hrs - 17hrs)
          <br />
          Sabado (9hrs - 13hrs)
        </a>
      </aside>

      <!-- location -->
      <aside class="flex flex-col gap-2 max-md:text-center">
        <h4 class="text-xl font-semibold">Localização</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.716477409399!2d-46.74985432386818!3d-23.50671957883738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef96f5f902f7d%3A0x5da345362b4e2198!2sInstituto%20Gehon!5e0!3m2!1spt-BR!2sbr!4v1700057668792!5m2!1spt-BR!2sbr"
          width="200"
          height="200"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          class="max-md:w-full"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </aside>

      <!-- navigation -->
      <aside class="flex flex-col gap-2 max-md:text-center">
        <h4 class="text-xl font-semibold">Navegação</h4>
        <a v-for="{ label, path } in tabs" :href="path">{{ label }}</a>
      </aside>

      <!-- social media -->
      <aside class="flex flex-col gap-2 max-md:text-center">
        <h4 class="text-xl font-semibold">Redes Sociais</h4>
        <a href="https://m.facebook.com/gehon.org.br/" target="_blank"
          >Facebook</a
        >
        <a href="https://www.instagram.com/instituto_gehon/" target="_blank"
          >Instragram</a
        >
      </aside>
    </footer>
  </div>
</template>

<script setup lang="ts">
import pkg from "./package.json";
import "@chrissgon/perfectui/dist/perfectui.css";
import { setThemeColor } from "@chrissgon/perfectui";
import type { ITabs, IReviews } from "./interfaces";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

setTimeout(() => {}, 1000);

function initSlider(): void {
  if (!document.querySelector(".splide")) {
    setTimeout(() => {
      initSlider();
    }, 500);
    return;
  }

  new Splide(".splide", {
    perMove: 1,
    omitEnd: true,
    wheel: true,
    rewind: true,
  }).mount();
}

initSlider();

// data
const tabs = reactive<ITabs>([
  {
    label: "Início",
    path: "#home",
  },
  {
    label: "Valores",
    path: "#about",
  },
  // {
  //   label: "Projetos",
  //   path: "#projects",
  // },
  {
    label: "Depoimentos",
    path: "#reviews",
  },
]);

const reviews = reactive<IReviews>([
  {
    stars: 5,
    name: "Christopher Brendo",
    comment:
      "Instituto incrível, com projetos sérios e pessoas competentes. Os trabalhos sociais sobre moradia são incríveis",
    picture:
      "https://lh3.googleusercontent.com/a-/ALV-UjWSGkV-feZNWFC4fe5sGP8B5ZLrOFbOnzCC0tw_1mHv=s50-c-rp-mo-br100",
  },
  {
    stars: 5,
    name: "Thais Emilly",
    comment:
      "Agradeço a toda da equipe Gehon, realizei meu sonho de ter minha a casa sem burocracia. Sou grata a todos que trabalham nesse projeto ajudando tantas pessoas a realizarem o sonho de ter a casa própria. Super recomendo!",
    picture:
      "https://lh3.googleusercontent.com/a-/ALV-UjVP9elTtjP_xHzx356kAdMoCYmTg5qSvqCgWbamoRZdvmgh=s50-c-rp-mo-br100",
  },
  {
    stars: 5,
    name: "Edenir Araújo",
    comment:
      "Instituto sério! Atendimento acima da média. Profissionalismo, respeito e atenção total para os clientes e associados!",
    picture:
      "https://lh3.googleusercontent.com/a-/ALV-UjWYL5hCBp6EsGNKffq_NedqrFTKlNn2Kf-wudnw9yLZePB-=s50-c-rp-mo-br100",
  },
  {
    stars: 5,
    name: "Nilton Neves",
    comment:
      "Parabéns toda a equipe, principalmente o Lorenzo pela dedicação na realização dos sonhos de muitas famílias que mora de aluguel.",
    picture:
      "https://lh3.googleusercontent.com/a-/ALV-UjUoxKnEsfqxsvbccIdKq52sxta-xovY9krvZp5c9ODH7JQ=s50-c-rp-mo-br100",
  },
  {
    stars: 5,
    name: "Kécia Nunes",
    comment:
      "Excelente trabalho social, para as pessoas que precisa sair do aluguel. Parabenizo a todos os envolvidos.",
    picture:
      "https://lh3.googleusercontent.com/a-/ALV-UjVty3XpMxiPmJKXso2DX4lvaelu5sOWb1hqdmQN0-WxJP8=s50-c-rp-mo-br100",
  },
  {
    stars: 5,
    name: "Vitória Barbosa",
    comment: "Uma ótima experiência, pessoas super atenciosas.",
    picture:
      "https://lh3.googleusercontent.com/a-/ALV-UjXOvE1NL4_0gvJ2O-ZlJMpFZSaHxavO9vrG58A35zo4HUw=s50-c-rp-mo-br100",
  },
]);

setThemeColor({
  50: [237, 249, 255],
  100: [214, 239, 255],
  200: [182, 229, 255],
  300: [131, 214, 255],
  400: [73, 189, 255],
  500: [31, 155, 255],
  600: [8, 124, 255],
  700: [1, 100, 244],
  800: [8, 80, 197],
  900: [15, 76, 166],
  950: [14, 43, 93],
});

if (process.client) {
  useSeoMeta({
    description: pkg.description,
    ogTitle: pkg.displayName,
    ogDescription: pkg.description,
    ogImage: "/thumb.png",
    ogUrl: location.origin,
    twitterTitle: pkg.displayName,
    twitterDescription: pkg.description,
    twitterImage: "/thumb.png",
    twitterCard: "summary_large_image",
  });
}

useHead({
  title: "Instituto Gehon",
  htmlAttrs: {
    lang: "pt-br",
  },
});
</script>

<style>
body {
  max-width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.main {
  background-image: url(/bg.jpg);
}

.avatars {
  background-color: rgba(255, 255, 255, 0.3);
}

.splide__pagination__page.is-active {
  background: black !important;
}

.splide__arrow {
  background: white !important;
  border: 1px solid rgb(209, 213, 219);
  padding: 10px;
  width: 50px;
  height: 50px;
}

.splide__pagination.splide__pagination--ltr {
  transform: translateY(15px);
}

.splide__arrows.splide__arrows--ltr {
  position: absolute;
  width: 100%;
  bottom: 0px;
}

.icons-footer i {
  color: #3272bb !important;
}
</style>
