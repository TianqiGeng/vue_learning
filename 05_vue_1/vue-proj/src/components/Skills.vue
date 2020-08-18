<template>
  <div class="skills">
    <h1 v-once>{{name}}</h1>
    {{btnState?'the button is disabled':'the button is active'}}
    <br />
    <div class="container">
      <!-- Add these two lines: -->
      <!-- <from @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have.." v-model="skill" />
      </from>-->
      <form @submit.prevent="addSkill">
        <validation-provider rules="min:5" v-slot="{ errors }">
          <input type="text" placeholder="Enter a skill you have.." v-model="skill" name="skill" />
          <transition
            name="alert-in"
            enter-active-class="animated flipInX"
            leave-active-class="animated flipOutX"
          >
            <p :class="{ alert: errors[0], hidden: !errors[0] }">{{ errors[0] }}</p>
          </transition>
        </validation-provider>
      </form>

      <br />
    </div>
    <div class="holder">
      <ul>
        <transition-group
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li v-for="(data, index) in skills" :key="index">
            {{data.skill}}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
      <p v-if="skills.length>=1">You have more than 1 skill</p>
      <p v-else>You have less than or equal to 1 skill</p>
    </div>
    <div v-bind:class="{alert:!showAlert}">alert</div>
    <div v-bind:class="{ alert: showAlert, 'another-class': showClass }">showClass</div>
    <div v-bind:class="alertObject1">alertObject1</div>
    <!-- <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div> -->
    <div v-bind:style="alertObject">alertObject</div>
    <br />
    <input type="text" placeholder="Enter a skill you have.." v-model="skill" />
    {{ skill }}
    <br />
    <br />
    <br />
    <li v-for="(data, index) in skills" :key="index">{{data.skill}}</li>
    <button v-on:click="changeName" v-bind:disables="btnState">Change Name</button>
    <input type="checkbox" id="checkbox" v-model="checked" />
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      checked: false,
      skill: "",
      name: "tina",
      changeName: true,
      btnState: true,
      skills: [{ skill: "Vue.js" }, { skill: "Frontend Developer" }],
      showAlert: true,
      showClass: true,
      alertObject1: {
        alert: true,
      },
      alertObject: {
        bgColor: "red",
        bgWidth: "100%",
        bgHeight: "30px",
      },
      bgColor: "blue",
      bgWidth: "100%",
      bgHeight: "30px",
    };
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
      console.log("The checkbox value is: " + this.checked);
    },
    remove(id) {
      this.skills.splice(id, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

.alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>
