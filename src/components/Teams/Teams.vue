<template>
  <section>
    <div class="teams_search" v-bind:class="{ 'teams_team-details--show': selectedTeam === ''}">
      <h1>{{ title }}</h1>
      <input type="text" placeholder="Search teams..." v-model="teamSearch" v-on:keyup="showList"/>
      <div class="teams_list" v-bind:class="{ 'teams_list--show': showSearchList}">
        <ul>
          <li v-on:click="goTeamDetails(team)" v-for="team in filteredTeams">{{ team.teamName }}</li>
        </ul>
      </div>
    </div>
    <div class="teams_team-details" v-bind:class="{ 'teams_team-details--show': selectedTeam !== ''}">
      <div class="teams_team-details-hdr">
        <div>
          <h2>
            <button type="button" name="button" v-on:click="closeTeamDetails()">
              <i class="fa fa-mail-reply" aria-hidden="true"></i>
              Back
            </button>
            <span>Details for {{ selectedTeam.teamName }}</span>
          </h2>
          <h3>Events</h3>
          <ul class="team-events">
            <li v-for="teamEvent in selectedTeam.teamEvents">
              <div class="team-events__venue">
                <div class="team-events__venue-name">{{ teamEvent.eventVenue }}</div>
                <div>{{ teamEvent.location }}</div>
              </div>
              <div class="team-events__blitzers">
                <div>{{ teamEvent.blitzers }} Blitzers</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/blitz/create" class="button">
        Create New Watch Party
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'teams',
  data () {
    return {
      title: 'My Teams',
      teamSearch: '',
      teams: [
        {
          teamName: 'Atlanta United',
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
        },
        {
          teamName: 'Atlanta Falcons',
          teamEvents:
          [
            {
              eventVenue: 'Hudson Grille',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            },
            {
              eventVenue: 'Vortex Bar and Grill',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            }
          ]
        },
        {
          teamName: 'Atlanta Hawks',
          teamEvents:
          [
            {
              eventVenue: 'Taco Mac',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            },
            {
              eventVenue: 'Smiths Olde Bar',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            }
          ]
        },
        {
          teamName: 'Chicago Fire',
          teamEvents:
          [
            {
              eventVenue: 'Taco Mac',
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
        },
        {
          teamName: 'Chicago Bears',
          teamEvents:
          [
            {
              eventVenue: 'RiRa Pub',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            },
            {
              eventVenue: 'Smiths Olde Bar',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            }
          ]
        },
        {
          teamName: 'Chicago Bulls',
          teamEvents:
          [
            {
              eventVenue: 'Front Page News',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            },
            {
              eventVenue: 'Smiths Olde Bar',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            }
          ]
        },
        {
          teamName: 'Florida Gators',
          teamEvents:
          [
            {
              eventVenue: 'Park Tavern',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            },
            {
              eventVenue: 'Tonys Sports Bar',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            }
          ]
        },
        {
          teamName: 'Manchester United',
          teamEvents:
          [
            {
              eventVenue: 'Front Page News',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            },
            {
              eventVenue: 'Jacks Pizza',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            }
          ]
        },
        {
          teamName: 'UNC Tarheels',
          teamEvents:
          [
            {
              eventVenue: 'Park Tavern',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            },
            {
              eventVenue: 'World of Beer',
              location: '123 Atlanta St',
              distance: '2.4 miles',
              blitzers: Math.floor(Math.random() * 25) + 1
            }
          ]
        }
      ],
      showSearchList: false,
      selectedTeam: ''
    }
  },
  methods: {
    showList: function (e) {
      if (this.teamSearch === '') {
        return
      } else {
        if (!this.showSearchList && this.teamSearch !== '') {
          this.showSearchList = true
        } else if (this.teamSearch === '') {
          this.showSearchList = false
        }
      }
    },
    goTeamDetails: function (team) {
      this.selectedTeam = team
      this.teamSearch = ''
    },
    closeTeamDetails: function () {
      this.selectedTeam = ''
      this.showSearchList = false
    }
  },
  computed: {
    filteredTeams: function () {
      var self = this
      return self.teams.filter(function (team) {
        return team.teamName.toLowerCase().indexOf(self.teamSearch.toLowerCase()) >= 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.teams_list,
.teams_team-details,
.teams_search {
  display: none;

  &--show {
    display: block;
  }
}

.teams_team-details-hdr {
  display: flex;

  h2 {
    display: flex;
    align-items: center;
    margin-top: 0;
  }

  span {
    flex-grow: 1;
  }

  div {
    flex-grow: 1;
  }
}

input {
  padding: 7px 10px;
  font-size: 14px;
}

ul {
  display: flex;
  flex-direction: column;

  li {
    cursor: pointer;
  }
}
</style>
