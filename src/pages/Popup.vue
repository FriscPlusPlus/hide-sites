<script lang="ts" setup>
import { onMounted, ref } from "vue";

const urls = ref([]);
const domain = ref();

const addDomain = function () {
  if (domain.value.length > 0) {
    urls.value.push(domain.value);

    urls.value = urls.value.reverse();

    localStorage.setItem("domains", JSON.stringify(urls.value));
    saveInStorage();
    domain.value = "";
    // const section: HTMLElement = document.getElementById("domains-section")!;
    // section.scrollTo(0, 10000);
  }
};

const removeDomain = function (event: any) {
  const itemIndex: Number = parseInt(event.target.getAttribute("index"));
  urls.value.splice(itemIndex, 1);
  saveInStorage();
};

const saveInStorage = () => {
  localStorage.setItem("domains", JSON.stringify(urls.value));
};

const onEnterPress = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    addDomain();
  }
};

onMounted(() => {
  if (!localStorage.getItem("domains")) {
    localStorage.setItem("domains", JSON.stringify([]));
  }

  const domainsData: string[] = JSON.parse(localStorage.getItem("domains"));
  urls.value = domainsData;
});
</script>

<template>
  <div class="container hero is-fullheight">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="../../public/icon/logo.png"
            alt="Hide sites!"
            width="112"
            height="28"
          />
        </a>
      </div>
    </nav>

    <section
      id="domains-section"
      class="section is-large fixed-size"
      v-if="urls.length > 0"
    >
      <div class="item box" v-for="[index, url] of urls.entries()">
        <p>{{ url }}</p>
        <button
          class="delete is-small"
          @click="removeDomain"
          v-bind:index="index"
        ></button>
      </div>
    </section>

    <section class="section is-large" v-if="urls.length === 0">
      <img
        src="../../public/icon/no-site.png"
        alt="Looks like there are no websites that you want to hide!"
      />
      <p>Seems like you don't want to hide any website yet!</p>
    </section>

    <footer class="has-text-centered is-flex-align-items-flex-end mt-auto">
      <!--  <div class="field has-addons">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="example.com" />
        </p>
        <button id="add-button" class="button is-ghost">&#10133;</button>
      </div>-->
      <fieldset class="field-set">
        <input
          type="text"
          placeholder="www.example.com"
          class="input-set"
          v-model="domain"
          @keypress="onEnterPress"
        />

        <button
          id="add-button"
          class="form-submit button is-ghost"
          @click="addDomain"
        >
          &#10133;
        </button>
      </fieldset>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");
html,
body {
  max-width: 300px;
  max-height: 400px;
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
}

.add-button:hover {
  text-decoration: none !important;
  background-color: #fff;
}

.field-set {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
}

.input-set {
  border: none;
  background: none;
  width: 100%;
  text-indent: 6px;
}

.input-set:focus,
input:focus {
  outline: none;
}

.navbar-brand {
  background-color: #fff;
}

.fixed-size {
  position: fixed;
  top: 10px;
  left: 10px;
  bottom: 10px;
  width: 100%;
  overflow-y: scroll;
}
</style>
