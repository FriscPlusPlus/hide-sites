<script lang="ts" setup>
const myAlert = (n: Number) => console.log(n);
</script>

<template>
  <div class="container hero is-fullheight">
    <section class="section">
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
    </section>

    <section class="section is-large">
      <div class="item box">
        <p>www.exmaple.com</p>
        <button class="delete is-small"></button>
      </div>
    </section>

    <footer class="has-text-centered is-flex-align-items-flex-end mt-auto">
      <div class="field has-addons">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="example.com" />
        </p>
        <button id="add-button" class="button  is-ghost">&#10133;</button>
      </div>
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

.add-button:hover{
  text-decoration: none!important;
}
</style>
