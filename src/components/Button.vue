<template>
    <div class="btn-container">
        <div id="btn-surround" class="btn-surround"></div>
        <button id="btn" class="btn" v-on:click="pressed">
            {{ textData }}
            <!-- <div id="btn-surround" class="btn-surround"></div> -->
        </button>

    </div>

</template>

<script>

export default {
    name: 'Button',
    components: {
        
    },
    props: {
        text: {
            type: String,
            default: "Select option"
        },
        command: {
            type: Function,
            default: () => { return; }
        }
    },
    data: function(){
        return {
            textData: this.text,
            commandData: this.command
        }
    },
    methods: {
        pressed: function(){
            var surround = document.getElementById('btn-surround');
            surround.addEventListener('animationend', function(){surround.classList.remove('animate-small-ping');}, false);
            surround.classList.add('animate-small-ping');
            this.commandData();
        },
    }
}

</script>

<style>

.ping {
    animation: ping 1s ease-out;
}

@keyframes ping {
    75%, 100% {
        transform: scale(2);
        opacity: 0;
    }
}

</style>