<template>
    <main>
        <TopBar></TopBar>
        <Controller></Controller>
        <BottomBar></BottomBar>
        <Settings></Settings>
    </main>
</template>

<script>

    import TopBar from './TopBar.vue'
    import Controller from './Controller.vue'
    import BottomBar from './BottomBar.vue'
    import Settings from './Settings.vue'

    export default {

        components: {

            TopBar,
            Controller,
            BottomBar,
            Settings
        },

        created() {

            // prevent dragging and dropping on the app
            document.addEventListener('dragover', e => e.preventDefault())
            document.addEventListener('drop', e => e.preventDefault())
        }

    }

</script>

<style>

    *,
    *:before,
    *:after {

        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        -webkit-user-select: none;
        cursor: default;
    }

    body {

        font-family: system,-apple-system,".SFNSDisplay-Regular","Helvetica Neue",Helvetica,"Segoe UI",sans-serif;
    }

    body,
    #app,
    main {

        height: 100vh;
    }

    main {

        display: flex;
        flex-direction: column;
    }
</style>