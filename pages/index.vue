<template>
    <section class="container">
        <div class="actions">
            <button @click="increment">Commit Mutation</button>
            <button @click="fetchTaco">Dispatch Action</button>
            <div class="recipe">
                <h1>Current Taco Recipe: </h1>
                <hr />
                <div v-if="isLoading">
                    <DancingTaco />
                </div>
                <div v-if="!isLoading && recentTaco">
                    <div class="recipe-instructions" v-html="recipe"></div>
                </div>
            </div>
        </div>
        <div class="store">
            <h2>Store</h2>
            <h4>state</h4>
            <ul>
                <li>Counter: {{counter}}</li>
            </ul>
            <h4>state/tacos</h4>
            <ul>
                <li>Loading: {{isLoading}}</li>
                <li>Tacos:
                    <ul>
                        <li
                            v-bind:key="taco.name"
                            v-for="taco in tacos">
                            {{taco.name}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import DancingTaco from '~/components/DancingTaco.vue';
import {markdown} from 'markdown';

import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';

export default {
    components: {
        DancingTaco,
    },
    computed: {
        ...mapState({
            counter: 'counter',
            isLoading: state => state.tacos.loading
        }),
        ...mapGetters({
            tacos: 'tacos/tacos', // map `this.tacos` to `this.$store.getters['tacos/tacos']`
            recentTaco: 'tacos/recentTaco' // map `this.tacos` to `this.$store.getters['tacos/recentTaco']`
        }),
        recipe () {
            const tacos = this.$store.state.tacos.tacos; // the store is injected into components as well
            const taco = tacos[tacos.length - 1];
            return markdown.toHTML(taco.recipe);
        }
    },
    methods: {
        ...mapMutations({
            increment: 'increment' // map `this.add()` to `this.$store.commit('increment')`
        }),
        ...mapActions({
            fetchTaco: 'tacos/fetchTaco' // map `this.fetchTaco()` to `this.$store.commit('tacos/fetchTaco')`
        })
    }
}
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    color: black;
}

.actions, .store {
    height: 80vh;
    margin-top: 10px;
    padding: 10px;
    width: 40%;
}

.actions {
    border: none;
}

.store {
    border: 2px solid #2196f3;
    border-radius: 25px;
}

.store ul {
    margin: 10px
}

.recipe {
    margin-top: 25px;
}

.recipe hr {
    margin: 10px 0px;
}

.recipe-instructions {
    font-size: 12px;
    margin-top: 10px;
}

button {
    border: 2px solid #2196f3;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    padding: 10px;
}

</style>

