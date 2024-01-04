<template>
  <div class="scorecard" v-if="lobby">
     <div v-for="lobbys in lobby.stats" :key="lobbys.id" class="card card--has-table">
              <div class="card__header">
                  <h4>{{lobbys.map_name}}</h4>
                  <div class="score__head">
                    <div>{{lobbys.team1_score}} - {{lobbys.team2_score}}</div>
                  </div>
              </div>
              <div class="card__content">
                  <div class="table-responsive">
                      <table class="table table-hover table-stats alc-event-results-table alc-event-results-table--fullwidth">
                          <thead>
                              <tr>
                                  <th class="alc-event-results-cell__player text-left">Player</th>
                                  <th class="alc-event-results-cell__kills">Kills</th>
                                  <th class="alc-event-results-cell__deaths">Deaths</th>
                                  <th class="alc-event-results-cell__assists">Assists</th>
                                  <th class="alc-event-results-cell__pkills">Flash Assists</th>
                                  <th class="alc-event-results-cell__kdar">FPR</th>
                                  <th class="alc-event-results-cell__dmg-pct">ADR</th>
                                  <th class="alc-event-results-cell__dpm">HSP</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th colspan="11" class="table-stats__subheading table-stats__subheading--highlight">{{lobbys.team_1_stats.team_name}}</th>
                              </tr>
                              <tr v-for="player in lobbys.team_1_stats.player_stats" :key="player.id" >
                                  <td class="alc-event-results-cell__player text-left">
                                      <div class="alc-event-results-cell__player-info alc-img-object">
                                          <div class="alc-event-results-cell__player-img alc-img-object__img alc-img-object__img--hexagon alc-img-object__img--hexagon-sm">
                                              <img v-if="!player.user.profile.profile_image" src="../../../assets/profile/logo.png" alt="">
                                              <img v-if="player.user.profile.profile_image" :src="'https://api.playtonia.com'+player.user.profile.profile_image" alt="">
                                          </div>
                                          <div class="alc-event-results-cell__player-body alc-img-object__body">
                                              <h5 class="alc-event-results-cell__player-nickname alc-img-object__title">{{player.user.username}}</h5>
                                              <span class="alc-event-results-cell__player-name alc-img-object__desc"></span>
                                          </div>
                                      </div>
                                  </td>
                                  <td class="alc-event-results-cell__kills highlight">{{player.kills}}</td>
                                  <td class="alc-event-results-cell__deaths highlight">{{player.deaths}}</td>
                                  <td class="alc-event-results-cell__assists highlight">{{player.assists}}</td>
                                  <td class="alc-event-results-cell__pkills highlight">{{player.flashbang_assists}}</td>
                                  <td class="alc-event-results-cell__kdar highlight">{{player.fpr}}</td>
                                  <td class="alc-event-results-cell__dmg-pct highlight">{{player.adr}}</td>
                                  <td class="alc-event-results-cell__dpm highlight">{{player.hsp}}</td>
                                  <!-- <td class="alc-event-results-cell__mvp highlight">
                                      <div class="alc-icon--disabled alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md">
                                          <i class="fa fa-star"></i>
                                      </div>
                                  </td> -->
                              </tr>
                              <tr>
                                  <th colspan="11" class="table-stats__subheading table-stats__subheading--highlight-info">{{lobbys.team_2_stats.team_name}}</th>
                              </tr>
                              <tr  v-for="player in lobbys.team_2_stats.player_stats" :key="player.id">
                                  <td class="alc-event-results-cell__player text-left">
                                      <div class="alc-event-results-cell__player-info alc-img-object">
                                          <div class="alc-event-results-cell__player-img alc-img-object__img alc-img-object__img--hexagon alc-img-object__img--hexagon-sm">
                                              <img v-if="!player.user.profile.profile_image" src="../../../assets/profile/logo.png" alt="">
                                              <img v-if="player.user.profile.profile_image" :src="'https://api.playtonia.com'+player.user.profile.profile_image" alt="">
                                          </div>
                                          <div class="alc-event-results-cell__player-body alc-img-object__body">
                                              <h5 class="alc-event-results-cell__player-nickname alc-img-object__title">{{player.user.username}}</h5>
                                              <span class="alc-event-results-cell__player-name alc-img-object__desc"></span>
                                          </div>
                                      </div>
                                  </td>
                                 <td class="alc-event-results-cell__kills highlight">{{player.kills}}</td>
                                  <td class="alc-event-results-cell__deaths highlight">{{player.deaths}}</td>
                                  <td class="alc-event-results-cell__assists highlight">{{player.assists}}</td>
                                  <td class="alc-event-results-cell__pkills highlight">{{player.flashbang_assists}}</td>
                                  <td class="alc-event-results-cell__kdar highlight">{{player.fpr}}</td>
                                  <td class="alc-event-results-cell__dmg-pct highlight">{{player.adr}}</td>
                                  <td class="alc-event-results-cell__dpm highlight">{{player.hsp}}</td>
                                  <!-- <td class="alc-event-results-cell__mvp highlight">
                                      <div class="alc-icon--disabled alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md">
                                          <i class="fa fa-star"></i>
                                      </div>
                                  </td> -->
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
// @ is an alias to /src

export default {
  name: 'scorecard',
  data() {
    return {
      rcon: false,
    };
  },
  components: {
  },
  computed: {
    ...mapGetters({
        lobby: 'csgo/lobby',
    }),
  },
};
</script>

<style scoped>
.score__head{
  width: 100%;
  text-align: center;
}
.score__head div{
  font-size: 22px;
  line-height: 1.2em;
  font-style: italic;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
}
img {
  max-width: 100%;
  height: auto;
}
figure {
  margin: 0;
}
a {
  color: white;
  text-decoration: none;
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
     box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  color: #fff;
  margin: 0 0 .75em 0;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
        /* Tables
/* ------------------------- */
table {
  background-color: transparent;
  border-spacing: unset;
}
caption {
  padding-top: 13px;
  padding-bottom: 13px;
  text-align: left;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  max-width: 100%;
}
.table > thead > tr > th,
.table > thead > tr > td,
.table > tbody > tr > th,
.table > tbody > tr > td,
.table > tfoot > tr > th,
.table > tfoot > tr > td {
  padding: 6.5px;
  vertical-align: top;
  border-top: 1px solid #ffffff1a;
  font-size: 10px;
  line-height: 1.42857143em;
}
@media (min-width: 992px) {
  .table > thead > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > th,
  .table > tbody > tr > td,
  .table > tfoot > tr > th,
  .table > tfoot > tr > td {
    padding: 13px 10px;
    font-size: 11px;
  }
}
.table > thead > tr > th {
  vertical-align: bottom;
  /*border-bottom: 1px solid #ffffff1a;*/
  font-weight: 700;
  color: #fff;
  font-style: italic;
  text-transform: uppercase;
}
.table > tbody > tr > th {
  color: #fff;
  font-weight: normal;
}
.table > caption + thead > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > th,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 2px solid #4b3b60;
}
.table--lg > thead > tr > th,
.table--lg > thead > tr > td,
.table--lg > tbody > tr > th,
.table--lg > tbody > tr > td,
.table--lg > tfoot > tr > th,
.table--lg > tfoot > tr > td {
  padding: 8.5px;
}
@media (min-width: 992px) {
  .table--lg > thead > tr > th,
  .table--lg > thead > tr > td,
  .table--lg > tbody > tr > th,
  .table--lg > tbody > tr > td,
  .table--lg > tfoot > tr > th,
  .table--lg > tfoot > tr > td {
    padding: 17px 12px;
  }
}
.table-thead-color > thead > tr > th {
  background-color: #0d16209e;
}
.table > tbody > tr.highlighted {
  background-color: #403351;
}
td.highlight {
  color: #fff;
}
.table-hover > tbody > tr {
  -webkit-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
}
.table-hover > tbody > tr:hover {
  background-color: #ffffff1a;
}
.table-bordered {
  border: 1px solid #4b3b60;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > th,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > th,
.table-bordered > tfoot > tr > td {
  border: 1px solid #4b3b60;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 1px;
}
.table-wrap-bordered {
  border: 1px solid #4b3b60;
}
@media (max-width: 767px) {
  .table-responsive {
    border: none;
    margin-bottom: 0;
  }
}
.table--no-border > thead > tr > th,
.table--no-border > thead > tr > td,
.table--no-border > tbody > tr > th,
.table--no-border > tbody > tr > td,
.table--no-border > tfoot > tr > th,
.table--no-border > tfoot > tr > td {
  border: none;
}
.table__cell-center {
  text-align: center;
}
.table__cell-center > thead > tr > th {
  text-align: center;
}
.table__cell-center > thead > tr > th:first-child {
  text-align: left;
}
.table-stats > thead > tr > th,
.table-stats > thead > tr > td,
.table-stats > tbody > tr > th,
.table-stats > tbody > tr > td,
.table-stats > tfoot > tr > th,
.table-stats > tfoot > tr > td {
  text-align: center;
  vertical-align: middle;
}
.table-stats > thead > tr > th.text-left,
.table-stats > thead > tr > td.text-left,
.table-stats > tbody > tr > th.text-left,
.table-stats > tbody > tr > td.text-left,
.table-stats > tfoot > tr > th.text-left,
.table-stats > tfoot > tr > td.text-left {
  text-align: left;
}
.table-stats > thead > tr > th.text-right,
.table-stats > thead > tr > td.text-right,
.table-stats > tbody > tr > th.text-right,
.table-stats > tbody > tr > td.text-right,
.table-stats > tfoot > tr > th.text-right,
.table-stats > tfoot > tr > td.text-right {
  text-align: right;
}
@media (min-width: 992px) {
  .table-stats > thead > tr > th:first-child,
  .table-stats > tbody > tr > td:first-child {
    padding-left: 24px;
  }
}
@media (min-width: 992px) {
  .table-stats > thead > tr > th:last-child,
  .table-stats > tbody > tr > td:last-child {
    padding-right: 24px;
  }
}
.table-stats th.table-stats__subheading {
  text-align: left;
  font-weight: bold;
  font-style: italic;
  padding-left: 24px;
  background-color: #0d16209e;
  position: relative;
}
.table-stats th.table-stats__subheading--highlight:before {
    content: "";
    display: block;
    position: absolute;
    width: 6px;
    left: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to top, #4facfe 0%, #00ff5b 100%);
}
.table-stats th.table-stats__subheading--highlight-info:before{
  content: "";
    display: block;
    position: absolute;
    width: 6px;
    left: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to top, #00ff5b 0%, rgb(0, 242, 254) 100%);
}
.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}
.page-content{
    padding: 1rem;
    overflow: hidden;
}
.container {
    max-width: 1460px;
    margin-right: auto;
    margin-left: auto;
}
.card {
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #1b2731;
    margin-bottom: 40px;
}
.card--has-table > .card__content {
  padding: 0;
}
.card__header {
  padding: 19px 19px;
  border-radius: 4px 4px 0 0;
  position: relative;
  background-color: #0d16209e;
  display: flex;
}
.card__header::before {
  content: "";
  display: block;
  position: absolute;
  width: 6px;
  left: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(to top, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
  border-radius: 3px 0 0 0;
}
.card__header > h4 {
  font-size: 16px;
  line-height: 1.2em;
  letter-spacing: -0.02em;
  margin-bottom: 0;
  text-transform: uppercase;
  font-style: italic;
}
.alc-event-results-table--fullwidth .alc-event-results-cell__player {
  width: 1px;
  white-space: nowrap;
}
@media (min-width: 1200px) {
  .alc-event-results-table--fullwidth .alc-event-results-cell__player {
    padding-right: 50px !important;
  }
}
.alc-img-object {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
/* .alc-img-object__img--hexagon-sm {
    width: 28px;
    height: 32px;
} */
.alc-img-object__img--hexagon {
    position: relative;
    border: none !important;
}
.alc-img-object__img {
    overflow: hidden;
    margin-right: 12px;
    width: 30px;
    height: 30px;
}
.alc-img-object__img--hexagon img {
    display: block;
    border: none;
}
.alc-img-object__body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.alc-img-object__title {
    text-transform: none;
    font-size: 12px;
    line-height: 1.2em;
    font-weight: 600;
    margin-bottom: 0;
    font-style: normal;
}
.alc-img-object__desc {
    display: block;
    color: #ffffff90;
    font-size: 9px;
    /* line-height: 1.2em; */
}
</style>
