<template>
  <section>
    <h1>My Teams</h1>
    <input type="text" placeholder="Search teams..." v-model="teamSearch" v-on:keyup="pressKey"/>
    <ul>
      <li v-for="team in filteredTeams">{{ team.teamName }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'teams',
  data () {
    return {
      msg: 'Welcome to Blitz App',
      user: {
        firstName: 'Bender',
        lastName: 'Rodriguez'
      },
      teamSearch: '',
      teams: [
        {teamName: 'Atlanta United'},
        {teamName: 'Atlanta Falcons'},
        {teamName: 'Atlanta Hawks'},
        {teamName: 'Chicago Fire'},
        {teamName: 'Chicago Bears'},
        {teamName: 'Chicago Bulls'},
        {teamName: 'Florida Gators'},
        {teamName: 'Manchester United'},
        {teamName: 'UNC Tarheels'}
      ]
    }
  },
  methods: {
    pressKey: function (e) {
      console.log(e.target.value)
    }
  },
  computed: {
    filteredTeams: function () {
      var self = this
      return this.teams.filter(function (team) {
        return team.teamName.toLowerCase().indexOf(self.teamSearch.toLowerCase()) >= 0
      })
    }
  }
}
</script>
