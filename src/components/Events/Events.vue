<template>
  <section>
    <h1>Events</h1>
    <ul class="team-events">
      <li v-for="teamEvent in teamEvents">{{ teamEvent.eventVenue }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'events',
  data () {
    return {
      teamEvents:
      [
        {
          eventVenue: 'Grindhouse Burgers',
          location: '123 Atlanta St',
          distance: '2.4 miles',
          blitzers: Math.floor(Math.random() * 25) + 1
        },
        {
          eventVenue: 'Smiths Olde Bar',
          location: '123 Atlanta St',
          distance: '2.4 miles',
          blitzers: Math.floor(Math.random() * 25) + 1
        },
        {
          eventVenue: 'RiRa Pub',
          location: '123 Atlanta St',
          distance: '2.4 miles',
          blitzers: Math.floor(Math.random() * 25) + 1
        }
      ]
    }
  }
}
</script>
