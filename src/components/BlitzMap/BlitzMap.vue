<template>
  <div>
    <div class="blitz-section" v-bind:class="{ 'blitz-section--hide': hideCreateOptions }">
      <div>
        <label>
          Watch Party Location:
        </label>
      </div>
      <GmapAutocomplete @place_changed="setPlace">
      </GmapAutocomplete>
    </div>
    <div class="blitz-map__wrap blitz-section">
      <GmapMap class="blitz-map__map" :zoom="zoom" :center="{ lat: user.lat, lng: user.lng }">
        <GmapMarker v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          />
        <GmapMarker
          v-if="this.place"
          label="★"
          :position="{
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }"
          />
      </GmapMap>
    </div>
    <div class="blitz-section blitz-section--centered" v-bind:class="{ 'blitz-section--hide': hideCreateOptions }">
      <button @click="usePlace">Create New Watch Party</button>
    </div>
    <div class="blitz-spaced" v-bind:class="{ 'blitz-section--hide': hideLocationOptions }">
      <div>Whats happening around me...</div>
      <button @click="setCenter">See Watch Parties Near Me</button>
    </div>
  </div>
</template>


<script>

export default {
  name: 'blitz-map',
  props: ['user', 'lat', 'lng', 'hideCreateOptions', 'hideLocationOptions', 'markers'],
  data () {
    return {
      place: null,
      zoom: 10
    }
  },
  description: 'Autocomplete Example (#164)',
  methods: {
    setDescription: function (description) {
      this.description = description
    },
    setPlace: function (place) {
      console.log('place')
      console.log(place)
      this.place = place
    },
    usePlace: function (place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        })
        console.log(this.markers)
        this.place = null
      }
    },
    setCenter: function () {
      const mapComponent = this
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let newCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          mapComponent.updateCenter(newCenter)
        }, function () {
          console.log('error')
          window.alert('Location services only work via https. Try replacing http with https in the url to use location services while app is being developed.')
        })
      } else {
        window.alert('Location Services Not Supported')
      }
    },
    updateCenter (center) {
      console.log(center)
      this.user.lat = center.lat
      this.user.lng = center.lng
      this.zoom = 12
    }
  }
}
</script>

<style lang="scss">
h4 {
  margin: 10px 0;
}
.blitz-map__wrap {
  margin-top: 10px;
}

.blitz-map__map {
  width: 80vw;
  height: 35vh;
  margin: 0 auto;
  background: #d9d9d9;

  &:after {
    display: block;
    content: 'Loading map...';
    padding-top: 25%;
  }
}
</style>
