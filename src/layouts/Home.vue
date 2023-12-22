<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-header elevated style="background-color: rgba(0, 0, 0, 0.5); color: white;">
        <q-toolbar class="q-pa-md text-h6">
          <q-space />
          <q-btn
            flat
            round
            to="/"
            :active-class="$style.activeButton"
            class="button-spacing"
          >
            Home
          </q-btn>

          <q-space size="5" />

          <q-btn
            flat
            round
            to="/about"
            :active-class="$style.activeButton"
            class="button-spacing"
          >
            About
          </q-btn>

          <q-space size="5" />

          <q-btn
            flat
            round
            to="/service"
            :active-class="$style.activeButton"
            class="button-spacing"
          >
            Service
          </q-btn>

          <q-space size="5" />

          <q-btn
            flat
            round
            to="/contact"
            :active-class="$style.activeButton"
            class="button-spacing"
          >
            Contact
          </q-btn>

          <q-space size="5" />

          <!-- Add more buttons as needed -->

          <q-btn
            flat
            round
            to="/services"
            :active-class="$style.activeButton"
            class="button-spacing"
          >
            Our Services
          </q-btn>

          <q-space size="5" />

          <q-btn
            flat
            round
            to="/pricing"
            :active-class="$style.activeButton"
            class="button-spacing"
          >
            Pricing
          </q-btn>

          <q-space />
        </q-toolbar>
      </q-header>

      <!-- Page Content -->
      <router-view />

      <!-- Image at the bottom -->
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;">
        <q-img
          src="~src/assets/image/chicken-poultry.jpg"
          alt="Your Image"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>

      <!-- Move the h1 element outside of the image container and adjust to the middle left -->
      <h1 style="position: fixed; top: 50%; left: 5%; transform: translate(0%, -50%); z-index: 9999; color: white;">The Chicken Always <br>Comes Chief.</h1>

      <!-- Read More button with white background and rectangular shape -->
      <q-btn
        flat
        class="read-more-button"
        style="position: fixed; bottom: 20%; left: 6%; z-index: 9999; color: black; background-color: white;"
      >
        Read More
      </q-btn>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style module>
.activeButton {
  color: #00bcd4 !important;
}

.button-spacing {
  margin-right: 5px !important; /* Adjust spacing if needed */
}

.read-more-button {
  color: black !important;
}
</style>
