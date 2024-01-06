<script lang="ts" setup>
import { ref } from "vue";

const urls = ref(localStorage.getItem("urls") || []);
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

    <section class="section is-large">
      <div class="item box" v-for="url of urls" v-if="urls.length > 0">
        <p>{{ url }}</p>
        <button class="delete is-small"></button>
      </div>

      <div class="section is-large" v-if="urls.length === 0">
        <p>Place holder for non existing urls!</p>
      </div>
    </section>

    <footer class="has-text-centered is-flex-align-items-flex-end mt-auto">
      <!--  <div class="field has-addons">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="example.com" />
        </p>
        <button id="add-button" class="button is-ghost">&#10133;</button>
      </div>-->
      <fieldset class="field-set">
        <input type="text" placeholder="www.example.com" class="input-set" />

        <button id="add-button" class="form-submit button is-ghost">
          &#10133;
        </button>
      </fieldset>
    </footer>
  </div>
</template>

<style>
html,
body {
  min-width: 300px;
  min-height: 400px;
  padding: 0;
  margin: 0;
  font-family: monospace;
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
</style>
